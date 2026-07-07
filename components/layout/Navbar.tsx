"use client";

import Image from "next/image";
import Link from "next/link";
import { navigation } from "@/data/navigation";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center transition-transform duration-300 hover:scale-[1.02]"
        >
          <Image
            src="/logos/logo.png"
            alt="LaunchPoint Consulting"
            width={95}
            height={40
            }
            priority
            className="h-auto w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-12 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-[15px] font-medium text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:text-[#C9A227]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="#contact"
          className="rounded-xl bg-[#0F172A] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#1E293B] hover:shadow-[0_12px_30px_rgba(15,23,42,0.18)]"
        >
          Get Free Consultation
        </Link>

      </div>
    </header>
  );
}