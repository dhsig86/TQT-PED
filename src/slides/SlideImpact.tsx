import React from 'react';
import { motion } from 'framer-motion';
import { Citation, Reveal } from '../components/ui';

function StatCard({ number, text, color, delay }: { number: string, text: string, color: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.35, delay }}
      className={`p-6 lg:p-8 rounded-[2rem] border bg-white shadow-xl flex flex-col items-center justify-center text-center gap-4 ${color}`}
    >
      <div className="text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter leading-none text-slate-800">
        {number}<span className="text-3xl md:text-4xl text-slate-500 font-bold ml-1">%</span>
      </div>
      <div className="text-sm md:text-base lg:text-lg font-bold text-slate-700 leading-snug">
        {text}
      </div>
    </motion.div>
  );
}

export default function SlideImpact({ step }: { step: number }) {
  return (
    <div className="h-full flex flex-col items-center justify-start py-2 lg:py-6 overflow-hidden min-h-0 relative">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-6 lg:gap-10 h-full">
        <Reveal show={step >= 1}>
          <div className="text-center max-w-5xl mx-auto space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 leading-tight">
              A Traqueostomia Salva Vidas, Mas a Carga de Morbidade Restante é Intensa.
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-slate-600 font-medium">
              Não representa apenas a resolução de um choque intraoperatório agudo, mas a inauguração de uma janela crônica e complexa.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 px-4 flex-1 items-center">
          <Reveal show={step >= 1} delay={0.1}>
            <StatCard 
              number="40" 
              text="Morbidade Crônica: Taxa de complicações ao longo da confecção." 
              color="border-amber-200"
              delay={0}
            />
          </Reveal>
          <Reveal show={step >= 2} delay={0.2}>
            <StatCard 
              number="9.8" 
              text="Morbidade Precoce: Complicações severas nas primeiras 48h." 
              color="border-rose-200"
              delay={0}
            />
          </Reveal>
          <Reveal show={step >= 3} delay={0.3}>
            <StatCard 
              number="40" 
              text="Eventos Pediátricos Graves e Falha de Decanulação." 
              color="border-purple-200"
              delay={0}
            />
          </Reveal>
        </div>

        <Reveal show={step >= 3} delay={0.4}>
          <div className="mt-2 flex justify-center pb-8">
             <div className="bg-slate-800 text-slate-50 rounded-2xl px-6 py-4 font-semibold text-sm lg:text-base shadow-lg text-center max-w-2xl">
               A Mortalidade primária e intrínseca à traqueostomia na pediatria hodierna flutua entre 1.2% até 6.0%.
             </div>
          </div>
        </Reveal>
      </div>

      <Citation text="(Roberts et al., 2019; Lubianca Neto et al., 2020)" />
    </div>
  );
}
