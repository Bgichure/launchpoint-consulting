import { NextRequest, NextResponse } from "next/server";

import { contactSchema, type ContactPayload } from "@/lib/contact/schema";

export const runtime = "nodejs";

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const requestLog = new Map<string, number[]>();

function getClientIp(request: NextRequest) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (requestLog.get(ip) ?? []).filter(
    (timestamp) => now - timestamp < WINDOW_MS,
  );

  if (recent.length >= MAX_REQUESTS) {
    requestLog.set(ip, recent);
    return true;
  }

  recent.push(now);
  requestLog.set(ip, recent);
  return false;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function verifyTurnstile(token: string, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret || !token) return true;

  const formData = new FormData();
  formData.append("secret", secret);
  formData.append("response", token);
  if (ip !== "unknown") formData.append("remoteip", ip);

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    { method: "POST", body: formData },
  );

  if (!response.ok) return false;

  const result = (await response.json()) as { success?: boolean };
  return result.success === true;
}

function buildEmailHtml(data: ContactPayload) {
  const rows = [
    ["Name", data.fullName],
    ["Email", data.email],
    ["Company", data.company || "Not provided"],
    ["Phone", data.phone || "Not provided"],
    ["Service", data.service],
    ["Timeline", data.timeline],
    ["Budget", data.budget],
  ];

  return `
    <div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto;color:#0f172a">
      <h1 style="font-size:24px;margin-bottom:8px">New Ravinear consultation inquiry</h1>
      <p style="color:#475569;margin-top:0">A new inquiry was submitted through the website.</p>
      <table style="width:100%;border-collapse:collapse;margin:24px 0">
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <td style="padding:10px;border:1px solid #e2e8f0;font-weight:700;width:140px">${escapeHtml(label)}</td>
                <td style="padding:10px;border:1px solid #e2e8f0">${escapeHtml(value)}</td>
              </tr>`,
          )
          .join("")}
      </table>
      <h2 style="font-size:18px">Project details</h2>
      <div style="white-space:pre-wrap;line-height:1.7;background:#f8fafc;padding:16px;border-radius:10px;border:1px solid #e2e8f0">${escapeHtml(data.message)}</div>
    </div>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { message: "Too many requests. Please try again in a few minutes." },
        { status: 429 },
      );
    }

    const contentType = request.headers.get("content-type") ?? "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        { message: "Unsupported request format." },
        { status: 415 },
      );
    }

    const body: unknown = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      const firstError = parsed.error.issues[0]?.message;
      return NextResponse.json(
        { message: firstError || "Please check the form and try again." },
        { status: 400 },
      );
    }

    const data = parsed.data;

    if (data.website) {
      return NextResponse.json({ message: "Inquiry received." });
    }

    const turnstileIsValid = await verifyTurnstile(data.turnstileToken, ip);
    if (!turnstileIsValid) {
      return NextResponse.json(
        { message: "Security verification failed. Please refresh and try again." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.EMAIL_FROM;
    const to = process.env.EMAIL_TO || process.env.CONTACT_EMAIL;

    if (!apiKey || !from || !to) {
      console.error("Contact API environment variables are incomplete.");
      return NextResponse.json(
        { message: "The contact service is not configured yet." },
        { status: 503 },
      );
    }

    const resendResponse = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: data.email,
        subject: `New ${data.service} inquiry from ${data.fullName}`,
        html: buildEmailHtml(data),
      }),
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      console.error("Resend error:", resendResponse.status, errorText);
      return NextResponse.json(
        { message: "We could not send your inquiry. Please email us directly." },
        { status: 502 },
      );
    }

    return NextResponse.json({
      message: "Thank you. Your inquiry has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
