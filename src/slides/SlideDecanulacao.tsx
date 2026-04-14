import React, { useState } from 'react';
import { Network, ActivitySquare, Wind, ArrowRightCircle } from 'lucide-react';
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
    <div className="h-full flex flex-col justify-center relative pb-6 min-h-0">
       <Reveal show={step >= 1}>
         <div className="text-center mb-10 max-w-5xl mx-auto">
           <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 leading-tight">
             Limiares Críticos da Decanulação Pediátrica
           </h2>
           <p className="text-lg lg:text-xl text-slate-600 mt-4 font-medium">As taxas consistentes de sucesso flutuam desde limiares irrisórios menores que 10% aos 44%, estritamente limitadas ao diagnóstico etiológico primário.</p>
         </div>
       </Reveal>

       <div className="flex flex-col md:flex-row justify-center items-center lg:gap-4 mt-8 max-w-6xl mx-auto w-full flex-1 min-h-0">
         {steps.map((s, i) => (
           <React.Fragment key={i}>
             <Reveal show={step >= i + 2}>
               <div 
                 className={`flex flex-col items-center justify-center p-6 border rounded-[2rem] w-48 h-48 lg:w-56 lg:h-56 ${s.color} z-10 relative bg-white`}
                 onClick={i === steps.length - 1 ? () => setOpen(true) : undefined}
               >
                 <div className="w-12 h-12 mb-4 opacity-80">{s.icon}</div>
                 <div className="font-bold text-center text-sm lg:text-base leading-snug uppercase tracking-wide px-2">{s.title}</div>
                 {i === steps.length - 1 && <div className="mt-4 text-[10px] font-bold text-violet-600 uppercase tracking-widest bg-violet-100 px-3 py-1 rounded-full">Alerta Residual</div>}
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
         <div className="p-12 lg:p-16 border-b border-slate-100 bg-violet-600 text-center text-white">
            <ArrowRightCircle className="w-20 h-20 mx-auto text-violet-200 mb-6" />
            <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-wider mb-2">Pós-Decanulação</h2>
            <div className="text-violet-200 font-bold tracking-widest uppercase text-xl">A Cicatrização Problemática</div>
         </div>
         <div className="p-12 lg:p-16 bg-white text-center flex flex-col items-center">
            <div className="text-7xl lg:text-8xl font-black text-slate-800 tracking-tighter mb-8">42.6%</div>
            <p className="text-xl lg:text-2xl text-slate-600 font-medium leading-relaxed max-w-3xl">
              A literatura acena com dados inquietantes: dentre o grupo que atinge a exata etapa de efetuar a tentativa terminal de extubação com sucesso aparente, quase metade (42.6%) encerra o decurso evoluindo com <strong className="text-slate-800">fístula traqueocutânea persistente</strong>. Uma condição crônica que obriga a execução de um procedimento cirúrgico reparador invasivo <em className="text-slate-500">post-hoc</em> ao mesmo paciente. (Dal'Astra, 2017)
            </p>
         </div>
       </ModalOverlay>
       
       <Citation text="(Douglas et al., 2015; Roberts et al., 2019)" />
    </div>
  );
}
