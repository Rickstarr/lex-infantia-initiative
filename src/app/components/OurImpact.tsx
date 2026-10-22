import Reveal from "./Reveal";

const focusAreas = [
  { number: "01", label: "Children's Rights", delay: 0 },
  { number: "02", label: "Child Protection", delay: 100 },
  { number: "03", label: "Community Advocacy", delay: 200 },
  { number: "04", label: "Access to Justice", delay: 300 },
];

export default function Impact() {
  return (
    <section
      id="our-impact"
      className="relative overflow-hidden bg-[#115E59] px-5 py-16 text-white sm:py-20 lg:py-24"
    >
      {/* Decorative background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#F4C2C2]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-[#E8F5F2]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#F4C2C2] sm:text-sm">
            <span aria-hidden="true">✦</span>
            Our Areas of Focus
          </span>

          <h2 className="mt-5 font-child text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            Building a Safer Future for Every Child
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
            We are committed to advancing children's rights, strengthening
            child protection, and encouraging communities to help create
            safer, more supportive environments for every child.
          </p>
        </Reveal>

        {/* Focus areas, not numerical impact claims */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-6">
          {focusAreas.map((item) => (
            <Reveal key={item.number} delay={item.delay}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#F4C2C2]/60 hover:bg-white/10 hover:shadow-[0_12px_35px_rgba(244,194,194,0.12)] sm:p-7">
                {/* Decorative sparkle */}
                <svg
                  aria-hidden="true"
                  className="absolute right-4 top-4 h-5 w-5 text-[#F4C2C2]/60 transition-all duration-500 group-hover:rotate-45 group-hover:scale-125 group-hover:text-[#F4C2C2]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0L14.5 9.5 24 12 14.5 14.5 12 24 9.5 14.5 0 12 9.5 9.5Z" />
                </svg>

                {/* Number and subtle sparkle */}
                <div className="relative mx-auto inline-flex items-center justify-center">
                  <span className="font-child text-5xl font-extrabold tracking-tight text-[#F4C2C2] transition-all duration-300 group-hover:scale-110 sm:text-6xl">
                    {item.number}
                  </span>

                  <span
                    aria-hidden="true"
                    className="absolute -right-3 -top-1 text-sm text-[#E8F5F2] transition-transform duration-500 group-hover:rotate-45"
                  >
                    ✦
                  </span>
                </div>

                <h3 className="mx-auto mt-5 max-w-[15rem] font-child text-lg font-bold leading-snug text-white sm:text-xl">
                  {item.label}
                </h3>

                <div className="mx-auto mt-5 h-1 w-10 rounded-full bg-[#F4C2C2] transition-all duration-300 group-hover:w-16" />
              </article>
            </Reveal>
          ))}
        </div>

        {/* Invitation */}
        <Reveal delay={150}>
          <div className="mt-12 rounded-3xl border border-white/15 bg-white/[0.06] px-6 py-8 text-center sm:mt-14 sm:px-10 sm:py-10">
            <h3 className="font-child text-xl font-extrabold text-white sm:text-2xl">
              Every Child's Rights Matter
            </h3>
            <h3 className="font-child text-xl font-extrabold text-[#F4C2C2] sm:text-2xl">
              Child Rights Are Human Rights
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
              Join the conversation, help raise awareness, and connect with
              us to explore ways to support child rights and protection.
            </p>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#F4C2C2] px-6 py-3 font-bold text-[#115E59] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFF1F0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#115E59]"
            >
              Connect With Us
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}