import React from 'react';
import { motion } from 'framer-motion';
import { TimelineStage } from '../components/ui';
import { timelineData } from '../data';
import { Reveal, Citation } from '../components/ui';
import { GraphCard } from '../components/GraphCard';

// ─── FLUXO DE STEPS (maxStep: 7) ───────────────────────────────────────────
// step 1  → card 0 (vermelho "Antes") aparece. Gráfico ainda não.
// step 2  → GRÁFICO surge com 1 barra ativa (vermelha). Nenhum card novo.
// step 3  → card 1 (laranja "Transição") + barra 2 preenche
// step 4  → card 2 (cyan "Agora") + barra 3 preenche
// step 5  → card 3 (violeta "Impacto") + barra 4 preenche
// step 6  → card 4 (verde "Segurança") + barra 5 preenche  ← penúltimo estado
// step 7  → cards ENCOLHEM, gráfico EXPANDE (cards permanecem visíveis)
// ───────────────────────────────────────────────────────────────────────────

export default function SlideCampo({ step }: { step: number }) {
  const showGraph = step >= 2;
  const expanded  = step >= 7;

  // Gráfico sincronizado com os cards:
  //   step 2 → count 1 (barra vermelha), step 3 → count 2 ... step 6 → count 5
  const graphCount = Math.max(0, Math.min(5, step - 1));

  // Mapeamento de qual step revela cada card
  // card 0 → step 1 | cards 1-4 → steps 3-6 (step 2 é exclusivo do gráfico)
  const cardRevealStep = (index: number) => index === 0 ? 1 : index + 2;

  return (
    <div className="h-full flex flex-col gap-3 min-h-0 relative pb-6">

      {/* ════ CARDS DE ERA ════ */}
      <motion.div
        className="grid grid-cols-5 gap-3 shrink-0 overflow-hidden"
        animate={{
          height: expanded ? '6.5rem' : '11rem', // encolhe no step final, mas permanece
          opacity: expanded ? 0.7 : 1,
        }}
        transition={{ duration: 0.55, ease: 'easeInOut' }}
      >
        {timelineData.map((stage: any, index: number) => (
          <Reveal
            show={step >= cardRevealStep(index)}
            delay={index === 0 ? 0 : 0.06}
            key={stage.year}
            className="h-full"
          >
            <TimelineStage item={stage} openDefault={false} />
          </Reveal>
        ))}
      </motion.div>

      {/* ════ GRÁFICO ════ */}
      <Reveal show={showGraph} className="flex-1 min-h-0 pb-1">
        <motion.div
          className="h-full"
          animate={{ scale: expanded ? 1.02 : 1 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <GraphCard count={graphCount} expanded={expanded} />
        </motion.div>
      </Reveal>

      <Citation text="(Douglas et al., 2015 · PMID 26255606; Roberts et al., 2019 · PMID 31251410)" />
    </div>
  );
}
