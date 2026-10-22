
"use client";

import { useEffect, useState } from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const socialLinks = [
  {
    name: "WhatsApp",
    href: "https://wa.me/YOUR_PHONE_NUMBER",
    icon: FaWhatsapp,
    color: "bg-[#25D366]",
    delay: 0,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/YOUR_USERNAME/",
    icon: FaInstagram,
    color:
      "bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#FCAF45]",
    delay: 180,
  },
  {
    name: "Email",
    href: "mailto:YOUR_EMAIL@example.com",
    icon: FaEnvelope,
    color: "bg-[#F4C2C2]",
    delay: 360,
  },
];

export default function SocialMedia() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), 200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div
      className="mt-6 flex items-center gap-4"
      aria-label="Connect with Lex Infantia Initiative"
    >
      {socialLinks.map((social) => {
        const Icon = social.icon;

        return (
          <a
            key={social.name}
            href={social.href}
            target={social.name === "Email" ? undefined : "_blank"}
            rel={
              social.name === "Email"
                ? undefined
                : "noopener noreferrer"
            }
            aria-label={social.name}
            title={social.name}
            className={`social-icon flex h-12 w-12 items-center justify-center
              rounded-full text-xl shadow-md
              transition-all duration-300 ease-out
              hover:scale-110 hover:shadow-lg
              focus-visible:outline-none focus-visible:ring-4
              focus-visible:ring-[#F4C2C2]
              ${
                visible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-8 opacity-0"
              }
              ${social.color}`}
            style={{
              transitionDelay: visible ? `${social.delay}ms` : "0ms",
              animationDelay: `${social.delay + 250}ms`,
              color: social.name === "Email" ? "#115E59" : "#FFFFFF",
            }}
          >
            <span className={visible ? "social-bob" : ""}>
              <Icon aria-hidden="true" />
            </span>
          </a>
        );
      })}
    </div>
  );
}
