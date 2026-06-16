const footerLinks = [
  { label: 'البداية', href: '#hero' },
  { label: 'الكتب', href: '#books' },
  { label: 'عن السلسلة', href: '#about' },
  { label: 'القيم', href: '#values' },
];

export default function Footer() {
  const handleClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="site-footer">
      <div className="container-grid footer-inner">
        <div className="footer-brand">
          <span className="brand-text">سلسلة علمني</span>
          <span className="diamond-mark" />
        </div>

        <nav aria-label="روابط الفوتر">
          <ul>
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={(e) => handleClick(e, link.href)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p>© {new Date().getFullYear()} سلسلة علمني — جميع الحقوق محفوظة</p>
      </div>
    </footer>
  );
}
