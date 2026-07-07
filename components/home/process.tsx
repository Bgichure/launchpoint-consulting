"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import Container from "@/components/ui/Container";
import { process } from "@/data/process";

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  const step = process[activeStep];

  return (
    <section id="process" className="bg-white py-32">
      <Container>
        {/* Heading */}

        <div className="mx-auto mb-24 max-w-3xl text-center">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-[#C9A227]" />

            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A227]">
              Our Process
            </span>

            <div className="h-px w-12 bg-[#C9A227]" />
          </div>

          <h2 className="mt-6 text-5xl font-bold text-[#0F172A] lg:text-6xl">
            From Your Idea
            <br />
            To Investor Confidence
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-slate-600">
            Click each stage to explore how we transform your vision into an
            investor-ready business.
          </p>
        </div>

        {/* Timeline */}

        <div className="relative mb-24">

          {/* Background Line */}

          <div className="absolute left-0 right-0 top-10 hidden h-[2px] bg-slate-200 lg:block" />

          {/* Progress Line */}

          <motion.div
            className="absolute left-0 top-10 hidden h-[2px] bg-[#C9A227] lg:block"
            animate={{
              width: `${(activeStep / (process.length - 1)) * 100}%`,
            }}
            transition={{
              duration: 0.5,
            }}
          />

          <div className="grid gap-8 lg:grid-cols-4">
            {process.map((item, index) => {
              const Icon = item.icon;

              const active = index <= activeStep;

              return (
                <button
                  key={item.number}
                  onClick={() => setActiveStep(index)}
                  className="relative z-10 flex flex-col items-center text-center"
                >
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                    }}
                    animate={{
                      backgroundColor: active ? "#C9A227" : "#0F172A",
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="flex h-20 w-20 items-center justify-center rounded-full shadow-xl"
                  >
                    <Icon size={30} className="text-white" />
                  </motion.div>

                  <span className="mt-5 text-sm font-semibold tracking-[0.2em] text-[#C9A227]">
                    {item.number}
                  </span>

                  <h3 className="mt-2 text-2xl font-bold text-[#0F172A]">
                    {item.title}
                  </h3>
                </button>
              );
            })}
          </div>
        </div>

        {/* Animated Detail Card */}

        <AnimatePresence mode="wait">
          <motion.div
            key={step.number}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.4,
            }}
            className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-slate-50 p-12 shadow-xl"
          >
            <div className="grid gap-10 lg:grid-cols-2">

              {/* Left */}

              <div>

                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A227]">
                  STEP {step.number}
                </span>

                <h3 className="mt-4 text-4xl font-bold text-[#0F172A]">
                  {step.title}
                </h3>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  {step.description}
                </p>

                <div className="mt-10 rounded-2xl bg-white p-6 shadow-sm">
                  <p className="text-sm uppercase tracking-widest text-slate-500">
                    Estimated Time
                  </p>

                  <p className="mt-2 text-3xl font-bold text-[#0F172A]">
                    {step.duration}
                  </p>
                </div>

              </div>

              {/* Right */}

              <div>

                <h4 className="text-2xl font-bold text-[#0F172A]">
                  You'll Receive
                </h4>

                <div className="mt-8 space-y-5">
                  {step.deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm"
                    >
                      <CheckCircle2 className="text-[#C9A227]" />

                      <span className="font-medium text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </Container>
    </section>
  );
}