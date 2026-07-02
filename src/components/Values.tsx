import type { CSSProperties } from 'react';
import { motion } from 'motion/react';
import { valuesData } from '../data';
import { Heart, Scale, Sparkles, Award, Star } from 'lucide-react';
import Reveal from './Reveal';
// 👉 Imagen central del bloque de valores. Cambia solo esta URL.
const CENTER_IMAGE = '/TrabajandoLV.webp';

const getValueIcon = (name: string, colorClass: string = 'text-brand-bosque') => {
  switch (name) {
    case 'Heart': return <Heart className={`w-6 h-6 ${colorClass}`} />;
    case 'Scale': return <Scale className={`w-6 h-6 ${colorClass}`} />;
    case 'Sparkles': return <Sparkles className={`w-6 h-6 ${colorClass}`} />;
    case 'Award': return <Award className={`w-6 h-6 ${colorClass}`} />;
    default: return <Star className={`w-6 h-6 ${colorClass}`} />;
  }
};
// Colores por tarjeta, alineados a nuestra paleta
const getStyleConfigs = (idx: number) => {
  const configs = [
    { bg: 'bg-brand-bosque/[0.02]', border: 'border-brand-bosque/10 hover:border-brand-bosque/30', iconBg: 'bg-brand-bosque/10', iconColor: 'text-brand-bosque' },
    { bg: 'bg-brand-agua/[0.02]',   border: 'border-brand-agua/10 hover:border-brand-agua/30',     iconBg: 'bg-brand-agua/10',   iconColor: 'text-brand-agua' },
    { bg: 'bg-brand-hoja/[0.02]',   border: 'border-brand-hoja/10 hover:border-brand-hoja/30',     iconBg: 'bg-brand-hoja/10',   iconColor: 'text-brand-hoja' },
    { bg: 'bg-brand-tierra/[0.02]', border: 'border-brand-tierra/10 hover:border-brand-tierra/30', iconBg: 'bg-brand-tierra/10', iconColor: 'text-brand-tierra' }
  ];
  return configs[idx % configs.length];
};
// Posiciones en la grilla de 10 columnas para el diseño de PC.
// Cada tarjeta ocupa 2 columnas; la imagen central ocupa cols 3-8 (filas 2-3).
const desktopPos: CSSProperties[] = [
  { gridColumn: '3 / 5',  gridRow: '1 / 2' }, // 0 - arriba izq
  { gridColumn: '5 / 7',  gridRow: '1 / 2' }, // 1 - arriba centro
  { gridColumn: '7 / 9',  gridRow: '1 / 2' }, // 2 - arriba der
  { gridColumn: '1 / 3',  gridRow: '2 / 3' }, // 3 - izq superior
  { gridColumn: '9 / 11', gridRow: '2 / 3' }, // 4 - der superior
  { gridColumn: '1 / 3',  gridRow: '3 / 4' }, // 5 - izq inferior
  { gridColumn: '9 / 11', gridRow: '3 / 4' }, // 6 - der inferior
  { gridColumn: '4 / 6',  gridRow: '4 / 5' }, // 7 - abajo izq
  { gridColumn: '6 / 8',  gridRow: '4 / 5' }  // 8 - abajo der
];

