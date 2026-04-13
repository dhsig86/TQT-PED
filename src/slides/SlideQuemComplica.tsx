import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../components/ui';

export default function SlideQuemComplica({ step }: { step: number }) {
  return (
    <div className="h-full flex flex-col gap-6 md:flex-row items-center justify-center py-6">
      <div className="w-full md:w-1/2 space-y-6">
        <Reveal show={step >= 1}>
          <div className="text-4xl font-extrabold text-amber-900">
            A Pirâmide de Risco
          </div>
          <p className="text-xl text-amber-700/80">O contexto fisiológico do paciente é a balança definitiva da cirurgia.</p>
        </Reveal>

        <Reveal show={step >= 4}>
           <div className="bg-amber-100/50 border border-amber-200 p-6 rounded-3xl mt-8 shadow-inner">
             <p className="font-semibold text-amber-900 leading-relaxed text-lg">
               Lubianca (2020) relaciona intimamente mortalidade aos procedimentos de emergência não organizados, idade abaixo de 1 ano, prematuridade e alto número de comorbidades base.
             </p>
           </div>
        </Reveal>
      </div>

      <div className="w-full md:w-1/2 h-full flex items-center justify-center p-8">
        <div className="relative w-full max-w-sm flex flex-col gap-3">
          <Reveal show={step >= 1} delay={0}>
             <div className="bg-rose-500 rounded-2xl h-24 flex items-center justify-center text-white font-black shadow-lg text-xl uppercase tracking-widest clip-risk-top">
                Urgência ({"<"} 1 ano)
             </div>
          </Reveal>
          <Reveal show={step >= 2} delay={0}>
             <div className="bg-orange-400 rounded-2xl h-24 flex items-center justify-center text-white font-black shadow-md text-xl uppercase tracking-widest clip-risk-mid">
                Prematuridade + Baixo Peso
             </div>
          </Reveal>
          <Reveal show={step >= 3} delay={0}>
             <div className="bg-amber-300 rounded-2xl h-24 flex items-center justify-center text-white font-black shadow-sm text-xl uppercase tracking-widest clip-risk-base">
                Comorbidades (Sindicrômicos)
             </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
