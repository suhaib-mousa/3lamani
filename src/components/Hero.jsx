import HeroSilhouette from './HeroSilhouette';
import KuficOrnament from './KuficOrnament';

function FloatingHaraka({ char, className = '', style }) {
  return (
    <span className={`floating-haraka ${className}`} style={style} aria-hidden="true">
      {char}
    </span>
  );
}

export default function Hero({ whatsappUrl = 'https://wa.me/1234567890' }) {
  const scrollToBooks = (e) => {
    e.preventDefault();
    document.querySelector('#books')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="hero" className="hero-section paper-pattern">
      <div className="hero-side-panel" aria-hidden="true" />
      <div className="hero-watermark" aria-hidden="true">علمني</div>

      <FloatingHaraka char="َ" className="hero-haraka h1" />
      <FloatingHaraka char="ُ" className="hero-haraka h2" />
      <FloatingHaraka char="ّ" className="hero-haraka h3" />
      <FloatingHaraka char="ْ" className="hero-haraka h4" />
      <FloatingHaraka char="ِ" className="hero-haraka h5" />

      <div className="container-grid hero-grid">
        <div className="hero-art section-reveal visible">
          <div className="cover-frame">
            <div className="cover-navy-shape" aria-hidden="true" />
            <HeroSilhouette className="hero-silhouette" />
            <div className="hero-kufic animate-float-slow" aria-hidden="true">
              <KuficOrnament />
            </div>
            <div className="cover-caption" aria-hidden="true">سِيَر الخلفاء الراشدين</div>
          </div>
        </div>

        <div className="hero-copy">
          <div className="eyebrow section-reveal visible">
            <span className="diamond-mark" />
            <span>إصدارات عربية معاصرة</span>
            <span className="eyebrow-line" />
          </div>

          <h1 className="hero-title section-reveal visible" aria-label="سلسلة علمني">
            <span className="typewriter-ar">سلسلة علمني</span>
          </h1>

          <p className="hero-subtitle section-reveal visible">
            رحلة معرفية في سِيَر الخلفاء الراشدين
          </p>

          <p className="hero-description section-reveal visible">
            مجموعة كتب عربية تقدّم السيرة والقيم والمواقف بأسلوب معاصر يحافظ على روح التراث،
            ويحوّل القراءة إلى تجربة بصرية هادئة مستوحاة من جمال الغلاف العربي.
          </p>

          <div className="hero-actions section-reveal visible">
            <a href="#books" onClick={scrollToBooks} className="btn-primary">
              استعرض الكتب
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              اطلب عبر واتساب
            </a>
          </div>

          <div className="hero-meta section-reveal visible">
            <span>٤ كتب</span>
            <span>·</span>
            <span>سيرة وتاريخ</span>
            <span>·</span>
            <span>تصميم مستلهم من الغلاف</span>
          </div>
        </div>
      </div>

      <div className="scroll-cue" aria-hidden="true">
        <span>تمرير</span>
        <i />
      </div>
    </section>
  );
}
