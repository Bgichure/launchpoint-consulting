import Container from "@/components/ui/Container";
import type { Project } from "@/data/projects";
import { CheckCircle2 } from "lucide-react";

type CaseDeliverablesProps = {
  project: Project;
};

export default function CaseDeliverables({
  project,
}: CaseDeliverablesProps) {
  return (
    <section className="bg-slate-50 py-16 md:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#A98212]">
            Deliverables
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-[#0F172A] md:text-4xl">
            Project deliverables
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Every engagement is tailored to the client's goals. These are the
            primary deliverables completed as part of this project.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {project.deliverables.map((item) => (
            <div
              key={item}
              className="group flex min-h-[92px] items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C9A227]/40 hover:shadow-md"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#C9A227]/10 transition-colors duration-300 group-hover:bg-[#C9A227]">
                <CheckCircle2
                  size={20}
                  className="text-[#A98212] transition-colors duration-300 group-hover:text-white"
                />
              </div>

              <h3 className="text-base font-semibold leading-6 text-[#0F172A]">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}