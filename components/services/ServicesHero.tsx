import Link from "next/link";
import {
  ArrowDown,
  BarChart3,
  FileText,
  Presentation,
} from "lucide-react";

import Container from "@/components/ui/Container";

const highlights = [
  {
    title: "Business Strategy",
    icon: FileText,
  },
  {
    title: "Investor Materials",
    icon: Presentation,
  },
  {
    title: "Financial Planning",
    icon: BarChart3,
  },
];

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-white pb-20 pt-32 md:pb-24 md:pt-40">
      <div className="absolute left-1/2 top-0 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-[#C9A227]/5 blur-3xl" />

      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-10 bg-[#C9A227]" />

            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#7A5C00] sm:text-sm">
              Our Services
            </span>

            <div className="h-px w-10 bg-[#C9A227]" />
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-[-0.04em] text-[#0F172A] sm:text-5xl lg:text-7xl">
            Strategic Support for Every Stage of Business Growth
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            From business planning and market research to investor pitch decks
            and financial projections, we help turn ideas into clear, credible
            and funding-ready opportunities.
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C9A227]/10 text-[#7A5C00]">
                    <Icon size={19} />
                  </span>

                  <span className="text-sm font-semibold text-[#0F172A]">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="#services-overview"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0F172A] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(15,23,42,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1E293B]"
            >
              Explore Services
              <ArrowDown size={17} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-[#0F172A] transition-all duration-300 hover:border-[#C9A227] hover:text-[#7A5C00]"
            >
              Discuss Your Project
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}