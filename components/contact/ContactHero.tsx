import Link from "next/link";
import { ArrowDown, CheckCircle2 } from "lucide-react";

import Container from "@/components/ui/Container";

const highlights = [
  "Free initial consultation",
  "Worldwide remote support",
  "Confidential project handling",
];

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-white pb-20 pt-32 md:pb-24 md:pt-40">
      <div className="absolute left-1/2 top-0 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-[#C9A227]/5 blur-3xl" />

      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-10 bg-[#C9A227]" />

            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#7A5C00] sm:text-sm">
              Contact LaunchPoint
            </span>

            <div className="h-px w-10 bg-[#C9A227]" />
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-[-0.04em] text-[#0F172A] sm:text-5xl lg:text-7xl">
            Let&apos;s Turn Your Idea Into a Clear Business Opportunity
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Tell us about your business, funding goals and project needs. We&apos;ll
            help you identify the right strategy and next steps.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm font-medium text-slate-700"
              >
                <CheckCircle2 size={17} className="text-[#C9A227]" />
                {item}
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="#contact-form"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0F172A] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(15,23,42,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1E293B]"
            >
              Start Your Inquiry
              <ArrowDown size={17} />
            </Link>

            <a
              href="mailto:hello@launchpointconsulting.com"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-[#0F172A] transition-all duration-300 hover:border-[#C9A227] hover:text-[#7A5C00]"
            >
              Email Us Directly
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}