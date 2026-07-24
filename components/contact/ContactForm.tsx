"use client";

import { useSearchParams } from "next/navigation";

import Container from "@/components/ui/Container";

const serviceOptions = [
  "Business Plan",
  "Pitch Deck",
  "Financial Model",
  "Market Research",
  "Grant & Loan Plan",
  "Presentation Design",
  "Multiple Services",
];

const budgetOptions = [
  "Under ksh 1,000",
  "ksh 1000 – ksh 3,000",
  "ksh 3,000 – ksh 5,000",
  "ksh 5,000+",
  "Let's Discuss",
];

const timelineOptions = [
  "As soon as possible",
  "Within 1 weeks",
  "Within 2 weeks",
  "Within 1 month",
  "Flexible",
];

const fieldClassName =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm text-[#0F172A] shadow-sm outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-slate-400 focus:border-[#C9A227] focus:ring-4 focus:ring-[#C9A227]/10 disabled:cursor-not-allowed disabled:bg-slate-100";

const labelClassName =
  "mb-2 block text-sm font-semibold text-slate-700";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const serviceFromUrl = searchParams.get("service");

  const selectedService =
    serviceFromUrl && serviceOptions.includes(serviceFromUrl)
      ? serviceFromUrl
      : "Business Plan";

  return (
    <section
      id="contact-form"
      className="scroll-mt-24 bg-[#F8FAFC] py-20 md:py-24 lg:py-28"
    >
      <Container>
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-8 md:p-10 lg:p-12">
          <div className="mb-9 border-b border-slate-100 pb-8">
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#A98212] sm:text-sm">
              Start Your Project
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-[-0.035em] text-[#0F172A] sm:text-4xl">
              Tell Us About Your Business
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              Share a few details about your goals, requirements and timeline.
              We&apos;ll review your inquiry and recommend the best approach for
              your project.
            </p>

            <p className="mt-3 text-sm text-slate-500">
              Fields marked with <span className="text-[#A98212]">*</span> are
              required.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="full-name" className={labelClassName}>
                  Full Name <span className="text-[#A98212]">*</span>
                </label>

                <input
                  id="full-name"
                  name="fullName"
                  type="text"
                  placeholder="John Smith"
                  autoComplete="name"
                  required
                  className={fieldClassName}
                />
              </div>

              <div>
                <label htmlFor="email" className={labelClassName}>
                  Email Address <span className="text-[#A98212]">*</span>
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@email.com"
                  autoComplete="email"
                  required
                  className={fieldClassName}
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="company" className={labelClassName}>
                  Company or Business
                </label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Your company name"
                  autoComplete="organization"
                  className={fieldClassName}
                />
              </div>

              <div>
                <label htmlFor="phone" className={labelClassName}>
                  Phone Number{" "}
                  <span className="font-normal text-slate-400">(Optional)</span>
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+254 700 000 000"
                  autoComplete="tel"
                  className={fieldClassName}
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="service" className={labelClassName}>
                  Service Needed <span className="text-[#A98212]">*</span>
                </label>

                <select
                  id="service"
                  name="service"
                  defaultValue={selectedService}
                  required
                  className={fieldClassName}
                >
                  {serviceOptions.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="timeline" className={labelClassName}>
                  Project Timeline <span className="text-[#A98212]">*</span>
                </label>

                <select
                  id="timeline"
                  name="timeline"
                  defaultValue="Flexible"
                  required
                  className={fieldClassName}
                >
                  {timelineOptions.map((timeline) => (
                    <option key={timeline} value={timeline}>
                      {timeline}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="budget" className={labelClassName}>
                Estimated Budget <span className="text-[#A98212]">*</span>
              </label>

              <select
                id="budget"
                name="budget"
                defaultValue="Let's Discuss"
                required
                className={fieldClassName}
              >
                {budgetOptions.map((budget) => (
                  <option key={budget} value={budget}>
                    {budget}
                  </option>
                ))}
              </select>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                This helps us recommend a suitable scope and delivery approach.
              </p>
            </div>

            <div>
              <label htmlFor="message" className={labelClassName}>
                Tell Us About Your Project{" "}
                <span className="text-[#A98212]">*</span>
              </label>

              <textarea
                id="message"
                name="message"
                rows={8}
                required
                placeholder="Tell us about your business, project goals, target audience, funding objectives, required deliverables and any existing materials."
                className={`${fieldClassName} min-h-52 resize-y`}
              />

              <p className="mt-2 text-xs leading-5 text-slate-500">
                The more context you provide, the more useful our initial
                recommendation will be.
              </p>
            </div>

            <div className="rounded-2xl border border-[#C9A227]/25 bg-[#C9A227]/5 px-5 py-4">
              <p className="text-sm leading-6 text-slate-600">
                Submitting this form does not commit you to a project. Your
                initial consultation is free and focused on understanding your
                needs, scope and next steps.
              </p>
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center rounded-xl bg-[#0F172A] px-8 py-4 font-semibold text-white shadow-[0_12px_30px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1E293B] hover:shadow-[0_16px_36px_rgba(15,23,42,0.22)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#C9A227]/30 active:translate-y-0"
            >
              Schedule Free Consultation
            </button>

            <div className="flex flex-col items-center justify-center gap-2 text-center text-sm text-slate-500 sm:flex-row sm:gap-3">
              <span>Free initial consultation</span>
              <span className="hidden text-[#C9A227] sm:inline">•</span>
              <span>Response within one business day</span>
              <span className="hidden text-[#C9A227] sm:inline">•</span>
              <span>Confidential project handling</span>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}