function ValueCard({ val, idx, clamp = false, style }: {
  val: typeof valuesData[number];
  idx: number;
  clamp?: boolean;
  style?: CSSProperties;
}) {
  const styles = getStyleConfigs(idx);
  return (
    <motion.div
      style={style}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.45, delay: (idx % 5) * 0.08 }}
      className={`relative rounded-3xl p-5 sm:p-6 border transition-all duration-300 flex flex-col h-full min-h-50 overflow-hidden group ${styles.bg} ${styles.border}`}
    >
      {/* Imagen decorativa alternada al hover */}
      <img
        src={idx % 2 === 0 ? '/formulario.webp' : '/carda.webp'}
        alt=""
        className={`absolute bottom-0 h-24 w-auto object-contain opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none select-none ${idx % 2 === 0 ? 'left-0' : 'right-0'}`}
      />

      <div className="relative z-10 flex-1">
        <div className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform ${styles.iconBg}`}>
          {getValueIcon(val.iconName, styles.iconColor)}
        </div>
        <h3 className="font-display font-bold text-base lg:text-lg text-brand-bosque tracking-tight group-hover:text-brand-hoja transition-colors mb-2 leading-tight">
          {val.title}
        </h3>
        <p className={`font-sans text-xs sm:text-sm text-slate-500 leading-relaxed ${clamp ? 'line-clamp-4' : ''}`}>
          {val.description}
        </p>
      </div>

      {/* Indicador inferior */}
      <div className="w-8 h-1 bg-slate-200 group-hover:bg-brand-hoja transition-all duration-300 rounded-full mt-4 relative z-10" />
    </motion.div>
  );
}

export default function Values() {
  return (
    <section id="valores" className="py-24 bg-white relative overflow-hidden">
      {/* Líneas estructurales */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Encabezado */}
        <Reveal className="flex flex-row mb-16 h-47.5 items-center">
          <div className="h-full shrink-0 mr-2">
            <img src="/sobre.webp" alt="Filosofía de Trabajo" className="h-full w-auto object-cover rounded-2xl" />
          </div>
          <div className="px-4">
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
        </Reveal>

        {/* === Diseño PC: tarjetas alrededor de la imagen central === */}
        <div
          className="hidden lg:grid gap-5"
          style={{ gridTemplateColumns: 'repeat(10, minmax(0, 1fr))', gridTemplateRows: 'auto auto auto auto' }}
        >
          {valuesData.map((val, idx) => (
            <ValueCard key={val.id} val={val} idx={idx} clamp style={desktopPos[idx]} />
          ))}

          {/* Imagen central (solo se cambia CENTER_IMAGE arriba) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl overflow-hidden shadow-lg ring-1 ring-black/5"
            style={{ gridColumn: '3 / 9', gridRow: '2 / 4' }}
          >
            <img src={CENTER_IMAGE} alt="Nuestros valores" className="absolute inset-0 w-full h-full object-cover" />
          </motion.div>
        </div>

        {/* === Diseño móvil/tablet: valores primero, imagen al final === */}
        <div className="lg:hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {valuesData.map((val, idx) => (
              <ValueCard key={val.id} val={val} idx={idx} />
            ))}
          </div>

          {/* Imagen al final (misma URL: CENTER_IMAGE) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="relative mt-8 rounded-3xl overflow-hidden shadow-lg ring-1 ring-black/5 aspect-[16/10]"
          >
            <img src={CENTER_IMAGE} alt="Nuestros valores" className="w-full h-full object-cover" />
          </motion.div>
        </div>

        {/* Cita corporativa (Einstein) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 rounded-3xl bg-linear-to-br from-brand-bosque to-emerald-950 text-white relative overflow-hidden shadow-xl"
        >
          {/* Círculos de fondo */}
          <div className="absolute -right-7.5 -bottom-7.5 w-64 h-64 rounded-full bg-white/5 blur-xl" />
          <div className="absolute -left-7.5 -top-7.5 w-64 h-64 rounded-full bg-brand-claro/10 blur-xl" />

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-[1fr_auto] items-end gap-8">
            {/* Texto de la cita */}
            <div className="p-8 sm:p-12">
              <span className="font-display text-7xl sm:text-8xl leading-none text-brand-claro/30 select-none block -mb-6">
                &ldquo;
              </span>
              <p className="font-display italic text-xl sm:text-2xl text-white leading-relaxed font-medium">
                No heredamos la tierra de nuestros antepasados, la tomamos prestada de nuestros hijos.
              </p>
              <div className="flex items-center gap-3 mt-6">
                <div className="w-10 h-0.5 bg-brand-claro/60 rounded-full" />
                <p className="font-sans text-sm text-brand-claro font-semibold tracking-wide">
                  Albert Einstein
                </p>
              </div>
              <p className="font-sans text-[11px] text-white/60 mt-1 uppercase tracking-wider">
                Principio que inspira nuestra labor técnica
              </p>
            </div>

            {/* Foto de Albert Einstein */}
            <motion.img
              src="/albert.webp"
              alt="Albert Einstein"
              initial={{ opacity: 0, y: 120 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="hidden sm:block h-64 w-auto object-contain object-bottom self-end drop-shadow-2xl"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
