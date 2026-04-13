import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../components/ui';

export default function SlidePosPrecoce({ step }: { step: number }) {
  const risks = [
    { title: "Deslocamento", icon: "🏃", text: "Decanulação pelo próprio doente ou cuidadores destreinados.", perc: "3.9%" },
    { title: "Sangramento", icon: "🩸", text: "Erosão de vasos cervicais peri-estomais por frição.", perc: "3.3%" },
    { title: "Obstrução", icon: "🛑", text: "Tubo estreito rapidamente ocluído por falta de umidificação.", perc: "4.6%" },
    { title: "Pneumotórax", icon: "🫁", text: "Eventos pleurais reativos e vazamento de ar (fuga).", perc: "0.7%" },
  ];

  return (
    <div className="h-full flex flex-col gap-6">
      <Reveal show={step >= 1}>
        <div className="text-center max-w-4xl mx-auto space-y-3 mb-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">A Zona de Tensão D0-D7</h2>
          <p className="text-lg text-slate-500">
            Período com o estoma imaturo (trajeto subcutâneo elástico cru) e onde as reposições de cânula acidentais têm alta letalidade se causarem falsa via ao mediastino.
          </p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 flex-1">
        {risks.map((risk, index) => (
          <Reveal show={step >= 2 + index} key={risk.title}>
            <div className="bg-white border-2 border-rose-100 p-6 rounded-[2rem] shadow-sm flex flex-col justify-center h-full hover:border-rose-400 transition-colors">
              <div className="text-5xl mb-4">{risk.icon}</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{risk.title}</h3>
              <p className="text-sm text-slate-600 mb-6 flex-1">{risk.text}</p>
              <div className="text-3xl font-black text-rose-500">{risk.perc}</div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal show={step >= 6}>
        <div className="mt-4 p-5 md:p-6 rounded-3xl bg-rose-50 border border-rose-200 shadow-inner flex flex-col md:flex-row gap-6 items-center">
          <div className="w-16 h-16 rounded-full bg-white flex shrink-0 items-center justify-center text-rose-600 font-bold text-2xl shadow-sm">
            !
          </div>
          <div className="text-slate-700 font-medium text-lg leading-relaxed">
            <strong className="text-slate-900 block mb-1">A "Doutrina do Leito" (Roberts / Douglas):</strong>
            No período D0-D7 é absolutamente obrigatório manter um kit à beira leito com um tubo igual lubrificado, e um tubo de <span className="underline decoration-rose-400 decoration-2 font-bold">tamanho imediatamente menor</span> para resgates.
          </div>
        </div>
      </Reveal>
    </div>
  );
}
