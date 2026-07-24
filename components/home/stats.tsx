import Container from "@/components/ui/Container";
import { stats } from "@/data/stats";

export default function Stats() {
  return (
    <section className="relative overflow-hidden border-y border-slate-200/70 bg-white">
      <Container className="py-24">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="group rounded-3xl border border-slate-200/70 bg-white p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A227]/40 hover:shadow-[0_24px_55px_rgba(15,23,42,0.08)]"
            >
              <h2 className="text-5xl font-bold tracking-tight text-[#0F172A] transition-colors duration-300 group-hover:text-[#C9A227] lg:text-6xl">
                {stat.value}
              </h2>

              <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-[#C9A227]/70 transition-all duration-300 group-hover:w-20" />

              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                {stat.label}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
