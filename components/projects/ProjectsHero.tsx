import Link from "next/link";
import { ArrowRight, FolderKanban } from "lucide-react";

import Container from "@/components/ui/Container";

export default function ProjectsHero() {
  return (
    <section className="relative overflow-hidden bg-[#0F172A] pt-32 pb-20 lg:pt-36 lg:pb-24">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="absolute -left-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-[#C9A227]/10 blur-3xl" />

        <div className="absolute -right-40 top-0 h-[28rem] w-[28rem] rounded-full bg-slate-700/20 blur-3xl" />

        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <Container>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 backdrop-blur">
            <FolderKanban
              size={16}
              className="text-[#D7B746]"
            />

            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D7B746]">
              Our Portfolio
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-5xl font-bold tracking-[-0.05em] text-white md:text-6xl lg:text-7xl">
            Real Projects.
            <br />
            <span className="text-[#D7B746]">
              Measurable Results.
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            Explore a curated portfolio of business plans, investor pitch
            decks, financial models, and strategic consulting engagements
            that have helped founders launch businesses, secure investment,
            and make confident decisions backed by research, strategy, and
            financial insight.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#C9A227] px-8 py-4 font-semibold text-[#0F172A] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D7B746] hover:shadow-xl"
            >
              View Projects

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C9A227]/50 hover:bg-white/10 hover:shadow-lg"
            >
              Start Your Project
            </Link>
          </div>

          {/* Trust Metrics */}
          <div className="mt-16 grid grid-cols-1 gap-8 border-t border-white/10 pt-10 sm:grid-cols-3">
            <div>
              <p className="text-3xl font-bold text-white">700+</p>
              <p className="mt-2 text-sm text-slate-400">
                Projects Delivered
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-white">$20M+</p>
              <p className="mt-2 text-sm text-slate-400">
                Funding Supported
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-white">20+</p>
              <p className="mt-2 text-sm text-slate-400">
                Industries Served
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}