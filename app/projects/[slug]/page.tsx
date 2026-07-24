import type { Metadata } from "next";
import { notFound } from "next/navigation";

import JsonLd from "@/components/seo/JsonLd";

import {
  CaseHero,
  CaseOverview,
  CaseChallenge,
  CaseSolution,
  CaseDeliverables,
  CaseOutcome,
  CaseGallery,
  CaseCTA,
} from "@/components/projects/case-study";

import { projects } from "@/data/projects";

import {
  getBreadcrumbJsonLd,
  getCaseStudyJsonLd,
} from "@/lib/seo/jsonLd";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

function getProjectDescription(project: (typeof projects)[number]) {
  return (
    project.description ||
    `Explore the ${project.title} case study by LaunchPoint Consulting, including its strategy, deliverables, and business outcomes.`
  );
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description:
        "The requested LaunchPoint Consulting project was not found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `${project.title} Case Study`;
  const description = getProjectDescription(project);
  const projectUrl = `/projects/${project.slug}`;

  return {
    title,
    description,

    alternates: {
      canonical: projectUrl,
    },

    openGraph: {
      type: "article",
      title,
      description,
      url: projectUrl,
      siteName: "LaunchPoint Consulting",
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: `${project.title} case study by LaunchPoint Consulting`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const description = getProjectDescription(project);

  const caseStudyJsonLd = getCaseStudyJsonLd({
    title: project.title,
    description,
    slug: project.slug,
    image: project.image,
    category: project.service,
  });

  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: project.title,
      path: `/projects/${project.slug}`,
    },
  ]);

  return (
    <>
      <JsonLd data={caseStudyJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <main>
        <CaseHero project={project} />
        <CaseOverview project={project} />
        <CaseChallenge project={project} />
        <CaseSolution project={project} />
        <CaseDeliverables project={project} />
        <CaseOutcome project={project} />
        <CaseGallery project={project} />
        <CaseCTA project={project} />
      </main>
    </>
  );
}