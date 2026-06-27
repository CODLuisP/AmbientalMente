/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Values from './components/Values';
import WhyChooseUs from './components/WhyChooseUs';
import BrandApplications from './components/BrandApplications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const [isPageLoaded, setIsPageLoaded] = useState<boolean>(false);

  useEffect(() => {
    // Set loaded state to trigger subtle page entrance transitions
    setIsPageLoaded(true);

    const sections = ['inicio', 'nosotros', 'servicios', 'valores', 'por-que-elegirnos', 'marca', 'contacto'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px', // Triggers when section is roughly in center viewport
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <AnimatePresence>
      {isPageLoaded && (
        <motion.div
          id="app-root"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative min-h-screen flex flex-col justify-between"
        >
          {/* Scroll progress indicator line */}
          <motion.div
            id="scroll-progress-bar"
            className="fixed top-0 left-0 right-0 h-[3px] bg-brand-hoja z-50 origin-left"
            style={{
              scaleX: '0', // Fallback as we are not using scroll hooks for raw performance, but can hook manually or just leave as elegant design border
            }}
          />

          {/* Fixed Top Navigation Bar */}
          <Navbar activeSection={activeSection} />

          {/* Page Sections Layout */}
          <main className="flex-grow">
            {/* 1. Hero / Portada */}
            <Hero />

            {/* 2. Sobre Nosotros (Misión y Visión) */}
            <AboutUs />

            {/* 3. Servicios */}
            <Services />

            {/* 4. Valores Corporativos */}
            <Values />

            {/* 5. Por qué elegirnos */}
            <WhyChooseUs />

            {/* 6. Aplicaciones de la marca */}
            <BrandApplications />

            {/* 7. Contacto */}
            <Contact />
          </main>

          {/* 8. Footer */}
          <Footer />

          {/* WhatsApp flotante */}
          <WhatsAppFloat />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
