import React, { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import { style } from "../data";

export function formatPercent(value: number) {
  return `${value}%`;
}

export function Citation({ text }: { text: string }) {
  return (
    <div className="absolute bottom-2 lg:bottom-4 right-4 lg:right-6 text-xs text-slate-400/80 font-medium tracking-wide">
      {text}
    </div>
  );
}

export function Reveal({ show, children, delay = 0, className = "" }: { show: boolean, children: React.ReactNode, delay?: number, className?: string }) {
  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className={className}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 18 }}
          transition={{ duration: 0.35, delay }}
        >
          {children}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

// NOVO: Componente unificado de Modal Overlay para Focus das Informações
export function ModalOverlay({ open, setOpen, children }: { open: boolean, setOpen: any, children: React.ReactNode }) {
  const overlayRoot = document.getElementById("overlay-root");
  if (!overlayRoot) return null;

  return createPortal(
    <AnimatePresence>
      {open ? (
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           transition={{ duration: 0.2 }}
           className="absolute inset-0 z-50 flex items-center justify-center p-6 md:p-12 bg-slate-900/40 backdrop-blur-[2px] pointer-events-auto shadow-inner"
           onClick={(e) => {
             e.stopPropagation();
             setOpen(false);
           }}
        >
          <motion.div
             initial={{ scale: 0.95, opacity: 0, y: 30 }}
             animate={{ scale: 1, opacity: 1, y: 0 }}
             exit={{ scale: 0.95, opacity: 0, y: 30 }}
             transition={{ duration: 0.3, ease: "easeOut" }}
             className="bg-white rounded-[2.5rem] shadow-2xl overflow-y-auto w-full max-w-4xl max-h-full flex flex-col relative"
             onClick={(e) => e.stopPropagation()}
          >
             <button aria-label="Fechar Contexto" onClick={() => setOpen(false)} className="absolute top-6 right-6 bg-slate-100 p-3 rounded-full hover:bg-slate-200 transition-colors z-20 border border-slate-200 shadow-sm">
                <X className="w-6 h-6 text-slate-700"/>
             </button>
             {children}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    overlayRoot
  );
}

// Refatorado para o padrão MODAL
export function ExpandablePanel({ icon, title, text, bullets, badge }: any) {
  const [open, setOpen] = useState(false);

  return (
    <>
    <div 
      className={`${style.card} overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group h-full flex flex-col`}
      onClick={() => setOpen(true)}
    >
      <div className="p-5 flex items-center justify-between border-b border-slate-100 flex-shrink-0">
         <div className="flex items-center gap-3">
           <div className="text-slate-600 group-hover:text-amber-500 transition-colors">{icon}</div>
           {badge ? <div className={style.chip}>{badge}</div> : null}
         </div>
         <div className="rounded-full bg-slate-100 p-1.5 text-slate-500 group-hover:bg-amber-100 group-hover:text-amber-600 transition-colors">
            <Plus className="w-5 h-5" />
         </div>
      </div>
      <div className="flex-1 p-5 lg:p-6 bg-slate-50 flex flex-col justify-center text-center items-center">
         <h3 className="font-bold text-slate-800 text-xl lg:text-2xl uppercase tracking-wide mb-3">{title}</h3>
         <div className="text-sm lg:text-base font-semibold text-slate-500 leading-relaxed max-w-sm mx-auto line-clamp-3">Clique exibir construto clínico</div>
      </div>
    </div>

    <ModalOverlay open={open} setOpen={setOpen}>
       <div className="p-8 lg:p-12 border-b border-slate-100 bg-slate-50/50 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 mb-6">{icon}</div>
          <h2 className="font-black text-slate-800 text-3xl lg:text-4xl uppercase tracking-wider mb-4">{title}</h2>
          <div className="text-lg lg:text-xl font-medium text-slate-600 max-w-2xl">{text}</div>
       </div>
       <div className="p-8 lg:p-12 bg-white">
          <h4 className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-6">Marcadores Fundamentais</h4>
          <div className="space-y-4">
             {bullets.map((item: string) => (
                <div key={item} className="flex gap-4 items-start bg-slate-50 p-4 rounded-2xl border border-slate-100">
                   <span className="text-slate-400 font-black shrink-0">•</span>
                   <span className="text-slate-700 font-medium text-base lg:text-lg leading-relaxed">{item}</span>
                </div>
             ))}
          </div>
       </div>
    </ModalOverlay>
    </>
  );
}

// Refatorado para o padrão MODAL
export function TimelineStage({ item }: any) {
  const [open, setOpen] = useState(false);

  return (
    <>
    <div 
      className="h-full flex flex-col rounded-[2rem] border border-white/60 shadow-sm hover:shadow-md bg-white overflow-hidden cursor-pointer group transition-all"
      onClick={() => setOpen(true)}
    >
      {/* Header colorido */}
      <div className={`bg-gradient-to-r ${item.color} p-4 lg:p-5 flex items-center justify-between flex-shrink-0 group-hover:brightness-110 transition-all`}>
        <div>
          <div className="text-[10px] lg:text-xs uppercase tracking-[0.15em] text-white/80 font-bold mb-1">{item.year}</div>
          <div className="font-extrabold text-white text-lg lg:text-xl leading-tight">{item.label}</div>
        </div>
        <div className="rounded-full bg-white/20 p-2 text-white">
          <Plus className="w-4 h-4" />
        </div>
      </div>

      {/* Corpo compacto */}
      <div className="p-4 lg:p-5 flex-1 flex flex-col overflow-hidden items-center justify-center text-center bg-slate-50">
        <div className="text-[11px] lg:text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 bg-white border border-slate-200 shadow-sm px-3 py-1 rounded-full">{item.short}</div>
        <div className="text-sm font-semibold text-slate-600 leading-relaxed">{item.headline || "Acesse contexto da fase"}</div>
      </div>
    </div>

    <ModalOverlay open={open} setOpen={setOpen}>
        <div className={`bg-gradient-to-br ${item.color} p-8 lg:p-12 text-white`}>
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-white/80 mb-3">{item.year}</div>
            <h2 className="text-4xl lg:text-5xl font-black">{item.label} — {item.short}</h2>
        </div>
        <div className="p-8 lg:p-12 bg-white text-slate-800 flex flex-col gap-8">
           <h3 className="text-2xl font-bold text-slate-700">{item.headline}</h3>
           <p className="text-lg text-slate-600 font-medium leading-relaxed">{item.note}</p>
           {item.bullets && (
             <div className="space-y-4 bg-slate-50 p-6 rounded-3xl border border-slate-100">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 border-b border-slate-200 pb-2">Marcadores Evolutivos</div>
                {item.bullets.map((b:string, i:number) => (
                  <div key={i} className="flex gap-4 items-start text-base lg:text-lg font-medium text-slate-700">
                     <span className="text-slate-400 font-black shrink-0">•</span>
                     <span>{b}</span>
                  </div>
                ))}
             </div>
           )}
        </div>
    </ModalOverlay>
    </>
  );
}

export function MetricCard({ color, big, title, text, delay = 0 }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay }}
      className="rounded-[2rem] overflow-hidden bg-white border border-slate-200 shadow-sm flex flex-col h-full"
    >
      <div className={`${color} text-white px-5 py-4 text-2xl lg:text-3xl font-black tracking-tight flex-shrink-0 text-center`}>
        {big}
      </div>
      <div className="p-5 lg:p-6 flex-1 bg-slate-50 flex flex-col justify-center">
        <div className="font-extrabold text-slate-800 mb-2 text-lg lg:text-xl text-center uppercase tracking-wide">{title}</div>
        <div className="text-sm lg:text-base text-slate-600 font-medium leading-relaxed text-center">{text}</div>
      </div>
    </motion.div>
  );
}

