import { ArrowRight } from "lucide-react";

import Container from "@/components/ui/Container";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#F8FAFC] py-32"
    >
      <Container>

        {/* Section Heading */}

        <div className="mx-auto mb-28 max-w-3xl text-center">

          <div className="flex items-center justify-center gap-4">

            <div className="h-px w-12 bg-[#C9A227]" />

            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A227]">
              Our Services
            </span>

            <div className="h-px w-12 bg-[#C9A227]" />

          </div>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-[#0F172A] lg:text-6xl">
            Comprehensive Solutions
            <br />
            For Every Stage of Business Growth
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-slate-600">
            We help entrepreneurs, startups and established businesses
            transform ideas into investor-ready ventures through strategic
            planning, financial modelling and professionally designed
            presentations.
          </p>

        </div>

        {/* Cards */}

        <div className="grid auto-rows-fr gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => {

            const Icon = service.icon;

            return (

              <article
                key={service.title}
                className="
                  group
                  relative
                  flex
                  h-full
                  flex-col
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-10
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[#C9A227]
                  hover:shadow-[0_30px_70px_rgba(15,23,42,0.12)]
                "
              >

                {/* Gold Hover Bar */}

                <div className="absolute left-0 top-0 h-1 w-0 bg-[#C9A227] transition-all duration-500 group-hover:w-full" />

                {/* Icon */}

                <div
                  className="
                    mb-8
                    flex
                    h-[72px]
                    w-[72px]
                    items-center
                    justify-center
                    rounded-2xl
                    bg-slate-100
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:bg-[#C9A227]/10
                  "
                >
                  <Icon
                    size={32}
                    className="text-[#0F172A] transition-colors duration-300 group-hover:text-[#C9A227]"
                  />
                </div>

                {/* Title */}

                <h3 className="text-3xl font-bold text-[#0F172A]">
                  {service.title}
                </h3>

                {/* Description */}

                <p className="mt-6 flex-grow leading-8 text-slate-600">
                  {service.description}
                </p>

                {/* CTA */}

                <button
                  className="
                    mt-10
                    inline-flex
                    items-center
                    gap-2
                    font-semibold
                    text-[#0F172A]
                    transition-colors
                    duration-300
                    group-hover:text-[#C9A227]
                  "
                >
                  Learn More

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-2"
                  />

                </button>

              </article>

            );

          })}

        </div>

      </Container>
    </section>
  );
}