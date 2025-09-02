# Burak Gölcük — Kişisel Web Sitesi

[![Vite](https://img.shields.io/badge/build-Vite-646CFF.svg)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/ui-React-61DAFB.svg)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/css-Tailwind-38BDF8.svg)](https://tailwindcss.com/)

**Live Demo:** https://personal-site-xi-drab.vercel.app/  
**Kaynak Kod:** (bu repo)

Kişisel portföyüm. Figma’daki (S12 – alternatif 2) tasarıma birebir uyum, **Dark/Light tema**, **TR/EN dil desteği**, **responsive** düzen, **projeler** bölümü ve **iletişim formu (axios + reqres.in)** içerir.

---

## İçindekiler

- [Özellikler](#özellikler)
- [Teknolojiler](#teknolojiler)
- [Kurulum](#kurulum)
- [Komutlar](#komutlar)
- [Proje Yapısı](#proje-yapısı)
- [Dil (i18n) Kullanımı](#dil-i18n-kullanımı)
- [Tema (Dark/Light)](#tema-darklight)
- [Projeler Bölümü](#projeler-bölümü)
- [İletişim Formu (Axios + reqres.in)](#iletişim-formu-axios--reqresin)
- [Dağıtım (Vercel)](#dağıtım-vercel)
- [Ekran Görüntüleri](#ekran-görüntüleri)
- [Değerlendirme Kriterleri Eşlemesi](#değerlendirme-kriterleri-eşlemesi)
- [İletişim](#iletişim)

---

## Özellikler

- 🎨 **Figma’ya Sadık UI** (S12, alternatif 2 – Dark Mode varyantı)
- 🌓 **Tema**: Dark/Light (tercih LocalStorage’da saklanır)
- 🌐 **Dil**: Türkçe & İngilizce (Global sözlük + LocalStorage)
- 📱 **Responsive**: Mobil / Tablet / Masaüstü
- 🧩 **Bileşen Bazlı Mimari**: Navbar, Hero, Skills, Profile, Projects, Contact, Footer
- 🔗 **Projeler**: Kart yapısı, teknoloji “pill”leri, GitHub / View Site linkleri
- 📡 **API Demo**: `axios` ile `https://reqres.in/api/workintech`’e POST (Toastify ile geri bildirim)
- ♿ **Erişilebilirlik**: Semantik etiketler, net kontrast, klavye ile gezilebilirlik

---

## Teknolojiler

- **Vite** + **React**
- **TailwindCSS**
- **Axios**, **React-Toastify**
- Global durum: **Context API** (Theme & Lang)
- Figma token’ları: `src/index.css` (CSS değişkenleri)

---

## Kurulum

> Proje **Node 18+** ile test edildi.

```bash
git clone <bu-reponun-urlsi>
cd personal-site
npm install
npm run dev



Build & preview:

npm run build
npm run preview



| Komut             | Açıklama                     |
| ----------------- | ---------------------------- |
| `npm run dev`     | Geliştirme sunucusu (Vite)   |
| `npm run build`   | Production build             |
| `npm run preview` | Build sonrası yerel önizleme |



personal-site/
├─ public/
│  ├─ image.png                # Hero görseli
│  ├─ app-pizza.png            # Projects: Teknolojik Yemekler
│  ├─ app-movies.png           # Projects: Witflix (film/watchlist)
│  └─ app-calculator.png       # Projects: Reducer Calculator
├─ src/
│  ├─ components/
│  │  ├─ Navbar.jsx
│  │  ├─ Hero.jsx
│  │  ├─ Skills.jsx
│  │  ├─ Profile.jsx
│  │  ├─ Projects.jsx
│  │  ├─ Contact.jsx
│  │  └─ Footer.jsx
│  ├─ contexts/
│  │  ├─ ThemeContext.jsx      # dark/light + localStorage
│  │  └─ LangContext.jsx       # TR/EN sözlük + localStorage
│  ├─ hooks/
│  │  └─ useActiveSection.js   # aktif nav link için küçük yardımcı
│  ├─ services/
│  │  └─ api.js                # axios instance (reqres.in)
│  ├─ utils/
│  │  └─ scrollToId.js
│  ├─ App.jsx
│  └─ index.css                # Tailwind + Figma tokenları
├─ index.html
├─ tailwind.config.js
└─ postcss.config.js


Dil (i18n) Kullanımı

Dil yönetimi i18n kütüphanesi olmadan, LangContext.jsx içindeki dict sözlüğü ile yapılır.

Bileşende:

import { useLang } from "../contexts/LangContext.jsx";
const { t, lang, setLang } = useLang();
<h2>{t("projects.title")}</h2>


Tema ThemeContext.jsx ile yönetilir, CSS değişkenleri index.css’te tanımlıdır.

Kök elemana .dark sınıfı eklenir/çıkarılır.

Kullanıcı tercihi localStorage’a yazılır.

Figma renkleri :root ve .dark içinde RGB değişken olarak saklanır (örn. --primary).


Projeler Bölümü

src/components/Projects.jsx içindeki projects dizisi kartları üretir.
TR/EN açıklama için nesne kullanılır:


{
  id: "witflix",
  title: "Witflix",
  desc: { tr: "Film kataloğu / watchlist özellikli React projesi.", en: "React movie catalogue with watchlist." },
  image: "/app-movies.png",
  tech: ["react", "redux", "axios"],
  github: "https://github.com/burakkgolcuk/witflix",
  site: "" // deploy sonrası ekle
}


Görseli public/ içine koy, image alanını /dosya.png şeklinde ver.

İletişim Formu (Axios + reqres.in)

Contact.jsx formu api.js (axios instance) üzerinden POST atar:

POST https://reqres.in/api/workintech


Başarı/Hata durumları React-Toastify ile bildirilir.

Gönderilen payload: name, email, message, lang, dt




Dağıtım (Vercel)

Vercel
 → New Project

GitHub reposunu seç

Build Command: npm run build — Output: dist

Deploy → Live: https://personal-site-xi-drab.vercel.app/

İsteğe bağlı: Custom domain bağlayabilirsin.