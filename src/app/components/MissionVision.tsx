const values = [
  {
    title: "Our Mission",
    description:
      "To promote children's rights and strengthen child protection through awareness, advocacy, and community engagement.",
    image: "/images/mission.jpg",
    bg: "bg-[#E0F2F1]",
    accent: "text-[#087F8C]",
    imageBg: "bg-[#B2DFDB]",
  },
  {
    title: "Our Vision",
    description:
      "A society where every child is protected, respected, and given the opportunity to develop and thrive.",
    image: "/images/vision.jpg",
    bg: "bg-[#FCE7F3]",
    accent: "text-[#BE185D]",
    imageBg: "bg-[#FBCFE8]",
  },
  {
    title: "Our Values",
    description:
      "We champion dignity, inclusion, accountability, compassion, and the best interests of every child.",
    image: "/images/values.jpg",
    bg: "bg-[#FFF1E6]",
    accent: "text-[#C66A35]",
    imageBg: "bg-[#FED7AA]",
  },
];

export default function MissionVision() {
  return (
    <section className="bg-[#FFF8F7] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087F8C] sm:text-sm">
            What Guides Us
          </p>

          <h2 className="mt-3 font-child text-2xl font-extrabold text-[#123524] sm:text-3xl lg:text-4xl">
            Our Mission, Vision and Values
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
            Our commitment to children's rights shapes our priorities,
            partnerships, and approach to child protection.
          </p>
        </div>

        {/* Mission, Vision and Values Cards */}
        <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
          {values.map((item) => (
            <article
              key={item.title}
              className={`${item.bg} group relative rounded-3xl border border-white/70 px-5 pb-5 pt-14 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:px-7 sm:pb-7 sm:pt-16 lg:p-8 lg:pt-16`}
            >
              {/* Rounded Image */}
              <div
                className={`${item.imageBg} absolute -right-2 -top-7 flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border-4 border-[#FFF8F7] shadow-md transition-transform duration-300 group-hover:scale-105 sm:-right-3 sm:-top-8 sm:h-24 sm:w-24`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Card Content */}
              <h3
                className={`font-child text-xl font-extrabold ${item.accent} sm:text-2xl`}
              >
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-700 sm:text-base">
                {item.description}
              </p>

              {/* Decorative Accent */}
              <div
                className={`mt-6 h-1 w-12 rounded-full ${item.accent.replace(
                  "text-",
                  "bg-"
                )} transition-all duration-300 group-hover:w-20`}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}