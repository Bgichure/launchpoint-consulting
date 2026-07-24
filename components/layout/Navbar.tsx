"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { navigation } from "@/data/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-slate-200/70 bg-white/90 shadow-[0_10px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl"
          : "border-b border-transparent bg-white/70 backdrop-blur-sm"
      }`}
    >
      <div
        className={`mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 transition-all duration-300 lg:px-8 ${
          isScrolled ? "h-16" : "h-20"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="LaunchPoint Consulting homepage"
          onClick={closeMobileMenu}
          className="relative z-50 flex shrink-0 items-center transition-transform duration-300 hover:scale-[1.02]"
        >
          <Image
            src="/logos/logo.webp"
            alt="LaunchPoint Consulting"
            width={130}
            height={54}
            priority
            className={`w-auto object-contain transition-all duration-300 ${
              isScrolled ? "h-11" : "h-13"
            }`}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-9 lg:flex"
        >
          {navigation.map((item) => {
            const isActive = isActiveLink(item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group relative py-2 text-[15px] font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-[#0F172A]"
                    : "text-slate-600 hover:text-[#0F172A]"
                }`}
              >
                {item.name}

                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#C9A227] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className={`hidden rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 lg:inline-flex ${
            isScrolled
              ? "bg-[#C9A227] text-[#0F172A] shadow-[0_10px_25px_rgba(201,162,39,0.25)] hover:bg-[#D8B63F] hover:shadow-[0_14px_30px_rgba(201,162,39,0.32)]"
              : "bg-[#0F172A] text-white shadow-[0_8px_20px_rgba(15,23,42,0.12)] hover:bg-[#1E293B] hover:shadow-[0_12px_30px_rgba(15,23,42,0.18)]"
          }`}
        >
          Get Free Consultation
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="relative z-50 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#0F172A] shadow-sm transition-all duration-300 hover:border-[#C9A227]/50 hover:text-[#C9A227] lg:hidden"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-slate-200 bg-white/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          isMenuOpen
            ? "max-h-[560px] border-t opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile navigation"
          className="mx-auto flex w-full max-w-7xl flex-col px-6 py-5"
        >
          {navigation.map((item) => {
            const isActive = isActiveLink(item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMobileMenu}
                className={`flex items-center justify-between border-b border-slate-100 py-4 text-base font-medium transition-colors ${
                  isActive
                    ? "text-[#C9A227]"
                    : "text-slate-700 hover:text-[#C9A227]"
                }`}
              >
                {item.name}

                {isActive && (
                  <span className="h-2 w-2 rounded-full bg-[#C9A227]" />
                )}
              </Link>
            );
          })}

          <Link
            href="/contact"
            onClick={closeMobileMenu}
            className="mt-5 inline-flex items-center justify-center rounded-xl bg-[#C9A227] px-6 py-3.5 text-sm font-semibold text-[#0F172A] shadow-[0_10px_25px_rgba(201,162,39,0.25)] transition-all duration-300 hover:bg-[#D8B63F]"
          >
            Get Free Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}