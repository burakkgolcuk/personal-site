import { scrollToId } from "../utils/scrollToId";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import useActiveSection from "../hooks/useActiveSection";

export default function Navbar() {
  const active = useActiveSection(["home","skills","projects","contact"]);

  const link = (id, label) => (
    <button
      onClick={() => scrollToId(id)}
      className={`text-[18px] leading-7 font-medium ${
        active === id ? "underline underline-offset-4" : "muted"
      }`}
      aria-current={active === id ? "page" : undefined}
    >
      {label}
    </button>
  );

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b" style={{ borderColor:'rgb(var(--border))' }}>
      <div className="max-w-[1140px] mx-auto h-[62px] flex items-center justify-between">
        {/* Logo */}
        <div className="relative w-[63.68px] h-[62px]" aria-label="Logo">
          <div className="absolute inset-0 rounded-full" style={{ background:'rgb(238 235 255)' }} />
          <span className="absolute left-[16.43px] top-[13px] text-[24px] leading-8 font-semibold"
            style={{ color:'rgb(123 97 255)', transform:'matrix(0.87,0.49,-0.51,0.86,0,0)' }}>A</span>
        </div>

        <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
          {link("skills","Skills")}
          {link("projects","Projects")}
          <a href="#contact" className="btn btn-line w-[131px] h-[52px]">Hire me</a>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
