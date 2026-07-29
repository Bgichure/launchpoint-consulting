const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://ravinear.com";

export const company = {
  name: "Ravinear",
  shortName: "Ravinear",
  legalName: "Ravinear",
  organization: "Ravinear",
  creator: "Ravinear",

  founded: "2026",
  industry: "Business Consulting",
  country: "Worldwide",
  language: "en",
  locale: "en_US",

  url: siteUrl,
  domain: "ravinear.com",
  email: "hello@ravinear.com",

  tagline: "Turning Ideas Into Investment-Ready Businesses",
  headline:
    "Business Plans Built to Secure Funding, Inspire Investors & Drive Growth",
  description:
    "Ravinear helps entrepreneurs, startups, and growing businesses transform ideas into investment-ready ventures through professionally crafted business plans, investor pitch decks, financial projections, and market research.",
  seoDescription:
    "Ravinear creates investor-ready business plans, pitch decks, financial models, market research, and strategic consulting solutions that help entrepreneurs secure funding and grow with confidence.",
  trust: "Trusted by startups, entrepreneurs and growing businesses.",

  assets: {
    logo: "/logos/ravinear-logo.webp",
    logoPng: "/logos/ravinear-logo.png",
    favicon: "/favicon.ico",
    socialImage: "/images/og/opengraph-image.png",
    socialImageWidth: 1200,
    socialImageHeight: 630,
  },

  theme: {
    primary: "#0F172A",
    accent: "#C9A227",
  },

  social: {
    linkedin: "",
    twitter: "",
    twitterHandle: "",
  },

  seo: {
    title: "Business Plans, Pitch Decks & Strategic Consulting",
    keywords: [
      "business plan",
      "business plan writer",
      "business plan consultant",
      "business consultant",
      "business planning services",
      "startup business plan",
      "investor pitch deck",
      "investor presentation",
      "pitch deck",
      "financial model",
      "financial projections",
      "market research",
      "feasibility study",
      "grant writing",
      "grant proposal",
      "loan business plan",
      "loan proposal",
      "bank-ready business plan",
      "business proposal",
      "startup consulting",
      "business strategy",
      "business growth strategy",
      "fundraising",
      "presentation design",
      "strategic consulting",
      "Ravinear",
    ],
  },

  services: [
    {
      name: "Business Plan Writing",
      description:
        "Research-driven and investor-ready business plans for startups, growing businesses, lenders, and investors.",
      url: "/services#business-plans",
    },
    {
      name: "Investor Pitch Deck Design",
      description:
        "Clear and professionally designed investor presentations that communicate business opportunities and funding needs.",
      url: "/services#pitch-decks",
    },
    {
      name: "Financial Modeling",
      description:
        "Financial forecasts, startup budgets, cash-flow projections, and investment-ready financial models.",
      url: "/services#financial-models",
    },
    {
      name: "Market Research",
      description:
        "Industry research, competitor analysis, customer insights, and market opportunity assessment.",
      url: "/services#market-research",
    },
    {
      name: "Grant and Loan Plans",
      description:
        "Funding-focused business documentation for grants, loans, lenders, and financing applications.",
      url: "/services#grant-loan-plans",
    },
    {
      name: "Presentation Design",
      description:
        "Professional business and strategic presentations designed for clarity, credibility, and impact.",
      url: "/services#presentation-design",
    },
  ],
} as const;

export type Company = typeof company;
