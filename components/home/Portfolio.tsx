"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

import Container from "@/components/ui/Container";
import { projects } from "@/data/projects";
import { projectFilters } from "@/data/projectFilters";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((project) => project.service === filter);
  }, [filter]);

  return (
    <section id="portfolio" className="bg-white py-32">
      <Container>

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <div className="flex items-center justify-center gap-4">

            <div className="h-px w-12 bg-[#C9A227]" />

            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A227]">
              Featured Projects
            </span>

            <div className="h-px w-12 bg-[#C9A227]" />

          </div>

          <h2 className="mt-6 text-5xl font-bold text-[#0F172A] lg:text-6xl">
            Real Businesses.
            <br />
            Real Strategies.
            <br />
            Real Results.
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-slate-600">
            Explore a selection of business plans, investor pitch decks,
            financial models and presentations created across multiple
            industries.
          </p>

        </div>

        {/* Filter Heading */}

        <div className="mt-20 text-center">

          <p className="mb-8 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            Browse by Service
          </p>

          <div className="flex justify-center overflow-x-auto pb-4">
            <div className="flex gap-4">
              {projectFilters.map((item) => (
                <button
                  key={item}
                  onClick={() => setFilter(item)}
                  className={`rounded-full border px-6 py-3 text-sm font-semibold transition-all duration-300 whitespace-nowrap
                  ${
                    filter === item
                      ? "bg-[#0F172A] text-white border-[#0F172A]"
                      : "border-slate-300 bg-white hover:border-[#C9A227] hover:text-[#C9A227]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Grid */}

        <AnimatePresence mode="wait">
            <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
            {filteredProjects.map((project) => (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35 }}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A227] hover:shadow-[0_30px_70px_rgba(15,23,42,0.12)]"
                >
                  {/* Image */}

                  <div className="relative overflow-hidden">

                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <span className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[#0F172A] backdrop-blur">
                      {project.industry}
                    </span>

                  </div>

                  {/* Content */}

                  <div className="flex h-[260px] flex-col p-8">

                    <span className="text-sm font-semibold uppercase tracking-widest text-[#C9A227]">
                      {project.service}
                    </span>

                    <h3 className="mt-3 text-2xl font-bold text-[#0F172A]">
                      {project.title}
                    </h3>

                    <p className="mt-5 flex-grow leading-7 text-slate-600">
                      {project.description}
                    </p>

                    <button className="mt-8 inline-flex items-center gap-2 font-semibold text-[#0F172A] transition-all duration-300 group-hover:text-[#C9A227]">
                      Explore Project

                      <ArrowRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-2"
                      />
                    </button>

                  </div>

                </motion.article>
              ))}
          </motion.div>
        </AnimatePresence>

      </Container>
    </section>
  );
}