import React from 'react';
import { Reveal, Citation } from '../components/ui';

export default function SlideQuatroChaves({ step }: { step: number }) {
  const cards = [
    { title: "Granuloma Formador", text: "Resíduo clássico de atritos mecânicos rotineiros. Mais de 19% requerem terapias de excisão, nitratações e causam estenoses pós-decanulatórias significativas em virtude de hiperatividade tecidual da criança no lúmen do estoma e na ponta da cânula plástica interna.", color: "bg-slate-50", textCol: "text-slate-800" },
    { title: "Formação de Rolhas", text: "Sem a umidificação adequada que o nariz humano promoveria, ocorrem ressecamentos e colonizações de flora agressivas na via aérea que enclausuram o tubo sintético em frações de horas, progredindo celeremente para hipóxia se a sub-oclusão for neglicenciada precocemente.", color: "bg-white", textCol: "text-slate-800" },
    { title: "Deslocamento Súbito", text: "Acidente mecânico domiciliário predominante. Ocorre após puxões reativos infantis e é a verdadeira raiz responsável pelas taxas mais profundas do óbito traqueostômico, pois desestabiliza o respirador dependente fora das grades assistenciais da unidade de terapia especializada na saúde terciária.", color: "bg-slate-800", textCol: "text-white" },
    { title: "Fístula Traqueocutânea", text: "É uma morbidade resultante do sucesso terapêutico longo. A traqueia sofre epitelização ao longo do trajeto após uso por anos da prótese, gerando uma comunicação persistente complexa pós-cura que requer plásticas cervicais na vida infantil posterior do então paciente hígido.", color: "bg-white", textCol: "text-slate-800" },
  ];

  return (
    <div className="h-full flex flex-col justify-center p-2 relative pb-6 min-h-0">
      <Reveal show={step >= 1}>
         <div className="text-center max-w-5xl mx-auto mb-10">
           <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 leading-tight">
             Fatores Etiológicos das Principais Complicações Locais
           </h2>
           <p className="text-slate-600 mt-4 font-semibold text-lg lg:text-xl">O eixo fisiopatológico do evento pediátrico restringe-se primariamente a quatro entidades macro fundamentais:</p>
         </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 w-full max-w-6xl mx-auto flex-1 min-h-0">
         {cards.map((c, i) => (
           <Reveal show={step >= i + 2} key={c.title} className="h-full">
             <div className={`p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-center h-full ${c.color} ${c.textCol}`}>
                <h3 className="text-2xl lg:text-3xl font-black mb-4 tracking-tight">{c.title}</h3>
                <p className="font-medium text-sm md:text-base leading-relaxed opacity-90">{c.text}</p>
             </div>
           </Reveal>
         ))}
      </div>
      
      <Citation text="(Lubianca Neto et al., 2020)" />
    </div>
  );
}
