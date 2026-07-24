export const siteConfig = {
  name: "LaunchPoint Consulting",
  shortName: "LaunchPoint",
  url: "https://launchpointconsulting.com",

  description:
    "LaunchPoint Consulting helps entrepreneurs, startups, and growing businesses create investor-ready business plans, pitch decks, financial models, market research, and strategic presentations.",

  email: "hello@launchpointconsulting.com",

  // Replace this path if your final logo is stored elsewhere.
  logo: "/logos/logo.webp",

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