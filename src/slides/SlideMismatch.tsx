import React from 'react';
import { Reveal } from '../components/ui';

export default function SlideMismatch({ step }: { step: number }) {
  return (
    <div className="h-full flex flex-col">
       <Reveal show={step >= 1}>
         <div className="mb-6 space-y-2">
           <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">
             O Mismatch Anatômico e de Cânula
           </h2>
           <p className="text-lg text-slate-500">O problema frequentemente subestimado em Crianças Complexas</p>
         </div>
       </Reveal>

       <div className="grid md:grid-cols-2 gap-8 flex-1 items-center">
         <Reveal show={step >= 1}>
           <div className="aspect-[4/3] bg-slate-200/50 rounded-[2rem] border-2 border-dashed border-slate-300 flex flex-col items-center justify-center text-slate-400">
             <span className="text-lg font-semibold uppercase tracking-widest">Placeholder: Imagem</span>
             <span className="text-sm">(Traqueia desviada / broncoscopia da Escoliose)</span>
           </div>
         </Reveal>

         <Reveal show={step >= 2}>
           <div className="space-y-6 bg-white p-8 rounded-[2rem] shadow-xl border border-slate-200">
             <div className="text-xl font-bold text-slate-800 border-b pb-4">
               Appachi et al. (Escoliose NMD severa)
             </div>
             <ul className="space-y-4 text-slate-600 font-medium">
               <li className="flex gap-3 items-start"><span className="text-indigo-500 font-bold">•</span> <span>30,3% necessitaram visitar o PS por problemas na cânula.</span></li>
               <li className="flex gap-3 items-start"><span className="text-indigo-500 font-bold">•</span> <span>18,6% necessitaram trocar tubo por ventilação sub-ótima / deslocamento repetido.</span></li>
               <li className="flex gap-3 items-start"><span className="text-indigo-500 font-bold">•</span> <span>34,3% evidenciaram traqueia anormal estrutural na propedêutica.</span></li>
               <li className="flex gap-3 items-start"><span className="text-indigo-500 font-bold">•</span> <span><strong>Só 9.8% conseguiram ser decanulados</strong> nesta população.</span></li>
             </ul>
             <div className="pt-4 mt-2 border-t font-semibold text-slate-800 text-lg">
               Conclusão: Cânula errada curva contra mucosa tortuosa gera <span className="text-rose-500">úlcera, granuloma obstrutivo e fístula.</span>
             </div>
           </div>
         </Reveal>
       </div>
    </div>
  );
}
