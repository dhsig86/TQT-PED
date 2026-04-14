import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { style, slidesConfig } from "./data";

// Import das páginas dos slides
import SlideTitle from "./slides/SlideTitle";
import SlideImpact from "./slides/SlideImpact";
import SlideCampo from "./slides/SlideCampo";
import SlidePaciente from "./slides/SlidePaciente";
import SlideComplicacoes from "./slides/SlideComplicacoes";
import SlideIntraoperatorio from "./slides/SlideIntraoperatorio";
import SlidePosPrecoce from "./slides/SlidePosPrecoce";
import SlidePosTardio from "./slides/SlidePosTardio";
import SlideQuatroChaves from "./slides/SlideQuatroChaves";
import SlideCatastroficas from "./slides/SlideCatastroficas";
import SlideQuemComplica from "./slides/SlideQuemComplica";
import SlideMismatch from "./slides/SlideMismatch";
import SlideBundle from "./slides/SlideBundle";
import SlideDecanulacao from "./slides/SlideDecanulacao";
import SlideTakehome from "./slides/SlideTakehome";
import SlideReferencias from "./slides/SlideReferencias";

function useKeyboardNavigation(index: number, setIndex: React.Dispatch<React.SetStateAction<number>>, step: number, setStep: React.Dispatch<React.SetStateAction<number>>, maxStep: number) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        if (step < maxStep) {
          setStep((s) => Math.min(maxStep, s + 1));
        } else {
          setIndex((i) => Math.min(slidesConfig.length - 1, i + 1));
        }
      }

      if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        if (step > 0) {
          setStep((s) => Math.max(0, s - 1));
        } else {
          setIndex((i) => Math.max(0, i - 1));
        }
      }

      if (e.key === "Home") {
        e.preventDefault();
        setIndex(0);
      }

      if (e.key === "End") {
        e.preventDefault();
        setIndex(slidesConfig.length - 1);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [index, maxStep, setIndex, setStep, step]);
}

function ProgressDots({ index }: { index: number }) {
  return (
    <div className="flex items-center justify-center gap-2 pt-2 flex-wrap">
      {slidesConfig.map((slide, i) => (
        <div
          key={slide.id}
          className={`h-2.5 rounded-full transition-all ${
            i === index ? "w-10 bg-slate-800" : "w-2.5 bg-slate-300"
          }`}
        />
      ))}
    </div>
  );
}

function NavButtons({ index, setIndex, step, setStep, maxStep }: { index: any, setIndex: any, step: any, setStep: any, maxStep: any }) {
  return (
    <div className="flex items-center gap-2 flex-shrink-0">
      <button
        data-interactive="true"
        onClick={(e) => {
          e.stopPropagation();
          if (step > 0) {
            setStep((s: number) => Math.max(0, s - 1));
          } else {
            setIndex((i: number) => Math.max(0, i - 1));
          }
        }}
        className="rounded-2xl bg-white border border-slate-200 p-3 md:p-4 shadow-md hover:bg-slate-50 transition-colors"
        aria-label="Voltar"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      <button
        data-interactive="true"
        onClick={(e) => {
          e.stopPropagation();
          if (step < maxStep) {
            setStep((s: number) => Math.min(maxStep, s + 1));
          } else {
            setIndex((i: number) => Math.min(slidesConfig.length - 1, i + 1));
          }
        }}
        className="rounded-2xl bg-white border border-slate-200 p-3 md:p-4 shadow-md hover:bg-slate-50 transition-colors"
        aria-label="Avançar"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>
    </div>
  );
}

function SubtitleTimeline() {
  const segments = [
    { label: "Antes", cls: "text-rose-500 font-semibold" },
    { label: "transição", cls: "text-amber-500 font-semibold" },
    { label: "agora", cls: "text-cyan-500 font-semibold" },
    { label: "impacto", cls: "text-violet-500 font-semibold" },
    { label: "resposta em segurança", cls: "text-emerald-500 font-semibold" },
  ];

  return (
    <div className={`${style.subtitle} flex flex-wrap items-center gap-2 md:gap-3 text-lg md:text-xl`}>
      {segments.map((segment, i) => (
        <React.Fragment key={segment.label}>
          <span className={`${segment.cls} transition-colors`}>
            {segment.label}
          </span>
          {i < segments.length - 1 ? (
            <span className="text-slate-400 font-bold px-1">→</span>
          ) : null}
        </React.Fragment>
      ))}
    </div>
  );
}

