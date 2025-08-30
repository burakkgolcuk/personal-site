export default function Skills() {
  return (
    <section id="skills" className="mt-[150px]">
      <div className="max-w-[1140px] mx-auto">
        <h2 className="text-[48px] leading-[48px] font-semibold">Skills</h2>
        <div className="mt-[24px] grid grid-cols-1 md:grid-cols-3 gap-x-[120px] gap-y-10">
          <div className="w-[300px] h-[104px]">
            <h3 className="text-[30px] leading-[28px] font-medium" style={{ color:'rgb(var(--primary))' }}>Java Script</h3>
            <p className="mt-[28px] text-[12px] leading-4" style={{ color:'rgb(var(--muted))' }}>
              Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>
          <div className="w-[300px] h-[104px]">
            <h3 className="text-[30px] leading-[28px] font-medium" style={{ color:'rgb(var(--primary))' }}>React.Js</h3>
            <p className="mt-[28px] text-[12px] leading-4" style={{ color:'rgb(var(--muted))' }}>Sunt in culpa qui officia.</p>
          </div>
          <div className="w-[300px] h-[104px]">
            <h3 className="text-[30px] leading-[28px] font-medium" style={{ color:'rgb(var(--primary))' }}>Node.Js</h3>
            <p className="mt-[28px] text-[12px] leading-4" style={{ color:'rgb(var(--muted))' }}>Deserunt mollit anim id est.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
