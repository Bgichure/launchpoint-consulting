import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Landmark,
  LineChart,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { company } from "@/data/company";

const benefits = [
  {
    title: "Investor Ready",
    description:
      "Professionally crafted business plans designed to build investor confidence.",
    icon: BadgeCheck,
  },
  {
    title: "Bank Loan Ready",
    description:
      "Structured for bank financing, loan applications and funding reviews.",
    icon: Landmark,
  },
  {
    title: "Financial Models",
    description:
      "Reliable financial projections supported by research and strategic planning.",
    icon: LineChart,
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/70 to-white">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-56 top-20 h-[620px] w-[620px] rounded-full bg-[#C9A227]/10 blur-[140px]"
      />

      <Container className="relative grid items-center gap-14 py-16 md:py-20 lg:min-h-[700px] lg:grid-cols-[1fr_1.08fr] lg:gap-16 lg:py-24">
        {/* Content */}
        <div className="relative z-10 max-w-2xl">
          <span className="inline-flex rounded-full border border-[#C9A227]/30 bg-[#C9A227]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#A98212] sm:px-5 sm:text-xs">
            {company.tagline}
          </span>

          <h1 className="mt-7 text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-[#0F172A] sm:text-5xl lg:text-[58px] xl:text-6xl">
            Investor-Ready Business Plans That Secure Funding
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
            LaunchPoint Consulting helps entrepreneurs, startups and growing
            businesses transform ideas into investment-ready ventures through
            professional business plans, pitch decks, financial projections and
            market research.
          </p>

          <p className="mt-5 text-sm font-semibold text-slate-700 sm:text-base">
            Trusted by entrepreneurs, startups and growing businesses.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Button href="/contact">
              Schedule a Consultation
            </Button>

            <Button href="/projects" variant="secondary">
              <span className="flex items-center justify-center gap-2">
                Explore Our Work
                <ArrowRight size={18} />
              </span>
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="relative lg:justify-self-end">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-8 rounded-full bg-[#C9A227]/15 blur-[110px]"
          />

          <div className="relative overflow-hidden rounded-[28px] border border-white/80 bg-white p-2 shadow-[0_35px_80px_rgba(15,23,42,0.14)] sm:rounded-[32px]">
            <div className="relative overflow-hidden rounded-[22px] sm:rounded-[26px]">
              <Image
                src="/images/hero-workspace.jpg"
                alt="Professional business planning workspace"
                width={1200}
                height={850}
                priority
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="aspect-[4/3] w-full object-cover lg:h-[520px] lg:w-[680px]"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/20 via-transparent to-transparent"
              />
            </div>
          </div>
        </div>
      </Container>

      {/* Benefit cards */}
      <Container className="relative pb-16 md:pb-20">
        <div className="grid gap-5 md:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.title}
                className="group rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A227]/40 hover:shadow-[0_24px_55px_rgba(15,23,42,0.10)] sm:p-8"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C9A227]/10 text-[#B58E18] transition-transform duration-300 group-hover:scale-105">
                  <Icon size={24} strokeWidth={1.8} />
                </div>

                <h2 className="text-xl font-semibold text-[#0F172A]">
                  {benefit.title}
                </h2>

                <p className="mt-3 leading-7 text-slate-500">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}