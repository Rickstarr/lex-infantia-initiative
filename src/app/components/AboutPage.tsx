import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#FFF8F7] px-5 py-16 sm:py-20 lg:py-24"
      style={{
        backgroundImage: `
          linear-gradient(
            135deg,
            rgba(255, 248, 247, 0.95),
            rgba(232, 245, 242, 0.92)
          ),
          url('/images/children-background.jpg')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        {/* IMAGE */}
        <Reveal direction="left">
          <div className="group relative overflow-hidden rounded-3xl border border-[#F2D8E2] bg-[#E8F5F2] shadow-xl">
            <img
              src="/images/hero2.jpg"
              alt="Children and community members in a supportive environment"
              className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-96"
            />

            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/60 bg-white/90 p-4 shadow-lg backdrop-blur-sm sm:bottom-6 sm:left-6 sm:right-6 sm:p-5">
              <p className="font-child text-lg font-extrabold text-[#115E59] sm:text-xl">
                Every Child Matters
              </p>
              <p className="mt-1 text-sm leading-6 text-[#52615E]">
                Every child deserves to be safe, respected, heard and protected.
              </p>
            </div>
          </div>
        </Reveal>

        {/* CONTENT */}
        <Reveal direction="right" delay={100}>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0F766E]">
            Who We Are
          </p>

          <h2 className="font-child mt-4 text-3xl font-extrabold leading-tight text-[#115E59] sm:text-4xl lg:text-5xl">
            Every Child Deserves a Safe and Dignified Future
          </h2>

          <p className="mt-5 text-base leading-8 text-[#52615E] sm:text-lg">
            Lex Infantia Initiative is a child-rights-focused
            organisation dedicated to promoting children's rights
            and strengthening their protection. We believe that
            every child deserves safety, dignity, equal
            consideration and the opportunity to have their
            voice heard.
          </p>

          <p className="mt-4 text-base leading-8 text-[#52615E] sm:text-lg">
            We seek to advance this commitment through child-rights
            awareness, advocacy, community engagement and efforts
            to connect children and families with appropriate
            support. Our focus is on helping build communities
            where children's rights are understood, respected
            and protected.
          </p>

          <div className="mt-6 rounded-2xl border-l-4 border-[#F4C2C2] bg-white/75 p-5">
            <h3 className="font-child text-lg font-extrabold text-[#115E59]">
              Our Guiding Belief
            </h3>
            <p className="mt-2 text-sm leading-7 text-[#52615E] sm:text-base">
              Children are rights-holders, not simply recipients
              of care. Their safety, dignity, development and
              voices deserve meaningful protection.
            </p>
          </div>

          <a
            href="#our-work"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#0F766E] px-6 py-3 font-bold text-white transition duration-300 hover:-translate-y-1 hover:gap-4 hover:bg-[#115E59]"
          >
            Explore Our Programmes
            <span aria-hidden="true">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}