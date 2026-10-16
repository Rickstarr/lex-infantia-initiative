
import Reveal from "./Reveal";

const statistics = [
  { value: "01", label: "Children's Rights" },
  { value: "02", label: "Child Protection" },
  { value: "03", label: "Community Advocacy" },
  { value: "04", label: "Access to Justice" },
];

export default function Impact() {
  return (
    <section className="relative overflow-hidden bg-[#115E59] px-5 py-14 text-white sm:py-16 lg:py-20">
      {/* Soft decorative background glows */}
      <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#F4C2C2]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-[#99F6E4]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F4C2C2]">
            Our Commitment
          </p>

          <h2 className="mt-4 text-3xl font-child font-extrabold sm:text-4xl">
            Working Towards a Better Future
          </h2>

          <p className="mt-4 leading-7 text-white/80">
            Our work focuses on building awareness, protecting
            children and promoting access to justice.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {statistics.map((item, index) => (
            <Reveal key={item.value} delay={index * 100}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/15 bg-white/[0.05] p-5 text-center transition-all duration-500 hover:-translate-y-2 hover:border-[#F4C2C2]/50 hover:bg-white/10 hover:shadow-[0_12px_35px_rgba(244,194,194,0.12)] sm:p-7">

                {/* Decorative sparkle in the top-right corner */}
                <svg
                  aria-hidden="true"
                  className="absolute right-4 top-4 h-5 w-5 text-[#99F6E4] opacity-50 transition-all duration-500 group-hover:scale-150 group-hover:rotate-45 group-hover:opacity-100"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0L14.5 9.5 24 12 14.5 14.5 12 24 9.5 14.5 0 12 9.5 9.5Z" />
                </svg>

                {/* Glowing number with gradient */}
                <div className="relative mx-auto inline-block">
                  <p
                    className="impact-number animate-impact-glow bg-gradient-to-r from-[#F4C2C2] via-[#FFF1F2] to-[#99F6E4] bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl"
                    style={{ animationDelay: `${index * 250}ms` }}
                  >
                    {item.value}
                  </p>

                  {/* Small sparkle beside the number */}
                  <svg
                    aria-hidden="true"
                    className="absolute -right-4 -top-1 h-3 w-3 animate-impact-sparkle text-[#F4C2C2]"
                    style={{ animationDelay: `${index * 300}ms` }}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0L15 9 24 12 15 15 12 24 9 15 0 12 9 9Z" />
                  </svg>

                  {/* Tiny teal glitter */}
                  <span
                    className="absolute -bottom-1 -left-3 h-1.5 w-1.5 animate-impact-sparkle rounded-full bg-[#99F6E4]"
                    style={{ animationDelay: `${index * 200 + 500}ms` }}
                  />
                </div>

                <p className="mt-4 text-sm font-medium leading-6 text-white/90 transition-colors duration-300 group-hover:text-white sm:text-base">
                  {item.label}
                </p>

                {/* Subtle animated underline */}
                <div className="mx-auto mt-4 h-0.5 w-8 rounded-full bg-gradient-to-r from-[#F4C2C2] to-[#99F6E4] transition-all duration-500 group-hover:w-16" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
