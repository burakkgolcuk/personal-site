// src/components/Footer.jsx
import { useLang } from "../contexts/LangContext.jsx";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="mt-[96px]">
      {/* Figma: light #F9F9F9, dark'ta arka plan koyu */}
      <div className="w-full bg-[#F9F9F9] dark:bg-[#0A0A14]">
        <div className="container-1140 py-[40px]">
          {/* Callout */}
          <h3
            className="text-[42px] leading-[52px] font-semibold max-w-[540px]"
            style={{ color: "rgb(var(--fg))" }}
          >
            {t("footer.cta")}
          </h3>

          {/* Alt satır: solda e-posta, sağda linkler */}
          <div className="mt-[28px] flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* e-posta */}
            <a
              href="mailto:burakkgolcuk@gmail.com"
              className="inline-flex items-center gap-2 text-[20px] leading-[24px] font-medium underline"
              style={{ color: "#AF0C48" }}
            >
              <span>{t("footer.emailLabel")}</span> burakkgolcuk@gmail.com
            </a>

            {/* Sağ linkler */}
            <nav className="flex items-start gap-[20px] text-[18px] leading-[27px] font-medium">
              <a href="#" className="text-[#0A0A14] dark:text-[rgb(var(--fg))]">
                {t("footer.websites.blog")}
              </a>
              <a
                href="https://github.com/burakkgolcuk"
                target="_blank"
                rel="noreferrer"
                className="text-[#00AB6B]"
              >
                {t("footer.websites.github")}
              </a>
              <a
                href="https://www.linkedin.com/in/burak-g%C3%B6lc%C3%BCk-933b27381/"
                target="_blank"
                rel="noreferrer"
                className="text-[#0077B5]"
              >
                {t("footer.websites.linkedin")}
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
