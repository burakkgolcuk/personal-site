// src/App.jsx
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Profile from "./components/Profile.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A14]">
      {/* Erişilebilirlik için skip-link (isteğe bağlı) */}
      <a
  href="#main"
  className="sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[9999] focus:px-3 focus:py-2 focus:rounded focus:bg-white focus:text-black dark:focus:bg-black dark:focus:text-white"
  onClick={(e) => {
    // #main'e odak ver, sonra skip-link'i blur et
    const main = document.getElementById("main");
    if (main) {
      // odaklanabilmesi için tabindex
      if (!main.hasAttribute("tabindex")) main.setAttribute("tabindex", "-1");
      main.focus({ preventScroll: true });
      main.scrollIntoView({ behavior: "smooth" });
    }
    e.currentTarget.blur();
  }}
>
  İçeriğe geç
</a>

      <Navbar />

      <main id="main">
        {/* Bu bileşenlerin kendi içinde id'leri (home/skills/projects/contact) tanımlı.
            Eğer bazıları yoksa ilgili komponentte section id ekleyebilirsin. */}
        <Hero />
        <Skills />
        <Projects />
        <Profile />
        <Contact />
      </main>

      <Footer />

      {/* Bildirimler */}
      <ToastContainer position="top-right" autoClose={2500} theme="colored" />
    </div>
  );
}
