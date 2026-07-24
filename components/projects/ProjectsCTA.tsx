import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "@/components/ui/Container";

export default function ProjectsCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0F172A] py-20 lg:py-24">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

        {/* Gold Glow */}
        <div className="absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[#C9A227]/10 blur-3xl" />

        {/* Top Divider */}
        <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <Container>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#D7B746]">
            Ready to Build Yours?
          </p>

          {/* Heading */}
          <h2 className="mt-6 text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Every Successful Project
            <br />
            Starts With a Conversation.
          </h2>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            From business plans and investor pitch decks to market research and
            strategic consulting, we help entrepreneurs and organizations turn
            ambitious ideas into clear, actionable plans that drive measurable
            results.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#C9A227] px-9 py-4 font-semibold text-[#0F172A] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D7B746] hover:shadow-[0_20px_50px_rgba(201,162,39,0.25)]"
            >
              Start Your Project

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/services"
              className="rounded-xl border border-white/15 bg-white/5 px-9 py-4 font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C9A227]/50 hover:bg-white/10"
            >
              Explore Services
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm font-medium tracking-wide text-slate-400">
            <span>700+ Projects Delivered</span>

            <span className="hidden text-slate-600 sm:inline">•</span>

            <span>Global Clients</span>

            <span className="hidden text-slate-600 sm:inline">•</span>

            <span>Startup to Enterprise</span>
          </div>
        </div>
      </Container>
    </section>
  );
}