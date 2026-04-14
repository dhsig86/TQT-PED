import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
      <div className="mt-2 bg-slate-100 text-[10px] uppercase font-bold tracking-widest text-slate-500 px-4 py-1 rounded-full">
        Detalhes
      </div>
    </motion.div>
  );
}

export default function SlideImpact({ step }: { step: number }) {
  const [activeStat, setActiveStat] = useState<number | null>(null);

  const stats = [
    { number: "40", title: "Morbidade Crônica", text: "Taxa de complicações estruturais contínuas e persistentes ao longo da manutenção do estoma a longo prazo.", color: "border-amber-200" },
    { number: "9.8", title: "Morbidade Precoce", text: "Complicações vitais severas concentradas nas primeiras 48 a 72 horas pós-procedimento imediato (falsos trajetos, sangramentos críticos).", color: "border-rose-200" },
    { number: "40", title: "Falha Extubação", text: "Eventos pediátricos graves que culminam em falha de tentativa de decanulação terminal, retendo a necessidade do dispositivo de traqueostomia.", color: "border-purple-200" }
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center py-2 relative min-h-0">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-6 lg:gap-8 h-full min-h-0">
        <Reveal show={step >= 1}>
          <div className="text-center max-w-5xl mx-auto space-y-4 shrink-0">
            <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold text-slate-800 leading-tight drop-shadow-sm">
              A Traqueostomia Salva Vidas, Mas a Carga de Morbidade Restante é Intensa.
            </h2>
            <p className="text-[clamp(1rem,1.5vw,1.25rem)] text-slate-600 font-medium">
              Não representa apenas a resolução de um choque intraoperatório agudo, mas a inauguração de uma janela crônica e complexa.
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
             <div className="bg-slate-800/90 backdrop-blur-md text-slate-50 rounded-2xl px-6 py-4 font-semibold text-sm lg:text-base shadow-xl text-center max-w-2xl border border-slate-700">
               A Mortalidade primária e intrínseca à traqueostomia na pediatria flutua entre 1.2% até 6.0%.
             </div>
          </div>
        </Reveal>
      </div>

      <ModalOverlay open={activeStat !== null} setOpen={() => setActiveStat(null)}>
         {activeStat !== null && (
            <div className="flex flex-col h-full bg-white relative">
               <div className="p-10 lg:p-16 border-b border-slate-100 bg-slate-50/80 backdrop-blur-md text-center flex flex-col items-center justify-center">
                  <div className="text-[8rem] lg:text-[10rem] font-black text-slate-800 tracking-tighter leading-none mb-4 drop-shadow-md">
                     {stats[activeStat].number}<span className="text-4xl lg:text-6xl text-slate-500 font-bold ml-1">%</span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-widest text-slate-700">{stats[activeStat].title}</h2>
               </div>
               <div className="p-10 lg:p-16 bg-white flex flex-col items-center text-center flex-1 justify-center">
                  <p className="text-xl lg:text-3xl text-slate-600 font-medium leading-relaxed max-w-3xl">
                     {stats[activeStat].text}
                  </p>
               </div>
            </div>
         )}
      </ModalOverlay>

      <Citation text="(Roberts et al., 2019; Lubianca Neto et al., 2020)" />
    </div>
  );
}
