export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 lg:py-36 overflow-hidden"
      style={{ background: 'var(--navy-dark)' }}
    >
      {/* Background geometric pattern — very subtle */}
      <div className="absolute inset-0 pointer-events-none pattern-bg" style={{ opacity: 0.25 }} />

      {/* Large decorative Arabic letter — background watermark */}
      <div
        className="absolute pointer-events-none select-none"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: 'clamp(280px, 40vw, 500px)',
          fontFamily: 'Tajawal, sans-serif',
          fontWeight: 900,
          color: 'rgba(201, 106, 27, 0.025)',
          lineHeight: 1,
          userSelect: 'none',
          letterSpacing: '-0.05em',
        }}
        aria-hidden="true"
      >
        ع
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 xl:px-16">
        {/* Header */}
        <div className="text-right mb-16 section-reveal">
          <div className="flex items-center justify-end gap-3 mb-6">
            <span
              className="text-xs tracking-widest font-medium"
              style={{ color: 'var(--orange)', fontFamily: 'Tajawal, sans-serif', opacity: 0.85 }}
            >
              من نحن
            </span>
            <span className="w-12 h-px" style={{ background: 'var(--orange)', opacity: 0.4 }} />
            <span className="diamond-mark" style={{ width: '6px', height: '6px' }} />
          </div>

          <h2
            className="font-black mb-8"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: 'var(--cream)',
              fontFamily: 'Tajawal, sans-serif',
              fontWeight: 900,
              lineHeight: 1.1,
            }}
          >
            عن السلسلة
          </h2>
        </div>

        {/* Main quote block */}
        <div
          className="relative section-reveal mb-16"
          style={{
            borderRight: '3px solid var(--orange)',
            paddingRight: '2rem',
          }}
        >
          {/* Opening ornamental quotation mark */}
          <div
            className="absolute"
            style={{
              top: '-30px',
              right: '-16px',
              fontSize: '5rem',
              fontFamily: 'Georgia, serif',
              color: 'var(--orange)',
              opacity: 0.3,
              lineHeight: 1,
            }}
            aria-hidden="true"
          >
            "
          </div>

          <p
            className="text-2xl lg:text-3xl font-semibold leading-relaxed mb-6"
            style={{
              color: 'var(--cream)',
              fontFamily: 'Tajawal, sans-serif',
              lineHeight: 1.75,
            }}
          >
            سلسلة كتب تُعيد تقديم سيرة الخلفاء الراشدين بلغة العصر
            دون أن تفقد روح التراث ولا عمق المعنى.
          </p>

          <p
            className="text-lg"
            style={{
              color: 'var(--cream-muted)',
              fontFamily: 'Tajawal, sans-serif',
              lineHeight: 1.9,
            }}
          >
            لم تُكتب هذه الكتب لتكون موسوعة تاريخية جافة،
            بل لتكون رفيقاً يُقرأ في ساعات الهدوء،
            يُعلّم القارئ كيف قاد الأوائل، كيف فكّروا، كيف صبروا،
            وكيف تركوا في التاريخ أثراً لا يُمحى.
          </p>
        </div>

        {/* Ornamental divider */}
        <div className="ornament-divider flex-row-reverse section-reveal mb-16">
          <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
            <rect x="9" y="9" width="14" height="14" fill="none" stroke="var(--orange)" strokeWidth="1" transform="rotate(45 16 16)" opacity="0.6" />
            <rect x="13" y="13" width="6" height="6" fill="var(--orange)" transform="rotate(45 16 16)" opacity="0.5" />
          </svg>
        </div>

        {/* Two-column editorial text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 section-reveal">
          <div className="text-right">
            <h3
              className="font-bold mb-4 text-lg"
              style={{ color: 'var(--orange)', fontFamily: 'Tajawal, sans-serif' }}
            >
              رؤية السلسلة
            </h3>
            <p
              className="leading-loose"
              style={{
                color: 'var(--cream-muted)',
                fontFamily: 'Tajawal, sans-serif',
                fontSize: '1rem',
                lineHeight: 1.95,
              }}
            >
              أن يعود القارئ العربي إلى تراثه الروحي والفكري
              من باب الفهم والتأمل، لا من باب الحفظ والتلقين.
              كل كتاب هو دعوة لإعادة اكتشاف شخصية فذّة
              تركت بصمة في وجدان الحضارة الإنسانية.
            </p>
          </div>

          <div className="text-right">
            <h3
              className="font-bold mb-4 text-lg"
              style={{ color: 'var(--orange)', fontFamily: 'Tajawal, sans-serif' }}
            >
              الأسلوب والمنهج
            </h3>
            <p
              className="leading-loose"
              style={{
                color: 'var(--cream-muted)',
                fontFamily: 'Tajawal, sans-serif',
                fontSize: '1rem',
                lineHeight: 1.95,
              }}
            >
              تُبنى كل صفحة على مصادر موثوقة وتحليل نقدي متأنٍّ،
              مع حرص شديد على جمالية اللغة العربية وانسيابيتها.
              التاريخ يُقدَّم هنا كحكاية حيّة لا كسرد جاف،
              وكل حدث يحمل درساً للحاضر.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(201, 106, 27, 0.2), transparent)',
        }}
      />
    </section>
  );
}
