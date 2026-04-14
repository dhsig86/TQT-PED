import React from 'react';
import { Network, ActivitySquare, Wind, ArrowRightCircle } from 'lucide-react';
import { Reveal, Citation } from '../components/ui';

export default function SlideDecanulacao({ step }: { step: number }) {
  const steps = [
    { title: "Resolução Primária Atrelada", icon: <Network />, color: "bg-blue-100 text-blue-700 border-blue-300" },
    { title: "Desmame e Deglutição Plenos", icon: <ActivitySquare />, color: "bg-cyan-100 text-cyan-700 border-cyan-300" },
    { title: "Ausência de Lesão Endoscópica", icon: <Wind />, color: "bg-emerald-100 text-emerald-700 border-emerald-300" },
    { title: "Extubação / Decanulação Efetuada", icon: <ArrowRightCircle />, color: "bg-violet-100 text-violet-700 border-violet-300" },
  ];

  return (
    <div className="h-full flex flex-col justify-center relative pb-6 min-h-0">
       <Reveal show={step >= 1}>
         <div className="text-center mb-10 max-w-5xl mx-auto">
           <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 leading-tight">
             Limiares Críticos da Decanulação Pediátrica
           </h2>
           <p className="text-lg lg:text-xl text-slate-600 mt-4 font-medium">As taxas consistentes de sucesso na retirada do tubo flutuam desde limiares irrisórios menores que 10% aos 44%, estritamente amarradas ao diagnóstico populacional da amostra.</p>
         </div>
       </Reveal>

       <div className="flex flex-col md:flex-row justify-center items-center lg:gap-4 mt-8 max-w-6xl mx-auto w-full flex-1">
         {steps.map((s, i) => (
           <React.Fragment key={i}>
             <Reveal show={step >= i + 2}>
               <div className={`flex flex-col items-center justify-center p-6 border border-slate-300 rounded-[2rem] w-48 h-48 lg:w-56 lg:h-56 ${s.color} shadow-md z-10 relative bg-white`}>
                 <div className="w-12 h-12 mb-4 opacity-80">{s.icon}</div>
                 <div className="font-bold text-center text-sm lg:text-base leading-snug uppercase tracking-wide px-2">{s.title}</div>
               </div>
             </Reveal>
             {i < steps.length - 1 && (
               <Reveal show={step >= i + 2}>
                 <div className="w-2 h-10 md:w-16 md:h-2 bg-slate-300 md:-mx-6 z-0"></div>
               </Reveal>
             )}
           </React.Fragment>
         ))}
       </div>

       <Reveal show={step >= 6}>
          <div className="bg-slate-50 border border-slate-200 mt-12 lg:mt-16 p-6 lg:p-8 rounded-[2rem] max-w-4xl mx-auto text-center text-slate-700 font-semibold text-lg leading-relaxed shadow-sm">
             A literatura acena com dados em que, dentre o pool que atinge com sucesso as três primeiras cruzetas e efetua a tentativa terminal, impressionantes 42.6% encerram o decurso evoluindo com fístula traqueocutânea persistente (Douglas, 2015), exigindo procedimento cirúrgico reparador invasivo post-hoc ao mesmo paciente.
          </div>
       </Reveal>
       
       <Citation text="(Douglas et al., 2015; Roberts et al., 2019)" />
    </div>
  );
}
