import React from 'react';
import { CheckCircle, Shield } from 'lucide-react';
import { Reveal, Citation } from '../components/ui';

export default function SlideBundle({ step }: { step: number }) {
  const bundleItems = [
    "Maturação cirúrgica do estoma ou fixação com suturas-guia (Stay Sutures) obrigatórias nas extremidades laterais.",
    "Avaliação rigorosa do correto diâmetro, angulação e tipo funcional da cânula.",
    "Confirmação locacional radiológica e estabilização de capnografia exalatória pós-procedimento imediato.",
    "Manutenção rigorosamente estrita na Terapia Intensiva entre D0 e D7 com vigilância continuada (Vigilância Ativa).",
    "Abertura primária de protocolo de umidificação densa em circuito ou nariz artificial, obstando formação de rolhas precoces.",
    "Primeira troca transcorrida unicamente em ambiente altamente controlado intra ou extra CIRÚRGICO sob retaguarda anestésica.",
    "Treinamento massivo, metódico e documentado do Cuidador Domiciliar para resgate via tubo sobressalente."
  ];

  return (
    <div className="h-full flex flex-col justify-center py-4 relative pb-6 min-h-0">
      <Reveal show={step >= 1}>
        <div className="text-center mb-8 mx-auto w-full max-w-5xl">
           <div className="mx-auto w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
             <Shield className="w-12 h-12" />
           </div>
           <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 leading-tight">
             Protocolo Bundle de Segurança Preventivo
           </h2>
           <p className="text-lg lg:text-xl text-slate-600 mt-4 font-medium">Mitigação institucional baseada na profilaxia estruturada do evento letal e do tecido adverso</p>
        </div>
      </Reveal>

      <div className="max-w-5xl mx-auto w-full flex flex-col gap-3 lg:gap-4 flex-1 min-h-0 justify-center">
         {bundleItems.map((item, index) => (
           <Reveal show={step >= 2 + index} key={index}>
             <div className="bg-white border border-emerald-200 p-4 lg:p-5 rounded-2xl flex items-center gap-4 lg:gap-6 hover:bg-emerald-50 transition-colors shadow-sm">
               <CheckCircle className="w-8 h-8 text-emerald-600 shrink-0" />
               <span className="font-semibold text-slate-700 text-base lg:text-lg leading-relaxed">{item}</span>
             </div>
           </Reveal>
         ))}
      </div>
      
      <Citation text="(Pacheco et al., 2021)" />
    </div>
  );
}
