import Container from "@/components/ui/Container";
import type { Project } from "@/data/projects";
import { CheckCircle2, Lightbulb } from "lucide-react";

type CaseSolutionProps = {
  project: Project;
};

export default function CaseSolution({
  project,
}: CaseSolutionProps) {
  return (
    <section className="bg-white py-16 md:py-20">
      <Container>
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          {/* Left */}
          <div className="flex flex-col gap-6 lg:sticky lg:top-28">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C9A227]/10">
              <Lightbulb
                size={24}
                className="text-[#7A5C00]"
              />
            </div>

            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7A5C00]">
              The Solution
            </p>

            <h2 className="text-3xl font-bold leading-[1.45] tracking-[-0.04em] text-[#0F172A] md:text-4xl">
              {project.solution.title}
            </h2>
          </div>

          {/* Right */}
          <div>
            <p className="max-w-3xl text-lg leading-8 text-slate-600">
              {project.solution.description}
            </p>

            <div className="mt-8 space-y-3">
              {project.solution.points.map((point) => (
                <div
                  key={point}
                  className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C9A227]/40 hover:shadow-md"
                >
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#C9A227]/10">
                    <CheckCircle2
                      size={16}
                      strokeWidth={2.5}
                      className="text-[#7A5C00]"
                    />
                  </div>

                  <p className="leading-7 text-slate-700">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}