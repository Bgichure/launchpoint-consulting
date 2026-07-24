import type { Metadata } from "next";

import {
  ProjectsHero,
  ProjectsStats,
  ProjectsGrid,
  ProjectsCTA,
} from "@/components/projects";

import JsonLd from "@/components/seo/JsonLd";

import {
  getBreadcrumbJsonLd,
  getProjectsJsonLd,
} from "@/lib/seo/jsonLd";

export const metadata: Metadata = {
  title: "Business Plan Portfolio & Case Studies",

  description:
    "Explore investor pitch decks, business plans, financial models, market research, and strategic consulting projects delivered for startups and growing businesses.",

  alternates: {
    canonical: "/projects",
  },

  openGraph: {
    title: "Business Plan Portfolio & Case Studies",
    description:
      "Browse selected consulting projects including business plans, investor presentations, market research, and financial models.",
    url: "/projects",
    type: "website",
    siteName: "LaunchPoint Consulting",
    images: [
      {
        url: "/images/og/projects.jpg",
        width: 1200,
        height: 630,
        alt: "LaunchPoint Consulting portfolio and case studies",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Business Plan Portfolio & Case Studies",
    description:
      "Browse selected consulting projects including business plans, investor presentations, market research, and financial models.",
    images: ["/images/og/projects.jpg"],
  },
};

export default function ProjectsPage() {
  const projectsJsonLd = getProjectsJsonLd();

  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Projects",
      path: "/projects",
    },
  ]);

  return (
    <>
      <JsonLd data={projectsJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <main>
        <ProjectsHero />
        <ProjectsStats />
        <ProjectsGrid />
        <ProjectsCTA />
      </main>
    </>
  );
}