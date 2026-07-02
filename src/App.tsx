/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Values from "./components/Values";
import WhyChooseUs from "./components/WhyChooseUs";
import BrandApplications from "./components/BrandApplications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("inicio");
  const [isPageLoaded, setIsPageLoaded] = useState<boolean>(false);

  useEffect(() => {
    // Set loaded state to trigger subtle page entrance transitions
    setIsPageLoaded(true);
  }, []);

  useEffect(() => {
    // El contenido se monta recién cuando isPageLoaded es true;
    // por eso el rastreo de sección activa debe iniciarse aquí.
    if (!isPageLoaded) return;

    // Solo las secciones con enlace en el navbar: al pasar por una sección
    // sin enlace (p.ej. contacto) el marcador se queda en la anterior.
    const sections = [
      "inicio",
      "nosotros",
      "servicios",
      "valores",
      "por-que-elegirnos",
      "marca",
    ];

    const handleScroll = () => {
      // Punto de referencia: justo debajo del navbar fijo
      const pos = window.scrollY + 120;
      let current = "inicio";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top + window.scrollY <= pos) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isPageLoaded]);

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
            className="fixed top-0 left-0 right-0 h-0.75 bg-brand-hoja z-50 origin-left"
            style={{
              scaleX: "0", // Fallback as we are not using scroll hooks for raw performance, but can hook manually or just leave as elegant design border
            }}
          />

          {/* Fixed Top Navigation Bar */}
          <Navbar activeSection={activeSection} />

          {/* Page Sections Layout */}
          <main className="grow">
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
