
import Reveal from "./Reveal";

const services = [
  {
    number: "01",
    title: "Children's Rights",
    description:
      "Promoting awareness of children's rights, dignity and equal opportunities.",
    icon: "⚖️",
  },
  {
    number: "02",
    title: "Child Protection",
    description:
      "Supporting safer environments and advocating for children at risk.",
    icon: "🛡️",
  },
  {
    number: "03",
    title: "Access to Justice",
    description:
      "Advocating for fair treatment and access to appropriate support.",
    icon: "🏛️",
  },
  {
    number: "04",
    title: "Public Awareness",
    description:
      "Encouraging families and communities to understand and protect children's rights.",
    icon: "📢",
  },
];

export default function OurWork() {
  return (
    <section
      id="our-work"
      className="bg-[#E8F5F2] px-5 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0F766E]">
            What We Do
          </p>

          <h2 className="mt-4 text-3xl font-child font-extrabold text-[#115E59] sm:text-4xl">
            Creating Meaningful Change
          </h2>

          <p className="mt-5 leading-7 text-[#52615E]">
            We work to advance children's rights and strengthen
            protection through awareness, advocacy and community
            engagement.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.number} delay={index * 100}>
              <article className="group h-full rounded-2xl border border-[#E8DAD8] bg-white p-6 shadow-sm transition duration-300 hover:bg-[#115E59] hover:text-white hover:-translate-y-2 hover:border-[#F4C2C2] hover:shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="text-3xl" aria-hidden="true">
                    {service.icon}
                  </span>

                  <span className="text-sm font-bold text-[#D98F9B] hover:text-white">
                    {service.number}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-child font-bold text-[#115E59] transition-colors group-hover:text-white">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#52615E] group-hover:text-white">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
