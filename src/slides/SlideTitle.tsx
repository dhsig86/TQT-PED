import React from 'react';
import { motion } from 'framer-motion';

export default function SlideTitle({ step }: { step: number }) {
  return (
    <div className="h-full flex flex-col justify-center items-center text-center pb-8 min-h-0">

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="w-24 h-24 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
          <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        
        <h1 className="text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600 tracking-tight leading-tight mb-6">
          Traqueostomia Pediátrica
        </h1>
        
        <div className="text-xl lg:text-2xl text-slate-500 font-medium tracking-wide mb-12">
          Análise de Risco, Complicações e Cuidado Longitudinal
        </div>

        <div className="flex flex-col items-center gap-4 text-slate-600 font-semibold text-lg bg-slate-50 rounded-3xl p-6 border border-slate-200 shadow-sm max-w-lg mx-auto">
          <span>Dra. Larissa Salomão</span>
          <span className="text-slate-400 text-sm font-bold uppercase tracking-widest">
            Otorrinolaringologista – HFB / UFRJ / IPPMG
          </span>
        </div>
      </motion.div>
    </div>
  );
}
