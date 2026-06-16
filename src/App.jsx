import { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Books from './components/Books';
import About from './components/About';
import Values from './components/Values';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    const elements = document.querySelectorAll('.section-reveal');
    elements.forEach((el) => observerRef.current.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen" style={{ background: 'var(--navy-dark)' }}>
      <Navbar />
      <main>
        <Hero />
        <Books />
        <About />
        <Values />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
