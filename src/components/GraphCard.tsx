import React from 'react';
import { Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import { style, timelineData } from '../data';

// Formata % com casas corretas
const formatPercent = (v: number) => v === 0 ? '0%' : `${v}%`;

export function GraphCard({ count, expanded = false }: { count: number; expanded?: boolean }) {
  const max = 100;

  return (
    <div className={`${style.card} p-5 h-full flex flex-col`}>
      <div className="flex items-center gap-2 mb-1 shrink-0">
        <Activity className="w-5 h-5 text-slate-700" />
        <div className="font-semibold text-slate-800">
          Curva da complexidade assistencial
        </div>
      </div>
      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-4 shrink-0">
        Índice relativo de complexidade clínica por era — não representa prevalência absoluta
      </div>

      <div className={`flex flex-col justify-center gap-${expanded ? '4' : '3'} flex-1`}>
        {timelineData.map((item, i) => {
          const active = i < count;
          const value = active ? item.value : 0;
          return (
            <div key={item.label}>
              {/* Label row: era name left, % right — alinhamento fixo com min-w */}
              <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-1.5">
                <span className="flex-1 truncate">{item.year}</span>
                <span className="text-right min-w-[36px] tabular-nums font-bold text-slate-600">
                  {formatPercent(value)}
                </span>
              </div>
              {/* Bar */}
              <div className="h-4 rounded-full bg-slate-100 overflow-hidden shadow-inner">
                <motion.div
                  className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                  initial={{ width: 0 }}
                  animate={{ width: active ? `${(item.value / max) * 100}%` : '0%' }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.04 }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
