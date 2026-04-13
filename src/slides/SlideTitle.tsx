import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope } from 'lucide-react';

export default function SlideTitle({ step }: { step: number }) {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center gap-6 md:gap-10">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shadow-inner mb-4"
      >
        <Stethoscope className="w-12 h-12 md:w-16 md:h-16" />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-4"
      >
        <h1 className="text-4xl md:text-5xl lg:text-[5rem] font-black text-slate-800 tracking-tight">
          Traqueostomia Pediátrica
        </h1>
        <p className="text-xl md:text-2xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed">
          Histórico, epidemiologia contemporânea e impacto longitudinal baseados em evidências
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-8 md:mt-12 bg-white/60 backdrop-blur border border-slate-200 px-8 py-6 rounded-3xl shadow-sm"
      >
        <div className="font-semibold text-slate-800 text-lg md:text-xl">
          Dra. Larissa Salomão
        </div>
        <div className="text-slate-500 font-medium text-sm md:text-base mt-1 tracking-wide">
          Otorrinolaringologista - HFB / UFRJ / IPPMG
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 right-8 flex gap-3"
      >
        <div className="w-20 h-16 rounded-xl bg-slate-200/50 border border-slate-300/50 flex flex-col items-center justify-center text-[10px] text-slate-400 font-medium uppercase tracking-widest">
          Foto
        </div>
        <div className="w-20 h-16 rounded-xl bg-slate-200/50 border border-slate-300/50 flex flex-col items-center justify-center text-[10px] text-slate-400 font-medium uppercase tracking-widest">
          Foto
        </div>
      </motion.div>
    </div>
  );
}
