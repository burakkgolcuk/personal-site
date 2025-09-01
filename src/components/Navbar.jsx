import { useState } from "react";
import { scrollToId } from "../utils/scrollToId";
import ModeControls from "./ModeControls";
import useActiveSection from "../hooks/useActiveSection";
import { useLang } from "../contexts/LangContext.jsx";

export default function Navbar() {
  const { t } = useLang();
  const active = useActiveSection(["home", "skills", "projects", "contact"]);
  const [open, setOpen] = useState(false);

  const NavLinks = ({ vertical = false, onClick = () => {} }) => (
    <div
      className={`items-center ${
        vertical ? "flex flex-col gap-4 py-4" : "hidden md:flex gap-6"
      }`}
    >
      <button
        onClick={() => {
          scrollToId("skills");
          onClick();
        }}
        className={`text-[18px] leading-7 font-medium ${
          active === "skills" ? "underline underline-offset-4" : "muted"
        }`}
        aria-current={active === "skills" ? "page" : undefined}
      >
        {t("nav.skills")}
      </button>
      <button
        onClick={() => {
          scrollToId("projects");
          onClick();
        }}
        className={`text-[18px] leading-7 font-medium ${
          active === "projects" ? "underline underline-offset-4" : "muted"
        }`}
        aria-current={active === "projects" ? "page" : undefined}
      >
        {t("nav.projects")}
      </button>
      <a
        href="#contact"
        onClick={onClick}
        className="btn btn-line w-[131px] h-[52px]"
      >
        {t("buttons.hire")}
      </a>
    </div>
  );

  return (
    <header
      className="sticky top-0 z-50 bg-white/90 dark:bg-[#0A0A14]/90 backdrop-blur border-b"
      style={{ borderColor: "rgb(var(--border))" }}
    >
      <div className="container-1140 h-[62px] flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToId("home")}
          aria-label="Go to home"
          className="relative w-[63.68px] h-[62px]"
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{ background: "rgb(238 235 255)" }}
          />
          <span
            className="absolute left-[16.43px] top-[13px] text-[24px] leading-8 font-semibold"
            style={{
              color: "rgb(123 97 255)",
              transform: "matrix(0.87,0.49,-0.51,0.86,0,0)",
            }}
          >
            B
          </span>
        </button>

        {/* Desktop nav */}
        <NavLinks />

        {/* Right controls (Figma: DARK MODE | TÜRKÇE’YE GEÇ) */}
        <div className="hidden md:flex items-center gap-3">
          <ModeControls />
        </div>

        {/* Mobile toggler */}
        <button
          className="md:hidden px-3 py-2 rounded-xl border"
          style={{ borderColor: "rgb(var(--border))" }}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-nav"
          className="md:hidden border-t"
          style={{ borderColor: "rgb(var(--border))" }}
        >
          <div className="container-1140 flex items-center justify-between py-3">
            <ModeControls />
          </div>
          <div className="container-1140">
            <NavLinks vertical onClick={() => setOpen(false)} />
          </div>
        </div>
      )}
    </header>
  );
}
