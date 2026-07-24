import { z } from "zod";

export const serviceOptions = [
  "Business Plan",
  "Pitch Deck",
  "Financial Model",
  "Market Research",
  "Grant & Loan Plan",
  "Presentation Design",
  "Multiple Services",
] as const;

export const budgetOptions = [
  "Under ksh 1,000",
  "ksh 1000 – ksh 3,000",
  "ksh 3,000 – ksh 5,000",
  "ksh 5,000+",
  "Let's Discuss",
] as const;

export const timelineOptions = [
  "As soon as possible",
  "Within 1 weeks",
  "Within 2 weeks",
  "Within 1 month",
  "Flexible",
] as const;

export const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name.").max(100),
  email: z.string().trim().email("Please enter a valid email address.").max(254),
  company: z.string().trim().max(120).optional().default(""),
  phone: z.string().trim().max(40).optional().default(""),
  service: z.enum(serviceOptions),
  timeline: z.enum(timelineOptions),
  budget: z.enum(budgetOptions),
  message: z
    .string()
    .trim()
    .min(20, "Please provide at least 20 characters about your project.")
    .max(5000, "Please keep your message under 5,000 characters."),
  website: z.string().max(0).optional().default(""),
  turnstileToken: z.string().optional().default(""),
});

export type ContactPayload = z.infer<typeof contactSchema>;
