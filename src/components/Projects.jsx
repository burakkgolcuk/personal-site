import { useLang } from "../contexts/LangContext.jsx";

export default function Projects() {
  const { t } = useLang();
  const list = t("projects.list") || [];

  return (
    <section id="projects" className="mt-[96px]">
      <div className="container-1140">
        {/* üst çizgi */}
        <div className="divider w-full" />

        {/* Başlık */}
        <h2
          className="mt-[42px] text-[48px] leading-[48px] font-semibold"
          style={{ color: "rgb(var(--fg))" }}
        >
          {t("projects.title")}
        </h2>

        {/* Kartlar */}
        <div className="mt-[36px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[60px] lg:gap-x-[120px] gap-y-10">
          {list.map((p, i) => (
            <article key={i} className="w-[300px] flex flex-col gap-[12px]">
              {/* Görsel */}
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="w-[300px] h-[180px] rounded-[6px] object-cover"
              />

              {/* Başlık */}
              <h3
                className="text-[30px] leading-[28px] font-medium"
                style={{ color: "rgb(var(--primary))" }}
              >
                {p.title}
              </h3>

              {/* Açıklama */}
              <p
                className="text-[14px] leading-[18px]"
                style={{ color: "rgb(var(--muted))" }}
              >
                {p.desc}
              </p>

              {/* Tech pill’ler */}
              <div className="flex flex-wrap items-start gap-[6px] mt-[4px]">
                {p.tech?.map((tech, j) => (
                  <span
                    key={j}
                    className="inline-flex items-center rounded border text-[14px] font-medium tracking-[-0.05em] px-[18px] py-[6px]"
                    style={{
                      borderColor: "rgb(var(--primary-strong))",
                      color: "rgb(var(--primary-strong))",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Linkler – metnin hemen altında */}
              <div className="mt-[8px] flex items-center justify-between text-[16px] leading-4 font-medium">
                <a
                  className="underline"
                  style={{ color: "rgb(var(--primary-strong))" }}
                  href={p.github || "#"}
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  className="underline"
                  style={{ color: "rgb(var(--primary-strong))" }}
                  href={p.url || "#"}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Site
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
