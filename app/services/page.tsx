import type { Metadata } from "next";

import ServicesHero from "@/components/services/ServicesHero";
import ServicesOverview from "@/components/services/ServicesOverview";
import ServicesDetails from "@/components/services/ServicesDetails";
import ServicesWhyUs from "@/components/services/ServicesWhyUs";
import ServicesCTA from "@/components/services/ServicesCTA";

export const metadata: Metadata = {
  title: "Business Plans, Pitch Decks & Financial Models",

  description:
    "Explore professional business plans, investor pitch decks, financial models, market research, grant and loan plans, and presentation design services from Ravinear.",

  alternates: {
    canonical: "/services",
  },

  openGraph: {
    title: "Business Plans, Pitch Decks & Financial Models",
    description:
      "Professional business planning, financial modeling, market research, grant and loan plans, and investor pitch deck services tailored for entrepreneurs and growing businesses.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesOverview />
      <ServicesDetails />
      <ServicesWhyUs />
      <ServicesCTA />
    </main>
  );
}