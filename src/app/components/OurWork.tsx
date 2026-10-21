import Reveal from "./Reveal";

const programmes = [
  {
    number: "01",
    title: "Child Rights Awareness & Education",
    description:
      "Promoting understanding of children's rights among children, parents, caregivers and communities so that rights can be recognised, respected and protected.",
    icon: "📚",
    accent: "bg-[#FFF1F0]",
  },
  {
    number: "02",
    title: "Child Protection & Referral",
    description:
      "Promoting safer environments for children and supporting connections to appropriate protection services when concerns arise.",
    icon: "🛡️",
    accent: "bg-[#E8F5F2]",
  },
  {
    number: "03",
    title: "Access to Justice for Children",
    description:
      "Advocating for children's fair treatment, respect for their rights and access to appropriate legal information and support.",
    icon: "⚖️",
    accent: "bg-[#FFF1F0]",
  },
  {
    number: "04",
    title: "Community Child Protection",
    description:
      "Encouraging communities to recognise risks to children, strengthen protective practices and contribute to safer environments.",
    icon: "🤝",
    accent: "bg-[#E8F5F2]",
  },
  {
    number: "05",
    title: "Parenting & Family Strengthening",
    description:
      "Promoting positive caregiving, family awareness and supportive home environments that respect children's dignity and wellbeing.",
    icon: "🏡",
    accent: "bg-[#FFF1F0]",
  },
  {
    number: "06",
    title: "Advocacy & Policy Engagement",
    description:
      "Raising awareness of child-rights concerns and encouraging policies, institutions and community practices that better protect children.",
    icon: "📢",
    accent: "bg-[#E8F5F2]",
  },
];

export default function OurWork() {
  return (
    <section
      id="our-work"
      className="relative overflow-hidden bg-[#E8F5F2] px-5 py-16 sm:py-20 lg:py-24"
    >
      {/* Decorative background elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-20 h-56 w-56 rounded-full bg-[#F4C2C2]/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-white/70 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#F4C2C2] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#0F766E] sm:text-sm">
            <span aria-hidden="true">✦</span>
            Our Programmes
          </span>

          <h2 className="mt-5 font-child text-3xl font-extrabold leading-tight text-[#115E59] sm:text-4xl lg:text-5xl">
            Turning Children's Rights into Meaningful Action
          </h2>

          <p className="mt-5 text-base leading-8 text-[#52615E] sm:text-lg">
            Children's rights need more than awareness. They
            require informed families, protective communities,
            responsive support systems and continued advocacy.
            These are the programme areas through which Lex
            Infantia Initiative seeks to advance child protection
            and promote the rights of every child.
          </p>
        </Reveal>

        {/* Programme cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programmes.map((programme, index) => (
            <Reveal key={programme.number} delay={index * 100}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#D9E7E3] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#F4C2C2] hover:shadow-xl sm:p-7">
                {/* Top accent */}
                <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-[#F4C2C2] transition-transform duration-300 group-hover:scale-x-100" />

                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl text-3xl transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110 ${programme.accent}`}
                    aria-hidden="true"
                  >
                    {programme.icon}
                  </div>

                  <span className="font-child text-sm font-extrabold tracking-widest text-[#D98F9B]">
                    {programme.number}
                  </span>
                </div>

                <h3 className="mt-6 font-child text-xl font-extrabold leading-snug text-[#115E59] sm:text-2xl">
                  {programme.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-[#52615E] sm:text-base">
                  {programme.description}
                </p>

                <div className="mt-6 h-1 w-12 rounded-full bg-[#F4C2C2] transition-all duration-300 group-hover:w-20 group-hover:bg-[#0F766E]" />
              </article>
            </Reveal>
          ))}
        </div>

        {/* Call to action */}
        <Reveal delay={200}>
          <div className="mt-12 rounded-3xl bg-[#115E59] px-6 py-8 text-center shadow-lg sm:px-10 sm:py-10">
            <h3 className="font-child text-2xl font-extrabold text-white sm:text-3xl">
              Every Child Deserves to Be Protected
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/90 sm:text-base">
              Learn more about our work, explore ways to get
              involved, or contact us to discuss opportunities
              to advance children's rights.
            </p>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[#F4C2C2] px-6 py-3.5 font-bold text-[#115E59] transition duration-300 hover:-translate-y-1 hover:bg-[#FFF1F0] hover:shadow-lg"
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