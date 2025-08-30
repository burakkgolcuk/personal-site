import { useLang } from "../contexts/LangContext";

export default function Hero() {
  const { t } = useLang();
  return (
    <section id="home" className="relative">
      <div className="max-w-[1140px] mx-auto">
        {/* İsim + çizgi */}
        <div className="mt-[150px] flex items-center gap-3">
          <div className="w-[102px] h-[0px] border-t" style={{ borderColor:'rgb(var(--primary-strong))' }} />
          <span className="text-[20px] leading-7 font-medium" style={{ color:'rgb(var(--primary))' }}>
            {t("hero.name")}
          </span>
        </div>

        {/* Başlık: clamp ile mobilde taşmayı önle */}
        <h1 className="mt-[68px] md:w-[596px] w-full text-[clamp(36px,10vw,72px)] leading-[1] md:leading-[72px] font-bold">
          {t("hero.title1")}<br/>{t("hero.title2")}
        </h1>

        <p className="mt-[12px] md:w-[553px] w-full text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] muted">
          {t("hero.desc")}
        </p>

        <div className="mt-[32px] md:mt-[40px] flex flex-wrap gap-3">
          <a href="#contact" className="btn btn-fill w-[131px] h-[52px]">Hire me</a>
          <a href="https://github.com/yourname" target="_blank" rel="noreferrer" className="btn btn-line w-[127px] h-[52px]">Github</a>
          <a href="https://linkedin.com/in/yourname" target="_blank" rel="noreferrer" className="btn btn-line w/[139px] h-[52px]">LinkedIn</a>
        </div>

        {/* Görsel: mobilde alta insin, md ve üstünde sağda sabitlensin */}
        <div
          className="mt-6 md:mt-0 md:absolute md:right-0 md:top-[28px] w-full md:w-[476px] h-[240px] md:h-[375px] rounded-[18px]"
          style={{
            boxShadow:'0px 8px 28px -6px rgba(24,39,75,0.12), 0px 18px 88px -4px rgba(24,39,75,0.14)',
            backgroundImage:'url(/image.png)', backgroundSize:'cover', backgroundPosition:'center'
          }}
          role="img" aria-label="Profile"
        />
      </div>
    </section>
  );
}
