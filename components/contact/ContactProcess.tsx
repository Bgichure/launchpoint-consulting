import {
  ArrowRight,
  FileText,
  MessageSquareText,
  Rocket,
  Search,
} from "lucide-react";

import Container from "@/components/ui/Container";

const steps = [
  {
    number: "01",
    title: "Submit Your Inquiry",
    description:
      "Share your business details, goals and the type of support you need.",
    icon: MessageSquareText,
  },
  {
    number: "02",
    title: "Discovery Consultation",
    description:
      "We review your needs, clarify expectations and recommend the right approach.",
    icon: Search,
  },
  {
    number: "03",
    title: "Proposal & Planning",
    description:
      "You receive a clear project scope, timeline, deliverables and quotation.",
    icon: FileText,
  },
  {
    number: "04",
    title: "Project Begins",
    description:
      "Once approved, we begin research, strategy and development of your project.",
    icon: Rocket,
  },
];

export default function ContactProcess() {
  return (
    <section className="bg-white py-20 md:py-24 lg:py-28">
      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-10 bg-[#C9A227]" />

            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#7A5C00] sm:text-sm">
              What Happens Next
            </span>

            <div className="h-px w-10 bg-[#C9A227]" />
          </div>

          <h2 className="mt-6 text-4xl font-bold leading-tight tracking-[-0.03em] text-[#0F172A] sm:text-5xl lg:text-[56px]">
            A Clear Path From Inquiry to Project Launch
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Our consultation process is simple, transparent and designed to
            help you move forward with confidence.
          </p>
        </div>

        {/* Process cards */}
        <div className="relative mt-14 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          <div className="absolute left-[12.5%] right-[12.5%] top-12 hidden h-px bg-slate-200 lg:block" />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="group relative rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#C9A227]/45 hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)]"
              >
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F172A] text-white shadow-[0_10px_25px_rgba(15,23,42,0.15)] transition-colors duration-300 group-hover:bg-[#C9A227] group-hover:text-[#0F172A]">
                  <Icon size={24} />
                </div>

                <span className="mt-7 block text-xs font-semibold uppercase tracking-[0.22em] text-[#7A5C00]">
                  Step {step.number}
                </span>

                <h3 className="mt-3 text-xl font-bold text-[#0F172A]">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {step.description}
                </p>

                {index < steps.length - 1 && (
                  <ArrowRight
                    size={18}
                    className="absolute right-5 top-9 hidden text-slate-300 lg:block"
                  />
                )}
              </article>
            );
          })}
        </div>

        {/* Reassurance strip */}
        <div className="mt-10 rounded-3xl border border-[#C9A227]/25 bg-[#C9A227]/5 px-6 py-5 text-center">
          <p className="text-sm font-medium leading-7 text-slate-700 sm:text-base">
            Submitting an inquiry does not commit you to a project. The initial
            consultation is simply an opportunity to discuss your needs and
            determine the best next step.
          </p>
        </div>
      </Container>
    </section>
  );
}