import React from 'react';
import { motion } from 'framer-motion';
import { Reveal, ExpandablePanel } from '../components/ui';
import { Clock, Scissors, SearchAlert } from 'lucide-react';

export default function SlidePosTardio({ step }: { step: number }) {
  return (
    <div className="h-full flex flex-col md:flex-row gap-6 md:gap-8 items-center">
      <div className="w-full md:w-1/2 space-y-6">
        <Reveal show={step >= 1}>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-800 leading-tight">
              A Morbidade Residual e Evolutiva
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Na prática real, a maior carga da doença sobre a instituição e a vida da família é o resquício anatômico que a traulação e a traqueia sofrem durante meses ou anos de atrito (40% de incidência total de complicações crônicas).
            </p>
          </div>
        </Reveal>

        <Reveal show={step >= 2}>
           <div className="bg-purple-50 border border-purple-200 rounded-3xl p-6 shadow-sm">
             <h3 className="font-bold text-purple-900 mb-2">Principais vilões tardios:</h3>
             <ul className="space-y-3 font-medium text-purple-800">
               <li className="flex gap-2"><span>•</span> Granulação Estomal Reativa (necessidade intervencionista 19.6%)</li>
               <li className="flex gap-2"><span>•</span> Fístula Traqueocutânea Permanente (Até 19% Pós-decanulação)</li>
               <li className="flex gap-2"><span>•</span> Decanulação Acidental Domiciliar Crítica</li>
               <li className="flex gap-2"><span>•</span> Infecção da ferida / Traqueite Pseudomonal (5.2%)</li>
             </ul>
           </div>
        </Reveal>
      </div>

      <div className="w-full md:w-1/2 h-full flex items-center justify-center p-4">
        <Reveal show={step >= 3} delay={0.2} className="w-full max-w-sm relative">
           <motion.div 
             animate={{ rotate: [0, 360] }}
             transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
             className="absolute inset-0 rounded-full border-[1.5px] border-dashed border-purple-300 scale-[1.3]"
           />
           <div className="aspect-square rounded-full bg-white shadow-xl border-4 border-white overflow-hidden flex items-center justify-center relative z-10 p-8">
             <div className="text-center space-y-4">
               <Scissors className="w-12 h-12 text-pink-400 mx-auto" />
               <div className="text-2xl font-black text-slate-800">19.6%</div>
               <div className="text-sm font-semibold text-slate-500 uppercase tracking-widest">
                 Tecido de Granulação
               </div>
               <div className="text-xs text-slate-400">
                 Fricção da cânula exige <br/>cauterização prateada, excisão <br/>ou uso de antibióticos off-label.
               </div>
             </div>
           </div>
        </Reveal>
      </div>
    </div>
  );
}
