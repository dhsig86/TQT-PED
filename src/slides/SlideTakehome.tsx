import React from 'react';
import { Sparkles, MessageCircle, AlertTriangle } from 'lucide-react';
import { Reveal } from '../components/ui';
import { style } from '../data';

export default function SlideTakehome({ step }: { step: number }) {
  const msgs = [
    { title: "Transforme a visão descritiva em linha do tempo", text: "As piores complicações da traqueostomia pediátrica não ocorrem todas de uma vez; elas se alocam na técnica intraop, na criticidade D0-D7 da UTI, e na morbidade crônica domiciliar.", icon: <Sparkles className="w-6 h-6" /> },
    { title: "Eventos fatais são raros, mas não 'acidentes'", text: "A mortalidade central dita pela literatura baseia-se em obstrução e decanulação acidental atadas à falha aguda de resgate por incapacidade do cuidador/despreparo domiciliar.", icon: <AlertTriangle className="w-6 h-6" /> },
    { title: "A Segurança é um Bundle", text: "Técnica apurada, ajuste anatômico (mismatch), protocolo estruturado da primeira troca e treinamento maciço representam as únicas camadas que barram o óbito.", icon: <MessageCircle className="w-6 h-6" /> }
  ];

  return (
    <div className="h-full flex flex-col gap-6 items-center justify-center">
      <div className="w-full max-w-5xl space-y-6">
        {msgs.map((m, i) => (
          <Reveal show={step >= i + 1} key={i}>
            <div className={`${style.card} p-8 flex items-start gap-6 bg-slate-800 text-slate-50 border-none shadow-2xl`}>
              <div className="bg-indigo-500 p-4 rounded-2xl shrink-0">
                {m.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">{m.title}</h3>
                <p className="text-lg text-slate-300 leading-relaxed font-light">{m.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
