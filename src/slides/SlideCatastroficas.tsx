import React from 'react';
import { Target, ArrowRight, ShieldAlert, ActivitySquare } from 'lucide-react';
import { Reveal } from '../components/ui';

export default function SlideCatastroficas({ step }: { step: number }) {
  return (
    <div className="h-full flex flex-col gap-6 justify-center">
      <Reveal show={step >= 1}>
        <div className="text-center mb-8">
           <h2 className="text-4xl font-extrabold text-red-900">Cascata Catastrófica (Evitável)</h2>
           <p className="text-lg text-red-700 mt-2 font-medium">Cramer (2018): Taxa basal de mortalidade por complicações é 10x maior em crianças do que adultos.</p>
        </div>
      </Reveal>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
         <Reveal show={step >= 2}>
           <div className="bg-red-50 border-2 border-red-200 p-8 rounded-full w-48 h-48 flex flex-col items-center justify-center text-center shadow-lg relative">
             <Target className="w-10 h-10 text-red-600 mb-2" />
             <div className="font-bold text-red-900">Obstrução / Deslocamento</div>
           </div>
         </Reveal>

         <Reveal show={step >= 3}>
           <ArrowRight className="w-10 h-10 text-red-300 hidden md:block" />
         </Reveal>

         <Reveal show={step >= 4}>
           <div className="bg-orange-50 border-2 border-orange-200 p-8 rounded-full w-48 h-48 flex flex-col items-center justify-center text-center shadow-lg relative">
             <ActivitySquare className="w-10 h-10 text-orange-600 mb-2" />
             <div className="font-bold text-orange-900">Hipóxia Instável</div>
           </div>
         </Reveal>

         <Reveal show={step >= 5}>
           <ArrowRight className="w-10 h-10 text-red-300 hidden md:block" />
         </Reveal>

         <Reveal show={step >= 6}>
           <div className="bg-rose-600 border-2 border-red-800 p-8 rounded-[3rem] w-56 h-56 flex flex-col items-center justify-center text-center shadow-2xl relative transform hover:scale-105 transition-transform cursor-pointer">
             <ShieldAlert className="w-12 h-12 text-white mb-2" />
             <div className="font-black text-white text-xl">Falha de Resgate</div>
             <div className="text-rose-200 text-xs mt-2 uppercase tracking-widest font-bold">Óbito Evitável</div>
           </div>
         </Reveal>
      </div>

      <Reveal show={step >= 7}>
        <div className="mt-12 text-center text-red-600 font-semibold text-lg bg-red-50/80 p-4 rounded-xl mx-auto max-w-4xl border border-red-200 backdrop-blur-sm">
          A literatura moderna cravou que o óbito isolado da traqueostomia mora na "não-consecução cirúrgica do resgate" ou na ignorância técnica de manuseio parental domiciliar.
        </div>
      </Reveal>
    </div>
  );
}
