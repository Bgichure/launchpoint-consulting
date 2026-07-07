import {
  Lightbulb,
  Search,
  FileText,
  Rocket,
} from "lucide-react";

export const process = [
  {
    number: "01",
    title: "Discovery",
    duration: "1–2 Days",

    icon: Lightbulb,

    description:
      "We learn about your business, objectives, funding goals and long-term vision before planning the project.",

    deliverables: [
      "Business Consultation",
      "Requirements Gathering",
      "Project Roadmap",
    ],
  },

  {
    number: "02",
    title: "Research",
    duration: "2–3 Days",

    icon: Search,

    description:
      "We perform detailed market research, competitor analysis and financial planning to build a solid strategic foundation.",

    deliverables: [
      "Market Research",
      "Competitor Analysis",
      "Industry Insights",
    ],
  },

  {
    number: "03",
    title: "Development",
    duration: "3–5 Days",

    icon: FileText,

    description:
      "Our team develops your business plan, financial projections and investor pitch deck with a focus on funding success.",

    deliverables: [
      "Business Plan",
      "Financial Model",
      "Investor Pitch Deck",
    ],
  },

  {
    number: "04",
    title: "Delivery",
    duration: "1 Day",

    icon: Rocket,

    description:
      "Receive polished documents, request revisions and get continued support after delivery.",

    deliverables: [
      "Final Documents",
      "Revisions",
      "After-Sales Support",
    ],
  },
];