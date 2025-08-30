import { useTheme } from "../contexts/ThemeContext";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="px-3 py-1 rounded-xl border text-sm"
      style={{ borderColor: "rgb(var(--border))" }}
      aria-label="Tema değiştir"
    >
      {theme === "dark" ? "☾ Dark" : "☀︎ Light"}
    </button>
  );
}
