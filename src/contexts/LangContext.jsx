import { createContext, useContext, useEffect, useState } from "react";
import tr from "../data/tr.json";
import en from "../data/en.json";

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem("lang") || "tr"; } catch { return "tr"; }
  });

  useEffect(() => {
    try { localStorage.setItem("lang", lang); } catch {}
  }, [lang]);

  const dict = lang === "en" ? en : tr;
  const t = (path) => path.split(".").reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : undefined), dict) ?? path;

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
