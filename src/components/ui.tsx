import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Info } from "lucide-react";
import { style } from "../data";

export function formatPercent(value: number) {
  return `${value}%`;
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
          transition={{ duration: 0.28, delay }}
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
    <div className={`${style.card} overflow-hidden`}>
      <button
        data-interactive="true"
        onClick={(e) => {
          e.stopPropagation();
          setOpen((v) => !v);
        }}
        className="w-full text-left p-4 md:p-5 flex items-start gap-4 hover:bg-slate-50 transition"
      >
        <div className="mt-1 text-slate-700">{icon}</div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <div className="font-semibold text-slate-800">{title}</div>
            {badge ? <div className={style.chip}>{badge}</div> : null}
          </div>
          <div className="text-sm text-slate-600 leading-relaxed">{text}</div>
        </div>
        <div className="mt-1 text-slate-500 flex-shrink-0">
          {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-slate-100"
          >
            <div className="p-4 md:p-5 pt-3 md:pt-4 text-sm text-slate-700 space-y-2">
              {bullets.map((item: string) => (
                <div key={item}>• {item}</div>
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
    "relative rounded-[2rem] border p-4 md:p-5 h-[236px] shadow-sm overflow-hidden transition-all",
    item.boxClass || "bg-white",
  ].join(" ");

  return (
    <div className="relative">
      <motion.div layout className={panelClass}>
        <button
          data-interactive="true"
          onClick={(e) => {
            e.stopPropagation();
            setOpen((v) => !v);
          }}
          className="absolute top-4 right-4 rounded-full bg-white/80 p-2 border border-white/70 z-10 hover:bg-white transition-colors"
          aria-label="Abrir legenda"
        >
          <Info className="w-4 h-4 text-slate-700" />
        </button>

        <div className="pr-10">
          <div className="text-xs uppercase tracking-[0.18em] text-slate-500 font-semibold mb-2">
            {item.year}
          </div>
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <div className="font-semibold text-slate-900">{item.label}</div>
            <div className={style.chip}>{item.short}</div>
          </div>

          <div className="text-lg font-semibold text-slate-800 leading-snug">
            {item.headline}
          </div>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              className="absolute left-4 right-4 top-[76px] z-20 rounded-2xl bg-white/95 border border-white/80 p-3.5 max-h-[140px] overflow-y-auto shadow-lg backdrop-blur-md"
            >
              <div className="text-xs uppercase tracking-wide text-slate-500 mb-1 font-semibold">
                Legenda
              </div>
              <div className="text-xs md:text-sm text-slate-700 leading-relaxed">
                {item.note}
              </div>
              {item.details && item.details.length > 0 ? (
                <div className="mt-2.5 space-y-1.5 text-xs md:text-sm text-slate-700">
                  {item.details.map((detail: string) => (
                    <div key={detail}>• {detail}</div>
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
      className="rounded-[2rem] overflow-hidden bg-white border border-slate-200 shadow-sm min-h-[170px]"
    >
      <div className={`${color} text-white px-5 py-4 text-2xl md:text-3xl font-bold tracking-tight`}>
        {big}
      </div>
      <div className="p-5">
        <div className="font-semibold text-slate-800 mb-2">{title}</div>
        <div className="text-sm text-slate-600 leading-relaxed">{text}</div>
      </div>
    </motion.div>
  );
}

export function NodeItem({ color, title, text, note, delay = 0 }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <motion.button
        data-interactive="true"
        onClick={(e) => {
          e.stopPropagation();
          setOpen((v) => !v);
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, delay }}
        className="w-full text-left rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 h-[170px] hover:shadow-md hover:bg-white transition-all group"
      >
        <div className={`w-10 h-10 rounded-full ${color} mb-3 group-hover:scale-110 transition-transform`} />
        <div className="font-semibold text-slate-800">{title}</div>
        <div className="text-sm text-slate-500 mt-0.5">{text}</div>
      </motion.button>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="absolute z-20 mt-2 left-0 right-0 rounded-2xl bg-white p-4 border border-slate-200 shadow-xl max-h-[170px] overflow-y-auto"
          >
            <div className="text-xs uppercase tracking-wide text-slate-500 mb-1 font-semibold">
              Legenda
            </div>
            <div className="text-sm text-slate-700 leading-relaxed font-medium">
              {note}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
