// src/components/Projects.jsx
import { useLang } from "../contexts/LangContext.jsx";

const projects = [
  {
    id: "witflix",
    title: "Witflix",
    desc: "Film kataloğu / watchlist özellikli React projesi.",
    image: "/app-movies.png", // public/app-witflix.png
    tech: ["react", "redux", "axios"],
    github: "https://github.com/burakkgolcuk/witflix",
    site: "" // Şimdilik boş bırak; deploy edince URL koyarsın
  },
  {
    id: "pizza",
    title: "Teknolojik Yemekler",
    desc: "Pizza sipariş uygulaması...",
    image: "/app-pizza.png",
    tech: ["react", "redux", "css"],
    github: "https://github.com/kullanici/teknolojik-yemekler",
    site: ""
  },
  {
    id: "movies",
    title: "Redux Filmler / Watchlist",
    desc: "Film listesi ve watchlist...",
    image: "/app-movies.png",
    tech: ["react", "redux", "axios"],
    github: "https://github.com/kullanici/redux-filmler",
    site: ""
  },
  {
    id: "calc",
    title: "Reducer Calculator",
    desc: "useReducer ile basit hesap makinesi.",
    image: "/app-calculator.png",
    tech: ["react", "reducer"],
    github: "https://github.com/kullanici/reducer-calculator",
    site: ""
  }
];

export default function Projects() {
  const { t } = useLang();

  return (
    <section id="projects" className="mt-[96px]">
      <div className="container-1140">
        <div className="divider mb-[42px]" />
        <h2 className="text-[48px] leading-[48px] font-semibold" style={{ color: "rgb(var(--fg))" }}>
          {t("projects.title")}
        </h2>

        <div className="mt-[24px] flex flex-wrap gap-[120px]">
          {projects.map((p) => (
            <article key={p.id} className="project-card">
              <img src={p.image} alt={p.title} className="project-thumb" />
              <h3 className="text-[30px] leading-[28px] font-medium" style={{ color: "rgb(var(--primary))" }}>
                {p.title}
              </h3>
              <p className="text-sm muted">{p.desc}</p>

              <div className="flex gap-2">
                {p.tech.map((tName) => (
                  <span key={tName} className="pill">{tName}</span>
                ))}
              </div>

              {/* linkler altta dursun */}
              <div className="project-links mt-auto text-[16px] underline"
                   style={{ color: "rgb(var(--primary-strong))" }}>
                <a href={p.github} target="_blank" rel="noreferrer">Github</a>
                {p.site
                  ? <a href={p.site} target="_blank" rel="noreferrer">View Site</a>
                  : <span className="opacity-60 no-underline">Soon</span>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
