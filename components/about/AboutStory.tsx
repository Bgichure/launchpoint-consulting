import { Target, TrendingUp, Users } from "lucide-react";

import Container from "@/components/ui/Container";

const pillars = [
  {
    icon: Target,
    title: "Purpose-Driven Strategy",
    description:
      "Every project begins with understanding your objectives, whether you're seeking investment, securing financing, or planning long-term growth.",
  },
  {
    icon: TrendingUp,
    title: "Built for Results",
    description:
      "We don't create documents to sit on a shelf. Every recommendation, financial projection, and presentation is designed to support measurable business outcomes.",
  },
  {
    icon: Users,
    title: "Collaborative Partnership",
    description:
      "We work alongside founders and business owners throughout the process, transforming complex ideas into clear, professional business strategies.",
  },
];

export default function AboutStory() {
  return (
    <section
      id="our-story"
      className="bg-[#F8FAFC] py-20 md:py-24 lg:py-28"
    >
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Left */}

          <div>
            <div className="flex items-center gap-4">
              <div className="h-px w-10 bg-[#C9A227]" />

              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#7A5C00] sm:text-sm">
                Our Story
              </span>
            </div>

            <h2 className="mt-6 text-4xl font-bold tracking-[-0.03em] text-[#0F172A] sm:text-5xl">
              Great Businesses Begin With Clear Direction
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              LaunchPoint Consulting was founded on a simple belief:
              entrepreneurs deserve more than beautifully designed documents.
              They deserve strategies that inspire confidence, communicate
              value, and support real business decisions.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              From startups seeking their first investment to established
              companies preparing for expansion, we help transform ambitious
              ideas into structured, investment-ready business plans,
              compelling presentations, financial models, and market research
              that decision-makers can trust.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Every recommendation is backed by research, thoughtful planning,
              and a commitment to delivering work that creates lasting value
              beyond the final document.
            </p>
          </div>

          {/* Right */}

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="space-y-8">
              {pillars.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0F172A] text-white">
                    <Icon size={24} />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#0F172A]">
                      {title}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}