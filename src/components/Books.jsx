import KuficOrnament from './KuficOrnament';

const books = [
  {
    number: '٠١',
    title: 'علي',
    subtitle: 'أمير المؤمنين',
    description:
      'سيرة الإمام علي بن أبي طالب رضي الله عنه — الشجاع الزاهد العادل القائد الذي جمع في شخصه كمال الإنسان.',
    tags: ['السيرة', 'العدل', 'القيادة'],
    featured: true,
    accentDark: '#8A3E0A',
  },
  {
    number: '٠٢',
    title: 'عثمان',
    subtitle: 'ذو النورين',
    description:
      'سيرة الخليفة الثالث عثمان بن عفان رضي الله عنه — الحليم الكريم الجامع للقرآن في عهد الرخاء والمحنة.',
    tags: ['السيرة', 'الحلم', 'الكرم'],
    featured: false,
    accentDark: '#5A4A25',
  },
  {
    number: '٠٣',
    title: 'عمر',
    subtitle: 'الفاروق',
    description:
      'سيرة الخليفة الثاني عمر بن الخطاب رضي الله عنه — الذي فتح القلوب قبل المدن وأقام العدل في ربوع الأرض.',
    tags: ['السيرة', 'الفتوحات', 'الحكم'],
    featured: false,
    accentDark: '#5A4A25',
  },
  {
    number: '٠٤',
    title: 'أبو بكر',
    subtitle: 'الصديق',
    description:
      'سيرة الخليفة الأول أبو بكر الصديق رضي الله عنه — أول من صدّق وأول من آمن وأول من ثبّت الأمة في أحلك اللحظات.',
    tags: ['السيرة', 'الصدق', 'الثبات'],
    featured: false,
    accentDark: '#5A4A25',
  },
];