export default function App() {
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState(0);
  const slide = slidesConfig[index];

  useEffect(() => {
    setStep(0);
  }, [index]);

  useKeyboardNavigation(index, setIndex, step, setStep, slide.maxStep);

  return (
    <div
      className={`h-screen w-full overflow-hidden bg-gradient-to-br ${slide.bg} p-4 md:p-6 transition-colors duration-700 ease-in-out text-slate-800 font-sans`}
    >
      <div className="mx-auto h-full max-w-[1700px] aspect-[16/9] max-h-[calc(100vh-2rem)] flex flex-col gap-4">
        {slide.id !== "title" ? (
          <div className="flex items-start justify-between gap-4 shrink-0 px-2 lg:px-4 pt-1 lg:pt-2 pb-2">
            <div className="space-y-3 md:space-y-4 max-w-5xl">
              <motion.h1 
                key={`${slide.id}-title`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className={style.title}
              >
                {slide.title}
              </motion.h1>
              {slide.id === "campo" ? (
                <motion.div
                  key={`${slide.id}-subtitle-tl`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <SubtitleTimeline />
                </motion.div>
              ) : (
                <motion.p 
                  key={`${slide.id}-subtitle`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className={`${style.subtitle} text-slate-500 font-medium text-lg md:text-xl lg:text-2xl`}
                >
                  {slide.subtitle}
                </motion.p>
              )}
            </div>
            <NavButtons
              index={index}
              setIndex={setIndex}
              step={step}
              setStep={setStep}
              maxStep={slide.maxStep}
            />
          </div>
        ) : (
           <div className="flex justify-end pt-2 pr-2 shrink-0">
              <NavButtons
                index={index}
                setIndex={setIndex}
                step={step}
                setStep={setStep}
                maxStep={slide.maxStep}
              />
           </div>
        )}

        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 0.98, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={`${style.shell} p-5 md:p-8 flex flex-col shadow-2xl relative`}
        >
          {slide.id === "title" ? <SlideTitle step={step} /> : null}
          {slide.id === "importancia" ? <SlideImpact step={step} /> : null}
          {slide.id === "campo" ? <SlideCampo step={step} /> : null}
          {slide.id === "paciente" ? <SlidePaciente step={step} /> : null}
          {slide.id === "complicacoes" ? <SlideComplicacoes step={step} /> : null}
          {slide.id === "intraoperatorio" ? <SlideIntraoperatorio step={step} /> : null}
          {slide.id === "pos-precoce" ? <SlidePosPrecoce step={step} /> : null}
          {slide.id === "pos-tardio" ? <SlidePosTardio step={step} /> : null}
          {slide.id === "quatro-chaves" ? <SlideQuatroChaves step={step} /> : null}
          {slide.id === "catastroficas" ? <SlideCatastroficas step={step} /> : null}
          {slide.id === "quem-complica" ? <SlideQuemComplica step={step} /> : null}
          {slide.id === "mismatch" ? <SlideMismatch step={step} /> : null}
          {slide.id === "bundle" ? <SlideBundle step={step} /> : null}
          {slide.id === "decanulacao" ? <SlideDecanulacao step={step} /> : null}
          {slide.id === "takehome" ? <SlideTakehome step={step} /> : null}
          {slide.id === "referencias" ? <SlideReferencias step={step} /> : null}
          
          <div id="overlay-root" className="absolute inset-0 z-50 pointer-events-none flex items-center justify-center rounded-[2rem] overflow-hidden" />
        </motion.div>

        <ProgressDots index={index} />
      </div>
    </div>
  );
}
