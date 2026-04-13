import React from 'react';
import { Network, ActivitySquare, Wind, ArrowRightCircle } from 'lucide-react';
import { Reveal } from '../components/ui';

export default function SlideDecanulacao({ step }: { step: number }) {
  const steps = [
    { title: "Resolutividade Clícina", icon: <Network />, color: "bg-blue-100 text-blue-700", border: "border-blue-300" },
    { title: "Secreção & Deglutição", icon: <ActivitySquare />, color: "bg-cyan-100 text-cyan-700", border: "border-cyan-300" },
    { title: "Broncoscopia Normal", icon: <Wind />, color: "bg-emerald-100 text-emerald-700", border: "border-emerald-300" },
    { title: "Decanulação Segura", icon: <ArrowRightCircle />, color: "bg-violet-100 text-violet-700", border: "border-violet-300" },
  ];

  return (
    <div className="h-full flex flex-col justify-center">
       <Reveal show={step >= 1}>
         <div className="text-center mb-10">
           <h2 className="text-4xl font-extrabold text-slate-800">
             Decanulação: O Desfecho de Vigilância
           </h2>
           <p className="text-lg text-slate-500 mt-2 font-medium">As taxas de decanulação oscilam debaixo de 10% aos 40%, dependendo da coorte base.</p>
         </div>
       </Reveal>

       <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8 max-w-5xl mx-auto w-full">
         {steps.map((s, i) => (
           <React.Fragment key={i}>
             <Reveal show={step >= i + 2}>
               <div className={`flex flex-col items-center justify-center p-6 border-2 ${s.border} rounded-full w-40 h-40 ${s.color} shadow-lg z-10 relative`}>
                 <div className="w-10 h-10 mb-2">{s.icon}</div>
                 <div className="font-bold text-center text-sm leading-tight uppercase tracking-wide">{s.title}</div>
               </div>
             </Reveal>
             {i < steps.length - 1 && (
               <Reveal show={step >= i + 2}>
                 <div className="w-2 h-10 md:w-16 md:h-2 bg-slate-300 md:-mx-8 z-0"></div>
               </Reveal>
             )}
           </React.Fragment>
         ))}
       </div>

       <Reveal show={step >= 6}>
          <div className="bg-slate-50 border border-slate-200 mt-16 p-6 rounded-3xl max-w-4xl mx-auto text-center text-slate-700 font-medium">
             Roberts demonstra 44.4% de sucesso na tentativa. Porém, Fístulas pós-decanulação chegam a bater 42.6%, necessitando cirurgia subsequente no trajeto cicatrizado peritubo.
          </div>
       </Reveal>
    </div>
  );
}
