import { siteConfig } from "@/lib/seo/siteConfig";

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function getHomeJsonLd() {
  const organizationId = `${siteConfig.url}/#organization`;
  const websiteId = `${siteConfig.url}/#website`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: siteConfig.name,
        alternateName: siteConfig.shortName,
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl(siteConfig.logo),
          contentUrl: absoluteUrl(siteConfig.logo),
        },
        description: siteConfig.description,
        email: siteConfig.email,
        contactPoint: {
          "@type": "ContactPoint",
          email: siteConfig.email,
          contactType: "customer service",
          availableLanguage: ["English"],
        },
        areaServed: "Worldwide",
        knowsAbout: [
          "Business Planning",
          "Investor Pitch Decks",
          "Financial Modeling",
          "Market Research",
          "Grant Writing",
          "Loan Applications",
          "Presentation Design",
        ],
        makesOffer: siteConfig.services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.name,
            description: service.description,
            url: absoluteUrl(service.url),
            provider: {
              "@id": organizationId,
            },
            areaServed: "Worldwide",
          },
        })),
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: {
          "@id": organizationId,
        },
        inLanguage: "en",
      },
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/#webpage`,
        url: siteConfig.url,
        name: "Ravinear",
        description: siteConfig.description,
        isPartOf: {
          "@id": websiteId,
        },
        about: {
          "@id": organizationId,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl(siteConfig.logo),
        },
        inLanguage: "en",
      },
    ],
  };
}

type BreadcrumbItem = {
  name: string;
  path: string;
};

export function getBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function getProjectsJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${absoluteUrl("/projects")}#webpage`,
    url: absoluteUrl("/projects"),
    name: "Ravinear Projects",
    description:
      "A portfolio of business plans, investor pitch decks, financial models, market research, and strategic consulting projects completed by Ravinear.",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
    },
    about: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: "en",
  };
}

type CaseStudyJsonLdInput = {
  title: string;
  description: string;
  slug: string;
  image: string;
  category?: string;
  dateCreated?: string;
  dateModified?: string;
};

export function getCaseStudyJsonLd({
  title,
  description,
  slug,
  image,
  category,
  dateCreated,
  dateModified,
}: CaseStudyJsonLdInput) {
  const pageUrl = absoluteUrl(`/projects/${slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${pageUrl}#creative-work`,
    name: title,
    headline: title,
    description,
    url: pageUrl,
    image: absoluteUrl(image),
    genre: category ?? "Business Consulting Case Study",
    creator: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(siteConfig.logo),
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    inLanguage: "en",
    ...(dateCreated ? { dateCreated } : {}),
    ...(dateModified ? { dateModified } : {}),
  };
}

export function getAboutPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${absoluteUrl("/about")}#webpage`,
    url: absoluteUrl("/about"),
    name: `About ${siteConfig.name}`,
    description:
      "Learn about Ravinear, our approach, values, and commitment to helping businesses communicate clearly and pursue growth and funding opportunities.",
    about: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
    },
    isPartOf: {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
    },
    inLanguage: "en",
  };
}

export function getContactPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${absoluteUrl("/contact")}#webpage`,
    url: absoluteUrl("/contact"),
    name: `Contact ${siteConfig.name}`,
    description:
      "Contact Ravinear to discuss your business plan, pitch deck, financial model, market research, or presentation project.",
    mainEntity: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      email: siteConfig.email,
    },
    isPartOf: {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
    },
    inLanguage: "en",
  };
}