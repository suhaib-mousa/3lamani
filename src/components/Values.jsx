const values = [
  { label: 'العدل', desc: 'ميزان الحق في الحكم والتعامل' },
  { label: 'الشجاعة', desc: 'ثبات عند الموقف الصعب' },
  { label: 'الحكمة', desc: 'رؤية المعنى قبل ظاهر الحدث' },
  { label: 'الزهد', desc: 'صفاء وبساطة في الطريق' },
  { label: 'القيادة', desc: 'مسؤولية تجمع الرحمة والحزم' },
  { label: 'البصيرة', desc: 'وعي يصل الماضي بالحاضر' },
];

export default function Values() {
  return (
    <section id="values" className="values-section paper-pattern">
      <div className="container-grid values-grid">
        <div className="values-intro section-reveal">
          <div className="eyebrow">
            <span className="diamond-mark" />
            <span>ما تحمله السلسلة</span>
            <span className="eyebrow-line" />
          </div>
          <h2>القيم كعلامات قراءة</h2>
          <p>
            تظهر القيم كملصقات مخطوطية صغيرة بحضور هادئ يشبه زخارف الغلاف البرتقالية.
          </p>
        </div>

        <div className="manuscript-labels section-reveal">
          {values.map((value, index) => (
            <article key={value.label} className="value-label">
              <span className="value-number">{String(index + 1).padStart(2, '0')}</span>
              <h3>{value.label}</h3>
              <p>{value.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
