import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "@/components/ui/Container";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#F8FAFC] py-20 md:py-24 lg:py-28"
    >
      <Container>
        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-18">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-10 bg-[#C9A227]" />

            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#7A5C00] sm:text-sm">
              Our Services
            </span>

            <div className="h-px w-10 bg-[#C9A227]" />
          </div>

          <h2 className="mt-6 text-4xl font-bold leading-tight tracking-[-0.03em] text-[#0F172A] sm:text-5xl lg:text-[56px]">
            Strategic Solutions for Every Stage of Business Growth
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            We help entrepreneurs, startups and established businesses turn
            ideas into clear, credible and investment-ready opportunities.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#C9A227]/50 hover:shadow-[0_28px_65px_rgba(15,23,42,0.10)] sm:p-8"
              >
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-[#C9A227] transition-transform duration-300 group-hover:scale-x-100" />

                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-[#0F172A] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#C9A227]/10 group-hover:text-[#B58E18]">
                  <Icon size={27} strokeWidth={1.8} aria-hidden="true" />
                </div>

                <h3 className="text-2xl font-bold tracking-[-0.02em] text-[#0F172A]">
                  {service.title}
                </h3>

                <p className="mt-4 flex-grow leading-7 text-slate-600">
                  {service.description}
                </p>

                <Link
                  href="/services"
                  className="mt-8 inline-flex w-fit items-center gap-2 font-semibold text-[#0F172A] transition-colors duration-300 group-hover:text-[#B58E18]"
                >
                  Explore {service.title}

                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                  />
                </Link>
              </article>
            );
          })}
        </div>

        {/* Section CTA */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C9A227]/60 hover:text-[#B58E18] hover:shadow-md"
          >
            View All Services

            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}