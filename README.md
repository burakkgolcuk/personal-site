Kişisel Web Sitesi — Burak Gölcük

Live Demo: https://personal-site-xi-drab.vercel.app/

Kaynak Kod: (bu repo)

✨ Özellikler

Vite + React + TailwindCSS ile hızlı ve modern kurulum

Figma’ya birebir uyum (S12 ikinci tasarım — dark mode varyantlı)
Tasarım referansı: https://www.figma.com/design/YuAwEInBB8GqOO7wNosr5j/s12-design-darkmode?node-id=2-15

Bölümler: Navbar, Hero, Skills, Profile, Projects, Contact, Footer

Tema & Dil yönetimi (Global Store):

ThemeContext → Light/Dark (tercih localStorage’a yazılır)

LangContext → Türkçe / İngilizce (metinler sözlükten, tercih localStorage)

Responsive (mobil, tablet, masaüstü)

Projeler: Her kartta teknoloji pill’leri + GitHub / View Site linkleri

API Demo: axios ile https://reqres.in/api/workintech adresine POST (Toastify ile geri bildirim)

Erişilebilirlik & UX: semantik etiketler, net kontrast, klavye ile gezinilebilirlik

🧭 İçerik

Kurulum

Script’ler

Proje Yapısı

Çeviri (i18n) Mantığı

Yeni Proje Kartı Nasıl Eklenir?

Değerlendirme Kriterleri Eşlemesi

Ekran Görüntüleri

Dağıtım (Vercel)

İlgili Proje Linkleri

İletişim

Kurulum
git clone <bu-repo-url>
cd personal-site
npm install
npm run dev


Build & local preview:

npm run build
npm run preview


Proje Node 18+ ile test edildi.

Script’ler
Komut	Açıklama
npm run dev	Geliştirme sunucusu (Vite)
npm run build	Production build
npm run preview	Build sonrası yerel önizleme
Proje Yapısı
personal-site/
├─ public/
│  ├─ image.png
│  ├─ app-pizza.png
│  ├─ app-movies.png
│  └─ app-calculator.png
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
│  │  ├─ ThemeContext.jsx
│  │  └─ LangContext.jsx
│  ├─ hooks/
│  │  └─ useActiveSection.js
│  ├─ services/
│  │  └─ api.js              # axios instance (reqres.in)
│  ├─ utils/
│  │  └─ scrollToId.js
│  ├─ App.jsx
│  └─ index.css              # Tailwind + CSS değişkenleri (Figma tokenları)
├─ index.html
├─ tailwind.config.js
└─ postcss.config.js

Çeviri (i18n) Mantığı

Dil durumu LangContext ile globalde tutulur; localStorage’a yazılır.

Metinler dict.tr ve dict.en altında saklanır.

Bileşenlerde const { t } = useLang(); ile t("path.to.key") kullanılır.

Yeni bir metin eklemek için src/contexts/LangContext.jsx içindeki dict objesine TR/EN karşılıklarını ekleyin, bileşende t("...") ile çağırın.

Yeni Proje Kartı Nasıl Eklenir?

src/components/Projects.jsx içinde projects dizisine yeni bir obje ekleyin:

{
  id: "yeni-proje",
  title: { tr: "Yeni Proje", en: "New Project" },
  desc: {
    tr: "Türkçe açıklama...",
    en: "English description..."
  },
  image: "/app-new.png",     // public/app-new.png
  tech: ["react", "redux"],
  github: "https://github.com/kullanici/yeni-proje",
  site: "https://yeni-proje.vercel.app"
}


Görseli public/ klasörüne atın ve image alanına /dosya-adı.png yazın.

Linkler (GitHub / View Site) otomatik butonlanır.

Değerlendirme Kriterleri Eşlemesi

UI & Semantik HTML & CSS (2, %12): Figma’ya sadık, semantik section/heading yapısı, Tailwind yardımıyla tipografi/spacing hizaları.

Responsive & Dark Mode (3, %15): Grid/flex ile tüm breakpoint’lerde bozulmadan çalışır. Tema ThemeContext + CSS değişkenleriyle yönetilir.

Component & map (4, %7): Skills/Projects gibi listelerde map kullanımı, küçük ve öz bileşenler.

State/Props/Veri Akışı (5, %8): Context + props akışı net; tek yönlü veri akışı korunur.

Axios ile API (6, %7): Contact formu reqres.in’e POST atar; Toastify ile durum bildirimi.

Ek Kütüphaneler (7, %10): TailwindCSS, React-Toastify, Axios entegrasyonu.

LocalStorage (8, %8): Tema ve dil tercihleri persist edilir.

Global Store (9, %25): Context API ile global state; performans/erişilebilirlik odakları.

Yayınlama (10, %4): Vercel üzerinde canlı (link aşağıda).

Ekran Görüntüleri

/public/screens/ içine alıp README’de göster:

![Hero](public/screens/hero.png)
![Projects](public/screens/projects.png)

Dağıtım (Vercel)

Vercel hesabına giriş → New Project

GitHub reposunu seç → Build Command: npm run build, Output: dist

Deploy!
İsteğe bağlı: Custom domain bağlayabilirsin.

İlgili Proje Linkleri

Witflix (Film kataloğu / watchlist)
GitHub: https://github.com/burakkgolcuk/witflix

Live: (varsa ekleyin)

Teknolojik Yemekler (Pizza sipariş uygulaması)
GitHub: (kendi repo linkin)
Live: (varsa ekleyin)

Reducer Calculator (useReducer ile hesap makinesi)
GitHub: https://github.com/burakkgolcuk/reducer-calculator

Live: (varsa ekleyin)

Portföydeki Projects kartlarındaki linkler de bu URL’lere işaret ediyor.

İletişim

E-posta: burakkgolcuk@gmail.com

GitHub: https://github.com/burakkgolcuk

LinkedIn: https://www.linkedin.com/in/burak-g%C3%B6lc%C3%BCk-933b27381/