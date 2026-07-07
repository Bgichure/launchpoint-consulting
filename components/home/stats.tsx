import Container from "@/components/ui/Container";
import { stats } from "@/data/stats";

export default function Stats() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-10 text-center md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`${
                index !== stats.length - 1
                  ? "md:border-r md:border-slate-200"
                  : ""
              }`}
            >
              <h2 className="text-5xl font-bold text-[#0F172A]">
                {stat.value}
              </h2>

              <p className="mt-3 text-sm font-medium uppercase tracking-widest text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}