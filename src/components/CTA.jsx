import KuficOrnament from './KuficOrnament';

export default function CTA() {
  return (
    <section
      className="relative py-28 lg:py-40 overflow-hidden"
      style={{ background: 'var(--navy-dark)' }}
    >
      {/* Background geometric pattern */}
      <div className="absolute inset-0 pointer-events-none pattern-bg-dense" style={{ opacity: 0.2 }} />

      {/* Subtle radial glow in center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201, 106, 27, 0.06) 0%, transparent 70%)',
        }}
      />

      {/* Background ornament left */}
      <div
        className="absolute left-0 top-0 bottom-0 w-64 pointer-events-none animate-float-slow"
        style={{ opacity: 0.06 }}
      >
        <KuficOrnament className="w-full h-full" />
      </div>

      {/* Background ornament right */}
      <div
        className="absolute right-0 top-0 bottom-0 w-64 pointer-events-none animate-float-medium"
        style={{ opacity: 0.05, animationDelay: '2s' }}
      >
        <KuficOrnament className="w-full h-full" />
      </div>

      {/* Top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(201, 106, 27, 0.25), transparent)' }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Ornamental top mark */}
        <div className="flex items-center justify-center gap-4 mb-10 section-reveal">
          <span className="w-16 h-px" style={{ background: 'var(--orange)', opacity: 0.4 }} />
          <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
            <rect x="8" y="8" width="12" height="12" fill="none" stroke="var(--orange)" strokeWidth="1" transform="rotate(45 14 14)" opacity="0.5" />
            <rect x="11" y="11" width="6" height="6" fill="var(--orange)" transform="rotate(45 14 14)" opacity="0.6" />
          </svg>
          <span className="w-16 h-px" style={{ background: 'var(--orange)', opacity: 0.4 }} />
        </div>

        {/* Label */}
        <p
          className="text-xs tracking-widest mb-6 section-reveal"
          style={{
            color: 'var(--orange)',
            fontFamily: 'Tajawal, sans-serif',
            opacity: 0.8,
            letterSpacing: '0.15em',
          }}
        >
          احصل على نسختك الآن
        </p>

        {/* Main title */}
        <h2
          className="font-black mb-6 section-reveal"
          style={{
            fontSize: 'clamp(2.2rem, 5.5vw, 4rem)',
            color: 'var(--cream)',
            fontFamily: 'Tajawal, sans-serif',
            fontWeight: 900,
            lineHeight: 1.2,
            textAlign: 'center',
          }}
        >
          ابدأ رحلتك مع
          <br />
          <span style={{ color: 'var(--orange-bright)' }} className="orange-text-glow">
            سلسلة علي
          </span>
        </h2>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 my-8 section-reveal">
          <span className="w-20 h-px" style={{ background: 'linear-gradient(to right, transparent, var(--orange))', opacity: 0.4 }} />
          <span className="diamond-mark" />
          <span className="w-20 h-px" style={{ background: 'linear-gradient(to left, transparent, var(--orange))', opacity: 0.4 }} />
        </div>

        {/* Body text */}
        <p
          className="text-lg mb-12 section-reveal"
          style={{
            color: 'var(--cream-muted)',
            fontFamily: 'Tajawal, sans-serif',
            lineHeight: 1.9,
          }}
        >
          اطلب نسختك الآن أو تواصل معنا لمعرفة تفاصيل الكتب.
          <br />
          السلسلة متوفرة للطلب المباشر عبر واتساب.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 section-reveal">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary px-12 py-4 rounded text-base font-bold orange-glow"
            style={{ fontFamily: 'Tajawal, sans-serif', fontSize: '1.1rem' }}
          >
            اطلب عبر واتساب
          </a>
          <a
            href="#books"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#books')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary px-10 py-4 rounded text-base font-semibold"
            style={{ fontFamily: 'Tajawal, sans-serif' }}
          >
            استعرض الكتب
          </a>
        </div>

        {/* Small note */}
        <p
          className="mt-10 text-xs section-reveal"
          style={{ color: 'var(--cream-muted)', opacity: 0.4, fontFamily: 'Tajawal, sans-serif' }}
        >
          متوفر للشحن داخل المملكة العربية السعودية وجميع دول الخليج
        </p>
      </div>

      {/* Bottom border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(201, 106, 27, 0.15), transparent)' }}
      />
    </section>
  );
}
