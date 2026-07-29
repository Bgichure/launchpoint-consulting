import type { Metadata } from "next";
import { Suspense } from "react";

import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactProcess from "@/components/contact/ContactProcess";
import ContactCTA from "@/components/contact/ContactCTA";

import JsonLd from "@/components/seo/JsonLd";

import {
  getBreadcrumbJsonLd,
  getContactPageJsonLd,
} from "@/lib/seo/jsonLd";

export const metadata: Metadata = {
  title: "Free Business Consultation",

  description:
    "Schedule a free consultation with Ravinear to discuss your business plan, investor pitch deck, financial model, market research, or presentation project.",

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: "Free Business Consultation",
    description:
      "Tell us about your business goals and discover the right strategy for your next project.",
    url: "/contact",
    type: "website",
    siteName: "Ravinear",
  },

  twitter: {
    card: "summary_large_image",
    title: "Free Business Consultation",
    description:
      "Tell us about your business goals and discover the right strategy for your next project.",
  },
};

function ContactFormFallback() {
  return (
    <section className="bg-[#F8FAFC] py-20 md:py-24 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="min-h-[700px] animate-pulse rounded-3xl border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)]" />
      </div>
    </section>
  );
}

export default function ContactPage() {
  const contactJsonLd = getContactPageJsonLd();

  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ]);

  return (
    <>
      <JsonLd data={contactJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <main>
        <ContactHero />

        <Suspense fallback={<ContactFormFallback />}>
          <ContactForm />
        </Suspense>

        <ContactProcess />
        <ContactCTA />
      </main>
    </>
  );
}