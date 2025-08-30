export default function Section({ title, subtitle, children }) {
  return (
    <div className="py-16 border-b" style={{ borderColor: 'rgb(var(--border))' }}>
      <div className="max-w-[1140px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
        {subtitle && <p className="mt-2" style={{ color: 'rgb(var(--muted))' }}>{subtitle}</p>}
        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
}
