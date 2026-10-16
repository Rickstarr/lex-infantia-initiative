
"use client";

import { useEffect, useState } from "react";

const images = [
  {
    src: "/images/hero1.jpg",
    alt: "Children and community members supporting children's rights",
  },
  {
    src: "/images/hero2.jpg",
    alt: "Children participating in a supportive community",
  },
  {
    src: "/images/hero3.jpg",
    alt: "Promoting children's welfare, safety, and protection",
  },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((previousIndex) => 
        (previousIndex + 1) % images.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto max-w-lg">
      {/* Decorative glow */}
      <div className="absolute -right-4 -top-4 h-28 w-28 rounded-full bg-[#F4C2C2]/60 blur-2xl" />

      {/* Image slider */}
      <div className="relative overflow-hidden rounded-[2rem] border-4 border-white bg-[#E8F5F2] shadow-2xl">
        <div className="relative aspect-[4/3] w-full sm:aspect-square">
          {images.map((image, index) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
                currentIndex === index
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-4 left-0 right-0 z-10 flex justify-center gap-2">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Show image ${index + 1}`}
              aria-current={currentIndex === index ? "true" : undefined}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "w-8 bg-[#0F766E]"
                  : "w-2.5 bg-white/80 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Floating message */}
      <div className="absolute -bottom-5 -left-3 rounded-2xl border border-[#E8DAD8] bg-white p-4 shadow-lg sm:-left-6 sm:p-5">
        <p className="text-sm font-bold text-[#0F766E]">
          Every Child Matters
        </p>
        <p className="mt-1 text-xs text-[#52615E]">
          Protecting rights. Creating hope.
        </p>
      </div>
    </div>
  );
}
