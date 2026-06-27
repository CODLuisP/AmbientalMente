import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { statsData } from '../data';
import { Target, Eye, Compass, Shield, Users, Leaf, ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState<'mision' | 'vision'>('mision');

  // Dynamic icon helper to safely map strings to Lucide components
  const getStatIcon = (name: string) => {
    switch (name) {
      case 'Trash2': return <LucideIcons.Trash2 className="w-6 h-6" />;
      case 'ShieldCheck': return <LucideIcons.ShieldCheck className="w-6 h-6" />;
      case 'Building2': return <LucideIcons.Building2 className="w-6 h-6" />;
      case 'Activity': return <LucideIcons.Activity className="w-6 h-6" />;
      default: return <LucideIcons.BarChart3 className="w-6 h-6" />;
    }
  };

  const tabsContent = {
    mision: {
      title: 'Nuestra Misión',
      subtitle: 'El motor de nuestras operaciones diarias',
      text: 'Brindar soluciones integrales en gestión ambiental mediante servicios especializados de recolección y transporte de residuos sólidos, monitoreos ambientales, consultoría, capacitaciones y ejecución de estudios ambientales, contribuyendo al cumplimiento normativo, la protección del medio ambiente y el desarrollo sostenible de nuestros clientes con eficiencia, innovación y responsabilidad.',
      icon: <Target className="w-7 h-7 text-brand-hoja" />,
      bullets: [
        'Optimización de la segregación industrial.',
        'Minimización del impacto de residuos peligrosos.',
        'Asesoría técnica continua de alto nivel.',
        'Promoción de la economía circular corporativa.'
      ]
    },
    vision: {
      title: 'Nuestra Visión',
      subtitle: 'Hacia dónde conducimos nuestro impacto',
      text: 'Consolidarnos como una de las empresas ambientales más reconocidas del país, destacando por la excelencia de nuestros servicios, la innovación técnica y el desarrollo de soluciones sostenibles que generan valor para nuestros clientes y contribuyen a la protección del medio ambiente.',
      icon: <Eye className="w-7 h-7 text-brand-agua" />,
      bullets: [
        'Liderazgo en el sector de valorización ambiental.',
        'Expansión de servicios a nivel regional.',
        'Adopción de tecnologías eco-eficientes de última generación.',
        'Desarrollo de proyectos de carbono neutralidad.'
      ]
    },
  };

  return (
    <section id="nosotros" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative BG Grid */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex items-start gap-4 mb-16">
          {/* Barra vertical */}
          <div className="w-1 self-stretch bg-brand-hoja rounded-full shrink-0" />
          <div>
            <span className="text-xs font-semibold text-brand-hoja uppercase tracking-widest">
              Sobre AmbientalMente LV
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-bosque mt-2 tracking-tight">
              Socios Estratégicos en Sostenibilidad e Ingeniería Ambiental
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-500 mt-3 leading-relaxed max-w-2xl">
              Somos una empresa peruana especializada y registrada para brindar soluciones integrales de consultoría, monitoreo ambiental y gestión de residuos sólidos para el sector privado y público.
            </p>
          </div>
        </div>

        {/* Dynamic Interactive Tabs Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Left Column: Interactive Nav / Buttons */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {(Object.keys(tabsContent) as Array<keyof typeof tabsContent>).map((tabKey) => {
              const tab = tabsContent[tabKey];
              const isSelected = activeTab === tabKey;
              return (
                <button
                  key={tabKey}
                  id={`tab-btn-${tabKey}`}
                  onClick={() => setActiveTab(tabKey)}
                  className={`flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 text-left cursor-pointer group border ${
                    isSelected
                      ? 'bg-gradient-to-r from-brand-bosque to-emerald-950 border-brand-bosque text-white shadow-lg shadow-brand-bosque/10'
                      : 'bg-slate-50 hover:bg-slate-100 border-slate-100 text-slate-700'
                  }`}
                >
                  <div className={`p-3 rounded-xl transition-colors ${
                    isSelected ? 'bg-white/10 text-white' : 'bg-white text-brand-bosque shadow-sm'
                  }`}>
                    {tabKey === 'mision' ? <Target className="w-5 h-5" /> : tabKey === 'vision' ? <Eye className="w-5 h-5" /> : <Compass className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm tracking-wide uppercase">
                      {tab.title}
                    </h3>
                    <p className={`text-xs font-sans mt-0.5 ${isSelected ? 'text-brand-claro/80' : 'text-slate-500 group-hover:text-slate-600'}`}>
                      {tab.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Tab Content Panel */}
          <div className="lg:col-span-8 min-h-[340px] bg-slate-50/50 rounded-3xl p-8 sm:p-10 border border-slate-100/60 shadow-inner relative overflow-hidden flex flex-col justify-between">
            <img
              src="/src/public/hexagono.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none select-none"
            />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col h-full justify-between"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-5">
                    {tabsContent[activeTab].icon}
                    <div>
                      <h3 className="font-display font-bold text-xl text-brand-bosque">
                        {tabsContent[activeTab].title}
                      </h3>
                      <p className="font-sans text-xs text-brand-hoja font-medium uppercase tracking-wider mt-0.5">
                        {tabsContent[activeTab].subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                    {tabsContent[activeTab].text}
                  </p>
                </div>

                {/* Bullets Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-4 border-t border-slate-200/50 pt-6">
                  {tabsContent[activeTab].bullets.map((bullet, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-hoja mt-2 shrink-0" />
                      <span className="font-sans text-xs sm:text-sm text-slate-600">{bullet}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Corporate Metrics (Stats Grid) */}
        <div className="border-t border-slate-100 pt-20">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h3 className="font-display font-bold text-lg text-brand-bosque uppercase tracking-widest">
              Nuestro Impacto en Cifras
            </h3>
            <p className="font-sans text-xs text-slate-400 mt-1 uppercase tracking-wide">
              Resultados de excelencia técnica e institucional
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {statsData.map((stat, idx) => (
              <motion.div
                key={stat.id}
                id={`stat-card-${stat.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-100 hover:border-brand-hoja/20 transition-all shadow-sm hover:shadow-md group text-center flex flex-col items-center justify-between min-h-[200px]"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-bosque/5 text-brand-bosque group-hover:bg-brand-bosque group-hover:text-white transition-all flex items-center justify-center mb-4 shadow-sm">
                  {getStatIcon(stat.iconName)}
                </div>
                <div>
                  <div className="font-display font-bold text-3xl sm:text-4xl text-brand-bosque group-hover:text-brand-hoja transition-colors leading-none tracking-tight">
                    {stat.value}
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-slate-500 mt-2.5 leading-relaxed font-medium px-2">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
