import HeroSilhouette from './HeroSilhouette';
import KuficOrnament from './KuficOrnament';

const books = [
  {
    number: '٠١',
    title: 'علّمني أبو بكر',
    shortTitle: 'أبو بكر',
    subtitle: 'الصديق',
    accent: '#2E7D5B',
    label: 'الكتاب الأول',
    description:
      'كتاب عن الصدق والثبات وبداية القيادة بعد النبوة؛ كيف تُحفظ الجماعة حين تشتد اللحظة وتضطرب القلوب.',
    tags: ['الصدق', 'الثبات', 'الرحمة'],
  },
  {
    number: '٠٢',
    title: 'علّمني عمر',
    shortTitle: 'عمر',
    subtitle: 'الفاروق',
    accent: '#C96A1B',
    label: 'الكتاب الثاني',
    description:
      'رحلة مع العدل والحزم والبصيرة؛ كيف يتحول الحق إلى نظام حياة، وكيف تُبنى الحضارة على المسؤولية.',
    tags: ['العدل', 'الحزم', 'البصيرة'],
  },
  {
    number: '٠٣',
    title: 'علّمني عثمان',
    shortTitle: 'عثمان',
    subtitle: 'ذو النورين',
    accent: '#A66335',
    label: 'الكتاب الثالث',
    description:
      'سيرة الحياء والكرم وسعة الصدر؛ قراءة هادئة في شخصية صنعت أثرها باللين والبذل وحفظ القرآن.',
    tags: ['الحياء', 'الكرم', 'الحِلم'],
  },
  {
    number: '٠٤',
    title: 'علّمني علي',
    shortTitle: 'علي',
    subtitle: 'أمير المؤمنين',
    accent: '#1F4E79',
    label: 'الكتاب الرابع',
    description:
      'كتاب عن الشجاعة والعلم والزهد؛ كيف تجتمع قوة البيان وقوة الموقف في شخصية واحدة ممتدة الأثر.',
    tags: ['الشجاعة', 'العلم', 'الزهد'],
  },
];

function BookJourney({ book, index, whatsappUrl }) {
  const isReversed = index % 2 === 1;

  return (
    <article
      className={`book-journey section-reveal ${isReversed ? 'is-reversed' : ''}`}
      style={{ '--book-accent': book.accent }}
    >
      <div className="book-copy">
        <div className="book-label">
          <span>{book.label}</span>
          <i />
        </div>

        <span className="book-number">{book.number}</span>
        <h3>{book.title}</h3>
        <p className="book-subtitle">{book.subtitle}</p>
        <p className="book-description">{book.description}</p>

        <div className="book-tags" aria-label="قيم الكتاب">
          {book.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <div className="book-actions">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            اطلب هذا الكتاب
          </a>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-link">
            اقرأ التفاصيل
          </a>
        </div>
      </div>

      <div className="book-visual" aria-hidden="true">
        <div className="mini-cover">
          <div className="mini-cover-spine" />
          <div className="mini-cover-title">{book.shortTitle}</div>
          <HeroSilhouette className={`book-silhouette figure-${index}`} />
          <div className="mini-kufic animate-float-medium">
            <KuficOrnament opacity={0.9} />
          </div>
          <div className="mini-cover-bottom">{book.subtitle}</div>
        </div>
      </div>
    </article>
  );
}

export default function Books({ whatsappUrl = 'https://wa.me/1234567890' }) {
  return (
    <section id="books" className="books-section paper-pattern">
      <div className="container-narrow section-header section-reveal">
        <div className="eyebrow">
          <span className="diamond-mark" />
          <span>رحلة الكتب</span>
          <span className="eyebrow-line" />
        </div>
        <h2>كل كتاب… مشهد مستقل</h2>
        <p>
          بدل شبكة بطاقات عادية، كل كتاب يظهر كمحطة قراءة لها شخصية وسيلويت وزخرفة خفيفة،
          مثل فكرة النسخة الأولى لكن بلغة الغلاف البيضاء الهادئة.
        </p>
      </div>

      <div className="books-list container-grid">
        {books.map((book, index) => (
          <BookJourney key={book.title} book={book} index={index} whatsappUrl={whatsappUrl} />
        ))}
      </div>
    </section>
  );
}
