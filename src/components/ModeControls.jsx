// src/components/ModeControls.jsx
import { useTheme } from "../contexts/ThemeContext.jsx";
import { useLang } from "../contexts/LangContext.jsx";

export default function ModeControls() {
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang } = useLang();
  const isDark = theme === "dark";
  const langLabel = lang === "tr" ? "ENGLISH" : "TÜRKÇE’YE GEÇ";

  return (
    <div className="flex items-center gap-4">
      {/* Dark toggle - Figma'daki görünüm */}
      <button
        type="button"
        onClick={toggleTheme}
        className="relative w-[55px] h-[24px] rounded-full"
        aria-pressed={isDark}
        aria-label="Dark mode"
        title="Dark mode"
        style={{ background: "rgb(var(--primary-strong))" }}
      >
        <span
          className="absolute top-[4px] w-[15px] h-[16px] rounded-full transition-all"
          style={{ left: isDark ? "35px" : "4px", background: "#FFE86E" }}
        />
        <span
          className="absolute"
          style={{
            width: "2px",
            height: "2px",
            left: isDark ? "50px" : "19px",
            top: "11px",
            background: "#E92577",
          }}
        />
      </button>

      <div className="flex items-center gap-3">
        <span className="text-[15px] font-bold tracking-[0.1em] select-none" style={{ color: "#777" }}>
          DARK MODE
        </span>
        <span className="text-[15px] font-bold tracking-[0.1em] select-none" style={{ color: "#777" }} aria-hidden>
          |
        </span>
        <button
          type="button"
          onClick={() => setLang(lang === "tr" ? "en" : "tr")}
          className="px-2 py-1 rounded focus:outline-none focus:ring"
          style={{ color: "rgb(var(--primary))" }}
          title={lang === "tr" ? "Switch to English" : "Türkçe’ye geç"}
          aria-label={lang === "tr" ? "Switch to English" : "Türkçe’ye geç"}
        >
          {langLabel}
        </button>
      </div>
    </div>
  );
}
