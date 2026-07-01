import { motion } from 'motion/react';
import { servicesData } from '../data';
import Reveal from './Reveal';
import {
  ArrowUpRight, ArrowRight,
  Truck, Gauge, FileText, Droplets, GraduationCap,
  Recycle, Route, ClipboardCheck, ShieldCheck, Wind,
  TestTube, FlaskConical, FileCheck2, ScrollText, BookOpen,
  Wrench, SprayCan, PackageCheck, HardHat, AlertTriangle
} from 'lucide-react';

// Esquema de color por servicio
const cardThemes: Record<string, {
  base: string;          // capa de fondo clara (siempre visible)
  hover: string;         // capa de fondo fuerte (aparece en hover, arriba->abajo)
  iconColor: string;     // color de iconos de features en reposo
  arrowColor: string;    // color de flecha en reposo
  rings: string;         // color de las ondas en reposo (stroke)
  ringsHover: string;    // color claro de las ondas en hover (stroke)
}> = {
  residuos: {
    base: 'from-green-50 to-brand-hoja/20',
    hover: 'from-brand-hoja to-brand-bosque',
    iconColor: 'text-brand-hoja',
    arrowColor: 'text-brand-hoja',
    rings: 'stroke-brand-hoja/40',
    ringsHover: 'group-hover:stroke-brand-claro/60'
  },
  monitoreo: {
    base: 'from-sky-50 to-brand-agua/20',
    hover: 'from-brand-agua to-cyan-900',
    iconColor: 'text-brand-agua',
    arrowColor: 'text-brand-agua',
    rings: 'stroke-brand-agua/40',
    ringsHover: 'group-hover:stroke-sky-200/60'
  },
  consultoria: {
    base: 'from-emerald-50 to-brand-bosque/15',
    hover: 'from-emerald-600 to-emerald-950',
    iconColor: 'text-brand-bosque',
    arrowColor: 'text-brand-bosque',
    rings: 'stroke-brand-bosque/40',
    ringsHover: 'group-hover:stroke-brand-claro/55'
  },
  banos: {
    base: 'from-amber-50 to-brand-tierra/20',
    hover: 'from-brand-tierra to-amber-950',
    iconColor: 'text-brand-tierra',
    arrowColor: 'text-brand-tierra',
    rings: 'stroke-brand-tierra/40',
    ringsHover: 'group-hover:stroke-amber-200/60'
  },
  capacitacion: {
    base: 'from-lime-50 to-brand-claro/40',
    hover: 'from-brand-hoja to-brand-bosque',
    iconColor: 'text-brand-hoja',
    arrowColor: 'text-brand-hoja',
    rings: 'stroke-brand-hoja/40',
    ringsHover: 'group-hover:stroke-brand-claro/60'
  }
};

// Configuración de imagen por servicio (posición y tamaño independientes)
const cardImages: Record<string, { src: string; className: string }> = {
  residuos:     { src: '/src/public/furgoneta.webp',              className: 'absolute bottom-5 right-3 h-28 w-auto' },
  monitoreo:    { src: '/src/public/servicios/monitore.webp',     className: 'absolute bottom-2 right-0 h-35 w-auto' },
  consultoria:  { src: '/src/public/servicios/consultoria.webp',  className: 'absolute bottom-0 right-0 h-38 w-auto' },
  banos:        { src: '/src/public/servicios/baño.webp',         className: 'absolute bottom-5 right-3 h-45 w-auto' },
  capacitacion: { src: '/src/public/servicios/capacitaciones.webp', className: 'absolute bottom-0 right-0 h-58 w-auto' },
};

// Iconos para las 3 features destacadas de cada servicio
const featureIcons: Record<string, React.ReactNode[]> = {
  residuos: [<Route />, <Recycle />, <ClipboardCheck />],
  monitoreo: [<Droplets />, <Wind />, <FlaskConical />],
  consultoria: [<FileCheck2 />, <ScrollText />, <BookOpen />],
  banos: [<Wrench />, <SprayCan />, <PackageCheck />],
  capacitacion: [<HardHat />, <ShieldCheck />, <AlertTriangle />]
};

// Las 3 etiquetas cortas mostradas como "features destacadas"
const highlightFeatures: Record<string, string[]> = {
  residuos: ['Recolección y transporte', 'Segregación y manejo', 'Trazabilidad del servicio'],
  monitoreo: ['Calidad de agua y aire', 'Calidad de suelo y ruido', 'Informes técnicos'],
  consultoria: ['Instrumentos de Gestión (IGA)', 'Declaraciones de Impacto (DIA)', 'Planes de Manejo Ambiental'],
  banos: ['Instalación y limpieza', 'Mantenimiento preventivo', 'Reposición y retiro'],
  capacitacion: ['Seguridad y salud (SST)', 'Prevención de riesgos', 'Normativa ambiental']
};

