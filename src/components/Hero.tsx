import { MouseEvent, useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Award, MapPin } from "lucide-react";

const TITLE_1 = "Transformamos desafíos ambientales en ";
const TITLE_2 = "soluciones sostenibles";

function useTypewriter(text: string, speed = 40, delay = 300) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
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
  const { displayed: part2, done: done2 } = useTypewriter(
    done1 ? TITLE_2 : "",
    45,
    0,
  );

  const handleScrollTo = (
    e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 },
    },
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
          backgroundImage: "url('/fondo2.webp')",
          backgroundPosition: "center 40%",
        }}
      />

      {/* Degradado verde bosque de izquierda a derecha */}
      <div className="absolute inset-0 bg-linear-to-r from-brand-bosque from-5% via-brand-bosque/80 via-40% to-transparent to-75%" />

      {/* Contenido */}
      <div className="relative z-10 w-full px-5 sm:px-10 lg:px-24 xl:px-32 pt-28 pb-16 sm:pt-32 sm:pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-xs sm:max-w-lg lg:max-w-2xl text-left flex flex-col items-start"
        >
          {/* Título con efecto typewriter */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight tracking-tight mb-4 sm:mb-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]"
          >
            {part1}
            <span className="text-brand-claro">{part2}</span>
            {!done2 && (
              <span className="inline-block w-0.5 h-[0.85em] bg-brand-hoja align-middle ml-1 animate-pulse" />
            )}
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base lg:text-lg text-white/85 mb-7 sm:mb-10 leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.3)]"
          >
            En{" "}
            <strong className="text-white font-bold">
              AmbientalMente LV E.I.R.L.
            </strong>{" "}
            nos especializamos en la gestión integral de residuos sólidos,
            monitoreo ocupacional y consultorías que transforman su cumplimiento
            normativo en ventajas competitivas.
          </motion.p>

          {/* Trust badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 sm:gap-6 mb-7 sm:mb-10"
          >
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-white/15 text-brand-claro backdrop-blur-md border border-white/20">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-[11px] sm:text-xs font-bold text-white">
                  100% Profesional
                </p>
                <p className="text-[10px] text-white/70">Servicio especializado</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-white/15 text-brand-claro backdrop-blur-md border border-white/20">
                <Award className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-[11px] sm:text-xs font-bold text-white">
                  Soluciones Sostenibles
                </p>
                <p className="text-[10px] text-white/70">
                  Gestión ambiental integral
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-white/15 text-brand-claro backdrop-blur-md border border-white/20">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-[11px] sm:text-xs font-bold text-white">
                  Soporte Nacional
                </p>
                <p className="text-[10px] text-white/70">
                  Cobertura en todo el Perú
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <button
              onClick={(e) => handleScrollTo(e, "#servicios")}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-brand-hoja text-white text-sm sm:text-base font-semibold rounded-2xl hover:bg-brand-hoja/90 transition-all shadow-lg shadow-black/20 group cursor-pointer"
            >
              Explorar Servicios
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-brand-claro group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={(e) => handleScrollTo(e, "#contacto")}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-white/10 border-2 border-white/40 text-white text-sm sm:text-base font-semibold rounded-2xl backdrop-blur-md hover:bg-white/20 hover:border-white/60 transition-all cursor-pointer"
            >
              Asesoría Gratuita
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
