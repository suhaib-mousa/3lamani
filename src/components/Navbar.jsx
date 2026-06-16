import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'البداية', href: '#hero' },
  { label: 'الكتب', href: '#books' },
  { label: 'عن السلسلة', href: '#about' },
  { label: 'القيم', href: '#values' },
];

export default function Navbar({ whatsappUrl = 'https://wa.me/1234567890' }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="site-nav" aria-label="التنقل الرئيسي">
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="brand-mark group"
          aria-label="سلسلة علمني — الصفحة الرئيسية"
        >
          <span className="brand-text">سلسلة علمني</span>
          <span className="diamond-mark" />
        </a>

        <ul className="nav-list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="nav-link">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="nav-cta">
              واتساب
            </a>
          </li>
        </ul>

        <button
          className={`mobile-toggle ${menuOpen ? 'is-open' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="القائمة"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
            {link.label}
          </a>
        ))}
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mobile-cta">
          اطلب عبر واتساب
        </a>
      </div>
    </header>
  );
}
