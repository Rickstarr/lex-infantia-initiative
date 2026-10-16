
"use client";

import { useEffect, useState } from "react";
import HeroSlider from "./HeroSlider";
import Reveal from "./Reveal";

const firstLine = "Justice Should Not End";
const secondLine = "Behind Bars.";

export default function Hero() {
  const [firstText, setFirstText] = useState("");
  const [secondText, setSecondText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [playful, setPlayful] = useState(false);

  useEffect(() => {
    let firstIndex = 0;
    let secondIndex = 0;
    let deleting = false;
    let pause = 0;

    const interval = setInterval(() => {
      if (!deleting) {
        setIsTyping(true);

        if (firstIndex < firstLine.length) {
          firstIndex++;
          setFirstText(firstLine.slice(0, firstIndex));
        } else if (secondIndex < secondLine.length) {
          secondIndex++;
          setSecondText(secondLine.slice(0, secondIndex));
        } else {
          pause++;

          if (pause >= 25) {
            deleting = true;
            pause = 0;
            setPlayful(true);
          }
        }
      } else {
        if (secondIndex > 0) {
          secondIndex--;
          setSecondText(secondLine.slice(0, secondIndex));
        } else if (firstIndex > 0) {
          firstIndex--;
          setFirstText(firstLine.slice(0, firstIndex));
        } else {
          deleting = false;
          setIsTyping(false);
          setPlayful(false);
        }
      }
    }, 85);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="overflow-hidden bg-[#115E59] px-5 py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <Reveal direction="left" className="order-2 lg:order-1">
          <span className="inline-block rounded-full border border-[#F4C2C2] bg-[#FFF1F0] px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#0F766E] sm:text-sm">
            Children's Rights & Protection
          </span>

          <h1
            className={`mt-6 font-child text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl ${
              playful ? "hero-playful" : ""
            }`}
          >
            {firstText}
            {firstText.length < firstLine.length && (
              <span className="hero-cursor">|</span>
            )}

            <span className="mt-2 block text-[#D98F9B]">
              {secondText}
              {firstText.length === firstLine.length &&
                secondText.length < secondLine.length && (
                  <span className="hero-cursor">|</span>
                )}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-white sm:text-lg sm:leading-8">
            Lex Infantia Initiative promotes children's rights,
            child protection and access to justice, helping
            children and vulnerable young people access the
            support and opportunities they deserve.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#our-work"
              className="rounded-xl bg-[#0F766E] px-6 py-3.5 text-center font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#115E59] hover:shadow-lg"
            >
              Explore Our Work
            </a>

            <a
              href="#contact"
              className="rounded-xl border-2 border-[#0F766E] bg-white px-6 py-3.5 text-center font-bold text-[#0F766E] transition duration-300 hover:-translate-y-1 hover:bg-[#FFF1F0]"
            >
              Get Involved
            </a>
          </div>
        </Reveal>

        <Reveal
          direction="right"
          delay={150}
          className="order-1 lg:order-2"
        >
          <HeroSlider />
        </Reveal>
      </div>

      <style jsx>{`
        .hero-cursor {
          display: inline-block;
          margin-left: 3px;
          color: #f4c2c2;
          animation: blink 0.7s steps(2, start) infinite;
        }

        .hero-playful {
          animation: playfulTilt 0.65s ease-in-out;
        }

        @keyframes blink {
          to {
            visibility: hidden;
          }
        }

        @keyframes playfulTilt {
          0% {
            transform: rotate(0deg) scale(1);
          }
          25% {
            transform: rotate(-2deg) scale(1.02);
          }
          50% {
            transform: rotate(2deg) scale(1.02);
          }
          75% {
            transform: rotate(-1deg) scale(1.01);
          }
          100% {
            transform: rotate(0deg) scale(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-cursor {
            animation: none;
          }

          .hero-playful {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
