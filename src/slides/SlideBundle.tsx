import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Shield } from 'lucide-react';
import { Reveal } from '../components/ui';

export default function SlideBundle({ step }: { step: number }) {
  const bundleItems = [
    "Tamanho correto do tubo e fixação.",
    "Stay Sutures (fios-guia) ou Maturação estomal.",
    "Avaliação de capnografia trans e pós-op imediata.",
    "D0-D7 no CTI com vigilância ativa e umidificação rigorosa.",
    "Primeira troca DEVE ser em ambiente controlado / Centro Cirúrgico.",
    "Treinamento massivo do Cuidador Domiciliar para resgate.",
  ];

  return (
    <div className="h-full flex flex-col justify-center py-4">
      <Reveal show={step >= 1}>
        <div className="text-center mb-10">
           <div className="mx-auto w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
             <Shield className="w-12 h-12" />
           </div>
           <h2 className="text-4xl font-extrabold text-slate-800">
             O Bundle de Segurança
           </h2>
           <p className="text-xl text-slate-500 mt-2">A técnica que previne a complicação antes dela existir (Pacheco, 2021)</p>
        </div>
      </Reveal>

      <div className="max-w-4xl mx-auto w-full space-y-3">
         {bundleItems.map((item, index) => (
           <Reveal show={step >= 2 + index} key={index}>
             <div className="bg-white border text-lg border-emerald-200 p-4 rounded-2xl flex items-center gap-4 hover:bg-emerald-50 transition-colors shadow-sm">
               <CheckCircle className="w-8 h-8 text-emerald-500 shrink-0" />
               <span className="font-medium text-slate-700">{item}</span>
             </div>
           </Reveal>
         ))}
      </div>
    </div>
  );
}
