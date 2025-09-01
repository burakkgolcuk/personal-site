export default function Footer() {
  return (
    <footer className="mt-[96px]">
      <div className="w-full bg-[#F9F9F9]">
        <div className="container-1140 py-[40px]">
          {/* Callout */}
          <h3 className="text-[42px] leading-[52px] font-semibold text-[#1F2937] max-w-[540px]">
            Let’s work together on your next product.
          </h3>

          {/* Alt satır: solda e-posta, sağda linkler */}
          <div className="mt-[28px] flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* e-posta */}
            <a
              href="mailto:burak@example.com"
              className="inline-flex items-center gap-2 text-[20px] leading-[24px] font-medium underline"
              style={{ color: "#AF0C48" }}
            >
              👉 burakkgolcuk@gmail.com
            </a>

            {/* Sağ linkler */}
            <nav className="flex items-start gap-[20px] text-[18px] leading-[27px] font-medium">
              <a href="#" className="text-[#0A0A14]">Personal Blog</a>
              <a href="https://github.com/burakkgolcuk" target="_blank" rel="noreferrer" className="text-[#00AB6B]">Github</a>
              <a href="https://www.linkedin.com/in/burak-g%C3%B6lc%C3%BCk-933b27381/" target="_blank" rel="noreferrer" className="text-[#0077B5]">Linkedin</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
