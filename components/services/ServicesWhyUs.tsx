import {
  Award,
  BriefcaseBusiness,
  Globe2,
  Handshake,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Container from "@/components/ui/Container";

const reasons = [
  {
    title: "Tailored Strategies",
    description:
      "Every document is built around your business, industry and funding objectives—not generic templates.",
    icon: Sparkles,
  },
  {
    title: "Professional Quality",
    description:
      "Clear, polished and investor-friendly documents designed to make a strong first impression.",
    icon: Award,
  },
  {
    title: "Business Expertise",
    description:
      "Combining strategy, market research and financial planning to deliver practical business solutions.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Worldwide Support",
    description:
      "Working remotely with startups, entrepreneurs and established businesses across multiple countries.",
    icon: Globe2,
  },
  {
    title: "Transparent Process",
    description:
      "Clear communication, defined milestones and consistent updates throughout every project.",
    icon: Handshake,
  },
  {
    title: "Confidential Service",
    description:
      "Your business ideas and documents are treated with complete confidentiality and professionalism.",
    icon: ShieldCheck,
  },
];

export default function ServicesWhyUs() {
  return (
    <section className="bg-[#F8FAFC] py-20 md:py-24 lg:py-28">
      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-10 bg-[#C9A227]" />

            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#A98212] sm:text-sm">
              Why LaunchPoint
            </span>

            <div className="h-px w-10 bg-[#C9A227]" />
          </div>

          <h2 className="mt-6 text-4xl font-bold tracking-[-0.03em] text-[#0F172A] sm:text-5xl lg:text-[56px]">
            More Than Documents.
            <br />
            Strategic Business Support.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            We don't simply create reports—we help transform ideas into
            professional, investment-ready business opportunities.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#C9A227]/40 hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F172A] text-white transition-all duration-300 group-hover:bg-[#C9A227] group-hover:text-[#0F172A]">
                  <Icon size={24} />
                </div>

                <h3 className="mt-7 text-2xl font-bold text-[#0F172A]">
                  {reason.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {reason.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-16 grid gap-6 rounded-[2rem] bg-[#0F172A] p-8 text-center text-white md:grid-cols-4 md:p-10">
          <div>
            <p className="text-5xl font-bold text-[#C9A227]">150+</p>
            <p className="mt-3 uppercase tracking-[0.18em] text-slate-300">
              Projects
            </p>
          </div>

          <div>
            <p className="text-5xl font-bold text-[#C9A227]">20+</p>
            <p className="mt-3 uppercase tracking-[0.18em] text-slate-300">
              Industries
            </p>
          </div>

          <div>
            <p className="text-5xl font-bold text-[#C9A227]">98%</p>
            <p className="mt-3 uppercase tracking-[0.18em] text-slate-300">
              Satisfaction
            </p>
          </div>

          <div>
            <p className="text-5xl font-bold text-[#C9A227]">$150M+</p>
            <p className="mt-3 uppercase tracking-[0.18em] text-slate-300">
              Funding Supported
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}