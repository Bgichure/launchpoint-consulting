import type { Metadata } from "next";

import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutValues from "@/components/about/AboutValues";
import AboutApproach from "@/components/about/AboutApproach";
import AboutCTA from "@/components/about/AboutCTA";

import JsonLd from "@/components/seo/JsonLd";

import {
  getAboutPageJsonLd,
  getBreadcrumbJsonLd,
} from "@/lib/seo/jsonLd";

export const metadata: Metadata = {
  title: "About LaunchPoint Consulting",

  description:
    "Learn how LaunchPoint Consulting helps entrepreneurs, startups, and growing businesses transform ambitious ideas into clear strategies, investor-ready business plans, financial models, and professional presentations.",

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title: "About LaunchPoint Consulting",
    description:
      "Discover our strategy-led approach to business planning, financial modeling, market research, and investor-ready consulting.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={getAboutPageJsonLd()} />

      <JsonLd
        data={getBreadcrumbJsonLd([
          {
            name: "Home",
            path: "/",
          },
          {
            name: "About",
            path: "/about",
          },
        ])}
      />

      <main>
        <AboutHero />
        <AboutStory />
        <AboutValues />
        <AboutApproach />
        <AboutCTA />
      </main>
    </>
  );
}