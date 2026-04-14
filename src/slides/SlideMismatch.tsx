import React, { useState } from 'react';
import { Reveal, Citation, ModalOverlay } from '../components/ui';
import { Focus } from 'lucide-react';

export default function SlideMismatch({ step }: { step: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-full flex flex-col min-h-0 relative pb-6">
       <Reveal show={step >= 1}>
         <div className="mb-6 space-y-4 max-w-5xl mx-auto text-center w-full pt-2">
           <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 leading-tight">
             Análise do Mismatch Anatômico e do Posicionamento do Tubo
           </h2>
           <p className="text-lg lg:text-xl text-slate-600 font-medium">
             Desproporcionalidade contínua e as perturbações silentes do paciente sindrômico
           </p>
         </div>
       </Reveal>

       <div className="flex flex-col md:flex-row gap-6 lg:gap-10 items-stretch flex-1 min-h-0 max-w-6xl mx-auto w-full">
         <Reveal show={step >= 1} className="w-full md:w-1/2 min-h-0 h-full">
           <div className="h-full w-full bg-slate-100 rounded-[2.5rem] border-2 border-dashed border-slate-300 flex flex-col items-center justify-center text-slate-400 shadow-inner group transition-all relative overflow-hidden">
             <div className="absolute inset-0 bg-slate-200/50 opacity-0 group-hover:opacity-100 transition-opacity" />
             <span className="text-xl lg:text-2xl font-bold uppercase tracking-widest mb-4 z-10 text-slate-500">Imagem Clínica</span>
             <span className="text-sm font-bold uppercase tracking-widest px-8 text-center text-slate-400 z-10">(Espaço reservado para inserção de Escopia/Tomografia)</span>
           </div>
         </Reveal>

         <Reveal show={step >= 2} className="w-full md:w-1/2 min-h-0 h-full">
           <div 
             className="h-full bg-slate-800 hover:bg-slate-900 border border-slate-700 p-8 lg:p-12 rounded-[2.5rem] shadow-xl text-white cursor-pointer transition-all flex flex-col items-center justify-center text-center group"
             onClick={() => setOpen(true)}
           >
             <Focus className="w-16 h-16 text-slate-400 mb-6 group-hover:text-amber-500 transition-colors" />
             <h3 className="text-2xl lg:text-3xl font-black uppercase tracking-wide leading-tight mb-4">Morfologia Cifoescoliótica</h3>
             <div className="text-sm uppercase tracking-widest font-bold bg-white/10 px-6 py-2 rounded-full">Expandir Análise Analítica</div>
           </div>
         </Reveal>
       </div>

       <ModalOverlay open={open} setOpen={setOpen}>
          <div className="p-10 lg:p-14 bg-slate-800 text-white flex flex-col items-center text-center">
             <Focus className="w-20 h-20 text-slate-400 mb-6" />
             <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-4">Mismatch Morfológico</h2>
             <div className="text-xl font-bold opacity-80 uppercase tracking-widest">Base Cifoescoliótica Típica</div>
          </div>
          <div className="p-10 lg:p-14 bg-white flex flex-col gap-8">
             <ul className="space-y-6 text-slate-700 font-medium text-lg lg:text-xl leading-relaxed flex-1 bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                <li className="flex gap-6 items-start"><span className="text-amber-500 font-black text-2xl">•</span> <span><strong className="text-slate-800">30,3%</strong> necessitaram visitar centros de pronto-atendimento por desalinhamentos primários da cânula à mucosa cervical.</span></li>
                <li className="flex gap-6 items-start"><span className="text-amber-500 font-black text-2xl">•</span> <span><strong className="text-slate-800">18,6%</strong> necessitaram reestruturação física do tubo em decorrência de distorção de parâmetros vitais ou perdas acidentais parciais.</span></li>
                <li className="flex gap-6 items-start"><span className="text-amber-500 font-black text-2xl">•</span> <span><strong className="text-slate-800">34,3%</strong> continham desvios estruturais intrínsecos documentados.</span></li>
                <li className="flex gap-6 items-start"><span className="text-amber-500 font-black text-2xl">•</span> <span><strong>Somente 9.8% configuraram cenário viável de decanulação terminal</strong> nesta subpopulação específica.</span></li>
             </ul>
             <div className="p-8 border-l-4 border-amber-500 bg-amber-50 rounded-r-[2rem] shadow-sm">
                <strong className="text-amber-800 uppercase tracking-widest text-sm mb-2 block">Conclusão Analítica:</strong>
                <p className="font-bold text-amber-900 text-xl lg:text-2xl leading-relaxed">O flanco do cateter reto angulando contra lúmens dismórficos desencadeia trajeto de abrasão originando crônicas estenoses fibro-granulosas.</p>
             </div>
          </div>
       </ModalOverlay>
       
       <Citation text="(Appachi et al., 2021)" />
    </div>
  );
}
