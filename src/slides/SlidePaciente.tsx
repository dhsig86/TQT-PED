import React from 'react';
import { Activity, Baby, Stethoscope } from 'lucide-react';
import { ExpandablePanel, MetricCard, Reveal, Citation } from '../components/ui';

export default function SlidePaciente({ step }: { step: number }) {
  return (
    <div className="h-full flex flex-col justify-start xl:justify-center gap-4 lg:gap-6 min-h-0 relative pb-8 overflow-y-auto pt-2 pl-2 pr-4 -mr-4 no-scrollbar">
      <Reveal show={step >= 1} className="shrink-0">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          <MetricCard
            color="bg-cyan-600"
            big="< 1 ano"
            title="Mais Jovem"
            text="Predominância lactente nas casuísticas terciárias contemporâneas."
            delay={0.1}
          />
          <MetricCard
            color="bg-emerald-600"
            big="Ventilado"
            title="Dependência Crônica"
            text="A necessidade de ventilação mecânica prolongada suplanta as causas obstrutivas base."
            delay={0.2}
          />
          <MetricCard
            color="bg-violet-600"
            big="Comórbido"
            title="Alta Complexidade"
            text="Associação com displasia broncopulmonar, malformações cardíacas e prematuridade extrema."
            delay={0.3}
          />
          <MetricCard
            color="bg-amber-600"
            big="79%"
            title="Abaixo de 1 Ano"
            text="Em série de referência terciária, 79% dos traqueostomizados pediátricos tinham menos de 1 ano de idade. (Douglas, 2015)"
            delay={0.4}
          />
        </div>
      </Reveal>

      <div className="grid lg:grid-cols-3 gap-4 md:gap-6 items-start min-h-0 flex-1">
        <Reveal show={step >= 2}>
          <div className="h-full">
            <ExpandablePanel
              icon={<Activity className="w-6 h-6" />}
              title="A Epidemiologia Clássica"
              badge="Infecciosa"
              text="Foco histórico nas patologias obstrutivas emergenciais agudas (Epiglotite e Difteria)."
              bullets={[
                "A preservação via asfixia eminente na sala de urgência.",
                "Menos tempo de dependência mecânica ventilatória.",
                "Risco essencialmente extirpado após a cura base."
              ]}
            />
          </div>
        </Reveal>

        <Reveal show={step >= 3}>
          <div className="h-full">
            <ExpandablePanel
              icon={<Baby className="w-6 h-6" />}
              title="O Desafio Sindrômico Atual"
              badge="Cronicidade"
              text="O foco torna-se a proteção neural de longo prazo e desmame gradual do suporte avançado."
              bullets={[
                "Ventilação prolongada e displasia broncopulmonar como principal indicação (Douglas 2015: 20% VM, 18% craniofacial, 14% SGS).",
                "Mismatch da cânula versus a anatomia em crescimento contínuo.",
                "Intensa manipulação por cuidadores domíciliares: aprendizado obrigatório."
              ]}
            />
          </div>
        </Reveal>

        <Reveal show={step >= 4}>
          <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50/80 shadow-sm p-6 lg:p-8 h-full flex flex-col">
            <div className="flex items-center gap-3 mb-4 text-slate-800 font-bold text-xl">
              <Stethoscope className="w-6 h-6 text-slate-600" /> Mudança Clínica de Impacto
            </div>
            <div className="space-y-4 text-slate-700 font-medium leading-relaxed">
              <p>
                O paciente hoje consolida o estoma traqueal como ferramenta de manutenção, deixando de ser um bypass de uso temporal e breve.
              </p>
              <p className="font-bold text-amber-700 bg-amber-100 p-4 rounded-xl border border-amber-200">
                Lactentes mantêm cânulas por anos: multiplicando exponencialmente as janelas de ressecamento e o desgaste da mucosa e da família.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
      
      <Citation text="(Douglas et al., 2015 · PMID 26255606; Roberts et al., 2019 · PMID 31251410)" />
    </div>
  );
}
