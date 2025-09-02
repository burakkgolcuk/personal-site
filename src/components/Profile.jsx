// src/components/Profile.jsx
import { useLang } from "../contexts/LangContext.jsx";

export default function Profile() {
  const { t } = useLang();

  return (
    <section id="profile" className="mt-[64px]">
      <div className="container-1140 relative">
        <div
          className="absolute left-[5px] right-[5px] top-[-32px] h-px"
          style={{ backgroundColor: "rgb(var(--border))" }}
        />
        <h2
          className="text-[48px] leading-[48px] font-semibold"
          style={{ color: "rgb(var(--fg))" }}
        >
          {t("sections.profile")}
        </h2>

        <div className="mt-[26px] grid md:grid-cols-2 gap-8">
          {/* Profil kutusu */}
          <div className="relative">
            <h3
              className="text-[30px] leading-[28px] font-medium"
              style={{ color: "rgb(var(--primary))" }}
            >
              {t("profile.heading")}
            </h3>

            <div className="mt-4 grid grid-cols-[1fr_1.2fr] gap-y-2 text-[18px] leading-[36px]">
              <div className="font-semibold">
                <div>{t("profile.labels.birth")}</div>
                <div>{t("profile.labels.city")}</div>
                <div>{t("profile.labels.education")}</div>
                <div>{t("profile.labels.role")}</div>
              </div>
              <div>
                <div>{t("profile.values.birth")}</div>
                <div>{t("profile.values.city")}</div>
                <div>{t("profile.values.education")}</div>
                <div>{t("profile.values.role")}</div>
              </div>
            </div>
          </div>

          {/* Hakkımda kutusu */}
          <div className="relative">
            <h3
              className="text-[30px] leading-[28px] font-medium"
              style={{ color: "rgb(var(--primary))" }}
            >
              {t("about.heading")}
            </h3>
            <p
              className="mt-4 text-[18px] leading-[27px]"
              style={{ color: "rgb(var(--muted))" }}
            >
              {t("about.body")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
