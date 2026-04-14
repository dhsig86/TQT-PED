import React, { useState } from 'react';
import { Reveal, Citation, ModalOverlay } from '../components/ui';

export default function SlidePosPrecoce({ step }: { step: number }) {
  const risks = [
    { title: "Deslocamento", icon: "🏃", text: "Decanulação pelo próprio lactente reativo no leito, ou durante banhos mal manuseados em enfermaria de baixa familiaridade com traqueias desprotegidas.", perc: "3.9%" },
    { title: "Sangramento", icon: "🩸", text: "Erosão e hemorragia provenientes dos capilares cervicais friáveis ao redor do estoma recém aberto, em geral auto-limitada.", perc: "3.3%" },
    { title: "Obstrução", icon: "🛑", text: "Oclusão aguda e severa do trajeto interno por falta de umidificação contínua, propiciando formação asfixiante precoce (Mucus Plugging).", perc: "4.6%" },
    { title: "Fuga Pleural", icon: "🫁", text: "Pneumotórax e pneumomediastino reativos pelo rompimento acidental da pleura visceral alta e imatura da anatomia infantil (D1-D2).", perc: "0.7%" },
  ];

  const [activeRisk, setActiveRisk] = useState<number | null>(null);

  return (
    <div className="h-full flex flex-col justify-center gap-6 lg:gap-8 min-h-0 relative pb-6">
      <Reveal show={step >= 1}>
        <div className="text-center max-w-5xl mx-auto space-y-4 mb-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">A Instabilidade do Trajeto Recente (D0-D7)</h2>
          <p className="text-lg text-slate-600 font-medium">
            Período frágil reunindo tecido subcutâneo sangrante, estoma imaturo não endotelizado e espasmos; momento letal de resgate.
          </p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 flex-1 items-stretch min-h-0 px-2">
        {risks.map((risk, index) => (
          <Reveal show={step >= 2 + index} key={risk.title} className="h-full">
            <div 
               className="bg-white hover:bg-slate-50 cursor-pointer border text-center border-slate-200 p-6 rounded-[2rem] shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center h-full group"
               onClick={() => setActiveRisk(index)}
            >
              <div className="text-5xl lg:text-6xl mb-6 group-hover:scale-110 transition-transform">{risk.icon}</div>
              <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-2 uppercase tracking-wide">{risk.title}</h3>
              <div className="text-sm font-semibold text-slate-400 uppercase tracking-widest mt-auto bg-slate-100 rounded-full px-4 py-1">Ver Detalhes</div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal show={step >= 6}>
        <div className="p-6 lg:p-8 rounded-[2rem] bg-slate-800 text-slate-50 border border-slate-700 shadow-xl flex flex-col md:flex-row gap-6 items-center mx-auto max-w-6xl mt-4">
          <div className="w-16 h-16 shrink-0 rounded-full bg-slate-100 flex items-center justify-center text-slate-800 font-black text-3xl shadow-sm">
            !
          </div>
          <div className="text-slate-300 font-medium text-lg leading-relaxed">
            <strong className="text-white block mb-1 text-xl">Doutrina Crítica do Resgate Pediátrico:</strong>
            Do pós operatório imediato até consolidação formal da pele, é mandatória permanência no leito de tubo idêntico e <span className="text-white font-bold underline">tubo sobressalente menor</span>.
          </div>
        </div>
      </Reveal>

      {/* MODAL para todos os riscos */}
      <ModalOverlay open={activeRisk !== null} setOpen={() => setActiveRisk(null)}>
         {activeRisk !== null && (
           <>
              <div className="bg-slate-800 p-10 lg:p-14 flex flex-col items-center text-center">
                 <div className="text-[6rem] leading-none mb-6 drop-shadow-2xl">{risks[activeRisk].icon}</div>
                 <h2 className="text-white text-4xl lg:text-5xl font-black uppercase tracking-widest">{risks[activeRisk].title}</h2>
              </div>
              <div className="p-10 lg:p-14 bg-white flex flex-col items-center justify-center text-center">
                 <div className="text-7xl font-black text-slate-800 tracking-tighter mb-8 bg-slate-50 border border-slate-100 rounded-[2rem] px-10 py-6 shadow-sm">
                    {risks[activeRisk].perc}
                 </div>
                 <p className="text-xl lg:text-2xl text-slate-600 font-medium leading-relaxed max-w-3xl">
                    {risks[activeRisk].text}
                 </p>
              </div>
           </>
         )}
      </ModalOverlay>

      <Citation text="(Roberts et al., 2019; Douglas et al., 2015)" />
    </div>
  );
}
