const footerLinks = [
  { label: 'البداية', href: '#hero' },
  { label: 'الكتب', href: '#books' },
  { label: 'عن السلسلة', href: '#about' },
  { label: 'القيم', href: '#values' },
];

export default function Footer() {
  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer
      className="relative py-12 overflow-hidden"
      style={{
        background: '#020817',
        borderTop: '1px solid rgba(201, 106, 27, 0.12)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 xl:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span
              className="text-xl font-black"
              style={{ color: 'var(--cream)', fontFamily: 'Tajawal, sans-serif' }}
            >
              سلسلة علي
            </span>
            <span className="diamond-mark" style={{ width: '7px', height: '7px' }} />
          </div>

          {/* Footer nav */}
          <nav>
            <ul className="flex flex-wrap items-center gap-6 list-none m-0 p-0">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-sm transition-colors duration-300"
                    style={{ color: 'var(--cream-muted)', fontFamily: 'Tajawal, sans-serif' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--orange)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--cream-muted)')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Copyright */}
          <p
            className="text-xs text-center md:text-right"
            style={{ color: 'var(--cream-muted)', opacity: 0.4, fontFamily: 'Tajawal, sans-serif' }}
          >
            © {new Date().getFullYear()} سلسلة علي — جميع الحقوق محفوظة
          </p>
        </div>

        {/* Bottom ornamental line */}
        <div className="mt-10 flex items-center gap-4">
          <span className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(138, 106, 59, 0.15))' }} />
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
            <rect x="4" y="4" width="8" height="8" fill="var(--orange)" transform="rotate(45 8 8)" opacity="0.3" />
          </svg>
          <span className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(138, 106, 59, 0.15))' }} />
        </div>
      </div>
    </footer>
  );
}
