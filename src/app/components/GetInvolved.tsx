import Reveal from "./Reveal";

export default function GetInvolved() {
  return (
    <section
      id="get-involved"
      className="relative isolate overflow-hidden bg-[#FFF8F7] px-5 py-16 sm:py-20 lg:py-24"
    >
      {/* Decorative background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 top-10 h-40 w-40 rounded-full bg-[#F4C2C2]/30 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 bottom-0 h-48 w-48 rounded-full bg-[#E8F5F2] blur-3xl"
      />

      <Reveal direction="up">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#115E59] px-6 py-12 text-center shadow-xl sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          {/* Decorative shapes */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border-[18px] border-white/10 sm:h-56 sm:w-56"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-[#F4C2C2]/10 sm:h-52 sm:w-52"
          />

          <div className="relative z-10 mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#F4C2C2]/40 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#F4C2C2] sm:text-sm">
              <span aria-hidden="true">✦</span>
              Be Part of the Change
              <span aria-hidden="true">✦</span>
            </span>

            <h2 className="mt-6 font-child text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Every Child Deserves
              <span className="mt-2 block text-[#F4C2C2]">
                a Brighter Future.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/90 sm:text-base sm:leading-8 lg:text-lg">
              Protecting children's rights takes awareness,
              compassion, and collective action. Join us in
              supporting a society where every child is treated
              with dignity, protected from harm, and given the
              opportunity to thrive.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#F4C2C2] px-7 py-3.5 text-sm font-bold text-[#115E59] shadow-md transition duration-300 hover:-translate-y-1 hover:bg-[#FFF1F0] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#115E59] sm:text-base"
              >
                Partner With Us
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>

              <a
                href="#our-work"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/70 bg-white/5 px-7 py-3.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#115E59] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#115E59] sm:text-base"
              >
                Discover Our Work
              </a>
            </div>

            <div className="mx-auto mt-10 h-px max-w-xs bg-gradient-to-r from-transparent via-white/40 to-transparent" />

            <p className="mt-5 text-xs leading-6 text-white/75 sm:text-sm">
              Together, we can help build safer and more supportive
              communities for children.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}