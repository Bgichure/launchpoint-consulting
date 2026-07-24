"use client";

import { useState } from "react";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";
import { Minus, Plus } from "lucide-react";

import Container from "@/components/ui/Container";

const faqs = [
  {
    question: "How quickly will I receive a response?",
    answer:
      "We typically respond within one business day. More detailed project discussions may require a little longer depending on the complexity of your requirements.",
  },
  {
    question: "Do I need a complete business idea before contacting you?",
    answer:
      "Not at all. Whether you have a fully developed concept or just an initial idea, we can help you determine the best path forward.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. We provide remote consulting services to entrepreneurs, startups and established businesses around the world.",
  },
  {
    question: "Is my business information confidential?",
    answer:
      "Absolutely. Every discussion and document shared with us is treated with complete confidentiality and handled professionally.",
  },
];

export default function ContactFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <LazyMotion features={domAnimation}>
      <section className="bg-[#F8FAFC] py-20 md:py-24 lg:py-28">
      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-10 bg-[#C9A227]" />

            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#7A5C00] sm:text-sm">
              Contact Questions
            </span>

            <div className="h-px w-10 bg-[#C9A227]" />
          </div>

          <h2 className="mt-6 text-4xl font-bold leading-tight tracking-[-0.03em] text-[#0F172A] sm:text-5xl lg:text-[56px]">
            Before You Get Started
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Here are answers to a few questions clients commonly ask before
            starting a project.
          </p>
        </div>

        {/* FAQ */}
        <div className="mx-auto mt-14 max-w-4xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <article
                key={faq.question}
                className={`overflow-hidden rounded-3xl border bg-white transition-all duration-300 ${
                  isOpen
                    ? "border-[#C9A227]/40 shadow-[0_20px_45px_rgba(15,23,42,0.08)]"
                    : "border-slate-200 shadow-sm hover:border-[#C9A227]/25"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 px-7 py-6 text-left"
                >
                  <h3 className="text-lg font-semibold text-[#0F172A] sm:text-xl">
                    {faq.question}
                  </h3>

                  <m.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      isOpen
                        ? "bg-[#C9A227] text-white"
                        : "bg-slate-100 text-[#0F172A]"
                    }`}
                  >
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </m.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <m.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-slate-100 px-7 py-6">
                        <p className="leading-8 text-slate-600">
                          {faq.answer}
                        </p>
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
    </LazyMotion>
  );
}