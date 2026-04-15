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
             className="bg-white rounded-[2rem] shadow-2xl overflow-y-auto w-full max-w-4xl max-h-[90vh] flex flex-col relative my-auto"
             onClick={(e) => e.stopPropagation()}
          >
             <button aria-label="Fechar Contexto" onClick={() => setOpen(false)} className="absolute top-4 right-4 bg-slate-100/50 backdrop-blur p-2.5 rounded-full hover:bg-slate-200 transition-colors z-20 border border-slate-200/50 shadow-sm">
                <X className="w-5 h-5 text-slate-700"/>
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
    <motion.div 
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.2 }}
      className={`${style.card} overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow cursor-pointer group h-full flex flex-col`}
      onClick={() => setOpen(true)}
    >
      <div className="p-4 flex items-center justify-between border-b border-slate-100 flex-shrink-0 bg-white">
         <div className="flex items-center gap-3">
           <div className="text-slate-600 group-hover:text-amber-500 transition-colors">{React.cloneElement(icon as React.ReactElement, { className: 'w-5 h-5' })}</div>
           {badge ? <div className={style.chip}>{badge}</div> : null}
         </div>
         <div className="rounded-full bg-slate-100 p-1 text-slate-500 group-hover:bg-amber-100 group-hover:text-amber-600 transition-colors shadow-sm">
            <Plus className="w-4 h-4" />
         </div>
      </div>
      <div className="flex-1 p-4 lg:p-5 bg-slate-50/50 flex flex-col justify-center text-center items-center">
         <h3 className="font-bold text-slate-800 text-lg lg:text-xl uppercase tracking-wide">{title}</h3>
      </div>
    </motion.div>

    <ModalOverlay open={open} setOpen={setOpen}>
        <div className="p-8 md:p-10 lg:p-12 flex flex-col md:flex-row bg-white relative rounded-[2rem] gap-8 md:gap-10 items-center md:items-stretch">
           <div className="flex flex-col items-center justify-center md:w-[40%] shrink-0 text-center">
               <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-slate-50 border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 mb-6 mx-auto">
                   {React.cloneElement(icon, { className: 'w-10 h-10 lg:w-12 lg:h-12' })}
               </div>
               <h2 className="font-black text-slate-800 text-2xl lg:text-3xl uppercase tracking-widest mb-3 leading-tight drop-shadow-sm">{title}</h2>
               {badge && (
                  <div className="text-xs lg:text-sm uppercase font-bold tracking-[0.2em] px-4 py-2 rounded-full text-center bg-slate-100 text-slate-600 mb-4 inline-block">
                     {badge}
                  </div>
               )}
               <div className="text-base lg:text-lg font-medium text-slate-500 leading-relaxed mt-2 hidden md:block">
                  {text}
               </div>
           </div>

           <div className="flex flex-col flex-1 border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-0 md:pl-8 lg:pl-10 justify-center">
              <div className="text-base font-medium text-slate-500 leading-relaxed block md:hidden mb-6 text-center">
                  {text}
              </div>
              <h4 className="text-slate-400 font-bold uppercase tracking-widest text-xs lg:text-sm mb-4">Marcadores Fundamentais</h4>
              <div className="space-y-3">
                 {bullets.map((item: string, idx: number) => (
                    <div key={idx} className="flex gap-4 items-start bg-slate-50 p-4 lg:p-5 rounded-2xl border border-slate-100">
                       <span className="text-slate-400 font-black shrink-0 mt-0.5">•</span>
                       <span className="text-slate-700 font-medium text-base lg:text-sm xl:text-base leading-relaxed">{item}</span>
                    </div>
                 ))}
              </div>
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
    <motion.div 
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.2 }}
      className="h-full flex flex-col rounded-[2rem] border border-slate-200/50 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] bg-white overflow-hidden cursor-pointer group"
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
      <div className="p-3 lg:p-4 flex-1 flex flex-col overflow-hidden items-center justify-center text-center bg-white/50 backdrop-blur-md">
        <div className="text-[10px] lg:text-xs font-bold text-slate-500 uppercase tracking-widest bg-white border border-slate-200 shadow-sm px-3 py-1 rounded-full drop-shadow-sm line-clamp-1">{item.short}</div>
      </div>
    </motion.div>

    <ModalOverlay open={open} setOpen={setOpen}>
        <div className="flex flex-col md:flex-row bg-white relative rounded-[2rem] overflow-hidden">
            <div className={`bg-gradient-to-br ${item.color} p-8 md:p-10 lg:p-12 text-white flex flex-col justify-center shrink-0 md:w-[40%]`}>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-white/90 mb-4">{item.year}</div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight drop-shadow-sm mb-2">{item.label}</h2>
                <div className="text-lg md:text-xl font-bold opacity-90">{item.short}</div>
            </div>
            <div className="p-8 md:p-10 lg:p-12 bg-white text-slate-800 flex flex-col justify-center flex-1">
               <h3 className="text-xl lg:text-2xl font-bold text-slate-700 mb-4">{item.headline}</h3>
               <p className="text-base lg:text-lg text-slate-600 font-medium leading-relaxed mb-6">{item.detail}</p>
               {item.bullets && (
                 <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-100">
                    <div className="text-xs lg:text-sm font-bold text-slate-400 uppercase tracking-widest mb-3 border-b border-slate-200 pb-2">Marcadores Evolutivos</div>
                    {item.bullets.map((b:string, i:number) => (
                      <div key={i} className="flex gap-3 items-start text-sm lg:text-base font-medium text-slate-700 leading-snug">
                         <span className="text-slate-400 font-black shrink-0 mt-0.5">•</span>
                         <span>{b}</span>
                      </div>
                    ))}
                 </div>
               )}
            </div>
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
        whileHover={{ scale: 1.03, y: -4 }}
        transition={{ duration: 0.2, delay }}
        className="w-full h-full text-center rounded-[1.5rem] border border-slate-200/60 bg-white p-5 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all flex flex-col items-center justify-center min-h-0 group"
      >
        <div className={`w-10 h-10 rounded-full ${color} mb-3 flex-shrink-0 shadow-sm flex items-center justify-center text-white group-hover:brightness-110 transition-all`}>
           <Plus className="w-5 h-5" />
        </div>
        <div className="font-bold text-slate-800 text-sm lg:text-base uppercase tracking-wide px-2">{title}</div>
      </motion.button>
    </div>

    <ModalOverlay open={open} setOpen={setOpen}>
        <div className="flex flex-col md:flex-row bg-white relative rounded-[2rem] overflow-hidden items-center md:items-stretch">
            <div className={`p-8 md:p-10 lg:p-12 text-white flex flex-col justify-center items-center text-center shrink-0 md:w-[40%] ${color}`}>
                <div className="w-16 h-16 rounded-full bg-white/20 mb-6 shadow-sm flex items-center justify-center text-white">
                   <Plus className="w-8 h-8" />
                </div>
                <h2 className="font-black text-2xl lg:text-3xl uppercase tracking-wider mb-3 leading-tight drop-shadow-sm">{title}</h2>
                <div className="text-sm lg:text-base font-bold opacity-90 tracking-wide">{text}</div>
            </div>
            <div className="p-8 md:p-10 lg:p-12 bg-white flex flex-col items-center md:items-start justify-center flex-1">
               <h4 className="text-slate-400 font-bold uppercase tracking-widest text-xs lg:text-sm mb-4">Construto</h4>
               <p className="text-base lg:text-xl font-medium text-slate-600 leading-relaxed md:text-left text-center bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-100">
                  {note}
               </p>
            </div>
        </div>
    </ModalOverlay>
    </>
  );
}
