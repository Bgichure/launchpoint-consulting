"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Minus, Plus } from "lucide-react";

import Container from "@/components/ui/Container";
import { faqs } from "@/data/faqs";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#F8FAFC] py-20 md:py-24 lg:py-28">
      <Container>
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-10 bg-[#C9A227]" />

            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#A98212] sm:text-sm">
              Frequently Asked Questions
            </span>

            <div className="h-px w-10 bg-[#C9A227]" />
          </div>

          <h2 className="mt-6 text-4xl font-bold leading-tight tracking-[-0.03em] text-[#0F172A] sm:text-5xl lg:text-[56px]">
            Everything You Need to Know
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Find answers to common questions about our services, process,
            timelines and project requirements.
          </p>
        </div>

        {/* Accordion */}
        <div className="mx-auto max-w-4xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = open === index;
            const answerId = `faq-answer-${index}`;

            return (
              <article
                key={faq.question}
                className={`overflow-hidden rounded-3xl border bg-white transition-all duration-300 ${
                  isOpen
                    ? "border-[#C9A227]/45 shadow-[0_20px_45px_rgba(15,23,42,0.08)]"
                    : "border-slate-200/80 shadow-sm hover:border-[#C9A227]/30"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    className="group flex w-full items-center justify-between gap-6 px-6 py-6 text-left sm:px-8 sm:py-7"
                  >
                    <span className="text-lg font-semibold leading-7 text-[#0F172A] sm:text-xl">
                      {faq.question}
                    </span>

                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                        isOpen
                          ? "bg-[#C9A227] text-white"
                          : "bg-slate-100 text-[#0F172A] group-hover:bg-[#C9A227]/10 group-hover:text-[#A98212]"
                      }`}
                    >
                      {isOpen ? <Minus size={19} /> : <Plus size={19} />}
                    </motion.span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={answerId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-slate-100 px-6 py-6 sm:px-8 sm:py-7">
                        <p className="max-w-3xl leading-8 text-slate-600">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </div>

        {/* Contact prompt */}
        <div className="mx-auto mt-12 flex max-w-4xl flex-col items-center justify-between gap-5 rounded-3xl bg-[#0F172A] px-7 py-8 text-center sm:px-9 md:flex-row md:text-left">
          <div>
            <h3 className="text-xl font-bold text-white">
              Still have a question?
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-300 sm:text-base">
              Tell us about your project and we’ll help you identify the right
              service.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#C9A227] px-5 py-3 text-sm font-semibold text-[#0F172A] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D8B63F]"
          >
            Contact Us
            <ArrowRight size={17} />
          </Link>
        </div>
      </Container>
    </section>
  );
}