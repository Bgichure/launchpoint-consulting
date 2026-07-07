import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import { company } from "@/data/company";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] text-white">

      {/* Top Banner */}

      <div className="border-b border-white/10">
        <Container className="py-6">
          <p className="text-center text-sm font-semibold tracking-wide text-[#C9A227]">
            Building Businesses. Creating Opportunities. Inspiring Growth.
          </p>
        </Container>
      </div>

      {/* Main Footer */}

      <Container className="py-14">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}

          <div>

            <Image
              src="/logos/logo.png"
              alt={company.name}
              width={90}
              height={90}
              className="rounded-lg bg-white p-2"
            />

            <h3 className="mt-5 text-2xl font-bold">
              {company.name}
            </h3>

            <p className="mt-4 max-w-xs leading-7 text-slate-300">
              Helping entrepreneurs build
              investment-ready businesses.
            </p>

          </div>

          {/* Navigation */}

          <div>

            <h4 className="mb-5 text-base font-semibold text-[#C9A227]">
              Navigation
            </h4>

            <ul className="space-y-3 text-slate-300">

              <li>
                <Link href="/" className="transition hover:text-[#C9A227]">
                  Home
                </Link>
              </li>

              <li>
                <Link href="#services" className="transition hover:text-[#C9A227]">
                  Services
                </Link>
              </li>

              <li>
                <Link href="#portfolio" className="transition hover:text-[#C9A227]">
                  Projects
                </Link>
              </li>

              <li>
                <Link href="/about" className="transition hover:text-[#C9A227]">
                  About
                </Link>
              </li>

              <li>
                <Link href="/contact" className="transition hover:text-[#C9A227]">
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h4 className="mb-5 text-base font-semibold text-[#C9A227]">
              Services
            </h4>

            <ul className="space-y-3 text-slate-300">

              <li>Business Plans</li>

              <li>Pitch Decks</li>

              <li>Financial Models</li>

              <li>Market Research</li>

              <li>Presentation Design</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h4 className="mb-5 text-base font-semibold text-[#C9A227]">
              Contact
            </h4>

            <div className="space-y-5 text-slate-300">

              <div>

                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                  Email
                </p>

                <p className="mt-1">
                  hello@launchpointconsulting.com
                </p>

              </div>

              <div>

                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                  Worldwide
                </p>

                <p className="mt-1">
                  Remote Consulting
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm md:flex-row">

          <div>

            <p className="text-slate-400">
              © {year} {company.name}. All Rights Reserved.
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Crafted with precision for ambitious entrepreneurs.
            </p>

          </div>

          <Link
            href="#top"
            className="rounded-full border border-white/10 px-5 py-2 transition-all duration-300 hover:border-[#C9A227] hover:text-[#C9A227]"
          >
            ↑ Back to Top
          </Link>

        </div>

      </Container>

    </footer>
  );
}