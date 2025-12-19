import { useEffect, useState, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';

// @ts-ignore
import PillNav from './components/layout/PillNav';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Art from './components/sections/Art';
import Supporters from './components/sections/Supporters';
import Footer from './components/layout/Footer';
import './styles/App.css'

import CursorSpotlight from './components/ui/CursorSpotlight';
import Starfield from './components/ui/Starfield';
import Terminal from './pages/Terminal';

function LandingPage() {
  const [activeSection, setActiveSection] = useState('#home');
  const lenisRef = useRef<Lenis | null>(null);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Art', href: '#art' },
    { label: 'Terminal', href: '/terminal' },
    { label: 'Contact', href: '#contact' }
  ];

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Scroll Spy Logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems
        .filter(item => item.href.startsWith('#'))
        .map(item => item.href.substring(1));

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is roughly in view (top is somewhat near top of viewport)
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(`#${sectionId}`);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (href.startsWith('#') && lenisRef.current) {
      const target = document.querySelector(href);
      if (target) {
        lenisRef.current.scrollTo(target as HTMLElement);
      }
    }
  };

  return (
    <div className="min-h-screen bg-black font-sans text-white relative overflow-x-hidden">
      <Starfield density={150} speed={0.2} />
      <CursorSpotlight />
      <div className="fixed top-0 left-0 right-0 flex justify-center pt-6 z-50">
        <PillNav
          logo="/logo.png"
          items={navItems}
          activeHref={activeSection}
          pillTextColor="#ffffff"
          onMobileMenuClick={() => { }}
          onItemClick={(item: any) => handleNavClick(item.href)}
        />
      </div>

      <main className="relative z-10">
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="art">
          <Art />
        </div>

        {/* Supporters Section - placed in contact area */}
        <div id="contact">
          <Supporters />
        </div>

        <Footer />
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/terminal" element={<Terminal />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
