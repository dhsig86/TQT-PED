import React, { useState } from 'react';
import { AlertCircle, Target, CheckCircle2 } from 'lucide-react';
import { Reveal, Citation, ModalOverlay } from '../components/ui';

export default function SlideIntraoperatorio({ step }: { step: number }) {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const cards = [
    { title: "Falso Trajeto (Via Errada)", icon: <Target className="w-12 h-12" />, text: "Dissecção lateral inadvertida da musculatura ao invés do incisivo central da traqueia cartilaginosa, causando perda rápida da via aérea e intubação do mediastino anterior. Resulta em hipóxia e óbito precoce no leito cirúrgico se não revertido imediatamente e reposicionado.", color: "bg-slate-800", iconColor: "text-slate-400" },
    { title: "Sangramento Severo / Fuga Pleural", icon: <AlertCircle className="w-12 h-12" />, text: "A falta de hemostasia rigorosa desestabiliza o lactente nos primeiros dias pela formação maciça de coágulos na base do estoma. Além disso, há risco exacerbado de pneumotórax nas dissecções laterais muito profundas pelo fato da pleura apical infantil atingir topografias mais altas no pescoço do que no adulto.", color: "bg-amber-600", iconColor: "text-amber-200" },
    { title: "Intubação Monobrônquica", icon: <CheckCircle2 className="w-12 h-12" />, text: "Erro milimétrico clássico: o limite da extremidade do tubo de traqueostomia ultrapassa facilmente a traqueia diminuta e progride entrando exclusivamente no brônquio fonte direito. Como consequência indireta, colapsa silenciosamente o pulmão contralateral em silêncio de base na ausculta, desenvolvendo atelectasias difusas no pós operatório.", color: "bg-indigo-600", iconColor: "text-indigo-200" }
  ];

  return (
    <div className="h-full flex flex-col justify-center gap-4 lg:gap-8 relative pb-6">
      <Reveal show={step >= 1}>
        <div className="text-xl lg:text-3xl font-bold text-slate-700 max-w-5xl leading-relaxed mx-auto text-center">
          O evento adverso grave não é fruto do acaso metabólico, mas o reflexo direto de <span className="text-rose-600">falhas técnicas ou distorções de dissecção local</span>.
        </div>
      </Reveal>

      <div className="grid lg:grid-cols-3 gap-6 flex-1 items-stretch mt-8 px-4">
        {cards.map((card, i) => (
           <Reveal show={step >= i + 2} key={i} className="h-full">
             <div 
               className="bg-white border border-slate-200 p-8 rounded-[2rem] h-full shadow-sm hover:shadow-lg transition-all flex flex-col items-center justify-center text-center cursor-pointer group"
               onClick={() => setActiveCard(i)}
             >
               <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform ${card.color} ${card.iconColor}`}>
                 {card.icon}
               </div>
               <h3 className="text-2xl font-bold text-slate-800 mb-6">{card.title}</h3>
               <div className="mt-auto bg-slate-100 text-slate-500 font-bold uppercase tracking-widest text-xs px-5 py-2 rounded-full group-hover:bg-slate-800 group-hover:text-white transition-colors">
                  Aprofundar Erro Médio
               </div>
             </div>
           </Reveal>
        ))}
      </div>

      <ModalOverlay open={activeCard !== null} setOpen={() => setActiveCard(null)}>
         {activeCard !== null && (
           <div className="flex flex-col h-full bg-white relative">
              <div className={`p-12 border-b flex flex-col items-center justify-center text-center text-white ${cards[activeCard].color}`}>
                 <div className={`mb-6 ${cards[activeCard].iconColor}`}>{cards[activeCard].icon}</div>
                 <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-wider">{cards[activeCard].title}</h2>
              </div>
              <div className="p-10 lg:p-14 flex-1 flex flex-col items-center justify-center bg-slate-50">
                 <p className="text-2xl text-slate-700 leading-relaxed font-medium bg-white p-10 rounded-[2rem] shadow-sm border border-slate-200 text-center max-w-4xl">
                   {cards[activeCard].text}
                 </p>
                 <div className="mt-8 border-l-4 border-indigo-400 bg-indigo-50 p-6 rounded-r-2xl max-w-3xl">
                    <strong className="text-indigo-800 uppercase tracking-widest text-sm mb-2 block">Doutrina Preventiva (Pacheco, 2021)</strong>
                    <div className="font-bold text-indigo-900 text-xl leading-relaxed">
                      A exigência de dissecção cirúrgica **unicamente em linha média sagital** e a **ratificação imediata via capnografia** do tubo recém-implantado são as dogmáticas supremas para extirpar a mortalidade por estes três eventos.
                    </div>
                 </div>
              </div>
           </div>
         )}
      </ModalOverlay>

      <Citation text="(Pacheco et al., 2021)" />
    </div>
  );
}
