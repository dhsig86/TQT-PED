import React from 'react';
import { Activity, Baby, Stethoscope } from 'lucide-react';
import { ExpandablePanel, MetricCard, Reveal } from '../components/ui';
import { style } from '../data';

export default function SlidePaciente({ step }: { step: number }) {
  return (
    <div className="h-full flex flex-col gap-4 md:gap-6 min-h-0">
      <Reveal show={step >= 1}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <MetricCard
            color="bg-cyan-600"
            big="< 1 ano"
            title="Mais jovem"
            text="Na maior parte das séries modernas (Roberts, Douglas, Lubianca), a traqueostomia é feita no lactente"
            delay={0.1}
          />
          <MetricCard
            color="bg-emerald-600"
            big="Ventilado"
            title="Mais dependente"
            text="A ventilação mecânica prolongada figura como indicação de base ou comorbidade associada dominante."
            delay={0.2}
          />
          <MetricCard
            color="bg-violet-600"
            big="Comórbido"
            title="Alta complexidade"
            text="Mais diagnósticos: displasia broncopulmonar, sindrômicos craniofaciais e prematuridade."
            delay={0.3}
          />
          <MetricCard
            color="bg-amber-600"
            big="Eletiva"
            title="Resgate planejado"
            text="Tiram da sala de emergência e colocam como procedimento planejado na UTI neonatal/pediátrica."
            delay={0.4}
          />
        </div>
      </Reveal>

      <div className="grid lg:grid-cols-[1fr_1fr_0.95fr] gap-3 md:gap-4 items-start min-h-0 flex-1">
        <Reveal show={step >= 2}>
          <div className="h-full">
            <ExpandablePanel
              icon={<Activity className="w-5 h-5 md:w-6 md:h-6" />}
              title="A Era de Antes"
              badge="Perfil Clássico"
              text="Domínio de quadros obstrutivos agudos em crianças maiores (Difteria, Epiglotite). Mortalidade focada no próprio ato cirúrgico."
              bullets={[
                "A traqueostomia é feita para salvar da asfixia imediata.",
                "Baixo tempo de intubação prévia.",
                "Risco morre após a resolução (retirada precoce).",
              ]}
            />
          </div>
        </Reveal>

        <Reveal show={step >= 3}>
          <div className="h-full">
            <ExpandablePanel
              icon={<Baby className="w-5 h-5 md:w-6 md:h-6" />}
              title="A Era de Agora"
              badge="Sindrômica"
              text="O procedimento viabiliza o desmame de ventilação, sobrevida neural ou tratamento estadiado de anomalias (Estenoses/Laringomalácias)."
              bullets={[
                "Mais bebês recebem altas para o domicílio com cânula.",
                "Desproporção do estoma versus a anatomia pequena.",
                "Altas taxas associadas a distúrbios de deglutição.",
              ]}
            />
          </div>
        </Reveal>

        <Reveal show={step >= 4}>
          <div className={`${style.card} p-5 md:p-6 h-full bg-slate-50/50`}>
            <div className="flex items-center gap-2 mb-4 text-slate-800 font-semibold text-lg">
              <Stethoscope className="w-5 h-5" /> A Mudança Clínica
            </div>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                O paciente contemporâneo reconfigura o conceito de estoma traqueal: ele já não é um by-pass temporário para uma infecção,
                e sim um pilar de cronificação ventilatória.
              </p>
              <p className="font-medium text-amber-700">
                Logo, se a criança é menor e fica anos canulada, por essência a janela de risco para eventos catastróficos é imensamente maior do que antes.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
