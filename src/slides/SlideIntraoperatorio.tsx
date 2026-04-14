import React from 'react';
import { AlertCircle, Target, CheckCircle2 } from 'lucide-react';
import { Reveal, Citation } from '../components/ui';

export default function SlideIntraoperatorio({ step }: { step: number }) {
  return (
    <div className="h-full flex flex-col justify-center gap-4 lg:gap-8 relative pb-6">
      <Reveal show={step >= 1}>
        <div className="text-xl lg:text-2xl font-bold text-slate-700 max-w-4xl leading-relaxed">
          O evento adverso grave na pediatria quase invariavelmente não é fruto do acaso metabólico, mas o reflexo de falhas técnicas ou distorções de dissecção local.
        </div>
      </Reveal>

      <div className="grid lg:grid-cols-3 gap-6 flex-1 items-stretch mt-4">
        <Reveal show={step >= 2}>
          <div className="bg-white border border-slate-200 p-8 rounded-3xl h-full shadow-md flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 mb-6">
              <Target className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">1. Falso Trajeto (Falsa Via)</h3>
            <p className="text-slate-600 font-medium leading-relaxed">Dissecção lateral inadvertida da musculatura ao invés do incisivo central da traqueia cartilaginosa, causando perda da via aérea e intubação do mediastino anterior.</p>
          </div>
        </Reveal>
        
        <Reveal show={step >= 3}>
          <div className="bg-amber-50 border border-amber-200 p-8 rounded-3xl h-full shadow-md flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 mb-6">
              <AlertCircle className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">2. Sangramento / Fuga Pleural</h3>
            <p className="text-slate-600 font-medium leading-relaxed">Falta de hemostasia rigorosa desestabiliza o lactente nos primeiros dias. Risco exacerbado nas altas dissecções do pleura apical infantil.</p>
          </div>
        </Reveal>

        <Reveal show={step >= 4}>
          <div className="bg-indigo-50 border border-indigo-200 p-8 rounded-3xl h-full shadow-md flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 mb-6">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">3. Intubação Monobrônquica</h3>
            <p className="text-slate-600 font-medium leading-relaxed">O tubo ultrapassa facilmente a traqueia diminuta e progride ao brônquio fonte, colapsando silenciosamente o pulmão contralateral em silêncio de base.</p>
          </div>
        </Reveal>
      </div>

      <Reveal show={step >= 5}>
        <div className="border border-indigo-200 bg-white p-6 rounded-3xl shadow-sm text-center">
          <div className="font-bold text-indigo-900 text-xl mb-2">Excesso Pediátrico de Atenção (Pacheco, 2021)</div>
          <div className="text-indigo-800 font-medium text-lg max-w-4xl mx-auto">
            A exigência irrevogável de exposição meticulosa unicamente em linha média sagital e a ratificação via capnografia no tubo recém-implantado previnem de imediato as morbidades descritas acima.
          </div>
        </div>
      </Reveal>

      <Citation text="(Pacheco et al., 2021)" />
    </div>
  );
}