const topIcon = (name: string, cls: string) => {
  switch (name) {
    case 'Truck': return <Truck className={cls} />;
    case 'Gauge': return <Gauge className={cls} />;
    case 'FileText': return <FileText className={cls} />;
    case 'GraduationCap': return <GraduationCap className={cls} />;
    default: return <Droplets className={cls} />;
  }
};

export default function Services() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector('#contacto');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  };

  return (
    <section id="servicios" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-brand-claro/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-brand-agua/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <Reveal className="flex flex-row mb-16 h-47.5 items-center">
          <div className="h-full shrink-0 mr-2">
            <img src="/src/public/sobre01.webp" alt="Nuestros Servicios" className="h-full w-auto object-cover rounded-2xl" />
          </div>
          <div className="px-4">
            <span className="text-xs font-semibold text-brand-hoja uppercase tracking-widest">
              Nuestros Servicios
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-bosque mt-2 tracking-tight">
              Soluciones Ambientales de Alto Estándar
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-500 mt-3 leading-relaxed max-w-2xl">
              Abordamos de forma integral las necesidades ambientales de su empresa, asegurando el estricto cumplimiento normativo y promoviendo la sostenibilidad.
            </p>
          </div>
        </Reveal>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, idx) => {
            const theme = cardThemes[service.id] ?? cardThemes.residuos;
            const img = cardImages[service.id] ?? cardImages.residuos;
            const icons = featureIcons[service.id] ?? [];
            const feats = highlightFeatures[service.id] ?? [];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`group relative rounded-[28px] overflow-hidden cursor-pointer min-h-133.75 flex flex-col transition-all duration-500 shadow-sm hover:shadow-2xl border border-white/70 hover:border-transparent${idx === servicesData.length - 1 ? ' lg:col-span-2' : ''}`}
              >
                {/* Capa de fondo clara (siempre) */}
                <div className={`absolute inset-0 bg-linear-to-b ${theme.base}`} />
                {/* Capa de fondo fuerte (aparece en hover) */}
                <div className={`absolute inset-0 bg-linear-to-b ${theme.hover} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="p-7 flex flex-col flex-1 relative z-10">
                  {/* Top brand mark */}
                  <div className="flex items-center gap-2 mb-5">
                    <span className={`${theme.iconColor} group-hover:text-white transition-colors duration-300`}>
                      {topIcon(service.iconName, 'w-6 h-6')}
                    </span>
                    <span className="font-display font-bold text-sm tracking-tight text-brand-bosque group-hover:text-white transition-colors duration-300">
                      AmbientalMente
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-2xl text-brand-bosque group-hover:text-white transition-colors duration-300 tracking-tight mb-3 leading-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-sm text-slate-500 group-hover:text-white/85 transition-colors duration-300 leading-relaxed mb-7">
                    {service.shortDescription}
                  </p>

                  {/* Features */}
                  <p className="font-display font-bold text-sm text-brand-bosque group-hover:text-white transition-colors duration-300 mb-4">
                    Incluye
                  </p>
                  <ul className="space-y-3.5">
                    {feats.map((feat, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className={`${theme.iconColor} group-hover:text-white transition-colors duration-300 [&>svg]:w-4.5 [&>svg]:h-4.5 shrink-0`}>
                          {icons[i]}
                        </span>
                        <span className="font-sans text-sm text-slate-700 group-hover:text-white/90 transition-colors duration-300">
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ondas concéntricas bajo la imagen */}
                <svg
                  viewBox="0 0 200 120"
                  className="absolute bottom-5 right-5 w-52 h-32 pointer-events-none z-1 overflow-visible"
                  fill="none"
                >
                  {[60, 46, 32, 18].map((ry, i) => (
                    <ellipse
                      key={i}
                      cx="120"
                      cy="95"
                      rx={ry * 1.6}
                      ry={ry * 0.55}
                      className={`${theme.rings} ${theme.ringsHover} transition-colors duration-500`}
                      strokeWidth="0.75"
                    />
                  ))}
                </svg>
                {/* Glow en hover */}
                <div className="absolute bottom-0 right-0 w-52 h-44 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/25 translate-x-1/4 translate-y-1/4 pointer-events-none z-1" />
                <img
                  src={img.src}
                  alt=""
                  className={`${img.className} object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500 pointer-events-none z-10`}
                />

                {/* Arrow button bottom-left */}
                <button
                  onClick={scrollToContact}
                  className="absolute bottom-6 left-7 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 z-20 bg-white shadow-md group-hover:bg-transparent group-hover:border group-hover:border-white/70 group-hover:shadow-none"
                  aria-label="Ver más"
                >
                  {/* Reposo: flecha diagonal de color */}
                  <ArrowUpRight className={`w-5 h-5 ${theme.arrowColor} group-hover:hidden`} />
                  {/* Hover: flecha derecha blanca */}
                  <ArrowRight className="w-5 h-5 text-white hidden group-hover:block" />
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
