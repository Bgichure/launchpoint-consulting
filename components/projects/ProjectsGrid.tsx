"use client";

import { useMemo, useState } from "react";

import Container from "@/components/ui/Container";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

const ALL_FILTER = "All";

const filters = [
  ALL_FILTER,
  ...Array.from(
    new Set(projects.map((project) => project.service)),
  ),
];

export default function ProjectsGrid() {
  const [activeFilter, setActiveFilter] =
    useState(ALL_FILTER);

  const filteredProjects = useMemo(() => {
    if (activeFilter === ALL_FILTER) {
      return projects;
    }

    return projects.filter(
      (project) => project.service === activeFilter,
    );
  }, [activeFilter]);

  const getFilterCount = (filter: string) => {
    if (filter === ALL_FILTER) {
      return projects.length;
    }

    return projects.filter(
      (project) => project.service === filter,
    ).length;
  };

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="bg-slate-50 px-6 pb-24 pt-28 md:pb-32 md:pt-32"
    >
      <Container>
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#A98212]">
                Selected Work
              </p>

              <h2
                id="projects-heading"
                className="mt-4 text-4xl font-bold tracking-[-0.04em] text-[#0F172A] sm:text-5xl"
              >
                Explore our recent projects
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Browse selected business plans, investor
                presentations, financial models, and digital
                strategies created to help businesses communicate
                clearly, secure funding, and grow with confidence.
              </p>
            </div>

            <p
              className="shrink-0 text-sm font-medium text-slate-500"
              aria-live="polite"
            >
              Showing{" "}
              <span className="font-bold text-[#0F172A]">
                {filteredProjects.length}
              </span>{" "}
              {filteredProjects.length === 1
                ? "project"
                : "projects"}
            </p>
          </div>

          <div
            className="mt-10 flex flex-wrap gap-3"
            role="group"
            aria-label="Filter projects by service"
          >
            {filters.map((filter) => {
              const isActive = activeFilter === filter;
              const count = getFilterCount(filter);

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={isActive}
                  className={`group inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227] focus-visible:ring-offset-2 ${
                    isActive
                      ? "border-[#0F172A] bg-[#0F172A] text-white shadow-[0_8px_24px_rgba(15,23,42,0.15)]"
                      : "border-slate-200 bg-white text-slate-600 hover:-translate-y-0.5 hover:border-[#C9A227] hover:text-[#0F172A] hover:shadow-sm"
                  }`}
                >
                  <span>{filter}</span>

                  <span
                    className={`flex min-w-6 items-center justify-center rounded-full px-1.5 py-0.5 text-xs transition-colors ${
                      isActive
                        ? "bg-white/15 text-white"
                        : "bg-slate-100 text-slate-500 group-hover:bg-[#C9A227]/10 group-hover:text-[#8A6A0A]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {filteredProjects.length > 0 ? (
            <div
              key={activeFilter}
              className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
            >
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                />
              ))}
            </div>
          ) : (
            <div className="mt-12 rounded-[2rem] border border-dashed border-slate-300 bg-white px-6 py-20 text-center shadow-sm">
              <h3 className="text-2xl font-bold tracking-tight text-[#0F172A]">
                No projects found
              </h3>

              <p className="mx-auto mt-3 max-w-lg leading-7 text-slate-600">
                There are currently no projects available under
                this category. Browse the complete portfolio to
                explore all available case studies.
              </p>

              <button
                type="button"
                onClick={() => setActiveFilter(ALL_FILTER)}
                className="mt-7 rounded-xl bg-[#0F172A] px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1E293B] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227] focus-visible:ring-offset-2"
              >
                View All Projects
              </button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}