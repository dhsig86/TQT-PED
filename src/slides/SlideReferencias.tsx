import React from 'react';
import QRCode from 'react-qr-code';
import { Reveal } from '../components/ui';

const DOWNLOAD_URL = "https://tqt-ped.vercel.app/referencias-tqtped.zip";

export default function SlideReferencias({ step }: { step: number }) {
  const references = [
    "APPACHI, E. et al. An Analysis of Tracheostomy Complications in Pediatric Patients With Scoliosis. Laryngoscope Investigative Otolaryngology, v. 6, n. 1, p. 110–116, 2021.",
    "CRAMER, J. D. et al. Mortality associated with tracheostomy complications in the United States: 2007–2016. The Laryngoscope, v. 128, n. 12, p. 2733–2739, 2018.",
    "DAL'ASTRA, A. P. L. et al. Tracheostomy in childhood: review of the literature on complications and mortality over the last three decades. Brazilian Journal of Otorhinolaryngology, v. 83, n. 2, p. 207–214, 2017. PMID 27256033.",
    "DOUGLAS, C. M. et al. Paediatric tracheostomy — An 11 year experience at a Scottish paediatric tertiary referral centre. International Journal of Pediatric Otorhinolaryngology, v. 79, n. 10, p. 1673–1676, 2015. PMID 26255606.",
    "KLIGERMAN, M. P. et al. Tracheostomy Complications in the Emergency Department: A National Analysis of 38,271 Cases. Otolaryngology–Head and Neck Surgery, v. 163, n. 2, p. 308–315, 2020.",
    "LUBIANCA NETO, J. F. et al. Complications of tracheostomy in children: a systematic review. Brazilian Journal of Otorhinolaryngology, v. 88, n. 5, p. 745–757, 2022. PMID 33472759.",
    "MORENO, M. et al. Complicaciones de la traqueostomía en niños: una revisión sistemática. Acta Otorrinolaringológica Española, 2024. [revisão sistemática]",
    "PACHECO, A. et al. Tracheostomy in children: Recommendations for a safer technique. International Journal of Pediatric Otorhinolaryngology, v. 143, p. 110660, 2021. PMID 34172211.",
    "ROBERTS, J. et al. Pediatric tracheostomy: large single-center experience. The Laryngoscope, v. 129, n. 10, p. E375–E380, 2019. PMID 31251410.",
    "SCHWEIGER, C. et al. Tracheostomy in children: a ten-year experience from a tertiary center in southern Brazil. Brazilian Journal of Otorhinolaryngology, v. 83, n. 2, p. 215–220, 2017.",
    "SHAH, R. K. et al. Assessing National Trends and Perceived Safety of Off-Label Ciprofloxacin-Dexamethasone Use in Tracheostomy Care. JAMA Otolaryngology–Head & Neck Surgery, 2024.",
  ];

  return (
    <div className="h-full flex flex-col lg:flex-row gap-6 lg:gap-10 py-4 min-h-0 relative">
      {/* Lista de referências ABNT */}
      <Reveal show={step >= 1} className="flex-1 min-h-0 flex flex-col">
        <div className="bg-slate-50 border border-slate-200 rounded-[2rem] p-5 lg:p-7 shadow-sm flex-1 flex flex-col min-h-0">
          <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4 border-b border-slate-200 pb-3 shrink-0">
            Referências Bibliográficas — Padrão ABNT (11 artigos)
          </h3>
          <div className="flex-1 space-y-3 overflow-y-auto pr-1">
            {references.map((ref, index) => (
              <div key={index} className="text-slate-700 font-medium text-xs md:text-sm leading-relaxed pl-4 relative">
                <span className="absolute left-0 top-0 text-slate-400 font-bold">•</span>
                {ref}
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* QR Code de Download */}
      <Reveal show={step >= 1} delay={0.2} className="flex-shrink-0 flex flex-col items-center justify-center">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-5 lg:p-7 shadow-md flex flex-col items-center justify-center gap-5 text-center w-full lg:w-60">
          <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">
            Download dos Artigos
          </div>
          
          <div className="p-3 bg-white rounded-2xl border border-slate-100 shadow-inner">
            <QRCode
              value={DOWNLOAD_URL}
              size={148}
              bgColor="#ffffff"
              fgColor="#1e293b"
              level="M"
            />
          </div>

          <div className="space-y-1.5">
            <div className="text-xs font-semibold text-slate-600 leading-relaxed">
              Escaneie para baixar todos os artigos em formato PDF.
            </div>
            <div className="text-[10px] text-slate-400 font-mono break-all px-2">
              tqt-ped.vercel.app
            </div>
          </div>

          <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-xl px-3 py-1.5">
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            <span className="text-xs font-semibold text-emerald-700">Acesso Gratuito</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
