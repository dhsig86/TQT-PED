import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Target, CheckCircle2 } from 'lucide-react';
import { Reveal, ExpandablePanel } from '../components/ui';

export default function SlideIntraoperatorio({ step }: { step: number }) {
  return (
    <div className="h-full flex flex-col gap-6">
      <Reveal show={step >= 1}>
        <div className="text-xl md:text-2xl font-medium text-slate-600 max-w-4xl leading-relaxed">
          O evento adverso grave frequentemente não é uma fatalidade inerente, mas o ápice de um erro técnico na confecção ou na subestimação do tubo.
        </div>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6 flex-1 mt-4">
        <Reveal show={step >= 2}>
          <div className="bg-slate-50 border border-slate-200 p-6 rounded-3xl h-full shadow-sm flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 mb-6">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">1. Falsa Via</h3>
            <p className="text-slate-600">Dissecção lateral inadvertida e intubação traumática do mediastino ao invés da linha média traqueal.</p>
          </div>
        </Reveal>
        
        <Reveal show={step >= 3}>
          <div className="bg-amber-50 border border-amber-200 p-6 rounded-3xl h-full shadow-sm flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-amber-200 flex items-center justify-center text-amber-700 mb-6">
              <AlertCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">2. Sangramento / Pleura</h3>
            <p className="text-slate-600">Pneumotórax pelo alto domo pleural infantil e falta de hemostasia cautelosa. Sangramentos precoces desestabilizam o lactente.</p>
          </div>
        </Reveal>

        <Reveal show={step >= 4}>
          <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-3xl h-full shadow-sm flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-700 mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">3. Intubação Monobrônquica</h3>
            <p className="text-slate-600">Tubo além da bifurcação da traqueia pela curta extensão cervical, colapsando o pulmão contralateral silenciosamente.</p>
          </div>
        </Reveal>
      </div>

      <Reveal show={step >= 5}>
        <div className="border border-indigo-200 bg-white p-6 rounded-3xl shadow-md">
          <div className="font-bold text-indigo-900 text-lg mb-2">Pilar de Resolução (Pacheco, 2021)</div>
          <div className="text-indigo-800">
            A exigência de "3 pontos de segurança" operatórios: Exposição exata em linha média, suturas de reparação traqueal visíveis (ou maturação na pele) e confirmação radiológica / capnográfica imediata.
          </div>
        </div>
      </Reveal>
    </div>
  );
}
