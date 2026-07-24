import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  FileSearch,
  FileText,
  Landmark,
  Palette,
  Presentation,
} from "lucide-react";

import Container from "@/components/ui/Container";

const services = [
  {
    id: "business-plans",
    number: "01",
    title: "Business Plans",
    description:
      "Professional business plans designed to communicate your opportunity clearly, support funding applications and guide long-term growth.",
    icon: FileText,
    included: [
      "Executive summary",
      "Company and business model",
      "Market and competitor analysis",
      "Marketing and growth strategy",
      "Operations and management plan",
      "Financial projections",
    ],
    contactHref: "/contact?service=Business%20Plan",
  },
  {
    id: "pitch-decks",
    number: "02",
    title: "Investor Pitch Decks",
    description:
      "Compelling investor presentations that explain your business, market opportunity, strategy and financial potential with clarity.",
    icon: Presentation,
    included: [
      "Investor-focused story structure",
      "Market opportunity",
      "Business model",
      "Competitive advantage",
      "Traction and milestones",
      "Funding request and use of funds",
    ],
    contactHref: "/contact?service=Pitch%20Deck",
  },
  {
    id: "financial-models",
    number: "03",
    title: "Financial Projections",
    description:
      "Practical financial models that help you understand revenue, expenses, profitability, cash flow and future funding needs.",
    icon: BarChart3,
    included: [
      "Revenue forecasts",
      "Profit and loss projections",
      "Cash-flow forecasts",
      "Balance-sheet projections",
      "Break-even analysis",
      "Financial charts and assumptions",
    ],
    contactHref: "/contact?service=Financial%20Model",
  },
  {
    id: "market-research",
    number: "04",
    title: "Market Research",
    description:
      "Focused research that gives your business plan, strategy or presentation stronger market evidence and commercial credibility.",
    icon: FileSearch,
    included: [
      "Industry overview",
      "Market size and growth",
      "Customer segmentation",
      "Competitor analysis",
      "Market trends",
      "Strategic opportunities",
    ],
    contactHref: "/contact?service=Market%20Research",
  },
  {
    id: "grant-loan-plans",
    number: "05",
    title: "Grant & Loan Plans",
    description:
      "Funding-ready documentation structured around the expectations of lenders, grant programs and financing institutions.",
    icon: Landmark,
    included: [
      "Funding objective",
      "Use of funds",
      "Repayment strategy",
      "Financial viability",
      "Risk analysis",
      "Supporting business documentation",
    ],
    contactHref: "/contact?service=Grant%20%26%20Loan%20Plan",
  },
  {
    id: "presentation-design",
    number: "06",
    title: "Presentation Design",
    description:
      "Professional business presentations that transform complex ideas into clear, engaging and visually polished slides.",
    icon: Palette,
    included: [
      "Custom slide design",
      "Clear content hierarchy",
      "Charts and visual storytelling",
      "Brand-consistent styling",
      "Editable presentation files",
      "PDF and PowerPoint delivery",
    ],
    contactHref: "/contact?service=Presentation%20Design",
  },
];

export default function ServicesDetails() {
  return (
    <section className="bg-white py-20 md:py-24 lg:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-10 bg-[#C9A227]" />

            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#A98212] sm:text-sm">
              Service Details
            </span>

            <div className="h-px w-10 bg-[#C9A227]" />
          </div>

          <h2 className="mt-6 text-4xl font-bold leading-tight tracking-[-0.03em] text-[#0F172A] sm:text-5xl lg:text-[56px]">
            Explore Each Service in More Detail
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Every service is tailored to your business, goals, audience and
            funding requirements.
          </p>
        </div>

        <div className="mt-16 space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const reverse = index % 2 === 1;

            return (
              <article
                id={service.id}
                key={service.id}
                className="scroll-mt-28 overflow-hidden rounded-[2rem] border border-slate-200 bg-[#F8FAFC]"
              >
                <div
                  className={`grid lg:grid-cols-2 ${
                    reverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Description */}
                  <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-12">
                    <div className="flex items-center gap-4">
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F172A] text-white">
                        <Icon size={24} />
                      </span>

                      <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#A98212]">
                        Service {service.number}
                      </span>
                    </div>

                    <h3 className="mt-7 text-3xl font-bold tracking-[-0.03em] text-[#0F172A] sm:text-4xl">
                      {service.title}
                    </h3>

                    <p className="mt-5 leading-8 text-slate-600">
                      {service.description}
                    </p>

                    <Link
                      href={service.contactHref}
                      className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-[#0F172A] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1E293B]"
                    >
                      Explore This Service
                      <ArrowRight
                        size={17}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>
                  </div>

                  {/* Included items */}
                  <div className="border-t border-slate-200 bg-white p-7 sm:p-9 lg:border-l lg:border-t-0 lg:p-12">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#A98212]">
                      What&apos;s Included
                    </p>

                    <div className="mt-6 grid gap-4">
                      {service.included.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-4"
                        >
                          <CheckCircle2
                            size={19}
                            className="mt-0.5 shrink-0 text-[#C9A227]"
                          />

                          <span className="font-medium leading-6 text-slate-700">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}