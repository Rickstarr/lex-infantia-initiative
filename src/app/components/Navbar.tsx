
"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Work", href: "#our-work" },
  { label: "Programmes", href: "#programmes" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState("");

  const fullText = "Lex Infantia Initiative";

  useEffect(() => {
    let index = 0;
    let typingTimer: ReturnType<typeof setTimeout>;
    let restartTimer: ReturnType<typeof setTimeout>;

    const typeText = () => {
      index = 0;
      setTypedText("");

      const typeNextCharacter = () => {
        index++;

        setTypedText(fullText.slice(0, index));

        if (index < fullText.length) {
          typingTimer = setTimeout(typeNextCharacter, 115);
        } else {
          restartTimer = setTimeout(typeText, 30000);
        }
      };

      typingTimer = setTimeout(typeNextCharacter, 150);
    };

    typeText();

    return () => {
      clearTimeout(typingTimer);
      clearTimeout(restartTimer);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E8DAD8] bg-[#FFF8F7]/95 shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        {/* Animated Logo - Original Font Preserved */}
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          aria-label="Lex Infantia Initiative"
          className="text-xl font-extrabold tracking-tight text-[#0F766E] sm:text-2xl"
        >
          <span>{typedText.slice(0, 12)}</span>

          {typedText.length > 12 && (
            <span className="ml-1 text-[#D98F9B]">
              {typedText.slice(13)}
            </span>
          )}

          <span
            aria-hidden="true"
            className="typing-cursor ml-0.5 inline-block text-[#D98F9B]"
          >
            
          </span>
        </a>

        {/* Mobile Menu Button */}
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

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
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

      {/* Mobile Navigation Menu */}
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

      {/* Typing Cursor Animation */}
      <style jsx>{`
        .typing-cursor {
          animation: cursor-blink 750ms step-end infinite;
        }

        @keyframes cursor-blink {
          0%,
          100% {
            opacity: 1;
          }

          50% {
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .typing-cursor {
            animation: none;
          }
        }
      `}</style>
    </header>
  );
}
