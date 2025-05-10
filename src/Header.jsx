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
        <span className="text-white text-[24px] font-semibold font-poppins">
          checkmykicks
        </span>
      </div>

      {/* Right: Menu */}
      <nav className="flex gap-12">
        <a
          href="#explore"
          className="text-white/75 text-[16px] font-semibold uppercase tracking-[0.15em] font-open"
        >
          Explore
        </a>
        <a
          href="#contact"
          className="text-white/75 text-[16px] font-semibold uppercase tracking-[0.15em] font-open"
        >
          Contact Us
        </a>
      </nav>
    </header>
  );
}
