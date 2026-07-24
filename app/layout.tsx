import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/footer";

import { siteConfig } from "@/config/site";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  applicationName: siteConfig.name,

  manifest: "/manifest.webmanifest",

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/icons/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/icons/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],

    shortcut: "/favicon.ico",

    apple: [
      {
        url: "/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],

  creator: siteConfig.creator,

  publisher: siteConfig.name,

  keywords: [...siteConfig.keywords],

  category: siteConfig.industry,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,

    title: `${siteConfig.name} | ${siteConfig.title}`,

    description: siteConfig.description,

    images: [
      {
        url: siteConfig.socialImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.title}`,
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    creator: siteConfig.twitterHandle || undefined,

    title: `${siteConfig.name} | ${siteConfig.title}`,

    description: siteConfig.description,

    images: [siteConfig.socialImage],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F172A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.language}>
      <body className={`${inter.variable} ${playfair.variable}`}>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}