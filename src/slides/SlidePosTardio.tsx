import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Reveal, Citation, ModalOverlay } from '../components/ui';
import { Scissors } from 'lucide-react';

export default function SlidePosTardio({ step }: { step: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-full flex flex-col md:flex-row gap-8 lg:gap-12 items-center justify-center relative pb-6 min-h-0">
      <div className="w-full md:w-1/2 flex flex-col justify-center gap-8">
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

      <div className="w-full md:w-1/2 flex items-center justify-center p-4 min-h-0">
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
               <div className="bg-slate-100 text-[10px] uppercase font-bold tracking-widest text-slate-400 mt-6 px-4 py-1 rounded-full group-hover:bg-amber-100 group-hover:text-amber-700 transition-colors">Ler Mais</div>
           </div>
        </Reveal>
      </div>

      <ModalOverlay open={open} setOpen={setOpen}>
         <div className="p-12 lg:p-16 border-b border-slate-100 bg-slate-50 text-center flex flex-col items-center">
             <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border border-slate-200 shadow-sm mb-6">
                 <Scissors className="w-10 h-10 text-slate-800"/>
             </div>
             <div className="text-6xl lg:text-8xl font-black text-slate-800 tracking-tighter mb-4">19.6%</div>
             <h2 className="text-3xl lg:text-4xl font-bold uppercase tracking-widest text-slate-600">Tecido Granuloso Cronicizado</h2>
         </div>
         <div className="p-12 lg:p-16 bg-white flex flex-col items-center text-center">
             <p className="text-xl lg:text-2xl text-slate-700 font-medium leading-relaxed max-w-3xl">
                Considerado um dos maiores vilões da decanulação. O <strong className="text-slate-900 border-b-2 border-slate-300">atrito oscilatório diário e mecânico</strong> da ponta da cânula contra a parede frágil traqueal requer frequentemente medidas combativas, tais como: nitratações químicas periódicas, curativos com espumas antimicrobianas atípicas e exéreses a frio guiadas sob visualização endoscópica rigorosa antes do planejamento primário da extubação.
             </p>
         </div>
      </ModalOverlay>
      
      <Citation text="(Dal'Astra et al., 2017; Douglas et al., 2015)" />
    </div>
  );
}
