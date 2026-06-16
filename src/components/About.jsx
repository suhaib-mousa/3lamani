export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-watermark" aria-hidden="true">عن</div>

      <div className="container-grid about-grid">
        <div className="section-reveal">
          <div className="eyebrow">
            <span className="diamond-mark" />
            <span>عن السلسلة</span>
            <span className="eyebrow-line" />
          </div>
          <h2>سلسلة تُقرأ ككتاب… وتُشاهَد كتجربة</h2>
        </div>

        <div className="about-card section-reveal">
          <p className="about-quote">
            “تهدف سلسلة علمني إلى تقديم سِيَر الخلفاء الراشدين بأسلوب عربي معاصر،
            يجمع بين جمال العرض وعمق المعنى، ليقرّب القيم الكبرى من القارئ اليوم.”
          </p>

          <div className="ornamental-rule" />

          <div className="about-columns">
            <div>
              <h3>الفكرة</h3>
              <p>
                ليست السلسلة تلخيصاً بارداً للتاريخ، بل رحلة تأمل في شخصيات صنعت معنى القيادة،
                وقدّمت للناس نماذج في الثبات والعدل والبصيرة.
              </p>
            </div>
            <div>
              <h3>اللغة البصرية</h3>
              <p>
                الهوية تعتمد على بياض الورق، كتلة كحلية تشبه ظل الغلاف، وزخارف برتقالية قليلة
                مأخوذة من روح الخط العربي والحركات.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
