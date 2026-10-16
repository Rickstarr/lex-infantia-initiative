import CurrentYear from "./CurrentYear";

export default function Footer() {
  return (
    <footer className="bg-[#163F3B] px-5 pb-6 pt-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <a
            href="#home"
            className="text-xl font-extrabold text-white"
          >
            Lex Infantia
            <span className="ml-1 text-[#F4C2C2]">
              Initiative
            </span>
          </a>

          <p className="mt-4 max-w-xs text-sm leading-7 text-white/75">
            Promoting children's rights, protection and
            opportunities for a safer, more equitable future.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-[#F4C2C2]">
            Quick Links
          </h3>

          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li><a className="transition hover:text-[#F4C2C2]" href="#home">Home</a></li>
            <li><a className="transition hover:text-[#F4C2C2]" href="#about">About Us</a></li>
            <li><a className="transition hover:text-[#F4C2C2]" href="#our-work">Our Work</a></li>
            <li><a className="transition hover:text-[#F4C2C2]" href="#programmes">Programmes</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-[#F4C2C2]">
            Our Priorities
          </h3>

          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li>Children's Rights</li>
            <li>Child Protection</li>
            <li>Access to Justice</li>
            <li>Community Awareness</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-[#F4C2C2]">
            Contact
          </h3>

          <p className="mt-4 text-sm leading-7 text-white/75">
            Add your official email, telephone number
            and location here.
          </p>

          <a
            href="#contact"
            className="mt-4 inline-flex rounded-lg bg-[#F4C2C2] px-4 py-2.5 text-sm font-bold text-[#163F3B] transition hover:bg-[#FFF1F0]"
          >
            Get In Touch
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/15 pt-6 text-center text-xs text-white/60 sm:text-sm">
         © <CurrentYear /> Lex Infantia Initiative. All rights reserved.
      </div>
    </footer>
  );
}
