import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Target, CheckCircle2, Plus } from 'lucide-react';
import { Reveal, Citation, ModalOverlay } from '../components/ui';

export default function SlideIntraoperatorio({ step }: { step: number }) {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const cards = [
    { title: "Falso Trajeto (Via Errada)", icon: <Target className="w-12 h-12" />, text: "DissecÃ§Ã£o lateral inadvertida da musculatura ao invÃ©s do incisivo central da traqueia cartilaginosa, causando perda rÃ¡pida da via aÃ©rea e intubaÃ§Ã£o do mediastino anterior. Resulta em hipÃ³xia e Ã³bito precoce no leito cirÃºrgico se nÃ£o revertido imediatamente e reposicionado.", color: "bg-slate-800", iconColor: "text-slate-400" },
    { title: "Sangramento Severo / Fuga Pleural", icon: <AlertCircle className="w-12 h-12" />, text: "A falta de hemostasia rigorosa desestabiliza o lactente nos primeiros dias pela formaÃ§Ã£o maciÃ§a de coÃ¡gulos na base do estoma. AlÃ©m disso, hÃ¡ risco exacerbado de pneumotÃ³rax nas dissecÃ§Ãµes laterais muito profundas pelo fato da pleura apical infantil atingir topografias mais altas no pescoÃ§o do que no adulto.", color: "bg-amber-600", iconColor: "text-amber-200" },
    { title: "IntubaÃ§Ã£o MonobrÃ´nquica", icon: <CheckCircle2 className="w-12 h-12" />, text: "Erro milimÃ©trico clÃ¡ssico: o limite da extremidade do tubo de traqueostomia ultrapassa facilmente a traqueia diminuta e progride entrando exclusivamente no brÃ´nquio fonte direito. Como consequÃªncia indireta, colapsa silenciosamente o pulmÃ£o contralateral em silÃªncio de base na ausculta, desenvolvendo atelectasias difusas no pÃ³s operatÃ³rio.", color: "bg-indigo-600", iconColor: "text-indigo-200" }
  ];

  return (
    <div className="h-full flex flex-col justify-start xl:justify-center gap-4 lg:gap-6 min-h-0 relative pb-8 overflow-y-auto pt-2 pl-2 pr-4 -mr-4 no-scrollbar">
      <Reveal show={step >= 1} className="shrink-0">
        <div className="text-xl lg:text-3xl font-bold text-slate-700 max-w-5xl leading-relaxed mx-auto text-center">
          O evento adverso grave nÃ£o Ã© fruto do acaso metabÃ³lico, mas o reflexo direto de <span className="text-rose-600">falhas tÃ©cnicas ou distorÃ§Ãµes de dissecÃ§Ã£o local</span>.
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
               <div className="mt-auto rounded-full bg-slate-100 p-2 text-slate-500 group-hover:bg-slate-800 group-hover:text-white transition-colors shadow-sm"><Plus className="w-5 h-5 flex-shrink-0" /></div>
             </motion.div>
           </Reveal>
        ))}
      </div>

      <ModalOverlay open={activeCard !== null} setOpen={() => setActiveCard(null)}>
         {activeCard !== null && (
           <div className="flex flex-col md:flex-row bg-white relative rounded-[2rem] overflow-hidden items-center md:items-stretch">
              <div className={`p-8 md:p-10 lg:p-12 flex flex-col items-center justify-center text-center text-white shrink-0 md:w-[40%] ${cards[activeCard].color}`}>
                 <div className={`mb-6 p-4 rounded-full bg-white/10 shadow-sm ${cards[activeCard].iconColor}`}>{cards[activeCard].icon}</div>
                 <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-wider leading-tight drop-shadow-sm">{cards[activeCard].title}</h2>
              </div>
              <div className="p-8 md:p-10 lg:p-12 flex-1 flex flex-col justify-center bg-white border-t md:border-t-0 md:border-l border-slate-100">
                 <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium text-center md:text-left mb-8">
                   {cards[activeCard].text}
                 </p>
                 <div className="border-l-4 border-indigo-400 bg-indigo-50/80 p-5 lg:p-6 rounded-r-2xl border border-y-indigo-100 border-r-indigo-100">
                    <strong className="text-indigo-800 uppercase tracking-widest text-[10px] lg:text-xs mb-2 block">Doutrina Preventiva (Pacheco, 2021)</strong>
                    <div className="font-bold text-indigo-900 text-lg lg:text-xl leading-relaxed">
                      A exigÃªncia de dissecÃ§Ã£o cirÃºrgica <span className="underline decoration-indigo-300 decoration-2">unicamente em linha mÃ©dia sagital</span> e a <span className="underline decoration-indigo-300 decoration-2">ratificaÃ§Ã£o imediata via capnografia</span> do tubo recÃ©m-implantado sÃ£o as dogmÃ¡ticas supremas para extirpar a mortalidade por estes trÃªs eventos.
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

