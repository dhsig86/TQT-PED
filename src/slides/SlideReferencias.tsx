import React from 'react';
import { Reveal } from '../components/ui';

export default function SlideReferencias({ step }: { step: number }) {
  const references = [
    "CRAMER, J. D. et al. Mortality associated with tracheostomy complications in the United States: 2007–2016. The Laryngoscope, v. 128, n. 12, p. 2733–2739, 2018.",
    "APPACHI, E. et al. An Analysis of Tracheostomy Complications in Pediatric Patients With Scoliosis. Laryngoscope Investigative Otolaryngology, v. 6, n. 1, p. 110–116, 2021.",
    "DOUGLAS, C. M. et al. Paediatric tracheostomy—An 11 year experience at a Scottish paediatric tertiary referral centre. International Journal of Pediatric Otorhinolaryngology, v. 79, n. 10, p. 1673-1676, 2015.",
    "KLIGERMAN, M. P. et al. Tracheostomy Complications in the Emergency Department: A National Analysis of 38,271 Cases. Otolaryngology–Head and Neck Surgery, v. 163, n. 2, p. 308–315, 2020.",
    "LUBIANCA NETO, J. F. et al. Complications of tracheostomy in children: a systematic review. Brazilian Journal of Otorhinolaryngology, v. 86, n. 5, p. 627-635, 2020.",
    "PACHECO, A. et al. Tracheostomy in children: Recommendations for a safer technique. International Journal of Pediatric Otorhinolaryngology, v. 143, p. 110660, 2021.",
    "ROBERTS, J. et al. Pediatric tracheostomy: large single-center experience. The Laryngoscope, v. 129, n. 10, p. 2311–2316, 2019."
  ];

  return (
    <div className="h-full flex flex-col pt-4 pb-8 h-full max-w-6xl mx-auto w-full">
      <Reveal show={step >= 1}>
        <div className="bg-slate-50 border border-slate-200 rounded-[2rem] p-8 shadow-sm h-full flex flex-col">
          <div className="flex-1 space-y-4">
            {references.map((ref, index) => (
              <div key={index} className="text-slate-700 font-medium text-sm md:text-base leading-relaxed pl-6 relative">
                 <span className="absolute left-0 top-0 text-slate-400 font-bold">•</span>
                 {ref}
              </div>
            ))}
          </div>
          <div className="mt-8 text-center text-slate-500 font-semibold text-sm border-t border-slate-200 pt-6">
            Padrão ABNT — Revisão Baseada em Evidências para Formação Cirúrgica Pediátrica
          </div>
        </div>
      </Reveal>
    </div>
  );
}
