export default function Profile() {
  return (
    <section id="profile" className="mt-[72px]">
      <div className="container-1140">
        {/* üst çizgi */}
        <div className="divider w-full" />

        {/* Section başlığı */}
        <h2
          className="mt-[39px] text-[48px] leading-[48px] font-semibold"
          style={{ color: "rgb(var(--fg))" }}
        >
          Profile
        </h2>

        {/* 2 kolon */}
        <div className="mt-[28px] grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
          {/* Sol kolon */}
          <div>
            <h3
              className="text-[30px] leading-[28px] font-medium"
              style={{ color: "rgb(var(--primary))" }}
            >
              Profile
            </h3>

            <dl className="mt-[20px] grid grid-cols-[155px_1fr] gap-y-[8px] text-[18px] leading-[36px]">
              <dt className="font-semibold" style={{ color: "rgb(var(--fg))" }}>Doğum tarihi</dt>
              <dd style={{ color: "rgb(var(--fg))" }}>13.02.1992</dd>

              <dt className="font-semibold" style={{ color: "rgb(var(--fg))" }}>İkamet Şehri</dt>
              <dd style={{ color: "rgb(var(--fg))" }}>Denizli</dd>

              <dt className="font-semibold" style={{ color: "rgb(var(--fg))" }}>Eğitim Durumu</dt>
              <dd style={{ color: "rgb(var(--fg))" }}>Pamukkale Ünv. Matematik Lisans, 2016</dd>

              <dt className="font-semibold" style={{ color: "rgb(var(--fg))" }}>Tercih Ettiği Rol</dt>
              <dd style={{ color: "rgb(var(--fg))" }}>Frontend, UI</dd>
            </dl>
          </div>

          {/* Sağ kolon */}
          <div>
            <h3
              className="text-[30px] leading-[28px] font-medium"
              style={{ color: "rgb(var(--primary))" }}
            >
              About Me
            </h3>
            <p
              className="mt-[16px] text-[18px] leading-[27px] max-w-[558px]"
              style={{ color: "rgb(var(--muted))" }}
            >
              Merhaba! Kısa bir biyografi metni burada. Kullanıcı odaklı, ölçeklenebilir
              arayüzler geliştiriyorum. React, Redux ve modern JS araçlarıyla çalışmayı seviyorum.
              Ekip içinde iletişime ve temiz koda önem veriyorum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
