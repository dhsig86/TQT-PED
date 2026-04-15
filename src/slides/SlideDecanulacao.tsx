import React, { useState } from 'react';
import { Network, ActivitySquare, Wind, ArrowRightCircle, Plus } from 'lucide-react';

import { Reveal, Citation, ModalOverlay } from '../components/ui';

export default function SlideDecanulacao({ step }: { step: number }) {
  const [open, setOpen] = useState(false);

  const steps = [
    { title: "Defeito Etiológico Resolvido", icon: <Network />, color: "bg-blue-100 text-blue-700 border-blue-300" },
    { title: "Desmame e Deglutição Plenos", icon: <ActivitySquare />, color: "bg-cyan-100 text-cyan-700 border-cyan-300" },
    { title: "Ausência de Lesão Endoscópica", icon: <Wind />, color: "bg-emerald-100 text-emerald-700 border-emerald-300" },
    { title: "Extubação / Decanulação Efetuada", icon: <ArrowRightCircle />, color: "bg-violet-100 text-violet-700 border-violet-800 shadow-md cursor-pointer hover:bg-violet-200 transition-colors" },
  ];

  return (
    <div className="h-full flex flex-col justify-start xl:justify-center relative pb-8 overflow-y-auto pt-2 pl-2 pr-4 -mr-4 no-scrollbar min-h-0">
       <Reveal show={step >= 1} className="shrink-0">
         <div className="text-center mb-4 lg:mb-6 max-w-5xl mx-auto">
           <h2 className="text-2xl lg:text-4xl font-bold text-slate-800 leading-tight">
             Limiares Críticos da Decanulação Pediátrica
           </h2>
           <p className="text-base lg:text-xl text-slate-600 mt-2 lg:mt-4 font-medium">As taxas consistentes de sucesso flutuam desde limiares irrisórios menores que 10% aos 44%, estritamente limitadas ao diagnóstico etiológico primário.</p>
         </div>
       </Reveal>

       <div className="flex flex-col md:flex-row justify-center items-center gap-2 lg:gap-3 mt-2 lg:mt-4 max-w-6xl mx-auto w-full shrink-0">
         {steps.map((s, i) => (
           <React.Fragment key={i}>
             <Reveal show={step >= i + 2}>
               <div 
                 className={`flex flex-col items-center justify-center p-4 border rounded-[2rem] w-36 h-36 lg:w-44 lg:h-44 ${s.color} z-10 relative bg-white group`}
                 onClick={i === steps.length - 1 ? () => setOpen(true) : undefined}
               >
                 <div className="w-10 h-10 mb-2 opacity-80 group-hover:scale-110 transition-transform">{s.icon}</div>
                 <div className="font-bold text-center text-xs lg:text-sm leading-snug uppercase tracking-wide px-1">{s.title}</div>
                 {i === steps.length - 1 && (
                     <div className="mt-4 rounded-full bg-violet-100 p-2 text-violet-500 group-hover:bg-violet-600 group-hover:text-white transition-colors shadow-sm">
                        <Plus className="w-5 h-5 flex-shrink-0" />
                     </div>
                 )}
               </div>
             </Reveal>
             {i < steps.length - 1 && (
               <Reveal show={step >= i + 2}>
                 <div className="w-2 h-10 md:w-16 md:h-2 bg-slate-200 md:-mx-6 z-0"></div>
               </Reveal>
             )}
           </React.Fragment>
         ))}
       </div>

       <ModalOverlay open={open} setOpen={setOpen}>
         <div className="flex flex-col md:flex-row bg-white relative rounded-[2rem] overflow-hidden items-center md:items-stretch">
            <div className="bg-violet-600 p-10 lg:p-12 text-center text-white flex flex-col items-center justify-center shrink-0 md:w-[40%]">
               <div className="w-20 h-20 bg-violet-500 rounded-full flex items-center justify-center shadow-sm mb-6">
                   <ArrowRightCircle className="w-10 h-10 text-white" />
               </div>
               <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-wider leading-tight mb-2">Pós-Decanulação</h2>
               <div className="text-violet-200 font-bold tracking-widest uppercase text-sm lg:text-base">A Cicatrização Problemática</div>
            </div>
            <div className="bg-white p-10 border-t md:border-t-0 md:border-l border-slate-100 lg:p-14 text-center md:text-left flex flex-col items-center md:items-start justify-center flex-1">
               <div className="text-6xl lg:text-7xl font-black text-slate-800 tracking-tighter mb-6 bg-slate-50 border border-slate-200 rounded-[2rem] px-8 py-4 shadow-sm inline-block">42.6%</div>
               <p className="text-lg lg:text-xl text-slate-700 leading-relaxed max-w-3xl font-medium">
                 A literatura acena com dados inquietantes: dentre o grupo que atinge a exata etapa de efetuar a tentativa terminal de extubação com sucesso aparente, quase metade (42.6%) encerra o decurso evoluindo com <strong className="text-slate-800">fístula traqueocutânea persistente</strong>. Uma condição crônica que obriga a execução de um procedimento cirúrgico reparador invasivo <em className="text-slate-500">post-hoc</em> ao mesmo paciente.
               </p>
            </div>
         </div>
       </ModalOverlay>
       
       <Citation text="(Dal'Astra et al., 2017 · PMID 27256033; Douglas et al., 2015 · PMID 26255606; Roberts et al., 2019 · PMID 31251410)" />
    </div>
  );
}
