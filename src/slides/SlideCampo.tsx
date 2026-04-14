import React from 'react';
import { TimelineStage } from '../components/ui';
import { timelineData } from '../data';
import { Reveal, Citation } from '../components/ui';
import { GraphCard } from '../components/GraphCard';

export default function SlideCampo({ step }: { step: number }) {
  const graphCount = Math.max(0, Math.min(5, step));

  return (
    <div className="h-full flex flex-col gap-4 min-h-0 relative pb-6">
      {/* Timeline: 5 cards em colunas */}
      <div className="grid grid-cols-5 gap-3 flex-[2] min-h-0">
        {timelineData.map((stage: any, index: number) => (
          <Reveal show={step >= index + 1} delay={index * 0.1} key={stage.year} className="h-full min-h-0">
            <TimelineStage item={stage} openDefault={false} />
          </Reveal>
        ))}
      </div>

      {/* GraphCard: ocupa a parte inferior */}
      <Reveal show={step >= 2} className="flex-1 min-h-0">
        <GraphCard count={graphCount} />
      </Reveal>

      <Citation text="(Douglas et al., 2015; Roberts et al., 2019)" />
    </div>
  );
}
