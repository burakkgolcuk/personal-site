// src/components/ModeControls.jsx
import { useTheme } from "../contexts/ThemeContext";
import { useLang } from "../contexts/LangContext";

export default function ModeControls() {
  const { theme, setTheme } = useTheme();
  const { lang, setLang } = useLang();

  const dark = theme === "dark";
  const toggleTheme = () => setTheme(dark ? "light" : "dark");
  const switchLang = () => setLang(lang === "tr" ? "en" : "tr");

  return (
    <div className="flex items-center gap-4 select-none" style={{ color: "#777777" }}>
      {/* Mor toggle */}
      <button
        onClick={toggleTheme}
        aria-label={dark ? "Karanlık tema açık. Aydınlık temaya geç" : "Aydınlık tema açık. Karanlık temaya geç"}
        className="relative w-[55px] h-[24px] rounded-full"
        style={{ background: "#4731D3" }}
      >
        {/* Sarı daire */}
        <span
          className="absolute top-[4px] left-[4px] block w-[15px] h-[16px] rounded-full transition-transform"
          style={{ background: "#FFE86E", transform: dark ? "translateX(31px)" : "translateX(0)" }}
        />
        {/* Pembe nokta (Figma detayı) */}
        <span
          className="absolute top-[11px] left-[19px] block w-[2px] h-[2px] rounded-full transition-transform"
          style={{ background: "#E92577", transform: dark ? "translateX(31px)" : "translateX(0)" }}
        />
      </button>

      {/* DURUM METNİ (dinamik) */}
      <span className="uppercase tracking-[0.1em] text-[15px] font-bold">
  {dark ? "LIGHT MODE’A GEÇ" : "DARK MODE’A GEÇ"}
</span>

      {/* Dikey çizgi */}
      <span className="uppercase tracking-[0.1em] text-[15px] font-bold">|</span>

      {/* Dil butonu */}
      <button
        onClick={switchLang}
        className="px-2 py-1 rounded-lg border text-[15px] font-bold uppercase tracking-[0.1em] bg-transparent"
        style={{ borderColor: "rgb(var(--border))", color: "#4731D3" }}
        aria-label="Dili değiştir"
      >
        {lang === "en" ? "TÜRKÇE’YE GEÇ" : "ENGLISH"}
      </button>
    </div>
  );
}
