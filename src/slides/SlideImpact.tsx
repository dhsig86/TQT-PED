import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../components/ui';

function StatCard({ number, text, color, delay }: { number: string, text: string, color: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className={`p-6 md:p-8 rounded-[2rem] border bg-white shadow-xl flex flex-col items-center text-center gap-4 ${color}`}
    >
      <div className="text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter leading-none text-slate-800">
        {number}<span className="text-3xl md:text-4xl text-slate-500 font-bold ml-1">%</span>
      </div>
      <div className="text-sm md:text-base lg:text-lg font-medium text-slate-600 leading-snug">
        {text}
      </div>
    </motion.div>
  );
}

export default function SlideImpact({ step }: { step: number }) {
  return (
    <div className="h-full flex flex-col items-center justify-start lg:justify-center py-2 min-h-0">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-6 lg:gap-10">
        <Reveal show={step >= 1}>
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 leading-tight">
              A Traqueostomia Salva Vidas, Mas o Custo Infligido ao Paciente Pode Ser Imenso.
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-slate-600">
              Não se trata apenas de uma decisão técnica intraoperatória, mas da abertura de uma janela crônica de risco potencial.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 px-4">
          <Reveal show={step >= 1}>
            <StatCard 
              number="40" 
              text="Taxa média global de complicações após a confecção" 
              color="border-amber-200"
              delay={0.1}
            />
          </Reveal>
          <Reveal show={step >= 2}>
            <StatCard 
              number="9.8" 
              text="Tiveram complicações severas nas primeiras 48h (Roberts)" 
              color="border-rose-200"
              delay={0.2}
            />
          </Reveal>
          <Reveal show={step >= 3}>
            <StatCard 
              number="40" 
              text="Desenvolveram complicações crônicas ou tardias" 
              color="border-purple-200"
              delay={0.3}
            />
          </Reveal>
        </div>

        <Reveal show={step >= 3}>
          <div className="mt-8 flex justify-center">
             <div className="bg-slate-800 text-slate-50 rounded-2xl px-6 py-3 font-medium text-sm lg:text-base shadow-lg text-center max-w-xl">
               Mortalidade exclusivamente associada à traqueostomia nas séries modernas varia de 1.2% até 6.0%.
             </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
