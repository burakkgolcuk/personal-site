import { useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { useLang } from "../contexts/LangContext.jsx";

export default function Contact() {
  const { t, lang } = useLang();
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onChange = (e) =>
    setValues((s) => ({ ...s, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!values.name || !values.email || !values.message) {
      toast.warn(t?.("contact.fillAll") || "Lütfen tüm alanları doldurun.");
      return;
    }
    try {
      setLoading(true);
      // İstenen endpoint: https://reqres.in/api/workintech  (POST)
      const payload = {
        ...values,
        lang,
        dt: new Date().toISOString(),
      };
      const res = await api.post("/workintech", payload);
      if (res.status >= 200 && res.status < 300) {
        toast.success(t?.("contact.success") || "Mesajın gönderildi!");
        setValues({ name: "", email: "", message: "" });
      } else {
        toast.error(t?.("contact.fail") || "Bir şeyler ters gitti.");
      }
    } catch (err) {
      console.error(err);
      toast.error(t?.("contact.fail") || "Bir şeyler ters gitti.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="mt-[96px]">
      <div className="container-1140">
        <h2
          className="text-[48px] leading-[48px] font-semibold"
          style={{ color: "rgb(var(--fg))" }}
        >
          {t?.("contact.title") || "İletişim"}
        </h2>

        <form onSubmit={onSubmit} className="mt-6 grid gap-4 max-w-xl">
          <input
            name="name"
            placeholder={t?.("contact.name") || "Adın"}
            value={values.name}
            onChange={onChange}
            className="input"
          />
          <input
            name="email"
            type="email"
            placeholder={t?.("contact.email") || "E-posta"}
            value={values.email}
            onChange={onChange}
            className="input"
          />
          <textarea
            name="message"
            rows={5}
            placeholder={t?.("contact.message") || "Mesajın"}
            value={values.message}
            onChange={onChange}
            className="textarea"
          />
          <button
            disabled={loading}
            type="submit"
            className="btn btn-fill h-[52px] rounded-[6px]"
          >
            {loading
              ? t?.("contact.sending") || "Gönderiliyor..."
              : t?.("contact.send") || "Gönder"}
          </button>
        </form>
      </div>
    </section>
  );
}
