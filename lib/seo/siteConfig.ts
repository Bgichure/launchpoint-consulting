import { company } from "@/data/company";

export const siteConfig = {
  name: company.name,
  shortName: company.shortName,
  url: company.url,
  description: company.description,
  email: company.email,
  logo: company.assets.logo,
  services: company.services,
} as const;
