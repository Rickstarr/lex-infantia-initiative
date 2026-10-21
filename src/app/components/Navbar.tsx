"use client";

import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Work", href: "#our-work" },
  { label: "Our Impact", href: "#our-impact" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E8DAD8] bg-[#FFF8F7]/95 shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          aria-label="Lex Infantia Initiative - Home"
          className="shrink-0"
        >
          <Image
            src="/images/lex-infantia-logo.png"
            alt="Lex Infantia Initiative"
            width={440}
            height={150}
            priority
            className="h-auto w-[150px] object-contain sm:w-[190px] lg:w-[210px]"
          />
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-[#E8DAD8] p-2 text-[#0F766E] transition hover:bg-[#F4C2C2]/30 md:hidden"
        >
          <span className="text-2xl leading-none">
            {menuOpen ? "×" : "☰"}
          </span>
        </button>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-5 lg:gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-[#263B39] transition-colors duration-300 hover:text-[#0F766E]"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-full bg-[#0F766E] px-5 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#115E59]"
          >
            Get Involved
          </a>
        </div>
      </nav>

      {/* Mobile navigation */}
      <div
        className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-in-out md:hidden ${
          menuOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col items-end gap-1 px-5 pb-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="w-full rounded-lg px-4 py-3 text-right font-medium text-[#263B39] transition hover:bg-[#F4C2C2]/40 hover:text-[#0F766E]"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 w-full rounded-lg bg-[#0F766E] px-4 py-3 text-center font-bold text-white transition hover:bg-[#115E59]"
            >
              Get Involved
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}