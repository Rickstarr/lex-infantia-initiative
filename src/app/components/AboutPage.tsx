
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
            rgba(255, 248, 247, 0.94),
            rgba(232, 245, 242, 0.90)
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
          <div className="overflow-hidden rounded-3xl border border-[#F2D8E2] bg-[#E8F5F2] shadow-xl">
            <img
              src="/images/hero2.jpg"
              alt="Community supporting children's wellbeing"
              className="h-72 w-full object-cover sm:h-96"
            />
          </div>
        </Reveal>

        {/* CONTENT */}
        <Reveal direction="right" delay={100}>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0F766E]">
            Who We Are
          </p>

          <h2 className="font-child mt-4 text-3xl font-extrabold leading-tight text-[#115E59] sm:text-4xl lg:text-5xl">
            Building a Safer and Brighter Future for Every Child
          </h2>

          <p className="mt-5 text-base leading-8 text-[#52615E] sm:text-lg">
            Lex Infantia Initiative is committed to promoting
            children's rights, protecting vulnerable children
            and raising awareness about the importance of
            safety, dignity and equal opportunities.
          </p>

          <p className="mt-4 text-base leading-8 text-[#52615E] sm:text-lg">
            Through advocacy, education and community
            engagement, we aim to help create an environment
            where every child can be heard, protected and
            supported.
          </p>

          <a
            href="#our-work"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#0F766E] px-6 py-3 font-bold text-white transition duration-300 hover:-translate-y-1 hover:gap-4 hover:bg-[#115E59]"
          >
            Discover Our Work <span aria-hidden="true">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
