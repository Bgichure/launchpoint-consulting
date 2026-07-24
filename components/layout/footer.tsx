import Image from "next/image";
import Link from "next/link";
import { Clock3, Mail, MapPin } from "lucide-react";

import Container from "@/components/ui/Container";
import { company } from "@/data/company";

const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const serviceLinks = [
  { name: "Business Plans", href: "/services#business-plans" },
  { name: "Pitch Decks", href: "/services#pitch-decks" },
  { name: "Financial Models", href: "/services#financial-models" },
  { name: "Market Research", href: "/services#market-research" },
  {
    name: "Presentation Design",
    href: "/services#presentation-design",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#0F172A] text-white">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,162,39,0.07),transparent_38%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#C9A227]/5 blur-3xl"
      />

      <Container className="relative py-10 md:py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.75fr_1fr_1.1fr] lg:gap-9">
          {/* Brand */}
          <div className="self-center">
            <Link
              href="/"
              aria-label={`${company.name} homepage`}
              className="inline-flex rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0F172A]"
            >
              <Image
                src="/logos/logo.webp"
                alt={company.name}
                width={110}
                height={48}
                className="h-auto w-auto rounded-xl bg-white p-2 shadow-lg shadow-black/10"
              />
            </Link>

            <h2 className="mt-4 text-2xl font-bold tracking-[-0.03em]">
              {company.name}
            </h2>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#C9A227]">
              Navigation
            </h3>

            <ul className="mt-5 space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="inline-flex text-slate-300 transition-all duration-300 hover:translate-x-1 hover:text-white focus-visible:outline-none focus-visible:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#C9A227]">
              Expertise
            </h3>

            <ul className="mt-5 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="inline-flex text-slate-300 transition-all duration-300 hover:translate-x-1 hover:text-white focus-visible:outline-none focus-visible:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#C9A227]">
              Contact
            </h3>

            <div className="mt-5 space-y-4">
              <a
                href={`mailto:${company.email}`}
                className="group flex items-start gap-3 text-slate-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:text-white"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[#C9A227] transition-colors duration-300 group-hover:bg-white/10">
                  <Mail size={16} />
                </span>

                <span className="min-w-0 break-words pt-1.5 leading-5">
                  {company.email}
                </span>
              </a>

              <div className="flex items-start gap-3 text-slate-300">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[#C9A227]">
                  <MapPin size={16} />
                </span>

                <div>
                  <p className="font-semibold text-white">Worldwide</p>
                  <p className="mt-0.5 text-sm text-slate-400">
                    Remote consulting
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-slate-300">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[#C9A227]">
                  <Clock3 size={16} />
                </span>

                <div>
                  <p className="font-semibold text-white">Response Time</p>
                  <p className="mt-0.5 text-sm text-slate-400">
                    Usually within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-5 text-sm md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-slate-400">
              © {year} {company.name}. All rights reserved.
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Crafted with precision for ambitious entrepreneurs.
            </p>
          </div>

          <Link
            href="#top"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C9A227]/60 hover:text-[#C9A227] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0F172A]"
          >
            Back to Top
            <span aria-hidden="true">↑</span>
          </Link>
        </div>
      </Container>
    </footer>
  );
}