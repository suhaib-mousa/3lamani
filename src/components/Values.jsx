const values = [
  {
    label: 'العدل',
    arabic: 'ع',
    desc: 'الحكم بالحق والإنصاف بين الناس',
    icon: '⚖',
  },
  {
    label: 'الشجاعة',
    arabic: 'ش',
    desc: 'الثبات في وجه المحن والتحديات',
    icon: '⚔',
  },
  {
    label: 'الحكمة',
    arabic: 'ح',
    desc: 'التفكير البعيد وإصابة الرأي الصواب',
    icon: '◈',
  },
  {
    label: 'الزهد',
    arabic: 'ز',
    desc: 'البُعد عن ملذات الدنيا وزخارفها',
    icon: '✦',
  },
  {
    label: 'القيادة',
    arabic: 'ق',
    desc: 'تحمّل المسؤولية وقيادة الأمة بالحكمة',
    icon: '◆',
  },
  {
    label: 'البصيرة',
    arabic: 'ب',
    desc: 'رؤية الحقائق وإدراك ما وراء الظاهر',
    icon: '◉',
  },
];

function ValueCard({ value, index }) {
  const delay = index * 100;
  return (
    <article
      className="section-reveal group relative flex flex-col gap-4 p-6 rounded-sm cursor-default transition-all duration-400"
      style={{
        animationDelay: `${delay}ms`,
        background: 'rgba(13, 30, 53, 0.5)',
        border: '1px solid rgba(138, 106, 59, 0.2)',
        backdropFilter: 'blur(4px)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.border = '1px solid rgba(201, 106, 27, 0.4)';
        e.currentTarget.style.background = 'rgba(13, 30, 53, 0.8)';
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(201,106,27,0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.border = '1px solid rgba(138, 106, 59, 0.2)';
        e.currentTarget.style.background = 'rgba(13, 30, 53, 0.5)';
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Large decorative Arabic letter watermark */}
      <div
        className="absolute bottom-2 left-3 select-none pointer-events-none"
        style={{
          fontSize: '4.5rem',
          fontFamily: 'Tajawal, sans-serif',
          fontWeight: 900,
          color: 'rgba(201, 106, 27, 0.06)',
          lineHeight: 1,
        }}
        aria-hidden="true"
      >
        {value.arabic}
      </div>

      {/* Top icon + label */}
      <div className="flex items-start justify-between">
        <span
          className="text-xs font-medium tracking-widest opacity-40"
          style={{ color: 'var(--orange)', fontFamily: 'Tajawal, sans-serif' }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Kufi ornamental diamond */}
        <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
          <rect
            x="6" y="6" width="8" height="8"
            fill="none"
            stroke="var(--orange)"
            strokeWidth="1"
            transform="rotate(45 10 10)"
            opacity="0.35"
          />
          <rect
            x="8.5" y="8.5" width="3" height="3"
            fill="var(--orange)"
            transform="rotate(45 10 10)"
            opacity="0.4"
          />
        </svg>
      </div>

      {/* Value label */}
      <h3
        className="font-black text-right"
        style={{
          fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
          color: 'var(--cream)',
          fontFamily: 'Tajawal, sans-serif',
          fontWeight: 900,
          lineHeight: 1,
        }}
      >
        {value.label}
      </h3>

      {/* Thin divider */}
      <div
        className="w-10 h-px self-end"
        style={{ background: 'var(--orange)', opacity: 0.4 }}
      />

      {/* Description */}
      <p
        className="text-right text-sm leading-relaxed"
        style={{
          color: 'var(--cream-muted)',
          fontFamily: 'Tajawal, sans-serif',
          lineHeight: 1.8,
        }}
      >
        {value.desc}
      </p>
    </article>
  );
}

export default function Values() {
  return (
    <section
      id="values"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'var(--navy)' }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none pattern-bg" style={{ opacity: 0.2 }} />

      {/* Decorative large script background element */}
      <div
        className="absolute pointer-events-none select-none"
        style={{
          top: '50%',
          right: '-5%',
          transform: 'translateY(-50%)',
          fontSize: 'clamp(300px, 45vw, 600px)',
          fontFamily: 'Tajawal, sans-serif',
          fontWeight: 900,
          color: 'rgba(138, 106, 59, 0.03)',
          lineHeight: 1,
        }}
        aria-hidden="true"
      >
        قيم
      </div>

      {/* Top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(138, 106, 59, 0.2), transparent)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 xl:px-16">
        {/* Section header */}
        <div className="text-right mb-16 section-reveal">
          <div className="flex items-center justify-end gap-3 mb-6">
            <span
              className="text-xs tracking-widest font-medium"
              style={{ color: 'var(--orange)', fontFamily: 'Tajawal, sans-serif', opacity: 0.8 }}
            >
              ما تحمله السلسلة
            </span>
            <span className="w-12 h-px" style={{ background: 'var(--orange)', opacity: 0.35 }} />
            <span className="diamond-mark" style={{ width: '6px', height: '6px' }} />
          </div>

          <h2
            className="font-black mb-4"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: 'var(--cream)',
              fontFamily: 'Tajawal, sans-serif',
              fontWeight: 900,
              lineHeight: 1.1,
            }}
          >
            القيم
          </h2>

          <p
            style={{
              color: 'var(--cream-muted)',
              fontFamily: 'Tajawal, sans-serif',
              fontSize: '1.05rem',
              maxWidth: '460px',
              marginRight: 0,
              marginLeft: 'auto',
              lineHeight: 1.8,
            }}
          >
            ست قيم جوهرية تجمع سير الخلفاء الراشدين وتحكم فصول هذه السلسلة
          </p>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {values.map((value, index) => (
            <ValueCard key={value.label} value={value} index={index} />
          ))}
        </div>
      </div>

      {/* Bottom border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(138, 106, 59, 0.15), transparent)' }}
      />
    </section>
  );
}
