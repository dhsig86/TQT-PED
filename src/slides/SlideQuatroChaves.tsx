import React, { useState } from 'react';
import { Reveal, Citation, ModalOverlay } from '../components/ui';

export default function SlideQuatroChaves({ step }: { step: number }) {
  const cards = [
    { title: "Granuloma Formador", text: "Resíduo clássico de atritos mecânicos rotineiros. Mais de 19% requerem terapias de excisão, nitratações e causam estenoses pós-decanulatórias significativas em virtude de hiperatividade tecidual da criança no lúmen do estoma e na ponta da cânula plástica interna.", color: "bg-slate-50 hover:bg-slate-100 border-slate-200", textColor: "text-slate-800" },
    { title: "Formação de Rolhas", text: "Sem a umidificação adequada que o nariz humano promoveria, ocorrem ressecamentos e colonizações de flora agressivas na via aérea que enclausuram o tubo sintético em frações de horas, progredindo celeremente para hipóxia se a sub-oclusão for negligenciada precocemente.", color: "bg-white hover:bg-slate-50 border-slate-200", textColor: "text-slate-800" },
    { title: "Deslocamento Súbito", text: "Acidente mecânico domiciliário predominante. Ocorre após puxões reativos infantis e é a verdadeira raiz responsável pelas taxas mais profundas do óbito traqueostômico, pois desestabiliza o respirador dependente fora das grades assistenciais da unidade especializada.", color: "bg-slate-800 hover:bg-slate-900 border-slate-700", textColor: "text-white" },
    { title: "Fístula Traqueocutânea", text: "É uma morbidade resultante do sucesso terapêutico longo. A traqueia sofre epitelização ao longo do trajeto após uso por anos da prótese, gerando uma comunicação persistente complexa pós-cura que requer plásticas cervicais corretivas.", color: "bg-slate-100 hover:bg-slate-200 border-slate-300", textColor: "text-slate-800" },
  ];

  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <div className="h-full flex flex-col justify-center p-2 relative pb-6 min-h-0">
      <Reveal show={step >= 1}>
         <div className="text-center max-w-5xl mx-auto mb-10">
           <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 leading-tight">
             Fatores Etiológicos das Complicações Locais
           </h2>
           <p className="text-slate-500 mt-4 font-semibold text-lg lg:text-xl">O eixo fisiopatológico restringe-se primariamente a quatro entidades macro fundamentais:</p>
         </div>
      </Reveal>

      <div className="grid grid-cols-2 gap-4 lg:gap-8 w-full max-w-5xl mx-auto flex-1 min-h-0 px-4">
         {cards.map((c, i) => (
           <Reveal show={step >= i + 2} key={c.title} className="h-full">
             <div 
                className={`p-6 md:p-8 rounded-[2rem] border shadow-sm flex flex-col items-center justify-center text-center h-full cursor-pointer transition-colors ${c.color}`}
                onClick={() => setActiveCard(i)}
             >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-2xl mb-4 ${i === 2 ? 'bg-white/20' : 'bg-slate-200/60'}`}>
                  {i+1}
                </div>
                <h3 className={`text-xl lg:text-3xl font-black tracking-tight ${c.textColor}`}>{c.title}</h3>
                <div className="mt-6 text-sm font-bold uppercase tracking-widest bg-opacity-10 bg-black px-4 py-2 rounded-full opacity-60">Leia Mais</div>
             </div>
           </Reveal>
         ))}
      </div>

      <ModalOverlay open={activeCard !== null} setOpen={() => setActiveCard(null)}>
         {activeCard !== null && (
           <div className="flex flex-col h-full bg-white relative">
              <div className="p-10 border-b border-slate-100 flex items-center gap-6">
                 <div className="w-20 h-20 bg-slate-800 text-white rounded-[2rem] flex items-center justify-center font-black text-4xl shadow-md">{activeCard + 1}</div>
                 <h2 className="text-3xl lg:text-4xl font-black text-slate-800 uppercase tracking-widest">{cards[activeCard].title}</h2>
              </div>
              <div className="p-10 lg:p-14 bg-slate-50 flex-1 flex items-center justify-center">
                 <p className="text-xl lg:text-2xl text-slate-700 leading-relaxed font-medium bg-white p-10 rounded-[2rem] shadow-sm border border-slate-200">
                   {cards[activeCard].text}
                 </p>
              </div>
           </div>
         )}
      </ModalOverlay>
      
      <Citation text="(Lubianca Neto et al., 2020)" />
    </div>
  );
}
