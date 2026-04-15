import React, { useState } from 'react';
import { Target, ArrowRight, ShieldAlert, ActivitySquare, Plus } from 'lucide-react';
import { Reveal, Citation, ModalOverlay } from '../components/ui';

export default function SlideCatastroficas({ step }: { step: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-full flex flex-col justify-start xl:justify-center gap-8 relative pb-8 overflow-y-auto pt-2 pl-2 pr-4 -mr-4 no-scrollbar">
      <Reveal show={step >= 1} className="shrink-0">
        <div className="text-center mb-4 max-w-5xl mx-auto">
           <h2 className="text-3xl lg:text-4xl font-bold text-red-900 leading-tight">Mortalidade Intrínseca e Fisiopatologia Asfixiante</h2>
           <p className="text-lg lg:text-xl text-red-800 mt-4 font-medium">As taxas de óbito encontram-se em torno de 5 a 6%, com viés demográfico superior às congêneres cirúrgicas adultas.</p>
        </div>
      </Reveal>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-10 w-full flex-1 min-h-0 shrink-0">
         <Reveal show={step >= 2}>
           <div className="bg-red-50 border border-red-200 p-6 lg:p-8 rounded-[3rem] w-48 h-48 lg:w-56 lg:h-56 flex flex-col items-center justify-center text-center shadow-md">
             <Target className="w-10 h-10 text-red-600 mb-3" />
             <div className="font-bold text-red-900 lg:text-lg leading-snug">Gatilho Oclusivo Primário</div>
           </div>
         </Reveal>

         <Reveal show={step >= 3}>
           <ArrowRight className="w-10 h-10 text-red-300 hidden md:block" />
         </Reveal>

         <Reveal show={step >= 4}>
           <div className="bg-orange-50 border border-orange-200 p-6 lg:p-8 rounded-[3rem] w-48 h-48 lg:w-56 lg:h-56 flex flex-col items-center justify-center text-center shadow-md">
             <ActivitySquare className="w-10 h-10 text-orange-600 mb-3" />
             <div className="font-bold text-orange-900 lg:text-lg leading-snug">Hipóxia Recusante Severa</div>
           </div>
         </Reveal>

         <Reveal show={step >= 5}>
           <ArrowRight className="w-10 h-10 text-red-300 hidden md:block" />
         </Reveal>

         <Reveal show={step >= 6}>
           <div 
             className="bg-rose-600 hover:bg-rose-700 cursor-pointer border border-rose-800 p-6 lg:p-10 rounded-[3rem] w-56 h-56 lg:w-64 lg:h-64 flex flex-col items-center justify-center text-center shadow-xl transition-all group"
             onClick={() => setOpen(true)}
           >
             <ShieldAlert className="w-12 h-12 text-white mb-4 group-hover:scale-110 transition-transform" />
             <div className="font-black text-white text-xl lg:text-2xl leading-none mb-4">Falência no Resgate</div>
             <div className="mt-2 rounded-full bg-rose-800/40 p-2 text-white/90 group-hover:bg-white group-hover:text-rose-700 transition-colors shadow-sm">
                 <Plus className="w-5 h-5 flex-shrink-0" />
             </div>
           </div>
         </Reveal>
      </div>

      <ModalOverlay open={open} setOpen={setOpen}>
         <div className="flex flex-col md:flex-row bg-white relative rounded-[2rem] overflow-hidden items-center md:items-stretch">
            <div className="bg-rose-600 p-10 lg:p-12 text-center text-white flex flex-col items-center justify-center shrink-0 md:w-[40%]">
               <div className="w-20 h-20 bg-rose-500 rounded-full flex items-center justify-center shadow-sm mb-6">
                   <ShieldAlert className="w-10 h-10 text-white" />
               </div>
               <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-wider leading-tight">Falência Omissiva no Resgate</h2>
            </div>
            <div className="bg-white p-10 border-t md:border-t-0 md:border-l border-slate-100 lg:p-14 text-center md:text-left flex flex-col items-center md:items-start justify-center flex-1">
               <p className="text-lg lg:text-xl text-slate-700 leading-relaxed max-w-3xl font-medium">
                 A literatura assevera que a fatalidade <strong className="text-rose-600">não assenta na obstrução da traqueostomia por si só</strong>, pois ela é um evento físico esperado. Segundo o CDC, o risco-base pediátrico atrelado à mortalidade por complicações é <strong className="text-rose-600 border-b-2 border-rose-200">10 vezes maior que no adulto</strong>. Escala-se à letalidade exclusivamente quando há <strong className="text-rose-600">carência técnica no manuseio tático de substituição rápida</strong> (resgate) pelo núcleo domiciliário encarregado da salvaguarda.
               </p>
            </div>
         </div>
      </ModalOverlay>
      
      <Citation text="(Cramer et al., 2018; Kligerman et al., 2020)" />
    </div>
  );
}
