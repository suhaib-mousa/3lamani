import HeroSilhouette from './HeroSilhouette';
import KuficOrnament from './KuficOrnament';

const harakat = ['َ', 'ُ', 'ِ', 'ً', 'ّ', 'ْ', 'ٌ', 'ٍ'];

function FloatingHaraka({ char, style }) {
  return (
    <span
      className="haraka absolute select-none pointer-events-none"
      style={{
        fontSize: '1.4rem',
        fontFamily: 'Tajawal, sans-serif',
        ...style,
      }}
      aria-hidden="true"
    >
      {char}
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--navy-dark)' }}
    >
      {/* Deep background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 70% 50%, #07111F 0%, #020817 100%)',
        }}
      />

      {/* Islamic geometric pattern — very subtle */}
      <div
        className="absolute inset-0 pointer-events-none pattern-bg"
        style={{ opacity: 0.4 }}
      />

      {/* Left side "book spine" light strip — mimics the cover page contrast */}
      <div
        className="absolute top-0 bottom-0 pointer-events-none"
        style={{
          left: 0,
          width: 'clamp(260px, 38vw, 520px)',
          background:
            'linear-gradient(to right, #0A1628 0%, #07111F 60%, transparent 100%)',
        }}
      />

      {/* Atmospheric glow from figure */}
      <div
        className="absolute pointer-events-none animate-glow-pulse"
        style={{
          left: 'clamp(80px, 12vw, 200px)',
          top: '15%',
          width: 'clamp(200px, 28vw, 400px)',
          height: '70%',
          background:
            'radial-gradient(ellipse, rgba(201, 106, 27, 0.08) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />

      {/* Main layout grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 xl:px-16">
        <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-between gap-8 min-h-screen py-28 lg:py-0">

          {/* Left side: Silhouette + Kufic ornament */}
          <div
            className="relative flex-shrink-0 animate-silhouette"
            style={{
              width: 'clamp(220px, 36vw, 480px)',
              height: 'clamp(400px, 70vh, 660px)',
            }}
          >
            {/* Subtle vertical light strip behind silhouette */}
            <div
              className="absolute inset-y-0 pointer-events-none"
              style={{
                left: '50%',
                transform: 'translateX(-50%)',
                width: '55%',
                background:
                  'linear-gradient(to bottom, transparent 0%, rgba(13, 30, 53, 0.6) 20%, rgba(13, 30, 53, 0.6) 80%, transparent 100%)',
                borderRadius: '2px',
              }}
            />

            {/* Silhouette figure */}
            <div className="absolute inset-0 flex items-end justify-center">
              <HeroSilhouette
                className="h-full w-auto"
                style={{ maxWidth: '100%' }}
              />
            </div>

            {/* Orange Kufic ornament — overlaid on silhouette */}
            <div
              className="absolute animate-float-slow"
              style={{
                top: '18%',
                left: '-5%',
                right: '-5%',
                zIndex: 2,
              }}
            >
              <KuficOrnament className="w-full" />
            </div>

            {/* Small secondary ornament top right */}
            <div
              className="absolute animate-float-medium"
              style={{
                top: '4%',
                right: '-8%',
                width: '40%',
                opacity: 0.5,
                animationDelay: '1s',
              }}
            >
              <KuficOrnament className="w-full" opacity={0.5} />
            </div>

            {/* Orange vertical accent line — book spine echo */}
            <div
              className="absolute top-0 bottom-0"
              style={{
                right: '8%',
                width: '2px',
                background:
                  'linear-gradient(to bottom, transparent, var(--orange) 20%, var(--orange) 80%, transparent)',
                opacity: 0.4,
              }}
            />
          </div>

          {/* Right side: Hero text */}
          <div
            className="flex-1 text-right animate-fade-in-up"
            style={{ maxWidth: '580px' }}
          >
            {/* Label */}
            <div className="flex items-center justify-end gap-3 mb-8">
              <span
                className="text-xs font-medium tracking-widest uppercase"
                style={{ color: 'var(--cream-muted)', letterSpacing: '0.15em' }}
              >
                إصدارات دار النشر العربية
              </span>
              <span
                className="w-8 h-px"
                style={{ background: 'var(--orange)', opacity: 0.6 }}
              />
              <span className="diamond-mark" style={{ width: '6px', height: '6px' }} />
            </div>

            {/* Main title with floating harakat */}
            <div className="relative inline-block mb-4">
              {/* Floating harakat decorations */}
              <FloatingHaraka char="َ" style={{ top: '-24px', right: '20px', animationDelay: '0s' }} />
              <FloatingHaraka char="ُ" style={{ top: '-18px', right: '90px', animationDelay: '0.8s' }} />
              <FloatingHaraka char="ّ" style={{ top: '-28px', right: '150px', animationDelay: '1.6s' }} />
              <FloatingHaraka char="ِ" style={{ top: '-14px', right: '200px', animationDelay: '2.4s' }} />
              <FloatingHaraka char="ً" style={{ top: '-22px', right: '260px', animationDelay: '0.4s' }} />
              <FloatingHaraka char="ْ" style={{ bottom: '-18px', right: '40px', animationDelay: '1.2s' }} />
              <FloatingHaraka char="ٌ" style={{ bottom: '-22px', right: '130px', animationDelay: '2s' }} />

              <h1
                className="font-black leading-none tracking-tight"
                style={{
                  fontSize: 'clamp(5rem, 12vw, 9rem)',
                  color: 'var(--cream)',
                  fontFamily: 'Tajawal, sans-serif',
                  fontWeight: 900,
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                }}
              >
                سلسلة
                <br />
                <span
                  className="orange-text-glow"
                  style={{ color: 'var(--orange-bright)' }}
                >
                  علي
                </span>
              </h1>
            </div>

            {/* Ornamental divider */}
            <div className="flex items-center justify-end gap-3 my-6">
              <span
                className="flex-1 h-px max-w-xs"
                style={{
                  background:
                    'linear-gradient(to right, transparent, var(--orange), transparent)',
                  opacity: 0.45,
                }}
              />
              {/* Kufic diamond ornament */}
              <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                <rect x="6" y="6" width="8" height="8" fill="var(--orange)" transform="rotate(45 10 10)" />
                <rect x="8" y="8" width="4" height="4" fill="var(--navy-dark)" transform="rotate(45 10 10)" />
              </svg>
            </div>

            {/* Subtitle */}
            <p
              className="font-semibold mb-4 animate-fade-in-up delay-200"
              style={{
                fontSize: 'clamp(1rem, 2.2vw, 1.25rem)',
                color: 'var(--cream-dim)',
                lineHeight: 1.7,
                fontFamily: 'Tajawal, sans-serif',
              }}
            >
              رحلة معرفية في سيرة الإمام علي بن أبي طالب رضي الله عنه
            </p>

            {/* Intro text */}
            <p
              className="mb-10 animate-fade-in-up delay-400"
              style={{
                fontSize: 'clamp(0.9rem, 1.6vw, 1.05rem)',
                color: 'var(--cream-muted)',
                lineHeight: 1.9,
                fontFamily: 'Tajawal, sans-serif',
                fontWeight: 400,
                maxWidth: '480px',
                marginRight: 0,
                marginLeft: 'auto',
              }}
            >
              مجموعة كتب عربية تقدّم السيرة، القيم، المواقف، والقيادة
              بأسلوب معاصر يحافظ على روح التراث.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center justify-end gap-4 animate-fade-in-up delay-600">
              <a
                href="#books"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#books')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary px-8 py-3 text-base font-semibold rounded"
                style={{ fontFamily: 'Tajawal, sans-serif' }}
              >
                استعرض الكتب
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-8 py-3 text-base font-bold rounded"
                style={{ fontFamily: 'Tajawal, sans-serif' }}
              >
                اطلب عبر واتساب
              </a>
            </div>

            {/* Small bottom decorative text */}
            <div className="mt-12 animate-fade-in-up delay-800">
              <p
                className="text-xs"
                style={{ color: 'var(--cream-muted)', opacity: 0.5, fontFamily: 'Tajawal, sans-serif' }}
              >
                ٤ كتب · سيرة وتاريخ · الخلفاء الراشدون
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, var(--navy-dark))',
        }}
      />

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-1000">
        <span
          className="text-xs"
          style={{ color: 'var(--cream-muted)', opacity: 0.5, fontFamily: 'Tajawal, sans-serif' }}
        >
          تمرير
        </span>
        <div
          className="w-px h-10"
          style={{
            background: 'linear-gradient(to bottom, var(--orange), transparent)',
            opacity: 0.5,
          }}
        />
      </div>
    </section>
  );
}
