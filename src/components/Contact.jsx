import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useLang } from "../contexts/LangContext.jsx";

export default function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState({ name:"", email:"", message:"" });
  const [loading, setLoading] = useState(false);
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return toast.error(t("contact.error"));
    try {
      setLoading(true);
      const res = await axios.post("https://reqres.in/api/workintech", form);
      if (res.status >= 200 && res.status < 300) {
        toast.success(t("contact.success"));
        setForm({ name:"", email:"", message:"" });
      } else {
        toast.warn(t("contact.unexpected"));
      }
    } catch {
      toast.error(t("contact.error"));
    } finally { setLoading(false); }
  };

  return (
    <section id="contact" className="py-16 border-b" style={{ borderColor:'rgb(var(--border))' }}>
      <div className="container-1140">
        <h2 className="text-[clamp(28px,6vw,48px)] leading-[1] font-semibold">{t("contact.title")}</h2>
        <form onSubmit={onSubmit} className="mt-6 grid gap-4 max-w-xl">
          <input name="name" value={form.name} onChange={onChange} placeholder={t("contact.name")}
                 className="px-3 py-2 rounded-xl border bg-transparent" style={{ borderColor:'rgb(var(--border))' }}/>
          <input name="email" value={form.email} onChange={onChange} placeholder={t("contact.email")}
                 className="px-3 py-2 rounded-xl border bg-transparent" style={{ borderColor:'rgb(var(--border))' }}/>
          <textarea name="message" rows="4" value={form.message} onChange={onChange} placeholder={t("contact.message")}
                    className="px-3 py-2 rounded-xl border bg-transparent" style={{ borderColor:'rgb(var(--border))' }}/>
          <button disabled={loading} className="btn btn-fill rounded-xl disabled:opacity-60">
            {loading ? t("buttons.sending") : t("buttons.send")}
          </button>
        </form>
      </div>
    </section>
  );
}
