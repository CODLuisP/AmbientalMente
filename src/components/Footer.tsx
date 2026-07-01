import { MouseEvent } from "react";
import { ArrowUp, Mail, Phone, MapPin, Globe } from "lucide-react";
import Reveal from "./Reveal";

export default function Footer() {
  const handleScrollToTop = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollTo = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Servicios", href: "#servicios" },
    { name: "Valores", href: "#valores" },
    { name: "¿Por qué elegirnos?", href: "#por-que-elegirnos" },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/ambientalmentelv",
      icon: "ig",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/ambientalmentelv",
      icon: "fb",
    },
  ];

  return (
    <footer className="bg-brand-bosque text-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-brand-hoja/10 blur-3xl pointer-events-none" />
      <div className="absolute left-0 top-0 w-80 h-80 rounded-full bg-brand-claro/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16 border-b border-white/10">
          {/* Col 1: Info de contacto */}
          <Reveal direction="up" className="space-y-6">
            <div>
              <h3 className="font-display font-bold text-base text-white mb-1">
                AmbientalMente LV E.I.R.L.
              </h3>
              <div className="inline-flex items-center gap-2 mt-1.5 rounded-lg bg-white/5 border border-white/10 px-2.5 py-1">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-hoja">
                  RUC
                </span>
                <span className="text-xs font-mono text-brand-claro tracking-wide">
                  20614968665
                </span>
              </div>
            </div>

            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-hoja shrink-0 mt-0.5" />
                <span className="text-sm text-slate-300 leading-snug">
                  Jr. Villa Tres Molinos Mz. C Lote 16 E<br />
                  Cajamarca – Perú
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-hoja shrink-0" />
                <a
                  href="mailto:ambientalmente531@gmail.com"
                  className="text-sm text-slate-300 hover:text-brand-claro transition-colors"
                >
                  ambientalmente531@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-hoja shrink-0" />
                <a
                  href="https://wa.me/51958671088"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-300 hover:text-brand-claro transition-colors"
                >
                  +51 958 671 088
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-brand-hoja shrink-0" />
                <a
                  href="https://www.ambientalmentelv.com.pe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-300 hover:text-brand-claro transition-colors"
                >
                  www.ambientalmentelv.com.pe
                </a>
              </li>
            </ul>
          </Reveal>

          {/* Col 2: Navegación */}
          <Reveal direction="up" delay={0.1} className="space-y-5">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-brand-claro">
              Navegación
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="text-sm text-slate-300 hover:text-brand-claro transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Col 3: Redes sociales */}
          <Reveal direction="up" delay={0.2} className="space-y-5">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-brand-claro">
              Redes Sociales
            </h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group/social"
                  >
                    <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center group-hover/social:bg-brand-hoja group-hover/social:border-brand-hoja transition-all duration-300">
                      {link.icon === "ig" ? (
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      ) : (
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      )}
                    </div>
                    <span className="text-sm text-slate-300 group-hover/social:text-brand-claro transition-colors">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-slate-400">
            © 2026 AmbientalMente LV E.I.R.L. — Todos los derechos reservados.
          </p>
          <button
            onClick={handleScrollToTop}
            className="p-2.5 bg-white/10 hover:bg-brand-hoja border border-white/10 rounded-xl transition-all cursor-pointer hover:scale-105 active:scale-95"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
}
