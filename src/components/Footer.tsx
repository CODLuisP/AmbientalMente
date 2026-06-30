import { MouseEvent } from 'react';
import { ArrowUp, Mail, Phone, MapPin, Globe, ExternalLink } from 'lucide-react';
import Reveal from './Reveal';

export default function Footer() {
  const handleScrollToTop = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollTo = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Valores', href: '#valores' },
    { name: '¿Por qué elegirnos?', href: '#por-que-elegirnos' },
  ];

  const legalLinks = [
    { name: 'MINAM', href: 'https://www.gob.pe/minam' },
    { name: 'OEFA', href: 'https://www.gob.pe/oefa' },
    { name: 'INACAL', href: 'https://www.gob.pe/inacal' },
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
              <h3 className="font-display font-bold text-base text-white mb-1">AmbientalMente LV E.I.R.L.</h3>
              <p className="text-[11px] text-brand-claro/70 font-mono">RUC: 20614968665</p>
            </div>

            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-hoja shrink-0 mt-0.5" />
                <span className="text-sm text-slate-300 leading-snug">
                  Jr. Villa Tres Molinos Mz. C Lote 16 E<br />Cajamarca – Perú
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-hoja shrink-0" />
                <a href="mailto:ambientalmente531@gmail.com" className="text-sm text-slate-300 hover:text-brand-claro transition-colors">
                  ambientalmente531@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-hoja shrink-0" />
                <a href="https://wa.me/51958671088" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-300 hover:text-brand-claro transition-colors">
                  +51 958 671 088
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-brand-hoja shrink-0" />
                <a href="https://www.ambientalmentelv.com.pe" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-300 hover:text-brand-claro transition-colors">
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

          {/* Col 3: Enlaces legales */}
          <Reveal direction="up" delay={0.2} className="space-y-5">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-brand-claro">
              Organismos Reguladores
            </h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-300 hover:text-brand-claro transition-colors flex items-center gap-1.5"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3 text-white/30" />
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
