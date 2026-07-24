export const siteConfig = {
  // ==========================================
  // Company Information
  // ==========================================
  name: "LaunchPoint Consulting",

  shortName: "LaunchPoint",

  organization: "LaunchPoint Consulting",

  creator: "LaunchPoint Consulting",

  founded: "2026",

  industry: "Business Consulting",

  language: "en",

  defaultLocale: "en",

  locale: "en_US",

  country: "Worldwide",

  // ==========================================
  // Domain
  // ==========================================
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://launchpointconsulting.com",

  // ==========================================
  // Contact
  // ==========================================
  email: "hello@launchpointconsulting.com",

  twitterHandle: "",

  // ==========================================
  // SEO
  // ==========================================
  title: "Business Plans, Pitch Decks & Strategic Consulting",

  description:
    "LaunchPoint Consulting creates investor-ready business plans, pitch decks, financial models, market research, and strategic consulting solutions that help entrepreneurs secure funding and grow with confidence.",

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
    "LaunchPoint Consulting",
  ],

  // ==========================================
  // Social Sharing
  // ==========================================
  socialImage: "/images/og/opengraph-image.png",

  socialImageWidth: 1200,

  socialImageHeight: 630,

  logo: "/logos/logo.webp",

  favicon: "/favicon.ico",

  // ==========================================
  // Theme
  // ==========================================
  themeColor: "#0F172A",

  accentColor: "#C9A227",
} as const;