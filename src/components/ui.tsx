import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Info } from "lucide-react";
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

export function ExpandablePanel({ icon, title, text, bullets, badge }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${style.card} overflow-hidden shadow-md`}>
      <button
        data-interactive="true"
        onClick={(e) => {
          e.stopPropagation();
          setOpen((v: boolean) => !v);
        }}
        className="w-full text-left p-4 md:p-5 flex items-start gap-4 hover:bg-slate-50 transition"
      >
        <div className="mt-1 text-slate-700">{icon}</div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <div className="font-bold text-slate-800 text-lg uppercase tracking-wide">{title}</div>
            {badge ? <div className={style.chip}>{badge}</div> : null}
          </div>
          <div className="text-base text-slate-700 font-medium leading-relaxed">{text}</div>
        </div>
        <div className="mt-1 text-slate-700 flex-shrink-0">
          {open ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </div>
      </button>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-slate-200"
          >
            <div className="p-4 md:p-5 pt-3 md:pt-4 text-base text-slate-800 space-y-3 font-medium">
              {bullets.map((item: string) => (
                <div key={item} className="flex gap-2 items-start"><span className="text-slate-400 font-bold">•</span><span>{item}</span></div>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function TimelineStage({ item, openDefault = false }: any) {
  const [open, setOpen] = useState(openDefault);
  const panelClass = [
    "relative rounded-[2rem] border p-5 shadow-md flex flex-col transition-all h-full",
    item.boxClass || "bg-white",
  ].join(" ");

  return (
    <div className="relative h-full flex flex-col">
      <motion.div layout className={panelClass}>
        <button
          data-interactive="true"
          onClick={(e) => {
            e.stopPropagation();
            setOpen((v: boolean) => !v);
          }}
          className="absolute top-4 right-4 rounded-full bg-white/90 p-2 border border-white/80 z-10 hover:bg-white shadow-sm transition-colors text-slate-700"
          aria-label="Abrir legenda"
        >
          {open ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </button>

        <div className="pr-12">
          <div className="text-sm uppercase tracking-[0.15em] text-slate-700 font-bold mb-2">
            {item.year}
          </div>
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <div className="font-extrabold text-slate-900 border-b border-slate-300 pb-0.5">{item.label}</div>
            <div className={style.chip}>{item.short}</div>
          </div>

          <div className="text-lg font-bold text-slate-800 leading-relaxed">
            {item.headline}
          </div>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden mt-4 pt-4 border-t border-slate-300/40"
            >
              <div className="text-sm uppercase tracking-wider text-slate-600 mb-2 font-bold">
                Contexto
              </div>
              <div className="text-base text-slate-800 leading-relaxed font-medium">
                {item.note}
              </div>
              {item.details && item.details.length > 0 ? (
                <div className="mt-3 space-y-2 text-base text-slate-800 font-medium">
                  {item.details.map((detail: string) => (
                    <div key={detail} className="flex gap-2 items-start"><span className="text-slate-400 font-bold">•</span><span>{detail}</span></div>
                  ))}
                </div>
              ) : null}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export function MetricCard({ color, big, title, text, delay = 0 }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay }}
      className="rounded-[2rem] overflow-hidden bg-white border border-slate-200 shadow-md flex flex-col h-full"
    >
      <div className={`${color} text-white px-5 py-4 text-3xl font-black tracking-tight flex-shrink-0`}>
        {big}
      </div>
      <div className="p-5 flex-1 bg-slate-50/50">
        <div className="font-bold text-slate-800 mb-3 text-xl">{title}</div>
        <div className="text-base text-slate-700 font-medium leading-relaxed">{text}</div>
      </div>
    </motion.div>
  );
}

export function NodeItem({ color, title, text, note, delay = 0 }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative h-full flex flex-col">
      <motion.button
        data-interactive="true"
        onClick={(e) => {
          e.stopPropagation();
          setOpen((v: boolean) => !v);
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, delay }}
        className="w-full text-left rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 shadow-sm hover:shadow-md hover:bg-white transition-all flex flex-col items-start min-h-0"
      >
        <div className="flex justify-between items-start w-full">
           <div className={`w-12 h-12 rounded-full ${color} mb-4 flex-shrink-0 shadow-sm`} />
           <div className="text-slate-400 p-1">
             {open ? <Minus className="w-5 h-5"/> : <Plus className="w-5 h-5"/>}
           </div>
        </div>
        <div className="font-bold text-slate-800 text-lg uppercase tracking-wide">{title}</div>
        <div className="text-base text-slate-600 font-semibold mt-1">{text}</div>
        
        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden mt-4 pt-4 border-t border-slate-200 w-full"
            >
              <div className="text-base text-slate-700 leading-relaxed font-medium">
                {note}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
