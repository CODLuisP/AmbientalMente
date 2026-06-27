import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { servicesData } from '../data';
import { Service } from '../types';
import { Truck, Gauge, FileText, Leaf, ShieldAlert, BadgeCheck, ChevronDown, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const filterOptions = [
    { value: 'todos', label: 'Todos los servicios' },
    { value: 'residuos', label: 'Gestión de Residuos' },
    { value: 'monitoreo', label: 'Monitoreo Técnico' },
    { value: 'consultoria', label: 'Consultoría y Permisos' },
    { value: 'sostenibilidad', label: 'Ecoeficiencia y Sostenibilidad' }
  ];

  const getServiceIcon = (name: string, sizeClass: string = "w-6 h-6") => {
    switch (name) {
      case 'Truck': return <Truck className={sizeClass} />;
      case 'Gauge': return <Gauge className={sizeClass} />;
      case 'FileText': return <FileText className={sizeClass} />;
      case 'Leaf': return <Leaf className={sizeClass} />;
      default: return <CheckCircle2 className={sizeClass} />;
    }
  };

  const filteredServices = selectedCategory === 'todos'
    ? servicesData
    : servicesData.filter(s => s.id === selectedCategory);

  const toggleExpand = (id: string) => {
    if (expandedService === id) {
      setExpandedService(null);
    } else {
      setExpandedService(id);
    }
  };

  return (
    <section id="servicios" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Blur BG */}
      <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-brand-claro/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-brand-agua/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-start gap-4 mb-16">
          <div className="w-1 self-stretch bg-brand-hoja rounded-full shrink-0" />
          <div>
            <span className="text-xs font-semibold text-brand-hoja uppercase tracking-widest">
              Nuestros Servicios
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-bosque mt-2 tracking-tight">
              Soluciones Ambientales de Alto Estándar
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-500 mt-3 leading-relaxed max-w-2xl">
              Abordamos de forma integral las necesidades ambientales de su empresa, asegurando el estricto cumplimiento normativo y promoviendo la ecoeficiencia.
            </p>
          </div>
        </div>

        {/* Category Filters (Pills) */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              id={`filter-btn-${opt.value}`}
              onClick={() => {
                setSelectedCategory(opt.value);
                setExpandedService(null);
              }}
              className={`px-4.5 py-2.5 rounded-full font-sans text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer border ${
                selectedCategory === opt.value
                  ? 'bg-brand-bosque border-brand-bosque text-white shadow-md shadow-brand-bosque/10'
                  : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50 hover:text-brand-bosque'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => {
              const isExpanded = expandedService === service.id;
              return (
                <motion.div
                  key={service.id}
                  id={`service-card-${service.id}`}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, type: 'spring' }}
                  className={`bg-white rounded-3xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                    isExpanded
                      ? 'shadow-xl border-brand-hoja/40 ring-1 ring-brand-hoja/20'
                      : 'shadow-sm border-slate-100 hover:border-brand-hoja/20 hover:shadow-md'
                  }`}
                >
                  <div className="p-6 sm:p-8">
                    {/* Card Header */}
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-brand-bosque text-white flex items-center justify-center shadow-md shadow-brand-bosque/10">
                        {getServiceIcon(service.iconName)}
                      </div>
                      
                      {/* Interactive click-to-expand trigger icon */}
                      <button
                        onClick={() => toggleExpand(service.id)}
                        className={`p-2 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer text-slate-400 hover:text-brand-bosque ${
                          isExpanded ? 'rotate-180 bg-slate-50 text-brand-bosque' : ''
                        }`}
                        aria-label="Ver más detalles"
                      >
                        <ChevronDown className="w-5 h-5 transition-transform duration-300" />
                      </button>
                    </div>

                    <h3 className="font-display font-bold text-xl text-brand-bosque tracking-tight mb-3">
                      {service.title}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
                      {service.shortDescription}
                    </p>

                    {/* Subcategories preview tags */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {service.categories.map((cat, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-slate-100 rounded-lg text-[10px] font-semibold text-slate-600 tracking-wide"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>

                    {/* Expanded Detail View */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden mt-6 pt-6 border-t border-slate-100"
                        >
                          <div className="space-y-5">
                            {/* Detailed Description */}
                            <div>
                              <h4 className="font-display font-bold text-xs text-brand-bosque uppercase tracking-widest mb-1.5">
                                Descripción Detallada
                              </h4>
                              <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                                {service.fullDescription}
                              </p>
                            </div>

                            {/* Regulation/Standards */}
                            <div className="p-3 bg-brand-bosque/5 border-l-2 border-brand-hoja rounded-r-xl">
                              <div className="flex items-center gap-1.5 mb-1 text-brand-bosque">
                                <BadgeCheck className="w-4 h-4 text-brand-hoja shrink-0" />
                                <span className="font-display font-bold text-xs uppercase tracking-wide">Marco Regulatorio</span>
                              </div>
                              <p className="font-sans text-[11px] sm:text-xs text-brand-bosque/90 leading-tight">
                                {service.regulation}
                              </p>
                            </div>

                            {/* Features list */}
                            <div>
                              <h4 className="font-display font-bold text-xs text-brand-bosque uppercase tracking-widest mb-2.5">
                                Beneficios y Características
                              </h4>
                              <ul className="space-y-2">
                                {service.features.map((feat, i) => (
                                  <li key={i} className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-brand-hoja mt-0.5 shrink-0" />
                                    <span className="font-sans text-xs sm:text-sm text-slate-600 leading-tight">
                                      {feat}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Card Bottom Panel / Action Trigger */}
                  <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
                    <button
                      onClick={() => toggleExpand(service.id)}
                      className="font-sans text-xs font-semibold text-brand-bosque hover:text-brand-hoja transition-colors cursor-pointer"
                    >
                      {isExpanded ? 'Ocultar especificaciones' : 'Ver especificaciones'}
                    </button>
                    <a
                      href="#contacto"
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.querySelector('#contacto');
                        if (element) {
                          const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
                          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                        }
                      }}
                      className="inline-flex items-center gap-1.5 font-sans text-xs font-bold text-brand-hoja hover:text-brand-bosque transition-colors group"
                    >
                      Cotizar
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
