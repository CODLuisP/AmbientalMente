import { motion } from 'motion/react';
import { valuesData } from '../data';
import { Heart, Scale, Sparkles, Award, Star } from 'lucide-react';

export default function Values() {
  const getValueIcon = (name: string, colorClass: string = "text-brand-bosque") => {
    switch (name) {
      case 'Heart': return <Heart className={`w-6 h-6 ${colorClass}`} />;
      case 'Scale': return <Scale className={`w-6 h-6 ${colorClass}`} />;
      case 'Sparkles': return <Sparkles className={`w-6 h-6 ${colorClass}`} />;
      case 'Award': return <Award className={`w-6 h-6 ${colorClass}`} />;
      default: return <Star className={`w-6 h-6 ${colorClass}`} />;
    }
  };

  // Assign custom background and accent colors corresponding to our palette
  const getStyleConfigs = (idx: number) => {
    const configs = [
      {
        bg: 'bg-brand-bosque/[0.02]',
        border: 'border-brand-bosque/10 hover:border-brand-bosque/30',
        iconBg: 'bg-brand-bosque/10',
        iconColor: 'text-brand-bosque'
      },
      {
        bg: 'bg-brand-agua/[0.02]',
        border: 'border-brand-agua/10 hover:border-brand-agua/30',
        iconBg: 'bg-brand-agua/10',
        iconColor: 'text-brand-agua'
      },
      {
        bg: 'bg-brand-hoja/[0.02]',
        border: 'border-brand-hoja/10 hover:border-brand-hoja/30',
        iconBg: 'bg-brand-hoja/10',
        iconColor: 'text-brand-hoja'
      },
      {
        bg: 'bg-brand-tierra/[0.02]',
        border: 'border-brand-tierra/10 hover:border-brand-tierra/30',
        iconBg: 'bg-brand-tierra/10',
        iconColor: 'text-brand-tierra'
      }
    ];
    return configs[idx % configs.length];
  };

  return (
    <section id="valores" className="py-24 bg-white relative overflow-hidden">
      {/* Structural Accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex items-start gap-4 mb-16">
          <div className="w-1 self-stretch bg-brand-hoja rounded-full shrink-0" />
          <div>
            <span className="text-xs font-semibold text-brand-hoja uppercase tracking-widest">
              Filosofía de Trabajo
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-bosque mt-2 tracking-tight">
              Valores que Guían Nuestra Huella
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-500 mt-3 leading-relaxed max-w-2xl">
              Nuestra cultura empresarial se sostiene sobre bases éticas firmes, orientadas a la innovación constante y al cuidado responsable de la sociedad y del planeta.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {valuesData.map((val, idx) => {
            const styles = getStyleConfigs(idx);
            return (
              <motion.div
                key={val.id}
                id={`value-card-${val.id}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: idx * 0.12 }}
                className={`relative rounded-3xl p-6 border transition-all duration-300 flex flex-col justify-between group min-h-[250px] overflow-hidden ${styles.bg} ${styles.border}`}
              >
                {/* Imagen decorativa alternada: formulario (izq) / carda (der) */}
                <img
                  src={idx % 2 === 0 ? '/src/public/formulario.png' : '/src/public/carda.png'}
                  alt=""
                  className={`absolute bottom-0 h-28 w-auto object-contain opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none select-none ${idx % 2 === 0 ? 'left-0' : 'right-0'}`}
                />
                <div>
                  {/* Styled Icon Container */}
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform ${styles.iconBg}`}>
                    {getValueIcon(val.iconName, styles.iconColor)}
                  </div>

                  <h3 className="font-display font-bold text-lg text-brand-bosque tracking-tight group-hover:text-brand-hoja transition-colors mb-3">
                    {val.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {val.description}
                  </p>
                </div>

                {/* Subtle bottom indicator */}
                <div className="w-8 h-1 bg-slate-200 group-hover:bg-brand-hoja transition-all duration-300 rounded-full mt-6" />
              </motion.div>
            );
          })}
        </div>

        {/* Corporate Trust Highlight (Floating Quote/Statement) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-brand-bosque to-emerald-950 text-white text-center relative overflow-hidden shadow-xl"
        >
          {/* Background overlay circles */}
          <div className="absolute right-[-30px] bottom-[-30px] w-64 h-64 rounded-full bg-white/5 blur-xl" />
          <div className="absolute left-[-30px] top-[-30px] w-64 h-64 rounded-full bg-brand-claro/10 blur-xl" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-[10px] font-mono uppercase tracking-widest text-brand-claro">
              Filosofía Organizacional
            </span>
            <p className="font-display italic text-lg sm:text-xl text-brand-claro/90 mt-4 leading-relaxed font-medium">
              "No heredamos la tierra de nuestros antepasados, la tomamos prestada de nuestros hijos."
            </p>
            <p className="font-sans text-xs text-white/75 mt-3 uppercase tracking-wider">
              — Principio Ambiental que Inspira Nuestra Labor Técnica
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
