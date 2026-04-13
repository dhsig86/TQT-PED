import React, { useMemo } from 'react';
import { ShieldCheck } from 'lucide-react';
import { Reveal, NodeItem } from '../components/ui';
import { GraphCard } from '../components/GraphCard';
import { style } from '../data';

export default function SlideComplicacoes({ step }: { step: number }) {
  const count = useMemo(() => Math.max(0, Math.min(5, step - 1)), [step]);

  return (
    <div className="h-full flex flex-col gap-4 md:gap-6 min-h-0">
      <Reveal show={step >= 1}>
        <div className={`${style.card} p-5 md:p-6 shadow-md`}>
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-emerald-600" />
            <div className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight">
              A linha do tempo do risco e da complicação
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 items-stretch">
            <NodeItem
              color="bg-slate-700"
              title="Intraoperatório"
              text="Técnica base"
              note="Complicações são baseadas em erro técnico primário: sangramento incontrolável, dissecção fora de eixo, falsa via primária e mau posicionamento detectável."
              delay={0}
            />
            <Reveal show={step >= 2}>
              <NodeItem
                color="bg-amber-500"
                title="Pós-Precoce"
                text="A Zona Crítica (Dia 0 a 7)"
                note="Cânula instável. A preocupação é a perda acidental da via recém puncionada, rolha inicial por falta de umidade, fenda não selada e hemorragias da base estomal."
                delay={0}
              />
            </Reveal>
            <Reveal show={step >= 3}>
              <NodeItem
                color="bg-rose-500"
                title="Pós-Tardio"
                text="O Repetitivo"
                note="Carga que se assoma: Crescimento de tecido (Granuloma), traqueite de acúmulo, estenose de atrito ou tubo descalibrado crônico."
                delay={0}
              />
            </Reveal>
            <Reveal show={step >= 4}>
              <NodeItem
                color="bg-violet-600"
                title="Casa / Domicílio"
                text="O Resgate em Cheque"
                note="Obstrução (rolha mucosa) e Decanulação acidental saem do CTI e ocorrem no playground. Resgate pela família torna-se falível e gera asfixia."
                delay={0}
              />
            </Reveal>
            <Reveal show={step >= 5}>
              <NodeItem
                color="bg-emerald-600"
                title="Segurança Ativa"
                text="Maturação & Bundle"
                note="Ao olhar linearmente, a defesa nasce no bloco cirúrgico (suturas de reparo / maturação à pele do TQT) e na educação maciça domiciliar do bundle de resgate."
                delay={0}
              />
            </Reveal>
          </div>
        </div>
      </Reveal>

      <div className="grid lg:grid-cols-[1.15fr_0.95fr] gap-4 md:gap-6 items-start min-h-0 flex-1">
        <Reveal show={step >= 2}>
          <div className={`${style.card} p-5 md:p-6 h-full border-indigo-100 bg-indigo-50/20`}>
            <div className="font-bold text-slate-800 mb-4 text-lg md:text-xl">
              Implicações Terapêuticas da Timeline
            </div>
            <div className="space-y-4 md:space-y-5 text-base text-slate-700 leading-relaxed font-medium">
              <div className="flex gap-2">
                <span className="text-indigo-500">•</span>
                <span>Abandonar o conceito dicotômico que divide complicações apenas em "deu certo na cirurgia ou não deu". A cronologia avisa onde o óbito pode morar.</span>
              </div>
              <div className="flex gap-2">
                <span className="text-indigo-500">•</span>
                <span>O avanço e a precisão da anestesia e da terapia intensiva derrubaram exponencialmente o pneumotórax. Mas aumentou o paciente com fistula persistente crônica e granuloma (Dal'Astra).</span>
              </div>
              <div className="flex gap-2">
                <span className="text-indigo-500">•</span>
                <span><strong>Lógica preventiva:</strong> O evento catastrófico se desenha muito antes (ex: má adaptação do ângulo da cânula), demorando semanas para engilhar a parede e originar uma fístula arterio-inominada.</span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal show={step >= 3}>
          <div className="h-full">
            <GraphCard count={count} />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
