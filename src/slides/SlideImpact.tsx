import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Citation, Reveal, ModalOverlay } from '../components/ui';

function StatCard({ number, title, text, color, delay, onClick }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.35, delay }}
      onClick={onClick}
      className={`p-6 rounded-[2rem] border bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] cursor-pointer flex flex-col items-center justify-center text-center gap-4 transition-all h-full ${color}`}
    >
      <div className="text-[clamp(3.5rem,8vw,5.5rem)] font-black tracking-tighter leading-none text-slate-800 drop-shadow-sm">
        {number}<span className="text-[clamp(1.5rem,4vw,2.5rem)] text-slate-500 font-bold ml-1">%</span>
      </div>
      <div className="text-sm md:text-base font-bold text-slate-700 leading-snug uppercase tracking-wide">
        {title}
      </div>
      <div className="mt-2 rounded-full bg-slate-100 p-2 text-slate-500 group-hover:bg-slate-800 group-hover:text-white transition-colors shadow-sm">
        <Plus className="w-4 h-4 flex-shrink-0" />
      </div>
    </motion.div>
  );
}

export default function SlideImpact({ step }: { step: number }) {
  const [activeStat, setActiveStat] = useState<number | null>(null);

  const stats = [
    {
      number: "40", title: "Morbidade Tardia",
      text: "40% das crianÃ§as traqueostomizadas desenvolvem ao menos uma complicaÃ§Ã£o estrutural tardia (granuloma, fÃ­stula, estenose, colonizaÃ§Ã£o) ao longo da manutenÃ§Ã£o do estoma. Dado de coorte de 153 pacientes pediÃ¡tricos.",
      source: "Roberts et al., 2019. Laryngoscope 130(5):E375â€“E380. PMID 31251410.",
      color: "border-amber-200"
    },
    {
      number: "9.8", title: "Morbidade Precoce",
      text: "9.8% dos pacientes apresentaram complicaÃ§Ãµes precoces graves nas primeiras horas a dias pÃ³s-traqueostomia: deslocamento, sangramento, obstruÃ§Ã£o e pneumotÃ³rax. ProporÃ§Ã£o idÃªntica reportada por Roberts et al.",
      source: "Roberts et al., 2019. Laryngoscope 130(5):E375â€“E380. PMID 31251410.",
      color: "border-rose-200"
    },
    {
      number: "1.2", title: "Mortalidade Relacionada",
      text: "A mortalidade diretamente atribuÃ­vel Ã  traqueostomia pediÃ¡trica Ã© de 1.2% no cenÃ¡rio de centro experiente. A mortalidade por todas as causas no perÃ­odo de seguimento atinge 22.1%, refletindo a gravidade das doenÃ§as de base.",
      source: "Roberts et al., 2019. Laryngoscope 130(5):E375â€“E380. PMID 31251410.",
      color: "border-purple-200"
    }
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center py-2 relative min-h-0">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-6 lg:gap-8 h-full min-h-0">
        <Reveal show={step >= 1}>
          <div className="text-center max-w-5xl mx-auto space-y-4 shrink-0">
            <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold text-slate-800 leading-tight drop-shadow-sm">
              A Traqueostomia Salva Vidas, Mas a Carga de Morbidade Restante Ã© Intensa.
            </h2>
            <p className="text-[clamp(1rem,1.5vw,1.25rem)] text-slate-600 font-medium">
              NÃ£o representa apenas a resoluÃ§Ã£o de um choque intraoperatÃ³rio agudo, mas a inauguraÃ§Ã£o de uma janela crÃ´nica e complexa.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-4 lg:gap-8 px-2 items-stretch min-h-0 flex-1 py-4">
          {stats.map((stat, i) => (
            <Reveal show={step >= i + 1} delay={i * 0.15} key={i}>
              <StatCard 
                number={stat.number}
                title={stat.title}
                text={stat.text}
                color={stat.color}
                delay={0}
                onClick={() => setActiveStat(i)}
              />
            </Reveal>
          ))}
        </div>

        <Reveal show={step >= 3} delay={0.4}>
          <div className="mt-0 flex justify-center pb-8 shrink-0">
             <div className="bg-slate-800/90 backdrop-blur-md text-slate-50 rounded-2xl px-6 py-4 font-semibold text-sm lg:text-base shadow-xl text-center max-w-2xl border border-slate-700 space-y-1">
               <div>A mortalidade <strong className="text-white">diretamente relacionada</strong> Ã  traqueostomia na pediatria Ã© de <strong className="text-amber-300">1.2%</strong> em centros experientes;</div>
               <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">a mortalidade por todas as causas no seguimento alcanÃ§a atÃ© <span className="text-rose-300">22%</span> â€” reflexo da morbidade de base.</div>
             </div>
          </div>
        </Reveal>
      </div>

      <ModalOverlay open={activeStat !== null} setOpen={() => setActiveStat(null)}>
         {activeStat !== null && (
            <div className="p-8 md:p-12 lg:p-16 flex flex-col bg-white relative rounded-[2rem]">
               <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                  <div className="flex flex-col items-center justify-center shrink-0">
                     <div className="text-[5rem] md:text-[6.5rem] font-black text-slate-800 tracking-tighter leading-none mb-3">
                        {stats[activeStat].number}<span className="text-3xl md:text-4xl text-slate-400 font-bold ml-1">%</span>
                     </div>
                     <div className={`text-xs md:text-sm uppercase font-bold tracking-[0.2em] px-4 py-2 rounded-full text-center
                        ${activeStat === 0 ? "bg-amber-50 text-amber-700" : activeStat === 1 ? "bg-rose-50 text-rose-700" : "bg-purple-50 text-purple-700"}
                     `}>
                        {stats[activeStat].title}
                     </div>
                  </div>
                  <div className="flex flex-col text-center md:text-left flex-1 border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-0 md:pl-8 lg:pl-12 justify-center min-h-[140px] gap-6">
                      <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed">
                         {stats[activeStat].text}
                      </p>
                      <div className="text-xs text-slate-400 font-medium border-t border-slate-100 pt-4 tracking-wide">
                        <span className="font-bold text-slate-500 uppercase tracking-widest text-[10px] block mb-1">Referência</span>
                        {stats[activeStat].source}
                      </div>
                   </div>
               </div>
            </div>
         )}
      </ModalOverlay>

      <Citation text="(Roberts et al., 2019 Â· PMID 31251410; Lubianca Neto et al., 2020 Â· PMID 33472759)" />
    </div>
  );
}

