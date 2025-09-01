import ErrorBoundary from "./components/ErrorBoundary.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Profile from "./components/Profile.jsx";   // <— YENİ
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";   // (kalsın, Figma’da Footer üstünde “contact” alanı yoksa şimdilik comment edebilirsin)
import Footer from "./components/Footer.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Profile />     {/* <-- Profile & About bloğu */}
          <Projects />
          {/* <Contact /> */} {/* İstersen sunumdan sonra göster */}
        </main>
        <Footer />
        <ToastContainer position="top-right" autoClose={2000} />
      </div>
    </ErrorBoundary>
  );
}
