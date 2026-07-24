import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CalendarDays,
  UserRound,
} from "lucide-react";

import Container from "@/components/ui/Container";
import type { Project } from "@/data/projects";

type CaseHeroProps = {
  project: Project;
};

export default function CaseHero({
  project,
}: CaseHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#0F172A] pb-20 pt-32 text-white md:pb-24 md:pt-36">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-[#C9A227]/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-52 -left-32 h-[30rem] w-[30rem] rounded-full bg-white/5 blur-3xl"
      />

      <Container>
        <div className="relative mx-auto max-w-6xl">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition-colors duration-300 hover:text-[#D7B746]"
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back to Projects
          </Link>

          <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            {/* Left */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#D7B746]">
                {project.service}
              </p>

              <h1 className="mt-4 text-4xl font-bold leading-[1.08] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                {project.title}
              </h1>

              <p className="mt-5 text-xl font-medium leading-8 text-slate-200">
                {project.subtitle}
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.services.map((service) => (
                  <span
                    key={service}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur-sm"
                  >
                    {service}
                  </span>
                ))}
              </div>

              <div className="mt-10 grid gap-4 border-y border-white/10 py-5 sm:grid-cols-3">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5">
                    <UserRound
                      size={16}
                      className="text-[#D7B746]"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                      Client
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white">
                      {project.client}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5">
                    <Building2
                      size={16}
                      className="text-[#D7B746]"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                      Industry
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white">
                      {project.industry}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5">
                    <CalendarDays
                      size={16}
                      className="text-[#D7B746]"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                      Year
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white">
                      {project.year}
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href={`/contact?service=${encodeURIComponent(
                  project.service
                )}`}
                className="group mt-9 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#C9A227] px-7 py-3.5 font-semibold text-[#0F172A] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D7B746] sm:w-auto"
              >
                Start a Similar Project

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Right */}
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-[2rem] bg-[#C9A227]/10 blur-2xl"
              />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-2xl">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-slate-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 48vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}