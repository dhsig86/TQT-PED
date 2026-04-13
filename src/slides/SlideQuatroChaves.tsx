import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../components/ui';

export default function SlideQuatroChaves({ step }: { step: number }) {
  const cards = [
    { title: "Granuloma", text: "Mais de 19% dos crônicos desenvolvem tecido supra-estomal obstrutivo ou na ponta da cânula.", color: "bg-pink-100", border: "border-pink-300" },
    { title: "Obstrução", text: "Mucus plugging por falha de via úmida ou infecção. Rápida progressão para asfixia.", color: "bg-blue-100", border: "border-blue-300" },
    { title: "Decanulação Acidental", text: "Terror de D0 a D7 ou por tração em domicílio no paciente maior, sem preparo do cuidador.", color: "bg-amber-100", border: "border-amber-300" },
    { title: "Fístula Traqueocutânea", text: "Consequência longitudinal da canulação longa, exigindo cirurgia formal pós-desmame.", color: "bg-emerald-100", border: "border-emerald-300" },
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center p-4">
      <Reveal show={step >= 1}>
         <div className="text-center max-w-3xl mb-10">
           <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">
             As Quatro Complicações do Congresso
           </h2>
           <p className="text-slate-500 mt-4 font-medium">Se a audiência levar apenas 4 palavras sobre complicação, devem ser estas:</p>
         </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-5xl">
         {cards.map((c, i) => (
           <Reveal show={step >= i + 2} key={c.title}>
             <div className={`p-8 rounded-3xl border-2 ${c.color} ${c.border} shadow-sm hover:shadow-md transition-shadow h-48 flex flex-col justify-center`}>
                <h3 className="text-2xl font-black text-slate-800 mb-3">{c.title}</h3>
                <p className="text-slate-700 font-medium leading-relaxed">{c.text}</p>
             </div>
           </Reveal>
         ))}
      </div>
    </div>
  );
}
