import { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Books from './components/Books';
import About from './components/About';
import Values from './components/Values';
import CTA from './components/CTA';
import Footer from './components/Footer';

const whatsappUrl = 'https://wa.me/1234567890';

export default function App() {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -70px 0px' }
    );

    const elements = document.querySelectorAll('.section-reveal');
    elements.forEach((el) => observerRef.current.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="app-shell min-h-screen">
      <Navbar whatsappUrl={whatsappUrl} />
      <main>
        <Hero whatsappUrl={whatsappUrl} />
        <Books whatsappUrl={whatsappUrl} />
        <About />
        <Values />
        <CTA whatsappUrl={whatsappUrl} />
      </main>
      <Footer />

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="اطلب عبر واتساب"
      >
        <span aria-hidden="true">☏</span>
        <span>واتساب</span>
      </a>
    </div>
  );
}
