import { motion } from 'motion/react';
import { whyUsData } from '../data';
import { ShieldCheck, ClipboardCheck, Users, Zap, Check, HelpCircle } from 'lucide-react';

export default function WhyChooseUs() {
  const getWhyUsIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-brand-bosque" />;
      case 'ClipboardCheck': return <ClipboardCheck className="w-5 h-5 text-brand-agua" />;
      case 'Users': return <Users className="w-5 h-5 text-brand-hoja" />;
      case 'Zap': return <Zap className="w-5 h-5 text-brand-tierra" />;
      default: return <HelpCircle className="w-5 h-5 text-slate-400" />;
    }
  };

  const getStyleConfigs = (name: string) => {
    switch (name) {
      case 'ShieldCheck': return { badgeBg: 'bg-brand-bosque/10 text-brand-bosque' };
      case 'ClipboardCheck': return { badgeBg: 'bg-brand-agua/10 text-brand-agua' };
      case 'Users': return { badgeBg: 'bg-brand-hoja/10 text-brand-hoja' };
      case 'Zap': return { badgeBg: 'bg-brand-tierra/10 text-brand-tierra' };
      default: return { badgeBg: 'bg-slate-100 text-slate-500' };
    }
  };

  return (
    <section id="por-que-elegirnos" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Structural Accent Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Context, Narrative & Comparative Table */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="flex flex-row mb-8 h-47.5 items-center">
              <div className="h-full shrink-0 mr-2">
                <img src="/src/public/sobre01.webp" alt="Diferenciales de Valor" className="h-full w-auto object-cover rounded-2xl" />
              </div>
              <div className="px-4">
                <span className="text-xs font-semibold text-brand-hoja uppercase tracking-widest">
                  Diferenciales de Valor
                </span>
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-bosque mt-2 tracking-tight leading-tight">
                  ¿Por qué las Empresas Líderes eligen a AmbientalMente LV?
                </h2>
              </div>
            </div>
            <p className="font-sans text-sm sm:text-base text-slate-500 leading-relaxed mb-8">
              En el Perú, la fiscalización ambiental es cada vez más rigurosa. Trabajamos como un brazo de ingeniería y cumplimiento legal que asegura la continuidad operativa de su empresa mediante estándares certificados.
            </p>

            {/* Micro Comparative Checklist */}
            <div className="space-y-4 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h3 className="font-display font-bold text-sm text-brand-bosque uppercase tracking-wider mb-2">
                Nuestra Garantía de Calidad
              </h3>

              <div className="flex items-start gap-3">
                <div className="p-0.5 bg-brand-hoja/10 rounded text-brand-hoja shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <p className="font-sans text-xs sm:text-sm text-slate-600">
                  <strong className="text-brand-bosque">Garantía de Aceptación:</strong> Informes y certificados listos para auditorías OEFA, Minsur, Digesa, etc.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-0.5 bg-brand-hoja/10 rounded text-brand-hoja shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <p className="font-sans text-xs sm:text-sm text-slate-600">
                  <strong className="text-brand-bosque">Trazabilidad Total:</strong> Reporte digital de residuos desde la recolección hasta la disposición final.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-0.5 bg-brand-hoja/10 rounded text-brand-hoja shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <p className="font-sans text-xs sm:text-sm text-slate-600">
                  <strong className="text-brand-bosque">Cero Costos Ocultos:</strong> Cotizaciones cerradas, claras y adaptadas a su volumen de producción.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Core WhyUs cards arranged in elegant layout */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyUsData.map((item, idx) => {
              const styles = getStyleConfigs(item.iconName);
              return (
                <motion.div
                  key={item.id}
                  id={`whyus-card-${item.id}`}
                  initial={{ opacity: 0, scale: 0.96, y: 15 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-brand-hoja/20 transition-all hover:shadow-md flex flex-col justify-between min-h-60 group"
                >
                  <div>
                    {/* Header with icon and tag highlight */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 shadow-sm group-hover:scale-105 transition-transform">
                        {getWhyUsIcon(item.iconName)}
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg ${styles.badgeBg}`}>
                        {item.highlight}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-base text-brand-bosque tracking-tight mb-2.5">
                      {item.title}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="w-6 h-0.5 bg-slate-150 group-hover:bg-brand-hoja transition-colors rounded mt-4" />
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
