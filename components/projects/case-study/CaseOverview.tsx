import Container from "@/components/ui/Container";
import type { Project } from "@/data/projects";

type CaseOverviewProps = {
  project: Project;
};

export default function CaseOverview({
  project,
}: CaseOverviewProps) {
  return (
    <section className="bg-white py-16 md:py-20">
      <Container>
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          {/* Left */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7A5C00]">
              Project Overview
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-[#0F172A] md:text-4xl">
              Understanding the project
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {project.overview.summary}
            </p>
          </div>

          {/* Right */}
          <aside className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="text-lg font-bold text-[#0F172A]">
              Project Facts
            </h3>

            <div className="mt-6 divide-y divide-slate-200">
              {project.overview.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-center justify-between gap-6 py-4 first:pt-0 last:pb-0"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                    {fact.label}
                  </span>

                  <span className="text-right font-semibold text-[#0F172A]">
                    {fact.value}
                  </span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}