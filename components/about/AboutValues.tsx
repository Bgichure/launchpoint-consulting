import {
  BadgeCheck,
  Briefcase,
  Compass,
  Handshake,
} from "lucide-react";

import Container from "@/components/ui/Container";

const values = [
  {
    icon: Compass,
    title: "Strategic Thinking",
    description:
      "Every recommendation is driven by research, market insight and long-term business objectives—not assumptions.",
  },
  {
    icon: BadgeCheck,
    title: "Professional Excellence",
    description:
      "From business plans to investor presentations, every deliverable is polished, accurate and built to professional standards.",
  },
  {
    icon: Handshake,
    title: "Client Partnership",
    description:
      "We believe the best results come from collaboration, transparency and understanding each client's unique vision.",
  },
  {
    icon: Briefcase,
    title: "Business Impact",
    description:
      "Our work is designed to help clients raise capital, secure financing, attract investors and make confident business decisions.",
  },
];

export default function AboutValues() {
  return (
    <section className="bg-white py-20 md:py-24 lg:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-10 bg-[#C9A227]" />

            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#A98212] sm:text-sm">
              Our Values
            </span>

            <div className="h-px w-10 bg-[#C9A227]" />
          </div>

          <h2 className="mt-6 text-4xl font-bold tracking-[-0.03em] text-[#0F172A] sm:text-5xl">
            Principles That Shape Every Project
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Every engagement is guided by the same commitment: deliver work
            that is strategic, credible and genuinely valuable to your
            business.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {values.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-[2rem] border border-slate-200 bg-[#F8FAFC] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A227]/40 hover:shadow-xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0F172A] text-white transition-colors duration-300 group-hover:bg-[#C9A227]">
                <Icon size={28} />
              </div>

              <h3 className="mt-7 text-2xl font-semibold text-[#0F172A]">
                {title}
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}