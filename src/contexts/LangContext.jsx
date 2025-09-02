// src/contexts/LangContext.jsx
import { createContext, useContext, useMemo, useState, useEffect } from "react";

const LangContext = createContext();

const dict = {
  tr: {
    nav: { profile: "Profil", skills: "Yetenekler", projects: "Projeler", contact: "İletişim" },
    hero: {
      title1: "Yaratıcı düşünür",
      title2: "Minimalizm tutkunu",
      desc: "Güçlü arayüzler ve ölçeklenebilir frontend ürünleri geliştiriyorum. Birlikte harika şeyler yapalım.",
    },
    buttons: { hire: "Bana Ulaş", github: "Github", linkedin: "LinkedIn" },
    sections: { profile: "Profil", skills: "Yetenekler", projects: "Projeler" },

    // ---- Profile/About ----
    profile: {
      heading: "Profil",
      labels: {
        birth: "Doğum tarihi",
        city: "İkamet Şehri",
        education: "Eğitim Durumu",
        role: "Tercih Ettiği Rol",
      },
      values: {
        birth: "24.03.1996",
        city: "Ankara",
        education: "Hacettepe Ünv. Biyoloji Lisans, 2016",
        role: "Frontend, UI",
      },
    },
    about: {
      heading: "Hakkımda",
      body:
        "Kullanıcı deneyimine odaklanan, ölçeklenebilir ve sağlam arayüzler geliştiriyorum. Performans, erişilebilirlik ve temiz kod benim için öncelik.",
    },

    // ---- Projects ----
    projects: { title: "Projeler", github: "Github", view: "Siteyi Gör" },

    // ---- Contact ----
    contact: {
      title: "İletişim",
      name: "Adın",
      email: "E-posta",
      message: "Mesajın",
      send: "Gönder",
      sending: "Gönderiliyor...",
      fillAll: "Lütfen tüm alanları doldurun.",
      success: "Mesajın gönderildi!",
      fail: "Bir şeyler ters gitti.",
    },

    footer: {
      cta: "Bir sonraki ürününde birlikte çalışalım.",
      emailLabel: "👉",
      websites: { blog: "Kişisel Blog", github: "Github", linkedin: "Linkedin" },
    },
  },

  en: {
    nav: { profile: "Profile", skills: "Skills", projects: "Projects", contact: "Contact" },
    hero: {
      title1: "Creative thinker",
      title2: "Minimalism lover",
      desc: "I craft solid, scalable front-ends with delightful UX. Let’s build together.",
    },
    buttons: { hire: "Hire me", github: "Github", linkedin: "LinkedIn" },
    sections: { profile: "Profile", skills: "Skills", projects: "Projects" },

    profile: {
      heading: "Profile",
      labels: {
        birth: "Birth Date",
        city: "City",
        education: "Education",
        role: "Preferred Role",
      },
      values: {
        birth: "1996-03-24",
        city: "Ankara",
        education: "Hacettepe Univ. Biology BSc, 2016",
        role: "Frontend, UI",
      },
    },
    about: {
      heading: "About Me",
      body:
        "I focus on usability, performance and clean code to build scalable, robust front-end experiences.",
    },

    projects: { title: "Projects", github: "Github", view: "View Site" },

    contact: {
      title: "Contact",
      name: "Your name",
      email: "Email",
      message: "Message",
      send: "Send",
      sending: "Sending...",
      fillAll: "Please fill all fields.",
      success: "Your message has been sent!",
      fail: "Something went wrong.",
    },

    footer: {
      cta: "Let’s work together on your next product.",
      emailLabel: "👉",
      websites: { blog: "Personal Blog", github: "Github", linkedin: "Linkedin" },
    },
  },
};

export function LangProvider({ children }) {
  const getInitial = () => localStorage.getItem("lang") || "tr";
  const [lang, setLang] = useState(getInitial);
  useEffect(() => { localStorage.setItem("lang", lang); }, [lang]);

  const t = (path) => {
    const parts = path.split(".");
    let cur = dict[lang];
    for (const p of parts) cur = cur?.[p];
    return cur ?? path;
  };

  const value = useMemo(() => ({ lang, setLang, t }), [lang]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() { return useContext(LangContext); }
