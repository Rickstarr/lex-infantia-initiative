
import Reveal from "./Reveal";

export default function Contact() {
  return (
    
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#FFF8F7] px-5 py-16 sm:py-20 lg:py-24"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,248,247,0.88), rgba(255,248,247,0.94)), url('/images/contact-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >

      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal direction="left">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0F766E]">
            Get Involved
          </p>

          <h2 className="mt-4 text-3xl font-child font-extrabold leading-tight text-[#115E59] sm:text-4xl">
            Together, We Can Make a Difference
          </h2>

          <p className="mt-5 leading-8 text-[#52615E]">
            Join us in promoting children's rights, raising
            awareness and building safer communities.
            Reach out to learn more about our work and
            opportunities to collaborate.
          </p>

          <div className="mt-8 rounded-2xl border border-[#E8DAD8] bg-white p-6">
            <h3 className="font-bold text-[#115E59]">
              Connect With Us
            </h3>

            <p className="mt-2 text-sm leading-7 text-[#52615E]">
              Replace this text with your organisation's
              verified email address, telephone number
              and office location.
            </p>
          </div>
        </Reveal>

        <Reveal direction="left" delay={100}>
          <div className="rounded-3xl border border-[#E8DAD8] bg-white p-6 shadow-lg sm:p-8">
            <h3 className="text-2xl font-child font-bold text-[#115E59]">
              Send Us a Message
            </h3>

            <form
              action="mailto:"
              method="post"
              encType="text/plain"
              className="mt-6 space-y-5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-[#263B39]"
                >
                  Your name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-xl border border-[#E8DAD8] bg-[#FFF8F7] px-4 py-3 outline-none transition focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-[#263B39]"
                >
                  Email address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-[#E8DAD8] bg-[#FFF8F7] px-4 py-3 outline-none transition focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-[#263B39]"
                >
                  Your message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full resize-y rounded-xl border border-[#E8DAD8] bg-[#FFF8F7] px-4 py-3 outline-none transition focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20"
                  placeholder="How would you like to connect?"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-[#0F766E] px-6 py-3.5 font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#115E59]"
              >
                Send Message
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
