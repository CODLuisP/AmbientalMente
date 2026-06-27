import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { brandAppsData } from '../data';
import { Truck, FileSpreadsheet, Shirt, Trash, Check, QrCode } from 'lucide-react';

export default function BrandApplications() {
  const [activeAppId, setActiveAppId] = useState<string>('app-truck');

  const currentApp = brandAppsData.find(app => app.id === activeAppId) || brandAppsData[0];

  const getTabIcon = (type: string, isSelected: boolean) => {
    const size = "w-5 h-5";
    const color = isSelected ? "text-white" : "text-brand-bosque";
    switch (type) {
      case 'truck': return <Truck className={`${size} ${color}`} />;
      case 'report': return <FileSpreadsheet className={`${size} ${color}`} />;
      case 'uniform': return <Shirt className={`${size} ${color}`} />;
      case 'stations': return <Trash className={`${size} ${color}`} />;
      default: return <Truck className={`${size} ${color}`} />;
    }
  };

  return (
    <section id="marca" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Blur Accent */}
      <div className="absolute top-1/2 left-[-10%] w-[450px] h-[450px] rounded-full bg-brand-claro/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[450px] h-[450px] rounded-full bg-brand-agua/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex items-start gap-4 mb-16">
          <div className="w-1 self-stretch bg-brand-hoja rounded-full shrink-0" />
          <div>
            <span className="text-xs font-semibold text-brand-hoja uppercase tracking-widest">
              Identidad de Marca
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-bosque mt-2 tracking-tight">
              Nuestra Identidad en Acción
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-500 mt-3 leading-relaxed max-w-2xl">
              Diseñamos cada punto de contacto con disciplina técnica y un alto estándar estético. Vea cómo se despliega nuestra identidad corporativa en el mundo real.
            </p>
          </div>
        </div>

        {/* Tab Selectors (Horizontal list on desktop, scrollable on mobile) */}
        <div className="flex overflow-x-auto pb-4 sm:pb-0 sm:justify-center gap-3 mb-12 scrollbar-none">
          {brandAppsData.map((app) => {
            const isSelected = app.id === activeAppId;
            return (
              <button
                key={app.id}
                id={`brand-tab-btn-${app.id}`}
                onClick={() => setActiveAppId(app.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl font-sans text-xs sm:text-sm font-semibold tracking-wide transition-all shrink-0 cursor-pointer border ${
                  isSelected
                    ? 'bg-brand-bosque border-brand-bosque text-white shadow-md shadow-brand-bosque/10'
                    : 'bg-slate-50 border-slate-150 text-slate-600 hover:bg-slate-100 hover:text-brand-bosque hover:border-slate-300'
                }`}
              >
                {getTabIcon(app.illustrationType, isSelected)}
                {app.title}
              </button>
            );
          })}
        </div>

        {/* Split Grid: Interactive Custom CSS Mockup & Text Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-inner">
          
          {/* Left Column: Interactive, High-Fidelity CSS Drawing (Mockups) */}
          <div className="lg:col-span-7 flex items-center justify-center min-h-[380px] w-full bg-white rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden p-4 sm:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeAppId}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full flex items-center justify-center"
              >
                
                {/* 1. FURGONETA */}
                {currentApp.illustrationType === 'truck' && (
                  <img
                    src="/src/public/furgoneta.jpeg"
                    alt="Flota de transporte AmbientalMente LV"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}

                {/* 2. REPORT / CERTIFICATE MOCKUP */}
                {currentApp.illustrationType === 'report' && (
                  <div className="w-[280px] sm:w-[320px] bg-white rounded-2xl border-2 border-slate-300 shadow-xl p-5 flex flex-col justify-between aspect-[1/1.4] relative overflow-hidden">
                    {/* Watermark Leaf in background */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
                      <Truck className="w-48 h-48 rotate-12 text-brand-bosque" />
                    </div>

                    {/* Report Header */}
                    <div className="border-b-2 border-brand-bosque/20 pb-4 flex items-start justify-between">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-display font-extrabold text-brand-bosque leading-tight">
                          AmbientalMente <span className="text-brand-hoja">LV</span>
                        </span>
                        <span className="text-[6px] text-slate-400 uppercase font-bold tracking-wider">
                          E.I.R.L. | RUC: 20601234567
                        </span>
                      </div>
                      <div className="p-1 rounded bg-brand-bosque/5 text-brand-bosque">
                        <QrCode className="w-6 h-6 text-brand-bosque" />
                      </div>
                    </div>

                    {/* Report Title */}
                    <div className="my-4 text-center">
                      <h4 className="text-[10px] font-display font-extrabold text-brand-bosque uppercase tracking-wide">
                        CERTIFICADO DE DISPOSICIÓN FINAL
                      </h4>
                      <p className="text-[7px] text-slate-400 font-mono mt-0.5">N° CERT-2026-09851-AM</p>
                    </div>

                    {/* Content Lines (Simulated Document Body) */}
                    <div className="space-y-2 text-[7px] text-slate-600 leading-tight">
                      <p>
                        Por la presente se certifica que la empresa <strong className="text-slate-800">CLIENTE INDUSTRIAL S.A.C.</strong> ha dispuesto de manera final los siguientes residuos sólidos:
                      </p>
                      
                      <div className="bg-slate-50 p-2 rounded border border-slate-200/60 font-mono text-[6.5px] space-y-1">
                        <div className="flex justify-between">
                          <span>• Residuos Metálicos (Plomo/Fierro):</span>
                          <span className="font-bold">2.45 Ton.</span>
                        </div>
                        <div className="flex justify-between">
                          <span>• Aceites Industriales Usados:</span>
                          <span className="font-bold text-red-600">0.80 Ton. (Peligroso)</span>
                        </div>
                      </div>

                      <p>
                        Operación ejecutada bajo la autorización de transporte <span className="underline">EP-RS-MINAM-021</span> con destino al relleno autorizado.
                      </p>
                    </div>

                    {/* Footer / Signature Block */}
                    <div className="border-t border-slate-100 pt-3 flex justify-between items-end mt-4">
                      <div className="flex flex-col">
                        <span className="text-[5px] text-slate-400 font-mono">FECHA: LIMA, 26/06/2026</span>
                        <span className="text-[5px] text-slate-400 font-mono">HASH: 4b8e21a97c...</span>
                      </div>
                      
                      {/* Stamp & Signature */}
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-6 border border-dashed border-brand-hoja/40 rounded flex items-center justify-center bg-brand-hoja/[0.02] mb-1">
                          <span className="text-[5px] text-brand-hoja font-bold uppercase tracking-wider">FIRMA REGISTRADA</span>
                        </div>
                        <span className="text-[5px] font-bold text-brand-bosque">ING. CIP: 148951</span>
                      </div>
                    </div>

                  </div>
                )}

                {/* 3. STAFF UNIFORM / PPE MOCKUP */}
                {currentApp.illustrationType === 'uniform' && (
                  <div className="relative w-56 aspect-[1/1.2] flex items-center justify-center">
                    {/* Base Uniform Shape (Technical Engineering Vest) */}
                    <div className="relative w-44 h-52 bg-brand-bosque rounded-t-[2.5rem] rounded-b-lg border-2 border-slate-300 shadow-lg p-4 flex flex-col justify-between overflow-hidden">
                      
                      {/* Collar V-neck cut */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-8 bg-slate-200 border-b border-slate-300 rounded-b-full z-10" />

                      {/* Silver Reflective Safety Stripes */}
                      <div className="absolute top-16 left-0 right-0 h-4 bg-slate-300 border-y border-slate-400 opacity-80" />
                      <div className="absolute bottom-16 left-0 right-0 h-4 bg-slate-300 border-y border-slate-400 opacity-80" />

                      {/* Vest zipper / details */}
                      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-1 bg-slate-700" />

                      {/* Right Chest Pocket with Logo */}
                      <div className="w-10 h-10 border border-brand-claro/30 rounded bg-brand-bosque/40 absolute top-24 left-4 z-10 p-1 flex items-center justify-center">
                        <div className="flex flex-col items-center">
                          <Truck className="w-3.5 h-3.5 text-brand-claro" />
                          <span className="text-[4px] font-bold text-white tracking-widest">AMV</span>
                        </div>
                      </div>

                      {/* Left Chest badge */}
                      <div className="w-10 h-5 border border-slate-300/40 rounded bg-slate-100/10 absolute top-24 right-4 z-10 flex items-center justify-center">
                        <span className="text-[4px] font-mono text-brand-claro font-bold tracking-wider">ING. INGENIERO</span>
                      </div>

                      {/* Beautiful glowing MINAM tag */}
                      <div className="absolute bottom-4 left-4 z-10 bg-brand-hoja text-white text-[5px] font-extrabold px-1.5 py-0.5 rounded uppercase tracking-wider">
                        AMBIENTALMENTE LV
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. RECYCLING STATIONS NTP 900.058:2019 */}
                {currentApp.illustrationType === 'stations' && (
                  <div className="flex gap-4 items-end justify-center w-full max-w-[420px] h-48">
                    
                    {/* Bins representing official Peru recycling color codes */}
                    {/* 1. BROWN: ORGANICS */}
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-14 h-32 bg-[#5c4033] rounded-t-xl rounded-b-md border-2 border-slate-300/40 shadow-md relative p-2 flex flex-col justify-between">
                        {/* Bin lid */}
                        <div className="w-16 h-3 bg-[#4a3329] -mt-3.5 rounded-full absolute left-1/2 -translate-x-1/2 border border-slate-400" />
                        <span className="text-[7px] text-white/90 font-bold uppercase tracking-wider text-center mt-1">ORGÁNICOS</span>
                        {/* Logo */}
                        <div className="text-[5px] text-white/50 text-center uppercase tracking-widest border border-white/20 rounded py-0.5 mt-auto">
                          AMV LV
                        </div>
                      </div>
                      <span className="text-[8px] text-slate-500 font-bold">Marrón</span>
                    </div>

                    {/* 2. BLUE: PAPEL/CARTON */}
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-14 h-32 bg-blue-700 rounded-t-xl rounded-b-md border-2 border-slate-300/40 shadow-md relative p-2 flex flex-col justify-between">
                        <div className="w-16 h-3 bg-blue-800 -mt-3.5 rounded-full absolute left-1/2 -translate-x-1/2 border border-slate-400" />
                        <span className="text-[7px] text-white/90 font-bold uppercase tracking-wider text-center mt-1">PAPEL</span>
                        <div className="text-[5px] text-white/50 text-center uppercase tracking-widest border border-white/20 rounded py-0.5 mt-auto">
                          AMV LV
                        </div>
                      </div>
                      <span className="text-[8px] text-slate-500 font-bold">Azul</span>
                    </div>

                    {/* 3. RED: HAZARDOUS (PELIGROSOS) */}
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-14 h-36 bg-red-600 rounded-t-xl rounded-b-md border-2 border-slate-300/40 shadow-lg relative p-2 flex flex-col justify-between scale-105">
                        {/* Hazard Stripes */}
                        <div className="absolute top-8 inset-x-0 h-2 bg-yellow-400 -skew-y-12 opacity-80" />
                        
                        <div className="w-16 h-3 bg-red-700 -mt-3.5 rounded-full absolute left-1/2 -translate-x-1/2 border border-slate-400" />
                        <span className="text-[7px] text-white/90 font-extrabold uppercase tracking-wider text-center mt-1 leading-none">PELIGROSOS</span>
                        <div className="text-[5px] text-white/80 text-center uppercase tracking-widest border border-white/40 rounded py-0.5 mt-auto">
                          AMV LV
                        </div>
                      </div>
                      <span className="text-[8px] text-red-600 font-extrabold">Rojo</span>
                    </div>

                    {/* 4. BLACK: GENERAL (NO APROVECHABLES) */}
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-14 h-32 bg-slate-900 rounded-t-xl rounded-b-md border-2 border-slate-300/40 shadow-md relative p-2 flex flex-col justify-between">
                        <div className="w-16 h-3 bg-slate-950 -mt-3.5 rounded-full absolute left-1/2 -translate-x-1/2 border border-slate-400" />
                        <span className="text-[7px] text-white/90 font-bold uppercase tracking-wider text-center mt-1">GENERAL</span>
                        <div className="text-[5px] text-white/50 text-center uppercase tracking-widest border border-white/20 rounded py-0.5 mt-auto">
                          AMV LV
                        </div>
                      </div>
                      <span className="text-[8px] text-slate-500 font-bold">Negro</span>
                    </div>

                  </div>
                )}

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Narrative specs list (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeAppId}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                <div className="mb-6">
                  <span className="text-xs font-mono uppercase tracking-wider text-brand-hoja font-bold">
                    {currentApp.subtitle}
                  </span>
                  <h3 className="font-display font-bold text-2xl text-brand-bosque mt-1 leading-tight">
                    {currentApp.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                    {currentApp.description}
                  </p>
                </div>

                <div className="border-t border-slate-200/60 pt-6">
                  <h4 className="font-display font-bold text-xs text-brand-bosque uppercase tracking-widest mb-3.5">
                    Especificaciones Técnicas
                  </h4>
                  <ul className="space-y-2.5">
                    {currentApp.specs.map((spec, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-brand-hoja mt-0.5 shrink-0" />
                        <span className="font-sans text-xs sm:text-sm text-slate-700 leading-tight">
                          {spec}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
