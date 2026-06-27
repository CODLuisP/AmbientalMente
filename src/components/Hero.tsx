import { MouseEvent, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Award, MapPin } from 'lucide-react';

const TITLE_1 = 'Transformamos desafíos ambientales en ';
const TITLE_2 = 'soluciones sostenibles.';

function useTypewriter(text: string, speed = 40, delay = 300) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed('');
    setDone(false);
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return { displayed, done };
}

export default function Hero() {
  const { displayed: part1, done: done1 } = useTypewriter(TITLE_1, 35, 400);
  const { displayed: part2, done: done2 } = useTypewriter(done1 ? TITLE_2 : '', 45, 0);

  const handleScrollTo = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 }
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/src/public/fondo.png')",
          backgroundPosition: 'center 40%'
        }}
      />
      {/* Overlay: verde fuerte izquierda, casi transparente a la derecha */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/98 from-[30%] via-white/50 via-[55%] to-white/0" />

      {/* Contenido */}
      <div className="relative z-10 w-full px-8 sm:px-16 lg:px-32 pt-28 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          {/* Badge */}
       

          {/* Título con efecto typewriter */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-brand-bosque leading-tight tracking-tight mb-6 min-h-[1.2em]"
          >
            {part1}
            <span className="text-brand-hoja">{part2}</span>
            {/* Cursor solo mientras escribe */}
            {!done2 && <span className="inline-block w-0.5 h-[0.85em] bg-brand-hoja align-middle ml-1 animate-pulse" />}
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-600 max-w-xl mb-10 leading-relaxed"
          >
            En <strong className="text-brand-bosque">AmbientalMente LV E.I.R.L.</strong> nos especializamos
            en la gestión integral de residuos sólidos, monitoreo ocupacional y consultorías que
            transforman su cumplimiento normativo en ventajas competitivas.
          </motion.p>

          {/* Trust badges */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-6 mb-10">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-brand-hoja/10 text-brand-hoja">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-brand-bosque">100% Legal</p>
                <p className="text-[10px] text-slate-500">Autorización MINAM</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-brand-agua/10 text-brand-agua">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-brand-bosque">Garantía INACAL</p>
                <p className="text-[10px] text-slate-500">Laboratorios acreditados</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-brand-tierra/10 text-brand-tierra">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-brand-bosque">Soporte Nacional</p>
                <p className="text-[10px] text-slate-500">Cobertura en todo el Perú</p>
              </div>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={(e) => handleScrollTo(e, '#servicios')}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-bosque text-white font-semibold rounded-2xl hover:bg-brand-bosque/90 transition-all shadow-lg shadow-brand-bosque/15 group cursor-pointer"
            >
              Explorar Servicios
              <ArrowRight className="w-5 h-5 text-brand-claro group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={(e) => handleScrollTo(e, '#contacto')}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white border-2 border-slate-200 text-slate-700 font-semibold rounded-2xl hover:bg-slate-50 hover:border-slate-300 hover:text-brand-bosque transition-all cursor-pointer"
            >
              Asesoría Gratuita
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
