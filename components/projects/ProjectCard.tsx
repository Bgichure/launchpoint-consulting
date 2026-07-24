import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const visibleServices = project.services?.slice(0, 3) ?? [];

  return (
    <article className="group h-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`View ${project.title} project`}
        className="flex h-full flex-col rounded-[2rem] outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227] focus-visible:ring-offset-4"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
          <Image
            src={project.image}
            alt={`${project.title} project preview`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 via-transparent to-transparent" />

          <div className="absolute left-5 top-5">
            <span className="inline-flex rounded-full border border-white/20 bg-[#0F172A]/75 px-3.5 py-2 text-xs font-semibold text-white backdrop-blur-md">
              {project.industry}
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-7 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A98212]">
            {project.service}
          </p>

          <div className="mt-3 flex items-start justify-between gap-5">
            <h2 className="text-2xl font-bold tracking-[-0.03em] text-[#0F172A] transition-colors duration-300 group-hover:text-[#A98212]">
              {project.title}
            </h2>

            <span
              aria-hidden="true"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 text-[#0F172A] transition-all duration-300 group-hover:border-[#C9A227] group-hover:bg-[#C9A227]"
            >
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </div>

          <p className="mt-4 line-clamp-3 leading-7 text-slate-600">
            {project.description}
          </p>

          {visibleServices.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {visibleServices.map((service) => (
                <span
                  key={service}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
                >
                  {service}
                </span>
              ))}
            </div>
          )}

          <div className="mt-auto pt-7">
            <div className="border-t border-slate-200 pt-5">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F172A]">
                View Project
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}