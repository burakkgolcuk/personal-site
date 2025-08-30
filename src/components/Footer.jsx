export default function Footer() {
  return (
    <footer className="mt-[150px] w-full" style={{ background:'#F9F9F9' }}>
      <div className="max-w-[1140px] mx-auto py-[60px]">
        <h3 className="w-[540px] text-[42px] leading-[52px] font-semibold">
          Let’s work together on your next product.
        </h3>
        <div className="mt-[64px] flex items-center justify-between">
          <div className="flex items-center gap-[2px]">
            <span className="text-[20px] leading-6 font-medium">👉</span>
            <a href="mailto:almilasucode@gmail.com" className="text-[20px] leading-6 font-medium underline" style={{ color:'#AF0C48' }}>
              almilasucode@gmail.com
            </a>
          </div>
          <div className="flex items-start gap-[20px] text-[18px] leading-[27px] font-medium">
            <a href="#" className="hover:underline" style={{ color:'#0A0A14' }}>Personal Blog</a>
            <a href="https://github.com/yourname" className="hover:underline" style={{ color:'#00AB6B' }}>Github</a>
            <a href="https://linkedin.com/in/yourname" className="hover:underline" style={{ color:'#0077B5' }}>Linkedin</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
