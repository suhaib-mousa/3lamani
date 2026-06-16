import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'البداية', href: '#hero' },
  { label: 'الكتب', href: '#books' },
  { label: 'عن السلسلة', href: '#about' },
  { label: 'القيم', href: '#values' },
  { label: 'واتساب', href: 'https://wa.me/1234567890', external: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setMenuOpen(false);
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className="fixed top-0 right-0 left-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? 'rgba(2, 8, 23, 0.95)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201, 106, 27, 0.15)' : 'none',
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo — right side in RTL */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-2 group"
          aria-label="سلسلة علي — الصفحة الرئيسية"
        >
          <span
            className="text-xl font-black tracking-wide"
            style={{ color: 'var(--cream)', fontFamily: 'Tajawal, sans-serif' }}
          >
            سلسلة علي
          </span>
          <span className="diamond-mark flex-shrink-0 group-hover:bg-orange-bright transition-colors duration-300" />
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                onClick={link.external ? undefined : (e) => handleNavClick(e, link.href)}
                className="nav-link text-sm font-medium"
                style={{ fontFamily: 'Tajawal, sans-serif' }}
              >
                {link.external ? (
                  <span
                    className="px-4 py-1.5 rounded text-sm font-semibold transition-all duration-300"
                    style={{
                      border: '1px solid var(--orange)',
                      color: 'var(--orange-bright)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--orange)';
                      e.currentTarget.style.color = 'var(--navy-dark)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = 'var(--orange-bright)';
                    }}
                  >
                    {link.label}
                  </span>
                ) : (
                  link.label
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="القائمة"
          aria-expanded={menuOpen}
        >
          <span
            className="block w-6 h-px transition-all duration-300"
            style={{
              background: 'var(--cream)',
              transform: menuOpen ? 'rotate(45deg) translate(3px, 3px)' : 'none',
            }}
          />
          <span
            className="block w-6 h-px transition-all duration-300"
            style={{
              background: 'var(--cream)',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-px transition-all duration-300"
            style={{
              background: 'var(--cream)',
              transform: menuOpen ? 'rotate(-45deg) translate(3px, -3px)' : 'none',
            }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-400"
        style={{
          maxHeight: menuOpen ? '320px' : '0',
          background: 'rgba(2, 8, 23, 0.98)',
          borderBottom: menuOpen ? '1px solid rgba(201, 106, 27, 0.15)' : 'none',
        }}
      >
        <ul className="flex flex-col list-none m-0 p-0 px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                onClick={link.external ? undefined : (e) => handleNavClick(e, link.href)}
                className="block text-base font-medium py-1"
                style={{
                  color: link.external ? 'var(--orange-bright)' : 'var(--cream-dim)',
                  fontFamily: 'Tajawal, sans-serif',
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
