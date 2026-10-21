import Reveal from "./Reveal";

const values = [
  {
    title: "Our Mission",
    description:
      "To advance children's rights and promote their protection through awareness, advocacy, and community engagement.",
    image: "/images/mission.jpg",
    bg: "bg-[#E8F5F2]",
    accent: "text-[#0F766E]",
    imageBg: "bg-[#C5E7E1]",
    bar: "bg-[#0F766E]",
    number: "01",
  },
  {
    title: "Our Vision",
    description:
      "A society where every child is safe, respected, heard, and able to grow with dignity and opportunity.",
    image: "/images/vision.jpg",
    bg: "bg-[#FFF1F0]",
    accent: "text-[#A84F68]",
    imageBg: "bg-[#F4C2C2]",
    bar: "bg-[#D98F9B]",
    number: "02",
  },
  {
    title: "Our Values",
    description:
      "We uphold dignity, inclusion, compassion, accountability, and the best interests of every child.",
    image: "/images/values.jpg",
    bg: "bg-white",
    accent: "text-[#115E59]",
    imageBg: "bg-[#E8F5F2]",
    bar: "bg-[#115E59]",
    number: "03",
  },
];

export default function MissionVision() {
  return (
    <section
      id="our-values"
      className="overflow-hidden bg-[#FFF8F7] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <Reveal className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#F4C2C2] bg-[#FFF1F0] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#A84F68] sm:text-sm">
            <span aria-hidden="true">✦</span>
            What Guides Us
          </span>

          <h2 className="mt-5 font-child text-3xl font-extrabold leading-tight text-[#115E59] sm:text-4xl lg:text-5xl">
            The Principles Behind Our Purpose
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#52615E] sm:text-base sm:leading-8">
            Our mission, vision, and values guide our commitment to children's
            rights, their safety, and the importance of every child's voice.
          </p>
        </Reveal>

        {/* Mission, Vision and Values Cards */}
        <div className="grid gap-8 pt-5 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3">
          {values.map((item, index) => (
            <Reveal key={item.title} delay={index * 120}>
              <article
                className={`${item.bg} group relative h-full rounded-3xl border border-[#E8DAD8] px-5 pb-6 pt-12 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#F4C2C2] hover:shadow-xl sm:px-7 sm:pb-8 sm:pt-14`}
              >
                {/* Decorative background shape */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-bl-[4rem] bg-white/40 transition-transform duration-300 group-hover:scale-110"
                />

                {/* Image positioned partly outside the card */}
                <div
                  className={`${item.imageBg} absolute -right-2 -top-7 z-10 flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border-4 border-[#FFF8F7] shadow-md transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105 sm:-right-3 sm:-top-8 sm:h-24 sm:w-24`}
                >
                  <img
                    src={item.image}
                    alt={`${item.title} illustration`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Card content */}
                <div className="relative z-10">
                  <div className="mb-5 flex items-center justify-between">
                    <span
                      className={`${item.accent} text-xs font-extrabold tracking-[0.2em]`}
                    >
                      {item.number}
                    </span>

                    <span
                      aria-hidden="true"
                      className={`${item.accent} text-lg transition-transform duration-300 group-hover:translate-x-1`}
                    >
                      ✦
                    </span>
                  </div>

                  <h3
                    className={`font-child text-2xl font-extrabold ${item.accent} sm:text-3xl`}
                  >
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#52615E] sm:text-base sm:leading-8">
                    {item.description}
                  </p>

                  {/* Decorative accent */}
                  <div
                    className={`mt-7 h-1 w-12 rounded-full ${item.bar} transition-all duration-300 group-hover:w-20`}
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Closing statement */}
        <Reveal delay={150}>
          <div className="mt-12 rounded-3xl bg-[#115E59] px-6 py-8 text-center shadow-md sm:mt-14 sm:px-10 sm:py-10">
            <p className="font-child text-xl font-extrabold text-white sm:text-2xl lg:text-3xl">
              Every Child Deserves to Be Safe, Heard and Respected.
            </p>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
              These principles shape the purpose we stand for and the
              child-centred future we hope to help build.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}