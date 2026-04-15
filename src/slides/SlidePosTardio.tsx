import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Reveal, Citation, ModalOverlay } from '../components/ui';
import { Scissors, Plus } from 'lucide-react';

export default function SlidePosTardio({ step }: { step: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-full flex flex-col md:flex-row justify-start md:justify-center items-start md:items-center gap-6 lg:gap-10 relative pb-8 overflow-y-auto min-h-0">

      <div className="w-full md:w-1/2 flex flex-col justify-center gap-5 shrink-0 min-w-0">
        <Reveal show={step >= 1}>
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 leading-tight">
              A Morbidade Residual e Evolutiva do Atrito
            </h2>
            <p className="text-lg lg:text-xl text-slate-600 font-medium leading-relaxed">
              O desdobramento crônico consome o orçamento assistencial da morbidade. Até 40% das crianças manifestam estigmas temporais permanentes.
            </p>
          </div>
        </Reveal>

        <Reveal show={step >= 2}>
           <div className="bg-slate-50 border border-slate-200 rounded-[2rem] p-8 shadow-sm">
             <h3 className="font-bold text-slate-800 text-xl mb-4">Eventos Evolutivos Primários na Pediatria:</h3>
             <ul className="space-y-4 font-semibold text-slate-700 text-lg">
               <li className="flex gap-3 items-start"><span className="text-slate-400 font-black">•</span> Reação Granulosa Supraestomal e da Ponta de Cânula</li>
               <li className="flex gap-3 items-start"><span className="text-slate-400 font-black">•</span> Fístula Traqueocutânea Persistente</li>
               <li className="flex gap-3 items-start"><span className="text-slate-400 font-black">•</span> Oclusão do Lúmen por Rolhas Estruturantes</li>
               <li className="flex gap-3 items-start"><span className="text-slate-400 font-black">•</span> Colonização Endêmica Constante</li>
             </ul>
           </div>
        </Reveal>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-4 min-h-0 shrink-0">
        <Reveal show={step >= 3} delay={0.2} className="w-full max-w-sm relative">
           <motion.div 
             animate={{ rotate: [0, 360] }}
             transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
             className="absolute inset-0 rounded-full border-[2px] border-dashed border-slate-300 scale-[1.3] z-0"
           />
           <div 
             className="aspect-square rounded-full bg-white shadow-2xl border-4 border-slate-100 flex flex-col items-center justify-center relative z-10 p-10 cursor-pointer hover:border-slate-300 transition-all hover:scale-105 group"
             onClick={() => setOpen(true)}
           >
               <Scissors className="w-14 h-14 text-slate-600 group-hover:text-amber-500 transition-colors mb-4" />
               <div className="text-4xl lg:text-5xl font-black text-slate-800 tracking-tighter">19.6%</div>
               <div className="text-sm font-bold text-slate-500 uppercase tracking-widest text-center mt-2 group-hover:text-slate-800 transition-colors">
                 Granuloma Crônico
               </div>
               <div className="mt-6 rounded-full bg-slate-100 p-2 text-slate-400 group-hover:bg-amber-100 group-hover:text-amber-700 transition-colors shadow-sm">
                 <Plus className="w-5 h-5 flex-shrink-0" />
               </div>
           </div>
        </Reveal>
      </div>

      <ModalOverlay open={open} setOpen={setOpen}>
         <div className="flex flex-col md:flex-row bg-white relative rounded-[2rem] overflow-hidden items-center md:items-stretch">
            <div className="p-10 lg:p-12 bg-slate-50 flex flex-col items-center justify-center text-center shrink-0 md:w-[40%]">
               <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border border-slate-200 shadow-sm mb-6">
                   <Scissors className="w-10 h-10 text-slate-800"/>
               </div>
               <div className="text-5xl lg:text-7xl font-black text-slate-800 tracking-tighter mb-4">19.6%</div>
               <h2 className="text-2xl lg:text-3xl font-bold uppercase tracking-widest text-slate-600 leading-tight">Tecido Granuloso Cronicizado</h2>
            </div>
            <div className="p-10 lg:p-14 border-t md:border-t-0 md:border-l border-slate-100 bg-white flex flex-col justify-center flex-1">
               <p className="text-base md:text-xl lg:text-2xl text-slate-700 font-medium leading-relaxed md:text-left text-center">
                  Considerado um dos maiores vilões da decanulação. O <strong className="text-slate-900 border-b-2 border-slate-300">atrito oscilatório diário e mecânico</strong> da ponta da cânula contra a parede frágil traqueal requer frequentemente medidas combativas, tais como: nitratações químicas periódicas, curativos com espumas antimicrobianas atípicas e exéreses a frio guiadas sob visualização endoscópica rigorosa antes do planejamento primário da extubação.
               </p>
            </div>
         </div>
      </ModalOverlay>
      
      <Citation text="(Lubianca Neto et al., 2022 · PMID 33472759; Roberts et al., 2019 · PMID 31251410)" />
    </div>
  );
}
