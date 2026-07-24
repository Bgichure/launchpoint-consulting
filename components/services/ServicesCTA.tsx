import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

import Container from "@/components/ui/Container";

export default function ServicesCTA() {
  return (
    <section className="bg-white py-20 md:py-24 lg:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-[#0F172A] px-8 py-14 text-center text-white shadow-[0_30px_80px_rgba(15,23,42,0.18)] md:px-12 md:py-16 lg:px-16">
          {/* Background Glow */}

          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#C9A227]/10 blur-3xl" />

          <div className="absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C9A227] sm:text-sm">
              Ready to Get Started?
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-[56px]">
              Let&apos;s Build Something
              <br />
              Extraordinary Together
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Whether you&apos;re seeking investment, bank financing, grant funding
              or simply a stronger business strategy, we&apos;re here to help.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#C9A227] px-6 py-3.5 text-sm font-semibold text-[#0F172A] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D7B53D]"
              >
                Start Your Project

                <ArrowRight size={18} />
              </Link>

              <a
                href="mailto:hello@launchpointconsulting.com"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-[#C9A227]/50 hover:bg-white/10 hover:text-[#C9A227]"
              >
                <Mail size={18} />

                Email Us
              </a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
              <span>✓ Free Consultation</span>

              <span>✓ Worldwide Service</span>

              <span>✓ Confidential Projects</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}