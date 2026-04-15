import React from 'react';
import { Sparkles, Activity, Target } from 'lucide-react';
import { Reveal, Citation } from '../components/ui';

export default function SlideTakehome({ step }: { step: number }) {
  const msgs = [
    { title: "Substituir Estaticismo por Pragmatismo Temporal Lineado", text: "As letalidades atreladas à traqueostomia pediátrica não materializam-se de forma acidental homogênea ou imprevisível. Sua carga espalha-se delineada através das fatias intraoperatória, a zona tensional e imatura da Terapia Intensiva D0-D7, até sua cronicidade exarcebativa obstrutiva em convívio puramente domiciliar (Lubianca Neto et al., 2020).", icon: <Activity className="w-10 h-10 text-indigo-200" /> },
    { title: "Desconstruir Que Mortalidades Singulares São Aleatórias", text: "A asfixia consolidada refletida pelo CDC dos EUA (Cramer et al., 2018) reflete o somatório perverso da disfunção oclusiva fisiopatológica precoce não contida e/ou a inépcia letal frente a uma decanulação domiciliar (Dal'Astra et al., 2017) por carência plena de preparo educacional prático de resgate massivo.", icon: <Sparkles className="w-10 h-10 text-orange-200" /> },
    { title: "Segurança Impositiva Baseia-se em Multi-frentes (Bundle)", text: "Uma técnica central meticulosa não salva isoladamente. Fica ratificada a doutrina de verificar sistematicamente calibres para prevenir estenose/fístula associada à rígida endoscopia prévia à decanulação (Pacheco, 2021).", icon: <Target className="w-10 h-10 text-emerald-200" /> }
  ];

  return (
    <div className="h-full flex flex-col gap-6 lg:gap-8 justify-start xl:justify-center relative pb-8 overflow-y-auto pt-2 pl-2 pr-4 -mr-4 no-scrollbar min-h-0">
      <div className="w-full flex-1 max-w-6xl mx-auto flex flex-col justify-evenly lg:justify-center gap-6 lg:gap-8 shrink-0">
        {msgs.map((m, i) => (
          <Reveal show={step >= i + 1} key={i}>
            <div className="p-6 lg:p-8 flex items-start gap-6 lg:gap-8 bg-slate-800 text-slate-50 rounded-[2rem] border-none shadow-xl border border-slate-700">
              <div className="shrink-0 flex items-center justify-center p-3 rounded-2xl bg-white/10">
                {m.icon}
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-bold mb-3 tracking-wide">{m.title}</h3>
                <p className="text-base lg:text-lg text-slate-300 leading-relaxed font-medium">{m.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <Citation text="(Pacheco, 2021; Lubianca Neto et al., 2020; Cramer et al., 2018; Dal'Astra et al., 2017)" />
    </div>
  );
}
