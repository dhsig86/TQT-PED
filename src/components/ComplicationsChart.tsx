import React from 'react';
import { motion } from 'framer-motion';
import { complicationsCuratedData } from '../data';

export function ComplicationsChart({ step, expanded }: { step: number; expanded?: boolean }) {
  const maxRate = 50; // Reference max visual scale

  return (
    <div className="flex flex-col h-full bg-white rounded-[1.75rem] border border-slate-200 shadow-sm p-6 lg:p-8">
      <div className="text-lg font-bold text-slate-800 mb-1 leading-tight text-center md:text-left">
        Distribuição de Frequência e Tipologia
      </div>
      <div className="text-sm font-medium text-slate-500 mb-6 text-center md:text-left">
        Linha evolutiva ponderada pelas referências (Moreno, Kligerman et al.)
      </div>

      <div className="flex flex-col gap-5 flex-1 justify-center relative">
        {complicationsCuratedData.map((item) => {
          const active = step >= item.stepIndex;

          return (
            <div key={item.phase} className="flex flex-col gap-1.5 relative min-h-[4rem]">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: active ? 1 : 0.3, x: 0 }}
                transition={{ duration: 0.4 }}
                className={`flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 ${!active ? 'grayscale' : ''}`}
              >
                {/* Etiqueta */}
                <div className="w-[100px] text-xs sm:text-sm font-bold text-slate-700 truncate tracking-tight">
                  {item.phase}
                </div>

                {/* Barra e Porcentagem */}
                <div className="flex-1 flex items-center gap-3">
                  <div className="flex-1 h-5 bg-slate-100 rounded-full overflow-hidden flex items-center relative shadow-inner">
                    <motion.div
                      className={`absolute top-0 left-0 bottom-0 bg-gradient-to-r ${item.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ width: active ? `${(item.rate / maxRate) * 100}%` : '0%' }}
                      transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    />
                  </div>
                  <div className="w-16 md:w-20 text-right text-xs sm:text-sm font-bold text-slate-600 tabular-nums">
                    {active ? item.rateLabel : '-'}
                  </div>
                </div>
              </motion.div>

              {/* Tipos Relacionados */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: active ? 1 : 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="flex flex-wrap gap-1.5 sm:pl-[116px] pl-0"
              >
                {item.types.map((type) => (
                  <span
                    key={type}
                    className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded-md font-semibold bg-slate-50 text-slate-600 border border-slate-200"
                  >
                    {type}
                  </span>
                ))}
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
