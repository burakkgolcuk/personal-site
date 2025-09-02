// src/components/Projects.jsx
import { useLang } from "../contexts/LangContext.jsx";

const projects = [
  {
    id: "witflix",
    title: { tr: "Witflix", en: "Witflix" },
    desc: {
      tr: "Film kataloğu / watchlist özellikli React projesi.",
      en: "A React project with a movie catalog and watchlist features.",
    },
    image: "/app-movies.png",
    tech: ["react", "redux", "axios"],
    github: "https://github.com/burakkgolcuk/witflix",
    site: "",
  },
  {
    id: "pizza",
    title: { tr: "Teknolojik Yemekler", en: "Teknolojik Yemekler" },
    desc: {
      tr: "Pizza sipariş uygulaması.",
      en: "A pizza ordering app.",
    },
    image: "/app-pizza.png",
    tech: ["react", "redux", "css"],
    github: "https://github.com/burakkgolcuk/yeni-repo",
    site: "",
  },
  {
    id: "calc",
    title: { tr: "Reducer Calculator", en: "Reducer Calculator" },
    desc: {
      tr: "useReducer ile basit hesap makinesi.",
      en: "A simple calculator built with useReducer.",
    },
    image: "/app-calculator.png",
    tech: ["react", "reducer"],
    github: "https://github.com/burakkgolcuk/reducer-calculator",
    site: "",
  },
];

export default function Projects() {
  const { t, lang } = useLang();
  const L = (v) => (typeof v === "string" ? v : v?.[lang] ?? v?.tr ?? "");

  return (
    <section id="projects" className="mt-[96px]">
      <div className="container-1140">
        <div className="divider mb-[42px]" />
        <h2
          className="text-[48px] leading-[48px] font-semibold"
          style={{ color: "rgb(var(--fg))" }}
        >
          {t("projects.title")}
        </h2>

        <div className="mt-[24px] flex flex-wrap gap-[120px]">
          {projects.map((p) => (
            <article key={p.id} className="w-[300px] flex flex-col gap-[18px]">
              <img
                src={p.image}
                alt={L(p.title)}
                className="w-[300px] h-[180px] object-cover rounded"
              />
              <h3
                className="text-[30px] leading-[28px] font-medium"
                style={{ color: "rgb(var(--primary))" }}
              >
                {L(p.title)}
              </h3>
              <p className="text-sm muted">{L(p.desc)}</p>

              <div className="flex gap-2">
                {p.tech.map((tName) => (
                  <span key={tName} className="pill">
                    {tName}
                  </span>
                ))}
              </div>

              <div
                className="mt-auto flex justify-between text-[16px] underline"
                style={{ color: "rgb(var(--primary-strong))" }}
              >
                <a href={p.github} target="_blank" rel="noreferrer">
                  {t("projects.github")}
                </a>
                {p.site ? (
                  <a href={p.site} target="_blank" rel="noreferrer">
                    {t("projects.view")}
                  </a>
                ) : (
                  <span className="opacity-60 no-underline">
                    {lang === "tr" ? "Yakında" : "Soon"}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
