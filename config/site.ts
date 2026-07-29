import { company } from "@/data/company";

export const siteConfig = {
  name: company.name,
  shortName: company.shortName,
  organization: company.organization,
  creator: company.creator,
  founded: company.founded,
  industry: company.industry,
  language: company.language,
  defaultLocale: company.language,
  locale: company.locale,
  country: company.country,

  url: company.url,
  email: company.email,
  twitterHandle: company.social.twitterHandle,

  title: company.seo.title,
  description: company.seoDescription,
  keywords: company.seo.keywords,

  socialImage: company.assets.socialImage,
  socialImageWidth: company.assets.socialImageWidth,
  socialImageHeight: company.assets.socialImageHeight,
  logo: company.assets.logo,
  favicon: company.assets.favicon,

  themeColor: company.theme.primary,
  accentColor: company.theme.accent,
} as const;
