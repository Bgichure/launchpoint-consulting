import Link from "next/link";
import {
  ArrowDownRight,
  BarChart3,
  FileSearch,
  FileText,
  Landmark,
  Palette,
  Presentation,
} from "lucide-react";

import Container from "@/components/ui/Container";

const services = [
  {
    title: "Business Plans",
    description:
      "Investor-ready and lender-ready plans built around your business goals.",
    icon: FileText,
    href: "/services#business-plans",
  },
  {
    title: "Investor Pitch Decks",
    description:
      "Clear, compelling presentations for investors, partners and stakeholders.",
    icon: Presentation,
    href: "/services#pitch-decks",
  },
  {
    title: "Financial Projections",
    description:
      "Practical forecasts covering revenue, expenses, cash flow and profitability.",
    icon: BarChart3,
    href: "/services#financial-models",
  },
  {
    title: "Market Research",
    description:
      "Focused industry, customer and competitor research for stronger decisions.",
    icon: FileSearch,
    href: "/services#market-research",
  },
  {
    title: "Grant & Loan Plans",
    description:
      "Funding-ready documentation tailored for lenders and grant programs.",
    icon: Landmark,
    href: "/services#grant-loan-plans",
  },
  {
    title: "Presentation Design",
    description:
      "Professional, polished slides that communicate ideas with clarity.",
    icon: Palette,
    href: "/services#presentation-design",
  },
];

export default function ServicesOverview() {
  return (
    <section
      id="services-overview"
      className="bg-[#F8FAFC] py-20 md:py-24"
    >
      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-10 bg-[#C9A227]" />

            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#7A5C00] sm:text-sm">
              Service Overview
            </span>

            <div className="h-px w-10 bg-[#C9A227]" />
          </div>

          <h2 className="mt-6 text-4xl font-bold leading-tight tracking-[-0.03em] text-[#0F172A] sm:text-5xl">
            Find the Right Support for Your Business
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Select a service below to jump directly to the full details,
            deliverables and next steps.
          </p>
        </div>

        {/* Compact service navigation */}
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                href={service.href}
                className="group flex min-h-[190px] flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A227]/45 hover:shadow-[0_18px_40px_rgba(15,23,42,0.07)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-[#0F172A] transition-colors duration-300 group-hover:bg-[#C9A227]">
                    <Icon size={21} />
                  </span>

                  <ArrowDownRight
                    size={20}
                    className="text-slate-400 transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-[#7A5C00]"
                  />
                </div>

                <h3 className="mt-5 text-xl font-bold tracking-[-0.02em] text-[#0F172A]">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {service.description}
                </p>
              </Link>
            );
          })}
        </div>

        {/* Bottom prompt */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-3xl border border-[#C9A227]/25 bg-[#C9A227]/5 px-6 py-6 text-center md:flex-row md:text-left">
          <div>
            <h3 className="text-lg font-bold text-[#0F172A]">
              Need more than one service?
            </h3>

            <p className="mt-1 text-slate-600">
              We can combine business planning, financials, research and
              presentation design into one complete package.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#0F172A] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1E293B]"
          >
            Discuss Your Project
            <ArrowDownRight size={17} />
          </Link>
        </div>
      </Container>
    </section>
  );
}