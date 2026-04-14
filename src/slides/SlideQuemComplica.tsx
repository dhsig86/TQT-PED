import React from 'react';
import { Reveal, Citation } from '../components/ui';

export default function SlideQuemComplica({ step }: { step: number }) {
  return (
    <div className="h-full flex flex-col justify-center py-6 min-h-0 relative pb-6">
      <div className="flex-1 flex flex-col md:flex-row items-center gap-8 lg:gap-12 w-full min-h-0">
        <div className="w-full md:w-1/2 flex flex-col justify-center pl-4 lg:pl-8">
          <Reveal show={step >= 1}>
            <div className="text-3xl lg:text-5xl font-bold text-slate-800 leading-tight mb-6">
              A Valoração Singular dos Extremos Sistêmicos
            </div>
            <p className="text-lg lg:text-xl text-slate-600 font-medium leading-relaxed">
              Diferente de amigdalectomias padrão, as cirurgias de laringe abrigam pacientes cujo contexto fisiológico basal supera as morbidades inerentes ao próprio trajeto traqueocutâneo.
            </p>
          </Reveal>

          <Reveal show={step >= 4}>
             <div className="bg-slate-50 border border-slate-200 p-8 rounded-3xl mt-12 shadow-sm">
               <p className="font-semibold text-slate-700 leading-relaxed text-lg lg:text-xl">
                 Lubianca (2020) atesta em meta-análise que a incidência de óbitos e complicações está atrelada exponencialmente a características indissociáveis do indivíduo hospedeiro na admissão emergencial e UTI: idade abaixo de 12 meses absolutos, índices de prematuridade ou extremidades sindrômicas pregressas.
               </p>
             </div>
          </Reveal>
        </div>

        <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center p-4">
          <div className="relative w-full max-w-sm flex flex-col gap-3">
            <Reveal show={step >= 1} delay={0.1}>
               <div className="bg-rose-500 rounded-[2rem] h-28 lg:h-32 flex flex-col items-center justify-center text-white font-bold shadow-md text-xl lg:text-2xl uppercase tracking-widest clip-risk-top">
                  <span className="opacity-90 text-sm tracking-normal capitalize font-medium mb-1">Idade Precípua</span>
                  Urgência ({"<"} 1 ano)
               </div>
            </Reveal>
            <Reveal show={step >= 2} delay={0.2}>
               <div className="bg-amber-400 rounded-[2rem] h-28 lg:h-32 flex items-center justify-center text-slate-900 font-bold shadow-sm text-xl lg:text-2xl uppercase tracking-widest clip-risk-mid">
                  Prematuro E/OU PIG
               </div>
            </Reveal>
            <Reveal show={step >= 3} delay={0.3}>
               <div className="bg-slate-300 rounded-[2rem] h-28 lg:h-32 flex flex-col items-center justify-center text-slate-800 font-bold text-xl lg:text-2xl uppercase tracking-widest clip-risk-base">
                  <span className="opacity-80 text-sm tracking-normal capitalize font-medium mb-1">Ex: Displasia Broncopulmonar</span>
                  Comorbidades Crônicas
               </div>
            </Reveal>
          </div>
        </div>
      </div>
      
      <Citation text="(Lubianca Neto et al., 2020)" />
    </div>
  );
}
