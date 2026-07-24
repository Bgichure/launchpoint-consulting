import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import Container from "@/components/ui/Container";
import { projects } from "@/data/projects";

export default function Portfolio() {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 3);

  return (
    <section className="bg-white px-6 py-24">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#A98212]">
              Selected Projects
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-[#0F172A] sm:text-5xl">
              Strategy brought to life
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Explore selected business plans, investor materials, and
              strategic projects created for businesses across multiple
              industries.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-semibold text-[#0F172A] transition-colors hover:text-[#A98212]"
          >
            View All Projects
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <Link href={`/projects/${project.slug}`} className="block">
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A98212]">
                    {project.service}
                  </p>

                  <div className="mt-3 flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-bold tracking-[-0.03em] text-[#0F172A]">
                      {project.title}
                    </h3>

                    <ArrowUpRight
                      size={20}
                      className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>

                  <p className="mt-4 leading-7 text-slate-600">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.services.slice(0, 2).map((service) => (
                      <span
                        key={service}
                        className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}