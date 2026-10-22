
import Image from "next/image";
import CurrentYear from "./CurrentYear";
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#163F3B] px-5 pb-6 pt-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Organization branding */}
        <div>
          <a
            href="#home"
            aria-label="Lex Infantia Initiative - Home"
            className="inline-block rounded-lg"
          >
            <Image
              src="/images/lex-infantia-logo.png"
              alt="Lex Infantia Initiative"
              width={520}
              height={180}
              className="h-auto w-[200px] object-contain sm:w-[230px]"
            />
          </a>

          <p className="mt-4 max-w-xs text-sm leading-7 text-white/75">
            Promoting children's rights, protection and
            opportunities for a safer, more equitable future.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-bold text-[#F4C2C2]">
            Quick Links
          </h3>

          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li>
              <a className="transition hover:text-[#F4C2C2]" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="transition hover:text-[#F4C2C2]" href="#about">
                About Us
              </a>
            </li>
            <li>
              <a className="transition hover:text-[#F4C2C2]" href="#our-work">
                Our Work
              </a>
            </li>
            <li>
              <a className="transition hover:text-[#F4C2C2]" href="#our-impact">
                Our Impact
              </a>
            </li>
          </ul>
        </div>

        {/* Priorities */}
        <div>
          <h3 className="font-bold text-[#F4C2C2]">
            Our Priorities
          </h3>

          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li>Children's Rights</li>
            <li>Child Protection</li>
            <li>Access to Justice</li>
            <li>Community Awareness</li>
          </ul>
        </div>

        {/* Contact and Social Media */}
        <div>
          <h3 className="font-bold text-[#F4C2C2]">
            Contact
          </h3>

          <p className="mt-4 text-sm leading-7 text-white/75">
            Add your official email, telephone number
            and location here.
          </p>

          <a
            href="#contact"
            className="mt-4 inline-flex rounded-lg bg-[#F4C2C2] px-4 py-2.5 text-sm font-bold text-[#163F3B] transition hover:bg-[#FFF1F0]"
          >
            Get In Touch
          </a>

          {/* Social icons */}
          <div className="mt-5 flex items-center gap-3">
            <a
              href="https://wa.me/08102995326"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              title="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-lg text-white transition duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-lg"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://www.instagram.com/YOUR_USERNAME/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#FCAF45] text-lg text-white transition duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-lg"
            >
              <FaInstagram />
            </a>

            <a
              href="mailto:YOUR_EMAIL@example.com"
              aria-label="Email"
              title="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F4C2C2] text-lg text-[#163F3B] transition duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-lg"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/15 pt-6 text-center text-xs text-white/60 sm:text-sm">
        © <CurrentYear /> Lex Infantia Initiative. All rights reserved.
      </div>
    </footer>
  );
}
