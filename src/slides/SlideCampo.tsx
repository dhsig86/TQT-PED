import React from 'react';
import { TimelineStage, Reveal } from '../components/ui';
import { GraphCard } from '../components/GraphCard';
import { palette } from '../data';

export default function SlideCampo({ step }: { step: number }) {
  const stages = [
    {
      year: "Até 1970's",
      label: "ANTES",
      short: "Infecção aguda",
      headline: "Obstrução infecciosa aguda dominava a indicação",
      note: "Historicamente, a traqueostomia pediátrica era motivada por obstruções infecciosas de via aérea superior.",
      details: [
        "Difteria, epiglotite e crupe grave como referências.",
        "A lógica predominante era de resgate agudo da via.",
        "Complicação lida sobretudo como problema intraoperatório.",
      ],
      boxClass: palette.before,
    },
    {
      year: "1980's–1990's",
      label: "TRANSIÇÃO",
      short: "Vacinação + UTI",
      headline: "Queda da indicação infecciosa clássica",
      note: "A universalização da vacinação e a consolidação da intubação traqueal em UTI neonatal mudam a epidemiologia.",
      details: [
        "As urgências infecciosas deixam de dominar o cenário.",
        "O procedimento se desloca para cenários mais programados.",
        "O suporte respiratório crônico ganha expressão.",
      ],
      boxClass: palette.transition,
    },
    {
      year: "2000's–ATUAL",
      label: "AGORA",
      short: "Paciente complexo",
      headline: "O lactente sindrômico e cronicamente ventilado",
      note: "O campo atual é marcado pela expressiva sobrevida de prematuros e crianças com malformações comorbidades graves.",
      details: [
        "Deslocamento massivo para menores de 1 ano.",
        "Ventilação prolongada e anomalias estruturais no protagonismo.",
        "A relação de longo prazo 'cânula/traqueia' dita as complicações.",
      ],
      boxClass: palette.now,
    },
  ];

  return (
    <div className="h-full flex flex-col justify-between gap-4 md:gap-6 min-h-0">
      <div className="grid lg:grid-cols-[1.58fr_0.92fr] gap-4 md:gap-6 items-start min-h-0 flex-1">
        <div className="space-y-4">
          <div className="grid md:grid-cols-3 gap-3 md:gap-4">
            <Reveal show={step >= 1}>
              <TimelineStage item={stages[0]} />
            </Reveal>
            <Reveal show={step >= 2}>
              <TimelineStage item={stages[1]} />
            </Reveal>
            <Reveal show={step >= 3}>
              <TimelineStage item={stages[2]} />
            </Reveal>
          </div>
        </div>

        <Reveal show={step >= 1}>
          <div className="h-full">
            <GraphCard count={Math.min(step, 5)} />
          </div>
        </Reveal>
      </div>

      <Reveal show={step >= 4}>
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm shrink-0 mt-2">
          <div className="grid md:grid-cols-[1fr_auto] gap-3 items-end">
            <div className="text-xl md:text-2xl lg:text-[26px] font-semibold text-slate-800 leading-tight">
              A traqueostomia pediátrica deixou de ser dominada pela emergência infecciosa infecciosa (epiglotite) e consolidou-se como passaporte de sobrevida para a "criança complexa moderna".
            </div>
            <div className="text-[11px] text-slate-500 md:text-right leading-relaxed whitespace-nowrap">
              Douglas, 2015 · Dal’Astra, 2017 · Roberts, 2019
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
