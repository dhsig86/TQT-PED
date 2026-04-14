import React from 'react';
import { Sparkles, Activity, Target } from 'lucide-react';
import { Reveal, Citation } from '../components/ui';

export default function SlideTakehome({ step }: { step: number }) {
  const msgs = [
    { title: "Substituir Estaticismo por Pragmatismo Temporal Lineado", text: "As letalidades atreladas à traqueostomia pediátrica não materializam-se de forma acidental homogênea ou imprevisível. Sua carga espalha-se perfeitamente delineada através das fatias intraoperatória pura, a zona tensional e não endotelizada da Terapia Intensiva D0-D7, até sua cronicidade exarcebativa obstrutiva em convívio puramente domiciliar.", icon: <Activity className="w-10 h-10 text-indigo-200" /> },
    { title: "Desconstruir Que Mortalidades Singulares São Aleatórias", text: "A asfixia consolidada baseada na literatura global reflete unicamente o somatório perverso da disfunção oclusiva fisiopatológica precoce não contida e/ou a inépcia mecânica letal atrelada ao cuidador de arrancar/perder uma cânula sem conseguir devolvê-la ao sítio por carência plena de preparo educacional prático massivo.", icon: <Sparkles className="w-10 h-10 text-orange-200" /> },
    { title: "Segurança Impositiva Baseia-se em Multi-frentes (Bundle)", text: "Uma técnica central meticulosa pautada no capnógrafo e eixos corretos de punção não salvam isoladamente. Torna-se imperativo adicionar verificação anatômica continuada da envergadura das cânulas (Prevenindo Ulceras e Estenoses) sob rigorosíssima reavaliação de endoscopia terapêutica associada ao rígido protocolo de trocas intra-hospitalares sob controle absoluto.", icon: <Target className="w-10 h-10 text-emerald-200" /> }
  ];

  return (
    <div className="h-full flex flex-col gap-6 lg:gap-8 justify-center relative pb-6 min-h-0">
      <div className="w-full flex-1 max-w-6xl mx-auto flex flex-col justify-evenly lg:justify-center gap-6 lg:gap-8">
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
      <Citation text="(Synthesis/Avaliação de Literatura)" />
    </div>
  );
}
