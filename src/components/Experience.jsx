export default function Experience() {
  return (
    <section id="experience" className="py-16 border-b" style={{ borderColor:'rgb(var(--border))' }}>
      <div className="max-w-[1140px] mx-auto">
        <h2 className="text-[36px] md:text-[48px] leading-[1] font-semibold">Experience</h2>
        <ol className="mt-6 relative border-s ps-6" style={{ borderColor:'rgb(var(--border))' }}>
          <li className="mb-8">
            <span className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full" style={{ background:'rgb(var(--muted))' }} />
            <h3 className="font-semibold">Frontend Intern — Workintech</h3>
            <p className="text-sm muted">2025</p>
            <p className="mt-1 text-sm">React ile modüler arayüzler.</p>
          </li>
        </ol>
      </div>
    </section>
  );
}
