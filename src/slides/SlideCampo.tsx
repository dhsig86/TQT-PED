import React from 'react';
import { TimelineStage } from '../components/ui';
import { timelineData } from '../data';
import { Reveal, Citation } from '../components/ui';

export default function SlideCampo({ step }: { step: number }) {
  return (
    <div className="h-full flex flex-col justify-center min-h-0 relative pb-6">
      <div className="flex-1 w-full flex items-center min-h-0">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-4 h-full w-full">
          {timelineData.map((stage: any, index: number) => {
             const isOpenDefault = index === 2 || index === 3;
             return (
               <Reveal show={step >= index + 1} delay={0.1} key={stage.year} className="h-full">
                 <div className="h-full pt-1 lg:pt-4 overflow-hidden">
                   <TimelineStage item={stage} openDefault={isOpenDefault} />
                 </div>
               </Reveal>
             )
          })}
        </div>
      </div>
      <Citation text="(Douglas et al., 2015)" />
    </div>
  );
}
