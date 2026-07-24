import {
  CheckCircle2,
  ClipboardList,
  FileSearch,
  Lightbulb,
  PenTool,
} from "lucide-react";

import Container from "@/components/ui/Container";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Discovery",
    description:
      "We begin by understanding your business, objectives, audience, funding needs and the outcome you want to achieve.",
  },
  {
    number: "02",
    icon: FileSearch,
    title: "Research & Analysis",
    description:
      "We review your market, competitors, business model, financial assumptions and supporting information.",
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Strategy Development",
    description:
      "We organize the findings into a clear strategy that strengthens your positioning, growth plan and investment case.",
  },
  {
    number: "04",
    icon: PenTool,
    title: "Creation & Design",
    description:
      "We develop the written content, financials and visual presentation into a polished, professional deliverable.",
  },
  {
    number: "05",
    icon: CheckCircle2,
    title: "Review & Delivery",
    description:
      "You review the completed work, request refinements where needed and receive the final editable files.",
  },
];

export default function AboutApproach() {
  return (
    <section className="bg-[#F8FAFC] py-20 md:py-24 lg:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-10 bg-[#C9A227]" />

            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#A98212] sm:text-sm">
              Our Approach
            </span>

            <div className="h-px w-10 bg-[#C9A227]" />
          </div>

          <h2 className="mt-6 text-4xl font-bold tracking-[-0.03em] text-[#0F172A] sm:text-5xl">
            A Clear Process From Idea to Final Delivery
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Every project follows a structured process designed to keep the
            work focused, collaborative and aligned with your objectives.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-7 top-0 hidden h-full w-px bg-slate-200 lg:block" />

          <div className="space-y-6">
            {steps.map(({ number, icon: Icon, title, description }) => (
              <div
                key={number}
                className="group relative grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A227]/40 hover:shadow-xl sm:p-8 lg:grid-cols-[72px_1fr]"
              >
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F172A] text-white transition-colors duration-300 group-hover:bg-[#C9A227]">
                  <Icon size={24} />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#A98212]">
                      Step {number}
                    </span>

                    <div className="h-px w-8 bg-[#C9A227]/70" />
                  </div>

                  <h3 className="mt-3 text-2xl font-semibold text-[#0F172A]">
                    {title}
                  </h3>

                  <p className="mt-3 max-w-3xl leading-8 text-slate-600">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}