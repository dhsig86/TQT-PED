import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Target, CheckCircle2, Plus } from 'lucide-react';
import { Reveal, Citation, ModalOverlay } from '../components/ui';

export default function SlideIntraoperatorio({ step }: { step: number }) {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const cards = [
    {
      title: "Falso Trajeto (Via Errada)",
      icon: <Target className="w-12 h-12" />,
      text: "Dissecção lateral inadvertida da musculatura ao invés do incisivo central da traqueia cartilaginosa, causando perda rápida da via aérea e intubação do mediastino anterior. Resulta em hipóxia e óbito precoce no leito cirúrgico se não revertido imediatamente.",
      source: "Pacheco et al., 2021 · Semin Pediatr Surg · PMID 34172211",
      color: "bg-slate-800",
      iconColor: "text-slate-400"
    },
    {
      title: "Sangramento e Fuga Pleural",
      icon: <AlertCircle className="w-12 h-12" />,
      text: "A falta de hemostasia rigorosa desestabiliza o lactente nos primeiros dias pela formação maciça de coágulos na base do estoma. Há risco exacerbado de pneumotórax nas dissecções laterais profundas pois a pleura apical infantil atinge topografias mais altas no pescoço que no adulto.",
      source: "Dal'Astra et al., 2017 · Braz J Otorhinolaryngol · PMID 27256033",
      color: "bg-amber-600",
      iconColor: "text-amber-200"
    },
    {
      title: "Intubação Monobrônquica",
      icon: <CheckCircle2 className="w-12 h-12" />,
      text: "Erro milimétrico clássico: a extremidade do tubo de traqueostomia ultrapassa a traqueia diminuta e progride exclusivamente no brônquio fonte direito. Colapsa silenciosamente o pulmão contralateral, desenvolvendo atelectasias difusas no pós-operatório.",
      source: "Pacheco et al., 2021 · Semin Pediatr Surg · PMID 34172211",
      color: "bg-indigo-600",
      iconColor: "text-indigo-200"
    }
  ];

  return (
    <div className="h-full flex flex-col justify-start xl:justify-center gap-4 lg:gap-6 min-h-0 relative pb-8 overflow-y-auto pt-2 pl-2 pr-4 -mr-4 no-scrollbar">
      <Reveal show={step >= 1} className="shrink-0">
        <div className="text-xl lg:text-3xl font-bold text-slate-700 max-w-5xl leading-relaxed mx-auto text-center">
          O evento adverso grave não é fruto do acaso metabólico, mas o reflexo direto de{" "}
          <span className="text-rose-600">falhas técnicas ou distorções de dissecção local</span>.
        </div>
      </Reveal>

      <div className="grid lg:grid-cols-3 gap-6 flex-1 items-stretch mt-6 px-2">
        {cards.map((card, i) => (
          <Reveal show={step >= i + 2} key={i} className="h-full">
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-white border border-slate-200/60 p-8 rounded-[2rem] h-full shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow flex flex-col items-center justify-center text-center cursor-pointer group"
              onClick={() => setActiveCard(i)}
            >
              <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform ${card.color} ${card.iconColor}`}>
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">{card.title}</h3>
              <div className="mt-auto rounded-full bg-slate-100 p-2 text-slate-500 group-hover:bg-slate-800 group-hover:text-white transition-colors shadow-sm">
                <Plus className="w-5 h-5 flex-shrink-0" />
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>

      <ModalOverlay open={activeCard !== null} setOpen={() => setActiveCard(null)}>
        {activeCard !== null && (
          <div className="flex flex-col md:flex-row bg-white relative rounded-[2rem] overflow-hidden items-center md:items-stretch">
            <div className={`p-8 md:p-10 lg:p-12 flex flex-col items-center justify-center text-center text-white shrink-0 md:w-[40%] ${cards[activeCard].color}`}>
              <div className={`mb-6 p-4 rounded-full bg-white/10 shadow-sm ${cards[activeCard].iconColor}`}>
                {cards[activeCard].icon}
              </div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black uppercase tracking-wide leading-tight drop-shadow-sm break-words">
                {cards[activeCard].title}
              </h2>
            </div>
            <div className="p-8 md:p-10 lg:p-12 flex-1 flex flex-col justify-center bg-white border-t md:border-t-0 md:border-l border-slate-100 gap-6">
              <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium text-center md:text-left">
                {cards[activeCard].text}
              </p>
              <div className="border-l-4 border-indigo-400 bg-indigo-50/80 p-5 lg:p-6 rounded-r-2xl border border-y-indigo-100 border-r-indigo-100">
                <strong className="text-indigo-800 uppercase tracking-widest text-[10px] lg:text-xs mb-2 block">
                  Doutrina Preventiva — Pacheco et al., 2021
                </strong>
                <div className="font-bold text-indigo-900 text-lg lg:text-xl leading-relaxed">
                  A dissecção cirúrgica{" "}
                  <span className="underline decoration-indigo-300 decoration-2">exclusivamente em linha média sagital</span>{" "}
                  e a{" "}
                  <span className="underline decoration-indigo-300 decoration-2">ratificação imediata por capnografia</span>{" "}
                  do tubo recém-implantado são as dogmáticas supremas para extirpar a mortalidade por estes três eventos.
                </div>
              </div>
              <div className="text-xs text-slate-400 font-medium border-t border-slate-100 pt-4 tracking-wide">
                <span className="font-bold text-slate-500 uppercase tracking-widest text-[10px] block mb-1">Referência</span>
                {cards[activeCard].source}
              </div>
            </div>
          </div>
        )}
      </ModalOverlay>

      <Citation text="(Pacheco et al., 2021 · PMID 34172211; Dal'Astra et al., 2017 · PMID 27256033)" />
    </div>
  );
}
