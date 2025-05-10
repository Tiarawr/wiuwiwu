import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full h-[90px] bg-[#B56868] flex items-center justify-between px-[60px] relative z-10">
      {/* Left: Logo */}
      <div className="flex items-center gap-4">
        <img
          src="./vector-50.svg"
          alt="Logo Vector"
          className="w-[40px] h-[44px]"
        />
        <Link
          to="/"
          className="text-white text-[24px] font-semibold font-poppins"
        >
          checkmykicks
        </Link>
      </div>

      {/* Right: Menu */}
      <nav className="flex gap-12">
        <Link
          to="/explore"
          className="text-white/75 text-[16px] font-semibold uppercase tracking-[0.15em] font-open"
        >
          Explore
        </Link>
        <a
          href="#contact"
          className="text-white/75 text-[16px] font-semibold uppercase tracking-[0.15em] font-open"
        >
          Contact Us
        </a>
        <Link
          to="/login"
          className="text-white/75 text-[16px] font-semibold uppercase tracking-[0.15em] font-open"
        >
          SIGN IN
        </Link>
      </nav>
    </header>
  );
}
