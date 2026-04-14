import React from 'react';
import { motion } from 'framer-motion';
import { Reveal, Citation } from '../components/ui';
import { Scissors } from 'lucide-react';

export default function SlidePosTardio({ step }: { step: number }) {
  return (
    <div className="h-full flex flex-col md:flex-row gap-8 lg:gap-12 items-center justify-center relative pb-6 min-h-0">
      <div className="w-full md:w-1/2 flex flex-col justify-center gap-8">
        <Reveal show={step >= 1}>
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 leading-tight">
              A Morbidade Residual e Evolutiva do Atrito
            </h2>
            <p className="text-lg lg:text-xl text-slate-600 font-medium leading-relaxed">
              O desdobramento crônico consome o orçamento da morbidade. Até 40% das crianças manifestam estigmas cirúrgicos permanentes pelo atrito prolongado da cânula rígida à mucosa frágil (traqueomalácia e tecido granuloso de resposta crônica).
            </p>
          </div>
        </Reveal>

        <Reveal show={step >= 2}>
           <div className="bg-slate-50 border border-slate-200 rounded-[2rem] p-8 shadow-sm">
             <h3 className="font-bold text-slate-800 text-xl mb-4">Eventos Evolutivos Primários na Pediatria:</h3>
             <ul className="space-y-4 font-semibold text-slate-700 text-lg">
               <li className="flex gap-3 items-start"><span className="text-slate-400 font-black">•</span> Reação Granulosa Supraestomal e da Ponta de Cânula (Até 19.6%)</li>
               <li className="flex gap-3 items-start"><span className="text-slate-400 font-black">•</span> Fístula Traqueocutânea Permanente Pós-Decanulação (Até 42%)</li>
               <li className="flex gap-3 items-start"><span className="text-slate-400 font-black">•</span> Oclusão do Lúmen por Rolhas Ressecadas</li>
               <li className="flex gap-3 items-start"><span className="text-slate-400 font-black">•</span> Infecção Recorrente e Colonização Endêmica (Pseudomonas)</li>
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
           <div className="aspect-square rounded-full bg-white shadow-2xl border-4 border-slate-100 flex flex-col items-center justify-center relative z-10 p-10">
               <Scissors className="w-14 h-14 text-slate-700 mb-4" />
               <div className="text-4xl lg:text-5xl font-black text-slate-800 mb-2 tracking-tighter">19.6%</div>
               <div className="text-base font-bold text-slate-600 uppercase tracking-widest text-center mb-4">
                 Tecido Granuloso Cronicizado
               </div>
               <div className="text-sm font-medium text-slate-500 text-center leading-relaxed">
                 O atrito oscilatório requer nitratações químicas, exérese a pinça sob visualização broncoscópica e uso constante de coberturas antimicrobianas atípicas no estoma.
               </div>
           </div>
        </Reveal>
      </div>
      
      <Citation text="(Dal'Astra et al., 2017; Douglas et al., 2015)" />
    </div>
  );
}
