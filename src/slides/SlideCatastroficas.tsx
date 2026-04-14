import React from 'react';
import { Target, ArrowRight, ShieldAlert, ActivitySquare } from 'lucide-react';
import { Reveal, Citation } from '../components/ui';

export default function SlideCatastroficas({ step }: { step: number }) {
  return (
    <div className="h-full flex flex-col justify-center gap-8 relative pb-6 min-h-0">
      <Reveal show={step >= 1}>
        <div className="text-center mb-4 max-w-5xl mx-auto">
           <h2 className="text-3xl lg:text-4xl font-bold text-red-900 leading-tight">Mortalidade Intrínseca e Fisiopatologia Asfixiante</h2>
           <p className="text-lg lg:text-xl text-red-800 mt-4 font-medium">As taxas de óbito associadas estritamente à cánula encontram-se em torno de 5 a 6%, com viés demográfico superior às congêneres cirúrgicas adultas.</p>
        </div>
      </Reveal>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-10 w-full flex-1 min-h-0">
         <Reveal show={step >= 2}>
           <div className="bg-red-50 border border-red-200 p-6 lg:p-8 rounded-[3rem] w-48 h-48 lg:w-56 lg:h-56 flex flex-col items-center justify-center text-center shadow-md relative">
             <Target className="w-10 h-10 text-red-600 mb-3" />
             <div className="font-bold text-red-900 lg:text-lg leading-snug">Gatilho Oclusivo Primário</div>
           </div>
         </Reveal>

         <Reveal show={step >= 3}>
           <ArrowRight className="w-10 h-10 text-red-300 hidden md:block" />
         </Reveal>

         <Reveal show={step >= 4}>
           <div className="bg-orange-50 border border-orange-200 p-6 lg:p-8 rounded-[3rem] w-48 h-48 lg:w-56 lg:h-56 flex flex-col items-center justify-center text-center shadow-md relative">
             <ActivitySquare className="w-10 h-10 text-orange-600 mb-3" />
             <div className="font-bold text-orange-900 lg:text-lg leading-snug">Hipóxia Recusante Severa</div>
           </div>
         </Reveal>

         <Reveal show={step >= 5}>
           <ArrowRight className="w-10 h-10 text-red-300 hidden md:block" />
         </Reveal>

         <Reveal show={step >= 6}>
           <div className="bg-rose-600 border border-rose-800 p-6 lg:p-10 rounded-[3rem] w-56 h-56 lg:w-64 lg:h-64 flex flex-col items-center justify-center text-center shadow-xl relative z-10">
             <ShieldAlert className="w-12 h-12 text-white mb-4" />
             <div className="font-black text-white text-xl lg:text-2xl leading-none">Falência Omissiva<br/>no Resgate</div>
           </div>
         </Reveal>
      </div>

      <Reveal show={step >= 7}>
        <div className="mt-8 text-center text-slate-800 font-semibold text-lg lg:text-xl bg-slate-100 p-6 lg:p-8 rounded-3xl mx-auto max-w-5xl border border-slate-200 shadow-sm leading-relaxed">
          A literatura assevera que a fatalidade não assenta na obstrução da traqueostomia por si só, mas deprime a estatística quando conjugada à carência técnica no manuseio tático de substituição imediata deste fluxo pelo núcleo domiciliário imbuído na tarefa de salvaguarda.
        </div>
      </Reveal>
      
      <Citation text="(Cramer et al., 2018; Kligerman et al., 2020)" />
    </div>
  );
}
