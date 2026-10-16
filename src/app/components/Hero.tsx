
import HeroSlider from "./HeroSlider";
import Reveal from "./Reveal";

export default function Hero() {
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

          <h1 className="mt-6 font-child text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Justice Should Not End
            <span className="mt-2 block text-[#D98F9B]">
              Behind Bars.
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
    </section>
  );
}
