import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

import Container from "@/components/ui/Container";
import { company } from "@/data/company";

export default function AboutCTA() {
  return (
    <section className="bg-white py-20 md:py-24 lg:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0F172A] px-7 py-14 text-center sm:px-10 md:py-16 lg:px-16 lg:py-20">
          <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#C9A227]/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[#C9A227]/10 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-10 bg-[#C9A227]" />

              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E7C65A] sm:text-sm">
                Let&apos;s Work Together
              </span>

              <div className="h-px w-10 bg-[#C9A227]" />
            </div>

            <h2 className="mt-6 text-4xl font-bold leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-[56px]">
              Ready to Build a Stronger Business?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Let&apos;s turn your ideas into a clear strategy, professional
              business documents and a compelling case for growth or funding.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#C9A227] px-6 py-3.5 text-sm font-semibold text-[#0F172A] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D9B53D]"
              >
                Start Your Project
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10"
              >
                <Mail size={17} />
                Email Us
              </a>
            </div>

            <p className="mt-6 text-sm text-slate-400">
              Free initial consultation · Clear project scope · Professional
              delivery
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}