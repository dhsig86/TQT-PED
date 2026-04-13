import { LucideIcon } from "lucide-react";

export const style = {
  shell:
    "rounded-[2rem] bg-white/55 backdrop-blur-sm border border-white/70 shadow-xl flex-1 min-h-0 overflow-hidden",
  card: "rounded-[1.75rem] border border-slate-200 bg-white shadow-sm",
  chip:
    "rounded-full border border-white/70 bg-white/80 px-3 py-1 text-xs font-semibold tracking-wide text-slate-600",
  title:
    "text-3xl md:text-4xl lg:text-[4.5rem] font-black text-slate-900 tracking-tight leading-[1]",
  subtitle: "text-sm md:text-base lg:text-lg font-medium",
};

export const palette = {
  before: "bg-rose-100 border-rose-300",
  transition: "bg-amber-100 border-amber-300",
  now: "bg-cyan-100 border-cyan-300",
};

export const slidesConfig = [
  {
    id: "title",
    bg: "from-slate-50 to-blue-100",
    title: "Traqueostomia Pediátrica",
    subtitle: "Dra Larissa Salomao | Otorrinolaringologista - HFB / UFRJ / IPPMG",
    maxStep: 1,
  },
  {
    id: "importancia",
    bg: "from-slate-50 to-rose-50",
    title: "Por que esta aula importa",
    subtitle: "A intervenção salva vidas, mas carrega morbidade estrutural e mortalidade real.",
    maxStep: 3,
  },
  {
    id: "campo",
    bg: "from-slate-50 to-blue-50",
    title: "A mudança do campo",
    subtitle: "Antes → transição → agora → impacto → resposta em segurança",
    maxStep: 5,
  },
  {
    id: "paciente",
    bg: "from-cyan-50 to-emerald-50",
    title: "O paciente contemporâneo",
    subtitle: "Mais jovem, mais ventilado, mais complexo, menos parecido com o passado",
    maxStep: 5,
  },
  {
    id: "complicacoes",
    bg: "from-amber-50 to-rose-50",
    title: "Do evento isolado ao risco longitudinal",
    subtitle: "A complicação percorre a linha do cuidado — e por isso pode ser organizada",
    maxStep: 6,
  },
  {
    id: "intraoperatorio",
    bg: "from-slate-50 to-indigo-50",
    title: "Onde começa o problema: O Intraoperatório",
    subtitle: "Erros técnicos e subestimação posicional definem a base para complicações tardias",
    maxStep: 3,
  },
  {
    id: "pos-precoce",
    bg: "from-rose-50 to-amber-50",
    title: "Pós-operatório precoce (D0-D7)",
    subtitle: "Os primeiros dias concentram a zona crítica de desestabilização",
    maxStep: 4,
  },
  {
    id: "pos-tardio",
    bg: "from-purple-50 to-pink-50",
    title: "Complicações tardias",
    subtitle: "A morbidade que se acumula e molda a qualidade de vida e internações",
    maxStep: 4,
  },
  {
    id: "quatro-chaves",
    bg: "from-emerald-50 to-cyan-50",
    title: "As 4 Complicações Chaves",
    subtitle: "O que a plateia precisa levar para casa hoje",
    maxStep: 4,
  },
  {
    id: "catastroficas",
    bg: "from-rose-50 to-red-100",
    title: "Eventos Catastróficos e Mortalidade",
    subtitle: "A morte é incomum (até 6%), mas os mecanismos são conhecidos e altamente evitáveis",
    maxStep: 4,
  },
  {
    id: "quem-complica",
    bg: "from-amber-50 to-orange-50",
    title: "Quem complica mais?",
    subtitle: "O contexto do paciente importa tanto quanto a técnica",
    maxStep: 4,
  },
  {
    id: "mismatch",
    bg: "from-slate-50 to-slate-100",
    title: "Mismatch Anatômico do Tubo",
    subtitle: "O problema subestimado: cânula errada para anatomia errada (ex: Escoliose severa)",
    maxStep: 2,
  },
  {
    id: "bundle",
    bg: "from-emerald-50 to-teal-50",
    title: "Bundle de Segurança Baseado em Evidências",
    subtitle: "A técnica que previne a complicação antes dela existir",
    maxStep: 6,
  },
  {
    id: "decanulacao",
    bg: "from-cyan-50 to-blue-50",
    title: "Decanulação Estruturada",
    subtitle: "Desfecho de vigilância, e não apenas a retirada da cânula",
    maxStep: 6,
  },
  {
    id: "takehome",
    bg: "from-indigo-50 to-violet-50",
    title: "Take-home Messages",
    subtitle: "Síntese prática da Traqueostomia Pediátrica Moderna",
    maxStep: 3,
  }
];

export const timelineData = [
  {
    year: "Até 1970's",
    label: "ANTES",
    value: 18,
    short: "Infecção aguda",
    detail: "A indicação era dominada por obstrução infecciosa aguda de via aérea superior, com destaque histórico para difteria, epiglotite e crupe grave.",
    bullets: [
      "Predomínio de urgência e resgate da via aérea.",
      "Maior peso do intraoperatório na percepção de risco.",
      "Paciente menos dependente de longa permanência de cânula.",
    ],
    color: "from-rose-400 to-rose-500",
  },
  {
    year: "1980's–1990's",
    label: "TRANSIÇÃO",
    value: 38,
    short: "Vacinação + intubação",
    detail: "Com vacinação, intubação orotraqueal e melhora do cuidado intensivo, as grandes infecções deixam de ser o centro do campo.",
    bullets: [
      "Redução das indicações infecciosas clássicas.",
      "Aumento de procedimentos eletivos e pacientes de UTI.",
      "Mudança progressiva da epidemiologia pediátrica.",
    ],
    color: "from-amber-400 to-amber-500",
  },
  {
    year: "2000's–2010's",
    label: "AGORA",
    value: 72,
    short: "Lactente complexo",
    detail: "A maior sobrevida de prematuros e crianças com malformações e comorbidades remodela o perfil do paciente traqueostomizado.",
    bullets: [
      "Mais pacientes abaixo de 1 ano.",
      "Ventilação prolongada e anomalias estruturais ganham protagonismo.",
      "A anatomia e a adequação da cânula passam a pesar mais.",
    ],
    color: "from-cyan-400 to-cyan-500",
  },
  {
    year: "Hoje",
    label: "IMPACTO",
    value: 88,
    short: "Risco longitudinal",
    detail: "A complicação deixa de ser um evento isolado e passa a se distribuir ao longo da jornada: técnica, primeiros dias, fase tardia e domicílio.",
    bullets: [
      "Granuloma, obstrução, infecção, fístula e decanulação acidental.",
      "Falha de resgate se torna parte central da narrativa.",
      "O cuidado domiciliar passa a importar tanto quanto a cirurgia.",
    ],
    color: "from-violet-400 to-violet-500",
  },
  {
    year: "Resposta atual",
    label: "SEGURANÇA",
    value: 100,
    short: "Bundle preventivo",
    detail: "Técnica segura, escolha correta da cânula, primeira troca controlada, protocolo e treinamento do cuidador passam a modular o risco.",
    bullets: [
      "Equipe interdisciplinar.",
      "Leito preparado com cânula igual e uma menor.",
      "Prevenção e resgate organizados.",
    ],
    color: "from-emerald-400 to-emerald-500",
  },
];
