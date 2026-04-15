import React, { useState } from 'react';
import { Reveal, Citation, ModalOverlay } from '../components/ui';

export default function SlideQuatroChaves({ step }: { step: number }) {
  const cards = [
    {
      title: "Granuloma Formador",
      text: "Complicação local mais frequente nas séries contemporâneas. Resulta de atritos mecânicos rotineiros da cânula contra a mucosa traqueal. Pode exigir excisão cirúrgica, cauterização por nitrato de prata ou laser e, em casos graves, é causa de estenose supraestomal cicatricial.",
      source: "Lubianca Neto et al., 2022 · Braz J Otorhinolaryngol · PMID 33472759",
      color: "bg-slate-50 hover:bg-slate-100 border-slate-200",
      textColor: "text-slate-800",
    },
    {
      title: "Formação de Rolhas",
      text: "Sem a umidificação que o trato nasal promoveria, ressecamentos e colonizações de flora agressiva na via aérea enclaustram o tubo sintético em horas. A suboclusão progressa celeremente para hipóxia aguda se não identificada precocemente e desfeita com aspiração ativa.",
      source: "Dal'Astra et al., 2017 · Braz J Otorhinolaryngol · PMID 27256033",
      color: "bg-white hover:bg-slate-50 border-slate-200",
      textColor: "text-slate-800",
    },
    {
      title: "Deslocamento Súbito",
      text: "Acidente mecânico domiciliar predominante. Ocorre após puxões reativos infantis e é a principal causa de mortalidade traqueostômica, pois desestabiliza o dependente ventilatório fora da UTI especializada. Mortalidade relacionada à TQT chega a 6% — com obstrução e decanulação acidental como mecanismos centrais.",
      source: "Lubianca Neto et al., 2022 · Braz J Otorhinolaryngol · PMID 33472759",
      color: "bg-slate-800 hover:bg-slate-900 border-slate-700",
      textColor: "text-white",
    },
    {
      title: "Fístula Traqueocutânea",
      text: "Morbidade resultante do sucesso terapêutico prolongado. A traqueia sofre epitelização ao longo do trajeto após anos de uso da prótese, gerando comunicação persistente que não regride espontaneamente após decanulação e requer plastia cervical corretiva.",
      source: "Dal'Astra et al., 2017 · Braz J Otorhinolaryngol · PMID 27256033",
      color: "bg-slate-100 hover:bg-slate-200 border-slate-300",
      textColor: "text-slate-800",
    },
  ];

  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <div className="h-full flex flex-col justify-start xl:justify-center relative pb-6 min-h-0 overflow-y-auto pt-2 pl-2 pr-4 -mr-4 no-scrollbar">
      <Reveal show={step >= 1}>
        <div className="text-center max-w-5xl mx-auto mb-4 shrink-0">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 leading-tight">
            Fatores Etiológicos das Complicações Locais
          </h2>
          <p className="text-slate-500 mt-2 font-semibold text-base lg:text-lg">
            O eixo fisiopatológico restringe-se primariamente a quatro entidades macro fundamentais:
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-2 gap-3 lg:gap-5 w-full max-w-5xl mx-auto shrink-0 px-2">
        {cards.map((c, i) => (
          <Reveal show={step >= i + 2} key={c.title}>
            <div
              className={`p-5 md:p-6 rounded-[2rem] border shadow-sm flex flex-col items-center justify-center text-center cursor-pointer transition-colors ${c.color}`}
              onClick={() => setActiveCard(i)}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-xl mb-3 ${i === 2 ? 'bg-white/20' : 'bg-slate-200/60'}`}>
                {i + 1}
              </div>
              <h3 className={`text-lg lg:text-2xl font-black tracking-tight ${c.textColor}`}>{c.title}</h3>
              <div className={`mt-4 rounded-full p-2 flex items-center justify-center w-8 h-8 mx-auto ${i === 2 ? 'bg-white/20 text-white' : 'bg-slate-200/60 text-slate-600'}`}>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                </svg>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <ModalOverlay open={activeCard !== null} setOpen={() => setActiveCard(null)}>
        {activeCard !== null && (
          <div className="flex flex-col h-full bg-white relative">
            <div className="p-8 border-b border-slate-100 flex items-center gap-5">
              <div className="w-16 h-16 bg-slate-800 text-white rounded-[1.5rem] flex items-center justify-center font-black text-3xl shadow-md">
                {activeCard + 1}
              </div>
              <h2 className="text-2xl lg:text-3xl font-black text-slate-800 uppercase tracking-widest">
                {cards[activeCard].title}
              </h2>
            </div>
            <div className="p-8 lg:p-12 bg-slate-50 flex-1 flex flex-col justify-center gap-5">
              <p className="text-lg lg:text-xl text-slate-700 leading-relaxed font-medium bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200">
                {cards[activeCard].text}
              </p>
              <div className="text-xs text-slate-400 font-medium tracking-wide px-2">
                <span className="font-bold text-slate-500 uppercase tracking-widest text-[10px] block mb-1">Referência</span>
                {cards[activeCard].source}
              </div>
            </div>
          </div>
        )}
      </ModalOverlay>

      <Citation text="(Lubianca Neto et al., 2022 · PMID 33472759; Dal'Astra et al., 2017 · PMID 27256033)" />
    </div>
  );
}
