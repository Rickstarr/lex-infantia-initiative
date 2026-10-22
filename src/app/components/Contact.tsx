"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const collaborationOptions = [
  {
    number: "01",
    title: "Partnerships",
    description:
      "Work with us to advance children's rights through shared initiatives, expertise, and community engagement.",
  },
  {
    number: "02",
    title: "Programmes & Advocacy",
    description:
      "Enquire about our child protection programmes, awareness campaigns, and opportunities to support advocacy.",
  },
  {
    number: "03",
    title: "Get Involved",
    description:
      "Explore ways to contribute your time, skills, or organisational support towards a safer future for children.",
  },
];

export default function Contact() {
  
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setIsSending(true);
    setStatusMessage("");
    setIsSuccess(false);

    try {
      const form = event.currentTarget;
      const formData = new FormData(form);

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Unable to send your enquiry."
        );
      }

      setIsSuccess(true);
      setStatusMessage(result.message);
      form.reset();
    } catch (error) {
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#FFF8F7] px-5 py-16 sm:py-20 lg:py-24"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,248,247,0.90), rgba(255,248,247,0.95)), url('/images/contact-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Section introduction */}
        <Reveal direction="up">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <span className="inline-flex rounded-full border border-[#F4C2C2] bg-[#FFF1F0] px-4 py-2 text-sm font-bold text-[#115E59]">
              Let's Work Together
            </span>

            <h2 className="mt-5 font-child text-3xl font-extrabold leading-tight text-[#115E59] sm:text-4xl lg:text-5xl">
              Every Child Deserves a
              <span className="block text-[#D98F9B]">
                Safer, Brighter Future
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#52615E] sm:text-lg">
              Meaningful change begins with people who care.
              Connect with Lex Infantia Initiative to explore
              partnerships, learn about our work, and support
              efforts to advance children's rights and protection.
            </p>
          </div>
        </Reveal>

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Collaboration opportunities */}
          <Reveal direction="left">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0F766E]">
                Connect With Our Mission
              </p>

              <h3 className="mt-3 font-child text-2xl font-extrabold text-[#115E59] sm:text-3xl">
                How Would You Like to Get Involved?
              </h3>

              <p className="mt-4 leading-8 text-[#52615E]">
                Whether you represent an organisation, want to
                support an initiative, or are seeking information
                about our work, we welcome constructive
                conversations that help strengthen children's
                rights and wellbeing.
              </p>

              <div className="mt-8 space-y-4">
                {collaborationOptions.map((item, index) => (
                  <Reveal
                    key={item.number}
                    direction="up"
                    delay={index * 100}
                  >
                    <div className="group flex gap-4 rounded-2xl border border-[#E8DAD8] bg-white/90 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#F4C2C2] hover:shadow-md sm:p-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E8F5F2] font-child text-lg font-extrabold text-[#0F766E] transition duration-300 group-hover:rotate-3 group-hover:bg-[#FFF1F0] group-hover:text-[#115E59]">
                        {item.number}
                      </div>

                      <div>
                        <h4 className="font-child text-lg font-bold text-[#115E59]">
                          {item.title}
                        </h4>

                        <p className="mt-2 text-sm leading-7 text-[#52615E] sm:text-base">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-[#F4C2C2] bg-[#FFF1F0]/90 p-5">
                <p className="font-child font-bold text-[#115E59]">
                  Every contribution starts with a conversation.
                </p>

                <p className="mt-2 text-sm leading-7 text-[#52615E]">
                  Tell us what you have in mind, and let's explore
                  how your interests align with our mission.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Contact form */}
          <Reveal direction="right" delay={100}>
            <div className="rounded-3xl border border-[#E8DAD8] bg-white/95 p-6 shadow-xl sm:p-8 lg:p-9">
              <div className="mb-7">
                <span className="text-sm font-bold uppercase tracking-[0.16em] text-[#0F766E]">
                  Get in Touch
                </span>

                <h3 className="mt-3 font-child text-2xl font-extrabold text-[#115E59] sm:text-3xl">
                  Start a Conversation
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#52615E] sm:text-base">
                  Complete the form below to tell us about your
                  enquiry, proposed partnership, or interest in
                  our work.
                </p>
              </div>

             <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-semibold text-[#263B39]"
                  >
                    Your name
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    maxLength={100}
                    className="w-full rounded-xl border border-[#E8DAD8] bg-[#FFF8F7] px-4 py-3 outline-none transition placeholder:text-[#87918F] focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-semibold text-[#263B39]"
                  >
                    Email address
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    className="w-full rounded-xl border border-[#E8DAD8] bg-[#FFF8F7] px-4 py-3 outline-none transition placeholder:text-[#87918F] focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="mb-2 block text-sm font-semibold text-[#263B39]"
                  >
                    What would you like to discuss?
                  </label>

                  <select
                    id="contact-subject"
                    name="subject"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-[#E8DAD8] bg-[#FFF8F7] px-4 py-3 text-[#52615E] outline-none transition focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20"
                  >
                    <option value="" disabled>
                      Select an enquiry type
                    </option>
                    <option value="Partnership">
                      Partnership opportunities
                    </option>
                    <option value="Programmes">
                      Programmes and advocacy
                    </option>
                    <option value="Volunteering">
                      Volunteering and support
                    </option>
                    <option value="General enquiry">
                      General enquiry
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-sm font-semibold text-[#263B39]"
                  >
                    Your message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    maxLength={3000}
                    className="w-full resize-y rounded-xl border border-[#E8DAD8] bg-[#FFF8F7] px-4 py-3 outline-none transition placeholder:text-[#87918F] focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20"
                    placeholder="Tell us about your enquiry or how you would like to collaborate..."
                  />
                </div>

                <p className="text-xs leading-6 text-[#52615E]">
                  Please do not include children's names, personal
                  records, or other confidential safeguarding
                  information in this general enquiry form.
                </p>

                
                <button
                  type="submit"
                  disabled={isSending}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#0F766E] px-6 py-4 font-bold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-[#115E59] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSending ? "Sending Your Enquiry..." : "Send Your Enquiry"}

                  {!isSending && (
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  )}
                </button>

                {statusMessage && (
                  <p
                    role="status"
                    aria-live="polite"
                    className={`mt-4 rounded-xl p-4 text-sm font-medium ${
                      isSuccess
                        ? "bg-[#E8F5F2] text-[#115E59]"
                        : "bg-red-50 text-red-700"
                    }`}
                  >
                    {statusMessage}
                  </p>
                )}

              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}