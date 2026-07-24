"use client";

import { useState } from "react";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";
import { CheckCircle2, Clock3 } from "lucide-react";

import Container from "@/components/ui/Container";
import { process } from "@/data/process";

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  const step = process[activeStep];
  const progress =
    process.length > 1 ? (activeStep / (process.length - 1)) * 100 : 0;

  return (
    <LazyMotion features={domAnimation}>
      <section id="process" className="bg-white py-20 md:py-24 lg:py-28">
      <Container>
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-10 bg-[#C9A227]" />

            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#7A5C00] sm:text-sm">
              Our Process
            </span>

            <div className="h-px w-10 bg-[#C9A227]" />
          </div>

          <h2 className="mt-6 text-4xl font-bold leading-tight tracking-[-0.03em] text-[#0F172A] sm:text-5xl lg:text-[56px]">
            From Your Idea to Investor Confidence
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Explore each stage of our process and see how we turn your business
            concept into a clear, credible and funding-ready opportunity.
          </p>
        </div>

        {/* Process navigation */}
        <div className="relative mb-14 md:mb-16">
          <div className="absolute left-[10%] right-[10%] top-10 hidden h-px bg-slate-200 lg:block" />

          <m.div
            className="absolute left-[10%] top-10 hidden h-px bg-[#C9A227] lg:block"
            animate={{
              width: `calc(${progress * 0.8}%)`,
            }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
            }}
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {process.map((item, index) => {
              const Icon = item.icon;
              const isSelected = index === activeStep;
              const isCompleted = index < activeStep;

              return (
                <button
                  key={item.number}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  aria-pressed={isSelected}
                  className={`group relative z-10 flex items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-300 sm:flex-col sm:text-center lg:border-transparent lg:bg-transparent lg:p-0 ${
                    isSelected
                      ? "border-[#C9A227]/50 bg-[#C9A227]/5"
                      : "border-slate-200 bg-white hover:border-[#C9A227]/30"
                  }`}
                >
                  <m.div
                    whileHover={{ scale: 1.05 }}
                    animate={{
                      backgroundColor:
                        isSelected || isCompleted ? "#C9A227" : "#0F172A",
                      scale: isSelected ? 1.06 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full shadow-[0_14px_30px_rgba(15,23,42,0.14)] sm:h-20 sm:w-20"
                  >
                    <Icon size={28} className="text-white" />
                  </m.div>

                  <div>
                    <span className="text-xs font-semibold tracking-[0.2em] text-[#7A5C00] sm:mt-5 sm:block">
                      STEP {item.number}
                    </span>

                    <h3
                      className={`mt-1 text-lg font-bold transition-colors duration-300 sm:mt-2 sm:text-xl ${
                        isSelected
                          ? "text-[#0F172A]"
                          : "text-slate-700 group-hover:text-[#0F172A]"
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Animated detail card */}
        <AnimatePresence mode="wait">
          <m.article
            key={step.number}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-slate-200/80 bg-[#F8FAFC] shadow-[0_28px_70px_rgba(15,23,42,0.09)]"
          >
            <div className="grid lg:grid-cols-[1fr_0.95fr]">
              {/* Summary */}
              <div className="p-7 sm:p-9 lg:p-12">
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#7A5C00] sm:text-sm">
                  Step {step.number}
                </span>

                <h3 className="mt-4 text-3xl font-bold tracking-[-0.025em] text-[#0F172A] sm:text-4xl">
                  {step.title}
                </h3>

                <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                  {step.description}
                </p>

                <div className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#C9A227]/10 text-[#7A5C00]">
                    <Clock3 size={21} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Estimated time
                    </p>

                    <p className="mt-1 text-xl font-bold text-[#0F172A]">
                      {step.duration}
                    </p>
                  </div>
                </div>
              </div>

              {/* Deliverables */}
              <div className="border-t border-slate-200 bg-white p-7 sm:p-9 lg:border-l lg:border-t-0 lg:p-12">
                <h4 className="text-2xl font-bold tracking-[-0.02em] text-[#0F172A]">
                  What You’ll Receive
                </h4>

                <div className="mt-7 space-y-4">
                  {step.deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-[#F8FAFC] p-4 transition-colors duration-300 hover:border-[#C9A227]/35"
                    >
                      <CheckCircle2
                        className="mt-0.5 shrink-0 text-[#B58E18]"
                        size={21}
                      />

                      <span className="font-medium leading-7 text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </m.article>
        </AnimatePresence>
      </Container>
    </section>
    </LazyMotion>
  );
}