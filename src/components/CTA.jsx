import KuficOrnament from './KuficOrnament';

export default function CTA({ whatsappUrl = 'https://wa.me/1234567890' }) {
  return (
    <section className="cta-section">
      <div className="container-grid">
        <div className="cta-panel section-reveal">
          <div className="cta-ornament" aria-hidden="true">
            <KuficOrnament opacity={0.38} />
          </div>

          <div className="eyebrow centered">
            <span className="eyebrow-line" />
            <span className="diamond-mark" />
            <span>احصل على نسختك الآن</span>
            <span className="eyebrow-line" />
          </div>

          <h2>
            ابدأ رحلتك مع
            <span>سلسلة علمني</span>
          </h2>

          <p>
            اطلب نسختك الآن أو تواصل معنا لمعرفة تفاصيل الكتب. السلسلة مصممة لتكون تجربة قراءة
            عربية هادئة وواضحة.
          </p>

          <div className="cta-actions">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              اطلب عبر واتساب
            </a>
            <a
              href="#books"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#books')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary light"
            >
              استعرض الكتب
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
