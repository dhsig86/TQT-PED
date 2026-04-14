import React from 'react';
import { Reveal, Citation } from '../components/ui';

export default function SlideMismatch({ step }: { step: number }) {
  return (
    <div className="h-full flex flex-col min-h-0 relative pb-6">
       <Reveal show={step >= 1}>
         <div className="mb-6 space-y-4 max-w-5xl mx-auto text-center w-full px-4 pt-2">
           <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 leading-tight">
             Análise do Mismatch Anatômico e do Posicionamento do Tubo
           </h2>
           <p className="text-lg lg:text-xl text-slate-600 font-medium">
             Desproporcionalidade contínua e as perturbações silentes do paciente sindrômico
           </p>
         </div>
       </Reveal>

       <div className="grid md:grid-cols-2 gap-8 flex-1 items-stretch w-full min-h-0 px-4">
         <Reveal show={step >= 1}>
           <div className="h-full w-full bg-slate-100 rounded-[2rem] border-2 border-dashed border-slate-300 flex flex-col items-center justify-center text-slate-500 shadow-inner">
             <span className="text-xl font-bold uppercase tracking-widest mb-2">Placeholder: Imagem Clínica</span>
             <span className="text-base font-medium px-6 text-center">(Múltiplas curvaturas traqueais anômalas e escopia radiográfica de Escoliose Cervical)</span>
           </div>
         </Reveal>

         <Reveal show={step >= 2}>
           <div className="h-full flex flex-col bg-white p-6 lg:p-10 rounded-[2rem] shadow-md border border-slate-200">
             <div className="text-2xl font-bold text-slate-800 border-b border-slate-100 pb-5 mb-5">
               Análise Morfológica em Base Cifoescoliótica Típica
             </div>
             <ul className="space-y-5 text-slate-700 font-medium text-lg leading-relaxed flex-1">
               <li className="flex gap-4 items-start"><span className="text-slate-400 font-bold">•</span> <span>30,3% necessitaram visitar centros de pronto-atendimento por desalinhamentos primários da cânula à mucosa cervical.</span></li>
               <li className="flex gap-4 items-start"><span className="text-slate-400 font-bold">•</span> <span>18,6% necessitaram reestruturação física do tubo em decorrência de distorção de parâmetros vitais ou perdas acidentais parciais.</span></li>
               <li className="flex gap-4 items-start"><span className="text-slate-400 font-bold">•</span> <span>34,3% continham desvios estruturais intrínsecos documentados.</span></li>
               <li className="flex gap-4 items-start"><span className="text-slate-400 font-bold">•</span> <span><strong>Somente 9.8% configuraram cenário viável de decanulação terminal</strong> nesta subpopulação específica.</span></li>
             </ul>
             <div className="pt-6 mt-6 border-t border-slate-100 font-bold text-slate-800 text-xl leading-relaxed bg-slate-50 p-6 rounded-2xl">
               Conclusão Analítica: O flanco do cateter reto angulando contra lúmens dismórficos desencadeia trajeto de abrasão originando crônicas estenoses fibro-granulosas.
             </div>
           </div>
         </Reveal>
       </div>
       
       <Citation text="(Appachi et al., 2021)" />
    </div>
  );
}
