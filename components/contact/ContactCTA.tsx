import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

import Container from "@/components/ui/Container";

export default function ContactCTA() {
  return (
    <section className="bg-white py-20 md:py-24 lg:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-[#0F172A] px-7 py-14 text-center text-white shadow-[0_30px_80px_rgba(15,23,42,0.18)] sm:px-10 md:py-16 lg:px-16">
          {/* Background accents */}
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#C9A227]/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C9A227] sm:text-sm">
              Ready to Move Forward?
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-[56px]">
              Let&apos;s Build a Stronger Foundation for Your Business
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Whether you need a business plan, investor pitch deck, financial
              model or strategic presentation, we&apos;re ready to help you move
              forward with clarity.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="#contact-form"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#C9A227] px-6 py-3.5 text-sm font-semibold text-[#0F172A] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D8B63F]"
              >
                Start Your Inquiry
                <ArrowRight size={17} />
              </Link>

              <a
                href="mailto:hello@launchpointconsulting.com"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-[#C9A227]/60 hover:bg-white/10 hover:text-[#C9A227]"
              >
                <Mail size={17} />
                Email Us
              </a>
            </div>

            <p className="mt-7 text-sm text-slate-400">
              Free initial consultation · Worldwide support · Confidential
              project handling
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}