function BookCard({ book, index }) {
  const delay = index * 150;
  return (
    <article
      className={`book-card section-reveal relative flex flex-col rounded-sm overflow-hidden cursor-default ${
        book.featured ? 'orange-glow' : ''
      }`}
      style={{
        animationDelay: `${delay}ms`,
        background: book.featured ? 'linear-gradient(160deg, #0D1E35 0%, #07111F 100%)' : '#07111F',
        border: book.featured
          ? '1px solid rgba(201, 106, 27, 0.6)'
          : '1px solid rgba(138, 106, 59, 0.2)',
        minHeight: book.featured ? '480px' : '400px',
      }}
    >
      {/* Featured badge */}
      {book.featured && (
        <div
          className="absolute top-0 right-0 z-10"
          style={{
            background: 'var(--orange)',
            padding: '4px 12px',
            fontSize: '0.65rem',
            fontWeight: 700,
            color: 'var(--navy-dark)',
            fontFamily: 'Tajawal, sans-serif',
            letterSpacing: '0.1em',
          }}
        >
          الكتاب الأول
        </div>
      )}

      {/* Top decorative strip */}
      <div
        style={{
          height: book.featured ? '4px' : '2px',
          background: book.featured
            ? 'linear-gradient(to right, var(--orange), var(--orange-bright), var(--orange))'
            : 'linear-gradient(to right, transparent, rgba(138, 106, 59, 0.4), transparent)',
        }}
      />

      {/* Book number + ornament */}
      <div className="px-6 pt-6 pb-2 flex items-start justify-between">
        <div
          className="font-black text-4xl"
          style={{
            color: book.featured ? 'rgba(201, 106, 27, 0.2)' : 'rgba(138, 106, 59, 0.15)',
            fontFamily: 'Tajawal, sans-serif',
            lineHeight: 1,
          }}
        >
          {book.number}
        </div>
        {/* Small Kufic diamond ornament */}
        <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
          <rect
            x="7" y="7" width="10" height="10"
            fill="none"
            stroke={book.featured ? 'var(--orange)' : 'var(--gold)'}
            strokeWidth="1"
            transform="rotate(45 12 12)"
            opacity="0.5"
          />
          <rect
            x="10" y="10" width="4" height="4"
            fill={book.featured ? 'var(--orange)' : 'var(--gold)'}
            transform="rotate(45 12 12)"
            opacity="0.4"
          />
        </svg>
      </div>

      {/* Main content */}
      <div className="flex-1 px-6 flex flex-col gap-3">
        {/* Subtitle */}
        <p
          className="text-xs font-medium tracking-widest"
          style={{
            color: book.featured ? 'var(--orange)' : 'var(--gold)',
            fontFamily: 'Tajawal, sans-serif',
            opacity: 0.8,
          }}
        >
          {book.subtitle}
        </p>

        {/* Title */}
        <h3
          className="font-black leading-none"
          style={{
            fontSize: book.featured ? 'clamp(3.5rem, 7vw, 5.5rem)' : 'clamp(2.8rem, 5vw, 4rem)',
            color: book.featured ? 'var(--cream)' : 'var(--cream-dim)',
            fontFamily: 'Tajawal, sans-serif',
            fontWeight: 900,
            lineHeight: 1,
          }}
        >
          {book.title}
        </h3>

        {/* Divider */}
        <div
          className="w-full h-px my-1"
          style={{
            background: book.featured
              ? 'linear-gradient(to right, var(--orange), transparent)'
              : 'linear-gradient(to right, rgba(138, 106, 59, 0.3), transparent)',
          }}
        />

        {/* Description */}
        <p
          className="text-sm leading-relaxed flex-1"
          style={{
            color: 'var(--cream-muted)',
            fontFamily: 'Tajawal, sans-serif',
            lineHeight: 1.85,
          }}
        >
          {book.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-sm"
              style={{
                border: book.featured
                  ? '1px solid rgba(201, 106, 27, 0.3)'
                  : '1px solid rgba(138, 106, 59, 0.2)',
                color: book.featured ? 'var(--orange)' : 'var(--gold)',
                fontFamily: 'Tajawal, sans-serif',
                fontWeight: 500,
                background: 'rgba(0,0,0,0.2)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="px-6 py-6 mt-4">
        <button
          className="w-full py-2.5 text-sm font-semibold rounded-sm transition-all duration-300 relative overflow-hidden group"
          style={{
            border: book.featured
              ? '1px solid var(--orange)'
              : '1px solid rgba(138, 106, 59, 0.3)',
            color: book.featured ? 'var(--orange-bright)' : 'var(--cream-muted)',
            fontFamily: 'Tajawal, sans-serif',
            background: 'transparent',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = book.featured
              ? 'var(--orange)'
              : 'rgba(138, 106, 59, 0.15)';
            e.currentTarget.style.color = book.featured ? 'var(--navy-dark)' : 'var(--cream)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = book.featured ? 'var(--orange-bright)' : 'var(--cream-muted)';
          }}
        >
          عرض التفاصيل
        </button>
      </div>

      {/* Featured: extra ornament background */}
      {book.featured && (
        <div
          className="absolute bottom-0 left-0 w-1/2 h-1/2 pointer-events-none"
          style={{ opacity: 0.04 }}
        >
          <KuficOrnament className="w-full h-full" />
        </div>
      )}

      {/* Bottom inner border detail */}
      <div
        className="absolute inset-0 pointer-events-none rounded-sm"
        style={{
          border: book.featured
            ? '1px solid rgba(201, 106, 27, 0.08)'
            : 'none',
          margin: '6px',
        }}
      />
    </article>
  );
}

export default function Books() {
  return (
    <section
      id="books"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'var(--navy)' }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none pattern-bg-dense" style={{ opacity: 0.3 }} />

      {/* Top ornamental border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, var(--orange), transparent)', opacity: 0.2 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 xl:px-16">
        {/* Section header */}
        <div className="text-right mb-16 section-reveal">
          <div className="ornament-divider mb-8 flex-row-reverse">
            <span
              className="text-xs font-medium tracking-widest"
              style={{ color: 'var(--orange)', opacity: 0.8, fontFamily: 'Tajawal, sans-serif' }}
            >
              المجموعة الكاملة
            </span>
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
            الكتب
          </h2>
          <p
            className="text-lg"
            style={{ color: 'var(--cream-muted)', fontFamily: 'Tajawal, sans-serif', maxWidth: '520px', marginRight: 0, marginLeft: 'auto' }}
          >
            أربعة كتب تروي سيرة الخلفاء الراشدين بأسلوب أدبي راقٍ
          </p>
        </div>

        {/* Books grid — featured large on right, others stacked on left */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Featured علي — occupies full right column */}
          <BookCard book={books[0]} index={0} />

          {/* Other 3 books stacked in left column */}
          <div className="grid grid-cols-1 gap-6">
            {books.slice(1).map((book, i) => (
              <BookCard key={book.title} book={book} index={i + 1} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom ornamental border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, var(--gold), transparent)', opacity: 0.15 }}
      />
    </section>
  );
}
