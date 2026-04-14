import React from 'react';
import { Reveal, Citation } from '../components/ui';

export default function SlidePosPrecoce({ step }: { step: number }) {
  const risks = [
    { title: "Deslocamento", icon: "🏃", text: "Decanulação pelo próprio lactente reativo no leito, ou durante banhos mal manuseados em enfermaria de baixa familiaridade com traqueias desprotegidas.", perc: "3.9%" },
    { title: "Sangramento", icon: "🩸", text: "Erosão e hemorragia provenientes dos capilares cervicais friáveis ao redor do estoma recém aberto, em geral auto-limitada.", perc: "3.3%" },
    { title: "Obstrução", icon: "🛑", text: "Oclusão aguda e severa do trajeto interno por falta de umidificação contínua, propiciando formação asfixiante precoce (Mucus Plugging).", perc: "4.6%" },
    { title: "Fuga Pleurais", icon: "🫁", text: "Pneumotórax e pneumomediastino reativos pelo rompimento acidental da pleura visceral alta e imatura da anatomia infantil (D1-D2).", perc: "0.7%" },
  ];

  return (
    <div className="h-full flex flex-col justify-center gap-6 lg:gap-8 min-h-0 relative pb-6">
      <Reveal show={step >= 1}>
        <div className="text-center max-w-5xl mx-auto space-y-4 mb-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">A Instabilidade do Trajeto Recente (D0-D7)</h2>
          <p className="text-lg text-slate-600 font-medium">
            Período frágil que reune tecido subcutâneo sangrante, estoma imaturo não endotelizado e espasmos da musculatura cérvico-traqueal; momento de alta letalidade se o tubo acidentalmente for sacado e não houver expertise no resgate.
          </p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 flex-1 items-stretch min-h-0">
        {risks.map((risk, index) => (
          <Reveal show={step >= 2 + index} key={risk.title} className="h-full">
            <div className="bg-white border text-center border-slate-200 p-6 lg:p-8 rounded-[2rem] shadow-sm flex flex-col items-center justify-between h-full hover:border-slate-300 transition-colors">
              <div className="flex flex-col items-center">
                 <div className="text-5xl lg:text-6xl mb-4">{risk.icon}</div>
                 <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-4">{risk.title}</h3>
                 <p className="text-sm font-medium text-slate-600 mb-6 flex-1 px-2 leading-relaxed">{risk.text}</p>
              </div>
              <div className="text-4xl font-black tracking-tighter text-slate-800">{risk.perc}</div>
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
            Do pós operatório imediato até a consolidação formal do trajeto fibroso da pele à traqueia, é estrita a permanência mandatória no leito do paciente de: um tubo idêntico, além de  <span className="underline decoration-slate-400 decoration-2 font-bold text-white">tubo sobressalente dimensionalmente menor</span>.
          </div>
        </div>
      </Reveal>

      <Citation text="(Roberts et al., 2019; Douglas et al., 2015)" />
    </div>
  );
}
