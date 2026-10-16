export default function GetInvolved() {
  return (
    <section
      id="get-involved"
      className="bg-[#F4F8F5] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-5xl rounded-3xl bg-[#0F766E] p-6 text-center shadow-sm sm:p-10 lg:p-14">
        <p className="text-sm font-bold uppercase tracking-widest text-[#D98F9B]">
          Get Involved
        </p>

        <h2 className="mt-3 text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
          Together, We Can Help Protect Every Child
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white sm:text-base sm:leading-8">
          Building a safer and more supportive environment for children
          requires collective effort. Learn more about our work and explore
          opportunities to support the promotion of children's rights.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-lg bg-[#198754] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#146c43] sm:text-base"
          >
            Contact Our Team
          </a>

          <a
            href="#our-work"
            className="rounded-lg border border-white px-6 py-3 text-sm font-bold text-white transition hover:bg-[#E8F2EB] hover:text-black sm:text-base"
          >
            Explore Our Work
          </a>
        </div>
      </div>
    </section>
  );
}