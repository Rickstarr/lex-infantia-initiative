"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      const timer = window.setTimeout(() => {
        setVisible(false);
      }, 500);

      return () => window.clearTimeout(timer);
    }
  }, [loading]);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#115E59] px-5 transition-opacity duration-500 ${
        loading ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      role="status"
      aria-label="Loading Lex Infantia Initiative"
      aria-live="polite"
    >
      <div className="flex flex-col items-center text-center">
        {/* Animated heart */}
        <div className="relative mb-6 flex h-24 w-24 items-center justify-center">
          <div className="absolute inset-0 animate-ping rounded-full bg-[#F4C2C2]/20" />

          <div className="relative flex h-20 w-20 animate-bounce items-center justify-center rounded-full border-4 border-[#F4C2C2] bg-white shadow-xl">
            <svg
              viewBox="0 0 24 24"
              fill="#D98F9B"
              className="h-10 w-10"
              aria-hidden="true"
            >
              <path d="M12 21.35 10.55 20C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09A6 6 0 0 1 16.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.51L12 21.35Z" />
            </svg>
          </div>
        </div>

        {/* Organisation name */}
        <h1 className="font-child text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Lex Infantia
        </h1>

        <p className="mt-1 text-lg font-bold text-[#F4C2C2]">
          Initiative
        </p>

        <p className="mt-5 max-w-xs text-sm leading-6 text-white/90 sm:text-base">
          Building a brighter future for every child...
        </p>

        {/* Loading indicator */}
        <div className="mt-7 h-1.5 w-48 overflow-hidden rounded-full bg-white/20">
          <div className="h-full w-full origin-left animate-[load_1.8s_ease-in-out_forwards] rounded-full bg-[#F4C2C2]" />
        </div>

        <p className="mt-3 text-xs font-medium tracking-widest text-white/70">
          EVERY CHILD MATTERS
        </p>
      </div>

      <style jsx>{`
        @keyframes load {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-bounce,
          .animate-ping {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}