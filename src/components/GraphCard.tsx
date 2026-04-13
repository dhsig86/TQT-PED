import React from 'react';
import { Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import { style, timelineData } from '../data';
import { formatPercent } from './ui';

export function GraphCard({ count }: { count: number }) {
  const max = 100;

  return (
    <div className={`${style.card} p-5 h-full flex flex-col`}>
      <div className="flex items-center gap-2 mb-4 shrink-0">
        <Activity className="w-5 h-5 text-slate-700" />
        <div className="font-semibold text-slate-800">
          Curva da complexidade assistencial
        </div>
      </div>

      <div className="space-y-3 flex-1 flex flex-col justify-center">
        {timelineData.map((item, i) => {
          const active = i < count;
          const value = active ? item.value : 0;
          return (
            <div key={item.label} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs font-medium text-slate-500">
                <span>{item.year}</span>
                <span>{formatPercent(value)}</span>
              </div>
              <div className="h-3.5 rounded-full bg-slate-100 overflow-hidden shadow-inner">
                <motion.div
                  className={`h-full bg-gradient-to-r ${item.color}`}
                  initial={{ width: 0 }}
                  animate={{ width: active ? `${(item.value / max) * 100}%` : "0%" }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 text-[11px] text-slate-500 leading-relaxed shrink-0">
        O gráfico cresce junto com a narrativa: sai da dominância infecciosa e
        chega ao paciente complexo, com maior demanda de organização do risco longitudinal.
      </div>

      <div className="mt-3 rounded-xl bg-slate-50 border border-slate-100 px-3 py-2 shrink-0">
        <div className="text-[10px] leading-relaxed text-slate-500">
          <strong>Referências:</strong> Dal’Astra, 2017; Douglas, 2015; Roberts, 2019; Pacheco, 2021.
        </div>
      </div>
    </div>
  );
}
