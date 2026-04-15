import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { Reveal, NodeItem, Citation } from '../components/ui';
import { GraphCard } from '../components/GraphCard';

export default function SlideComplicacoes({ step }: { step: number }) {
  const count = Math.max(0, Math.min(5, step - 1));

  return (
    <div className="h-full flex flex-col justify-start xl:justify-center gap-4 lg:gap-6 min-h-0 relative pb-8 overflow-y-auto pt-2 pl-2 pr-4 -mr-4 no-scrollbar">
      <Reveal show={step >= 1} className="shrink-0">
        <div className="rounded-[1.75rem] border border-slate-200 bg-white shadow-sm p-6 lg:p-8">
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="w-8 h-8 text-emerald-600" />
            <div className="text-2xl font-bold text-slate-800 tracking-tight">
              A Cronologia da Complicação Estrutural
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 items-stretch">
            <NodeItem
              color="bg-slate-700"
              title="Intraoperatório"
              text="Falha Técnica"
              note="Complicações derivadas do sítio primário cirúrgico: falso trajeto mediastinal anatômico ou hemorragia de parede."
              delay={0}
            />
            <Reveal show={step >= 2}>
              <NodeItem
                color="bg-amber-500"
                title="Pós-Precoce"
                text="A Zona Crítica (Dias 0–7)"
                note="Obstrução primária por secreção crua ou rolha inicial, somado ao risco asfixiante de decanulação não maturada."
                delay={0}
              />
            </Reveal>
            <Reveal show={step >= 3}>
              <NodeItem
                color="bg-rose-500"
                title="Pós-Tardio"
                text="O Evento Repetitivo"
                note="Carga que se acumula no longo prazo: Granuloma estomal, traqueíte persistente e estenose supraestomal cicatricial."
                delay={0}
              />
            </Reveal>
            <Reveal show={step >= 4}>
              <NodeItem
                color="bg-violet-600"
                title="Domicílio"
                text="O Resgate em Cheque"
                note="Obstruções e decanulações acidentais que falham fora da UTI por incapacidade letal de resgate pelo familiar."
                delay={0}
              />
            </Reveal>
            <Reveal show={step >= 5}>
              <NodeItem
                color="bg-emerald-600"
                title="Segurança"
                text="Controle e Bundle"
                note="Protocolos rigorosos instalados no centro cirúrgico que modulam o risco para reduzir a letalidade extra-hospitalar."
                delay={0}
              />
            </Reveal>
          </div>
        </div>
      </Reveal>

      <div className="grid lg:grid-cols-2 gap-4 lg:gap-6 items-start min-h-0 flex-1">
        <Reveal show={step >= 2}>
          <div className="rounded-[1.75rem] border border-indigo-200 bg-indigo-50/50 p-6 lg:p-8 h-full">
            <div className="font-bold text-slate-800 mb-4 text-xl">
              Implicações Terapêuticas da Cronologia
            </div>
            <div className="space-y-5 text-slate-700 leading-relaxed font-medium">
              <div className="flex gap-3">
                <span className="text-indigo-500 font-bold">•</span>
                <span>O abandono do conceito dicotômico que insula a complicação apenas no procedimento físico da mesa cirúrgica.</span>
              </div>
              <div className="flex gap-3">
                <span className="text-indigo-500 font-bold">•</span>
                <span>Avanços em anestesia derrubaram complicações como o pneumotórax intrínseco, mas maximizaram as taxas de granuloma pela sobrevida dos prematuros.</span>
              </div>
              <div className="flex gap-3">
                <span className="text-indigo-500 font-bold">•</span>
                <span>O evento traumático ou letal se desenha silenciosamente muito antes da data do óbito, como por exemplo os erros de eixo da cânula.</span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal show={step >= 3}>
          <div className="h-full min-h-0">
            <GraphCard count={count} />
          </div>
        </Reveal>
      </div>

      <Citation text="(Dal'Astra et al.)" />
    </div>
  );
}
