import React from 'react';
import { CheckCircle, Shield } from 'lucide-react';
import { Reveal, Citation } from '../components/ui';
import { motion, AnimatePresence } from 'framer-motion';

export default function SlideBundle({ step }: { step: number }) {
  // Itens revisados: português correto, sem redundâncias, sem anglicismos desnecessários
  const bundleItems = [
    "Maturação cirúrgica do estoma ou fixação com suturas-guia (stay sutures) bilaterais na traqueia para contenção segura.",
    "Avaliação criteriosa do diâmetro, angulação e tipo funcional da cânula a ser implantada.",
    "Confirmação radiológica de posicionamento e estabilização de capnografia ao fim-expiratório logo após o procedimento.",
    "Manutenção estrita em Terapia Intensiva entre D0 e D7 com vigilância clínica contínua e padronizada.",
    "Implementação imediata do protocolo de umidificação ativa em circuito fechado ou nariz artificial, evitando a formação precoce de rolhas.",
    "Primeira troca de cânula realizada exclusivamente em ambiente controlado — intra ou extra-cirúrgico — com suporte anestésico disponível.",
    "Treinamento sistemático e documentado do cuidador domiciliar para o resgate com tubo sobressalente.",
  ];

  const showHeader = step === 1;
  const showItems = step >= 2;

  return (
    <div className="h-full flex flex-col justify-start xl:justify-center relative pb-6 min-h-0 overflow-y-auto no-scrollbar">

      {/* Header: aparece no step 1 e some a partir do step 2 */}
      <AnimatePresence>
        {showHeader && (
          <motion.div
            key="bundle-header"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{ duration: 0.35 }}
            className="text-center mb-6 mx-auto w-full max-w-5xl shrink-0"
          >
            <div className="mx-auto w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-3 shadow-sm">
              <Shield className="w-8 h-8" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 leading-tight">
              Protocolo Bundle de Segurança Preventivo
            </h2>
            <p className="text-sm lg:text-base text-slate-600 mt-2 font-medium">
              Mitigação institucional baseada na profilaxia estruturada do evento crítico e da morbidade local
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Checklist: aparece a partir do step 2, um item por step */}
      <AnimatePresence>
        {showItems && (
          <motion.div
            key="bundle-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-5xl mx-auto w-full flex flex-col gap-1.5 lg:gap-2 shrink-0"
          >
            {bundleItems.map((item, index) => (
              <Reveal show={step >= index + 2} key={index}>
                <div className="bg-white border border-emerald-200 px-3 py-2.5 lg:px-4 lg:py-3 rounded-2xl flex items-start gap-3 hover:bg-emerald-50 transition-colors shadow-sm">
                  <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="font-semibold text-slate-700 text-xs lg:text-sm xl:text-base leading-snug">{item}</span>
                </div>
              </Reveal>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <Citation text="(Pacheco et al., 2021 · PMID 34172211)" />
    </div>
  );
}
