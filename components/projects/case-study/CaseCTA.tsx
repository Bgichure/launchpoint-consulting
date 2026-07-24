import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  FolderOpen,
} from "lucide-react";

import Container from "@/components/ui/Container";
import type { Project } from "@/data/projects";

type CaseCTAProps = {
  project: Project;
};

export default function CaseCTA({
  project,
}: CaseCTAProps) {
  return (
    <section className="bg-[#0F172A] py-16 md:py-20">
      <Container>
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#111827] px-6 py-14 text-center shadow-2xl sm:px-10 md:py-16 lg:px-20">
            {/* Decorative glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#C9A227]/10 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-white/5 blur-3xl"
            />

            <div className="relative">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C9A227]/15">
                <BriefcaseBusiness
                  size={24}
                  className="text-[#D7B746]"
                />
              </div>

              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-[#D7B746]">
                Start Your Project
              </p>

              <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold leading-[1.15] tracking-[-0.04em] text-white md:text-4xl lg:text-5xl">
                Let&apos;s create your next success story.
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Need a business plan, investor pitch deck, financial model, or
                strategic guidance? We&apos;ll turn your ideas into a clear,
                professional, and actionable solution.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href={`/contact?service=${encodeURIComponent(
                    project.service
                  )}`}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#C9A227] px-7 py-3.5 font-semibold text-[#0F172A] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D7B746] sm:w-auto"
                >
                  Start Your Project

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/projects"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C9A227]/60 hover:bg-white/5 sm:w-auto"
                >
                  <FolderOpen size={18} />
                  Explore More Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}