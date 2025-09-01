// src/components/Hero.jsx
import { useLang } from "../contexts/LangContext.jsx";

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="home" className="mt-[48px] md:mt-[72px]">
      <div className="container-1140 relative grid md:grid-cols-[596px_1fr] gap-8">
        {/* Sol blok */}
        <div>
          {/* İsim çizgisi + ad */}
          <div className="flex items-center gap-3">
            <span className="block w-[102px] h-[0px] border-t"
                  style={{ borderColor: "rgb(var(--primary-strong))" }} />
            <span className="text-[20px] leading-7 font-medium"
                  style={{ color: "rgb(var(--primary))" }}>
              Burak
            </span>
          </div>

          {/* Büyük başlık */}
          <h1 className="mt-3 text-[72px] leading-[72px] font-bold"
              style={{ color: "rgb(var(--fg))" }}>
            {t("hero.title1")} <br /> {t("hero.title2")}
          </h1>

          {/* Açıklama */}
          <p className="mt-4 text-[18px] leading-[28px]"
             style={{ color: "rgb(var(--muted))" }}>
            {t("hero.desc")}
          </p>

          {/* Butonlar */}
          <div className="mt-6 flex items-center gap-3">
            {/* Hire me */}
            <a href="#contact" className="btn btn-fill h-[52px] rounded-[6px]">
              {t("buttons.hire")}
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/burakkgolcuk"
              target="_blank"
              rel="noreferrer"
              className="btn btn-line h-[52px] rounded-[6px] flex items-center gap-2"
              aria-label="GitHub"
              title="GitHub"
            >
              <GitHubIcon className="w-[20px] h-[20px]" />
              <span>{t("buttons.github")}</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/burak-g%C3%B6lc%C3%BCk-933b27381/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-line h-[52px] rounded-[6px] flex items-center gap-2"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <LinkedInIcon className="w-[20px] h-[20px]" />
              <span>{t("buttons.linkedin")}</span>
            </a>
          </div>
        </div>

        {/* Sağ görsel */}
        <img
          src="/image.png"
          alt="Profile"
          className="md:absolute md:right-0 md:top-[28px] w-full md:w-[476px] h-[240px] md:h-[375px] object-cover rounded-[18px] shadow-[0_8px_28px_-6px_rgba(24,39,75,0.12),0_18px_88px_-4px_rgba(24,39,75,0.14)]"
          loading="lazy"
        />
      </div>
    </section>
  );
}

/* ---- Inline ikonlar (paketsiz) ---- */
function GitHubIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.9 5.33.9 11.6c0 4.87 3.16 8.99 7.55 10.45.55.1.75-.24.75-.53 0-.26-.01-1.14-.02-2.06-3.07.67-3.72-1.32-3.72-1.32-.5-1.27-1.22-1.61-1.22-1.61-.99-.68.08-.66.08-.66 1.1.08 1.68 1.13 1.68 1.13.97 1.66 2.55 1.18 3.17.9.1-.7.38-1.18.69-1.45-2.45-.28-5.02-1.22-5.02-5.44 0-1.2.43-2.18 1.13-2.96-.11-.28-.49-1.4.11-2.92 0 0 .93-.3 3.05 1.13.88-.24 1.82-.36 2.75-.36.94 0 1.88.12 2.76.36 2.12-1.43 3.05-1.13 3.05-1.13.6 1.52.22 2.64.11 2.92.7.78 1.12 1.76 1.12 2.96 0 4.23-2.58 5.16-5.04 5.43.39.34.73 1.01.73 2.05 0 1.48-.01 2.68-.01 3.05 0 .29.19.64.76.53 4.38-1.46 7.54-5.58 7.54-10.45C23.1 5.33 18.27.5 12 .5z" />
    </svg>
  );
}

function LinkedInIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v16h-4zM8.5 8h3.8v2.2h.05c.53-1 1.82-2.2 3.75-2.2 4 0 4.7 2.6 4.7 6V24h-4v-7c0-1.7 0-3.9-2.4-3.9-2.4 0-2.8 1.9-2.8 3.8V24h-4z" />
    </svg>
  );
}
