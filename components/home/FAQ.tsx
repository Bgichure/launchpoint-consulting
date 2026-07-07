"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

import Container from "@/components/ui/Container";
import { faqs } from "@/data/faqs";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      className="bg-[#F8FAFC] py-32"
    >
      <Container>

        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <div className="flex items-center justify-center gap-4">

            <div className="h-px w-12 bg-[#C9A227]" />

            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A227]">
              Frequently Asked Questions
            </span>

            <div className="h-px w-12 bg-[#C9A227]" />

          </div>

          <h2 className="mt-6 text-5xl font-bold text-[#0F172A] lg:text-6xl">
            Everything You Need
            <br />
            To Know
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-slate-600">
            Have questions? Here are answers to the most common questions about
            our services, process and project timelines.
          </p>

        </div>

        {/* Accordion */}

        <div className="mx-auto max-w-4xl">

          {faqs.map((faq, index) => {

            const active = open === index;

            return (

              <div
                key={faq.question}
                className="mb-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >

                <button
                  onClick={() =>
                    setOpen(active ? -1 : index)
                  }
                  className="flex w-full items-center justify-between px-8 py-7 text-left transition hover:bg-slate-50"
                >

                  <h3 className="text-xl font-semibold text-[#0F172A]">
                    {faq.question}
                  </h3>

                  <motion.div
                    animate={{
                      rotate: active ? 180 : 0,
                    }}
                  >
                    {active ? (
                      <Minus className="text-[#C9A227]" />
                    ) : (
                      <Plus />
                    )}
                  </motion.div>

                </button>

                <AnimatePresence>

                  {active && (

                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                    >

                      <div className="border-t border-slate-100 px-8 py-7">

                        <p className="leading-8 text-slate-600">
                          {faq.answer}
                        </p>

                      </div>

                    </motion.div>

                  )}

                </AnimatePresence>

              </div>

            );

          })}

        </div>

      </Container>
    </section>
  );
}