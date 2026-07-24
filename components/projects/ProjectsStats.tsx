import {
  FileText,
  Presentation,
  ChartNoAxesCombined,
  Building2,
} from "lucide-react";

import Container from "@/components/ui/Container";

const stats = [
  {
    icon: FileText,
    value: "Business Plans",
    label: "Investor & Bank Ready",
  },
  {
    icon: Presentation,
    value: "Pitch Decks",
    label: "Designed to Raise Capital",
  },
  {
    icon: ChartNoAxesCombined,
    value: "Financial Models",
    label: "5-Year Financial Forecasts",
  },
  {
    icon: Building2,
    value: "Global Clients",
    label: "Across Multiple Industries",
  },
];

export default function ProjectsStats() {
  return (
    <section className="relative z-20 -mt-10 px-6">
      <Container>
        <div className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.10)] sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <article
                key={stat.value}
                className={`group p-8 text-center transition-all duration-300 hover:bg-gradient-to-b hover:from-white hover:to-slate-50 ${
                  index !== stats.length - 1
                    ? "border-b border-slate-200 sm:border-b-0 sm:border-r"
                    : ""
                }`}
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F172A] text-[#D7B746] transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105">
                  <Icon size={24} />
                </div>

                <h2 className="mt-5 text-xl font-bold tracking-tight text-[#0F172A]">
                  {stat.value}
                </h2>

                <p className="mt-2 text-[15px] leading-7 text-slate-500">
                  {stat.label}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}