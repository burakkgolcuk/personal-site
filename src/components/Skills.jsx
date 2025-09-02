// src/components/Skills.jsx
import { useLang } from "../contexts/LangContext.jsx";

export default function Skills() {
  const { t } = useLang();

  const items = [
    {
      id: "js",
      title: t("skills.items.js.title") || "JavaScript",
      desc:
        t("skills.items.js.desc") ||
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: "react",
      title: t("skills.items.react.title") || "React.js",
      desc:
        t("skills.items.react.desc") ||
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: "node",
      title: t("skills.items.node.title") || "Node.js",
      desc:
        t("skills.items.node.desc") ||
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <section id="skills" className="mt-[150px]">
      <div className="container-1140">
        <h2
          className="text-[48px] leading-[48px] font-semibold"
          style={{ color: "rgb(var(--fg))" }}
        >
          {t("skills.title") || "Skills"}
        </h2>

        <div className="mt-[24px] grid grid-cols-1 md:grid-cols-3 gap-x-[120px] gap-y-10">
          {items.map((it) => (
            <div key={it.id} className="w-[300px] h-[104px]">
              <h3
                className="text-[30px] leading-[28px] font-medium"
                style={{ color: "rgb(var(--primary))" }}
              >
                {it.title}
              </h3>
              <p
                className="mt-[28px] text-[12px] leading-4"
                style={{ color: "rgb(var(--muted))" }}
              >
                {it.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
