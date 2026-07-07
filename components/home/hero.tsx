import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { company } from "@/data/company";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">

      {/* Background Glow */}
      <div className="absolute right-0 top-16 h-[700px] w-[700px] rounded-full bg-[#C9A227]/10 blur-[140px]" />

      <Container
        className="
        relative
        grid
        items-center
        gap-16
        py-24
        lg:grid-cols-[1.05fr_1.25fr]
      "
      >
        {/* LEFT */}

        <div className="relative z-10">

          <span className="inline-flex rounded-full border border-[#C9A227]/30 bg-[#C9A227]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
            {company.tagline}
          </span>

          <h1 className="mt-8 max-w-2xl text-5xl font-bold leading-[1.08] text-[#0F172A] xl:text-6xl">
            Investor-Ready Business Plans That Secure Funding
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-600">
            LaunchPoint Consulting helps entrepreneurs, startups and growing
            businesses transform ideas into investment-ready ventures through
            professionally crafted business plans, investor pitch decks,
            financial projections and market research.
          </p>

          <p className="mt-6 text-base font-semibold text-slate-700">
            Trusted by startups, entrepreneurs and growing businesses.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <Button href="#contact">
              Schedule a Consultation
            </Button>

            <Button href="#portfolio" variant="secondary">
              <span className="flex items-center gap-2">
                Explore Our Work
                <ArrowRight size={18} />
              </span>
            </Button>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative flex justify-end">

          {/* Glow */}

          <div className="absolute right-10 top-12 h-[550px] w-[550px] rounded-full bg-[#C9A227]/15 blur-[120px]" />

          {/* Image */}

          <div className="relative translate-x-6 overflow-hidden rounded-[32px] shadow-[0_40px_80px_rgba(15,23,42,0.12)]">

            <Image
              src="/images/hero-workspace.jpg"
              alt="LaunchPoint Workspace"
              width={1400}
              height={900}
              priority
              className="h-[560px] w-[820px] object-cover"
            />

          </div>

        </div>

      </Container>

      {/* Bottom Cards */}

      <Container className="-mt-10 pb-20">

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            <CheckCircle2
              className="mb-5 text-[#C9A227]"
              size={30}
            />

            <h3 className="text-xl font-semibold">
              Investor Ready
            </h3>

            <p className="mt-3 leading-7 text-slate-500">
              Professionally crafted business plans designed to inspire
              investor confidence.
            </p>

          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            <CheckCircle2
              className="mb-5 text-[#C9A227]"
              size={30}
            />

            <h3 className="text-xl font-semibold">
              Bank Loan Ready
            </h3>

            <p className="mt-3 leading-7 text-slate-500">
              Structured for SBA loans, bank financing and funding
              applications.
            </p>

          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            <CheckCircle2
              className="mb-5 text-[#C9A227]"
              size={30}
            />

            <h3 className="text-xl font-semibold">
              Financial Models
            </h3>

            <p className="mt-3 leading-7 text-slate-500">
              Accurate financial projections backed by strategic planning and
              market research.
            </p>

          </div>

        </div>

      </Container>

    </section>
  );
}