// Refatorado para MODAL
export function NodeItem({ color, title, text, note, delay = 0 }: any) {
  const [open, setOpen] = useState(false);

  return (
    <>
    <div className="relative h-full flex flex-col">
      <motion.button
        onClick={() => setOpen(true)}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, delay }}
        className="w-full h-full text-center rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col items-center justify-center min-h-0"
      >
        <div className={`w-14 h-14 rounded-full ${color} mb-4 flex-shrink-0 shadow-sm flex items-center justify-center text-white`}>
           <Plus className="w-6 h-6" />
        </div>
        <div className="font-bold text-slate-800 text-base lg:text-lg uppercase tracking-wide px-2">{title}</div>
        <div className="text-sm text-slate-500 font-semibold mt-2">{text}</div>
      </motion.button>
    </div>

    <ModalOverlay open={open} setOpen={setOpen}>
       <div className={`p-8 lg:p-12 text-center text-white ${color}`}>
          <h2 className="font-black text-3xl lg:text-4xl uppercase tracking-wider">{title}</h2>
          <div className="text-lg font-bold opacity-90 mt-2">{text}</div>
       </div>
       <div className="p-8 lg:p-12 text-center bg-white flex flex-col items-center justify-center">
         <p className="text-lg lg:text-xl font-medium text-slate-600 leading-relaxed max-w-2xl px-6 py-8 border border-slate-200 rounded-[2rem] bg-slate-50 shadow-inner">
            {note}
         </p>
       </div>
    </ModalOverlay>
    </>
  );
}
