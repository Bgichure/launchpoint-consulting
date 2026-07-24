import Container from "@/components/ui/Container";
import type { Project } from "@/data/projects";
import { TrendingUp } from "lucide-react";

type CaseOutcomeProps = {
  project: Project;
};

export default function CaseOutcome({
  project,
}: CaseOutcomeProps) {
  return (
    <section className="bg-[#0F172A] py-20 md:py-24 text-white">
      <Container>
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          {/* Left */}

          <div>
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C9A227]/15">
              <TrendingUp
                size={24}
                className="text-[#D7B746]"
              />
            </div>

            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#D7B746]">
              Project Outcome
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] md:text-4xl">
              Results that move the business forward
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {project.outcome.description}
            </p>
          </div>

          {/* Right */}

          <div className="grid gap-4 sm:grid-cols-2">
            {project.outcome.highlights.map((highlight) => (
              <div
                key={highlight.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C9A227]/40 hover:bg-white/[0.07]"
              >
                <div className="text-3xl font-bold tracking-tight text-[#D7B746]">
                  {highlight.value}
                </div>

                <div className="mt-2 text-sm leading-6 text-slate-300">
                  {highlight.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}