"use client";

import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";

import Container from "@/components/ui/Container";
import {
  budgetOptions,
  serviceOptions,
  timelineOptions,
} from "@/lib/contact/schema";

const fieldClassName =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm text-[#0F172A] shadow-sm outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-slate-400 focus:border-[#C9A227] focus:ring-4 focus:ring-[#C9A227]/10 disabled:cursor-not-allowed disabled:bg-slate-100";

const labelClassName = "mb-2 block text-sm font-semibold text-slate-700";

type SubmissionState =
  | { type: "idle"; message: "" }
  | { type: "success" | "error"; message: string };

export default function ContactForm() {
  const searchParams = useSearchParams();
  const serviceFromUrl = searchParams.get("service");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submission, setSubmission] = useState<SubmissionState>({
    type: "idle",
    message: "",
  });

  const selectedService =
    serviceFromUrl &&
    serviceOptions.includes(serviceFromUrl as (typeof serviceOptions)[number])
      ? serviceFromUrl
      : "Business Plan";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmission({ type: "idle", message: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      fullName: String(formData.get("fullName") ?? ""),
      email: String(formData.get("email") ?? ""),
      company: String(formData.get("company") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      service: String(formData.get("service") ?? ""),
      timeline: String(formData.get("timeline") ?? ""),
      budget: String(formData.get("budget") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
      turnstileToken: "",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Unable to send your inquiry.");
      }

      setSubmission({
        type: "success",
        message:
          result.message || "Thank you. Your inquiry has been sent successfully.",
      });
      form.reset();
    } catch (error) {
      setSubmission({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact-form"
      className="scroll-mt-24 bg-[#F8FAFC] py-20 md:py-24 lg:py-28"
    >
      <Container>
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-8 md:p-10 lg:p-12">
          <div className="mb-9 border-b border-slate-100 pb-8">
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#A98212] sm:text-sm">
              Start Your Project
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-[-0.035em] text-[#0F172A] sm:text-4xl">
              Tell Us About Your Business
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              Share a few details about your goals, requirements and timeline.
              We&apos;ll review your inquiry and recommend the best approach for
              your project.
            </p>

            <p className="mt-3 text-sm text-slate-500">
              Fields marked with <span className="text-[#A98212]">*</span> are
              required.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit} noValidate={false}>
            <div className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="full-name" className={labelClassName}>
                  Full Name <span className="text-[#A98212]">*</span>
                </label>

                <input
                  id="full-name"
                  name="fullName"
                  type="text"
                  placeholder="John Smith"
                  autoComplete="name"
                  minLength={2}
                  maxLength={100}
                  required
                  disabled={isSubmitting}
                  className={fieldClassName}
                />
              </div>

              <div>
                <label htmlFor="email" className={labelClassName}>
                  Email Address <span className="text-[#A98212]">*</span>
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@email.com"
                  autoComplete="email"
                  maxLength={254}
                  required
                  disabled={isSubmitting}
                  className={fieldClassName}
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="company" className={labelClassName}>
                  Company or Business
                </label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Your company name"
                  autoComplete="organization"
                  maxLength={120}
                  disabled={isSubmitting}
                  className={fieldClassName}
                />
              </div>

              <div>
                <label htmlFor="phone" className={labelClassName}>
                  Phone Number{" "}
                  <span className="font-normal text-slate-400">(Optional)</span>
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+254 700 000 000"
                  autoComplete="tel"
                  maxLength={40}
                  disabled={isSubmitting}
                  className={fieldClassName}
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="service" className={labelClassName}>
                  Service Needed <span className="text-[#A98212]">*</span>
                </label>

                <select
                  id="service"
                  name="service"
                  defaultValue={selectedService}
                  required
                  disabled={isSubmitting}
                  className={fieldClassName}
                >
                  {serviceOptions.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="timeline" className={labelClassName}>
                  Project Timeline <span className="text-[#A98212]">*</span>
                </label>

                <select
                  id="timeline"
                  name="timeline"
                  defaultValue="Flexible"
                  required
                  disabled={isSubmitting}
                  className={fieldClassName}
                >
                  {timelineOptions.map((timeline) => (
                    <option key={timeline} value={timeline}>
                      {timeline}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="budget" className={labelClassName}>
                Estimated Budget <span className="text-[#A98212]">*</span>
              </label>

              <select
                id="budget"
                name="budget"
                defaultValue="Let's Discuss"
                required
                disabled={isSubmitting}
                className={fieldClassName}
              >
                {budgetOptions.map((budget) => (
                  <option key={budget} value={budget}>
                    {budget}
                  </option>
                ))}
              </select>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                This helps us recommend a suitable scope and delivery approach.
              </p>
            </div>

            <div>
              <label htmlFor="message" className={labelClassName}>
                Tell Us About Your Project{" "}
                <span className="text-[#A98212]">*</span>
              </label>

              <textarea
                id="message"
                name="message"
                rows={8}
                minLength={20}
                maxLength={5000}
                required
                disabled={isSubmitting}
                placeholder="Tell us about your business, project goals, target audience, funding objectives, required deliverables and any existing materials."
                className={`${fieldClassName} min-h-52 resize-y`}
              />

              <p className="mt-2 text-xs leading-5 text-slate-500">
                The more context you provide, the more useful our initial
                recommendation will be.
              </p>
            </div>

            <div className="rounded-2xl border border-[#C9A227]/25 bg-[#C9A227]/5 px-5 py-4">
              <p className="text-sm leading-6 text-slate-600">
                Submitting this form does not commit you to a project. Your
                initial consultation is free and focused on understanding your
                needs, scope and next steps.
              </p>
            </div>

            {submission.type !== "idle" && (
              <div
                role={submission.type === "error" ? "alert" : "status"}
                aria-live="polite"
                className={`rounded-xl border px-5 py-4 text-sm font-medium ${
                  submission.type === "success"
                    ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                    : "border-red-200 bg-red-50 text-red-800"
                }`}
              >
                {submission.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center rounded-xl bg-[#0F172A] px-8 py-4 font-semibold text-white shadow-[0_12px_30px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1E293B] hover:shadow-[0_16px_36px_rgba(15,23,42,0.22)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#C9A227]/30 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-65 disabled:hover:translate-y-0"
            >
              {isSubmitting ? "Sending Inquiry..." : "Schedule Free Consultation"}
            </button>

            <div className="flex flex-col items-center justify-center gap-2 text-center text-sm text-slate-500 sm:flex-row sm:gap-3">
              <span>Free initial consultation</span>
              <span className="hidden text-[#C9A227] sm:inline">•</span>
              <span>Response within one business day</span>
              <span className="hidden text-[#C9A227] sm:inline">•</span>
              <span>Confidential project handling</span>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
