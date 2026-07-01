import { useState, useEffect, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Leaf, ArrowRight, Phone } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio', sectionId: 'inicio' },
    { name: 'Nosotros', href: '#nosotros', sectionId: 'nosotros' },
    { name: 'Servicios', href: '#servicios', sectionId: 'servicios' },
    { name: 'Valores', href: '#valores', sectionId: 'valores' },
    { name: '¿Por qué nosotros?', href: '#por-que-elegirnos', sectionId: 'por-que-elegirnos' },
    { name: 'Aplicaciones de Marca', href: '#marca', sectionId: 'marca' },
  ];

  const handleScrollTo = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav
        id="navbar"
        className="fixed top-0 left-0 w-full z-50"
      >
        <div className={`transition-all duration-300 bg-white border-b border-slate-100 px-8 sm:px-16 lg:px-32 ${
          isScrolled
            ? 'shadow-md py-3'
            : 'shadow-sm py-4'
        }`}>
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a
              id="nav-logo"
              href="#inicio"
              onClick={(e) => handleScrollTo(e, '#inicio')}
              className="group"
            >
              <img
                src="/logoA.webp"
                alt="AmbientalMente LV"
                className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </a>

            {/* Desktop Nav Links */}
            <div id="desktop-menu" className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  id={`nav-link-${link.sectionId}`}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`font-sans text-sm font-medium tracking-wide transition-colors duration-200 relative py-1 ${
                    activeSection === link.sectionId
                      ? 'text-brand-bosque'
                      : 'text-slate-600 hover:text-brand-bosque'
                  }`}
                >
                  {link.name}
                  {activeSection === link.sectionId && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-hoja rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* CTA + WhatsApp */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://wa.me/51958671088"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2.5 font-sans text-sm font-medium rounded-xl transition-all ${
                  isScrolled
                    ? 'text-brand-bosque border border-slate-200 hover:bg-slate-50'
                    : 'text-brand-bosque bg-white/80 border border-brand-bosque/20 hover:bg-white'
                }`}
              >
                <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-4 h-4" />
                +51 958 671 088
              </a>
              <a
                id="nav-cta"
                href="#contacto"
                onClick={(e) => handleScrollTo(e, '#contacto')}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-bosque text-white font-sans text-sm font-medium rounded-xl hover:bg-brand-bosque/90 transition-all shadow-md shadow-brand-bosque/10 hover:shadow-lg hover:shadow-brand-bosque/20 active:scale-98 group"
              >
                Cotizar Servicio
                <ArrowRight className="w-4 h-4 text-brand-claro group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Hamburger Button */}
            <button
              id="hamburger-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Abrir menú"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-4/5 max-w-sm bg-white shadow-2xl z-50 p-6 flex flex-col justify-between lg:hidden"
          >
            <div className="flex flex-col gap-8">
              {/* Header inside drawer */}
              <div className="flex items-center justify-between">
                <img src="/logoA.webp" alt="AmbientalMente LV" className="h-9 w-auto object-contain" />
                <button
                  id="close-drawer-btn"
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links inside drawer */}
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    id={`mobile-nav-link-${link.sectionId}`}
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className={`font-sans text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                      activeSection === link.sectionId
                        ? 'bg-brand-bosque/5 text-brand-bosque font-semibold'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-brand-bosque'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom Drawer CTA */}
            <div className="flex flex-col gap-4 border-t border-slate-100 pt-6">
              <div className="text-xs text-slate-400 font-medium text-center">
                AmbientalMente LV E.I.R.L.
              </div>
              <a
                id="mobile-nav-cta"
                href="#contacto"
                onClick={(e) => handleScrollTo(e, '#contacto')}
                className="w-full flex items-center justify-center gap-2 py-3 bg-brand-bosque text-white font-sans text-sm font-medium rounded-xl shadow-md hover:bg-brand-bosque/95"
              >
                Cotizar Servicio
                <ArrowRight className="w-4 h-4 text-brand-claro" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
