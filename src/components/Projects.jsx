import { useLang } from "../contexts/LangContext.jsx";

export default function Projects() {
  const { t } = useLang();
  const list = t("projects.list") || [];

  return (
    <section id="projects" className="mt-[96px]">
      <div className="max-w-[1140px] mx-auto">
        <div className="divider w-full" />
        <h2 className="mt-[42px] text-[36px] md:text-[48px] leading-[1] font-semibold">
          {t("projects.title")}
        </h2>

        <div className="mt-[36px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[60px] lg:gap-x-[120px] gap-y-10">
          {list.map((p, i) => (
            <article key={i} className="w-[300px] min-h-[449px] flex flex-col gap-[18px]">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="w-[300px] h-[180px] rounded-[6px] object-cover"
              />
              <h3 className="text-[30px] leading-[28px] font-medium" style={{ color:'rgb(var(--primary))' }}>
                {p.title}
              </h3>
              <p className="text-[14px] leading-[18px]" style={{ color:'rgb(var(--muted))' }}>
                {p.desc}
              </p>
              <div className="flex gap-[6px]">
                {p.tech?.map((tech, j) => (
                  <span key={j} className="pill text-[14px] font-medium tracking-[-0.05em]"
                        style={{ color:'rgb(var(--primary-strong))' }}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between text-[16px] leading-4 font-medium mt-auto">
                <a className="underline" style={{ color:'rgb(var(--primary-strong))' }} href={p.github || '#'} target="_blank" rel="noreferrer">Github</a>
                <a className="underline" style={{ color:'rgb(var(--primary-strong))' }} href={p.url || '#'} target="_blank" rel="noreferrer">View Site</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
