import { useLang } from "../contexts/LangContext";
export default function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  return (
    <select
      value={lang}
      onChange={(e)=>setLang(e.target.value)}
      className="px-2 py-1 rounded-xl border text-sm bg-transparent"
      style={{ borderColor: "rgb(var(--border))" }}
      aria-label="Dil seç"
    >
      <option value="tr">TR</option>
      <option value="en">EN</option>
    </select>
  );
}
