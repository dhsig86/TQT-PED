import { LucideIcon } from "lucide-react";

export const style = {
  shell:
    "rounded-[2rem] bg-white/55 backdrop-blur-sm border border-white/70 shadow-xl flex-1 min-h-0 overflow-hidden",
  card: "rounded-[1.75rem] border border-slate-200 bg-white shadow-sm",
  chip:
    "rounded-full border border-white/70 bg-white/80 px-3 py-1 text-xs font-bold tracking-wide text-slate-700",
  title:
    "text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-slate-800 tracking-tight leading-[1.1] mb-2",
  subtitle: "text-base md:text-lg lg:text-xl font-medium text-slate-600 leading-relaxed",
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
    title: "Relevância Epidemiológica e Morbimortalidade",
    subtitle: "A Intervenção Salva Vidas, Mas Carrega Morbidade Estrutural e Mortalidade Real.",
    maxStep: 3,
  },
  {
    id: "campo",
    bg: "from-slate-50 to-blue-50",
    title: "Transição Epidemiológica nas Indicações",
    subtitle: "Antes → Transição → Agora → Impacto → Resposta em Segurança",
    maxStep: 7,
  },
  {
    id: "paciente",
    bg: "from-cyan-50 to-emerald-50",
    title: "O Paciente Contemporâneo: Complexo e Cronicamente Ventilado",
    subtitle: "Mais Jovem, Mais Ventilado, Mais Complexo e Menos Parecido Com o Passado",
    maxStep: 4,
  },
  {
    id: "complicacoes",
    bg: "from-amber-50 to-rose-50",
    title: "O Risco Estrutural em Perspectiva Temporal",
    subtitle: "A Complicação Percorre a Linha do Cuidado — e Por Isso Pode Ser Organizada",
    maxStep: 6,
  },
  {
    id: "intraoperatorio",
    bg: "from-slate-50 to-indigo-50",
    title: "Fatores Preditores Intraoperatórios",
    subtitle: "Erros Técnicos e Subestimação Posicional Definem a Base Para Complicações Tardias",
    maxStep: 3,
  },
  {
    id: "pos-precoce",
    bg: "from-rose-50 to-amber-50",
    title: "Vulnerabilidades do Pós-Operatório Precoce (D0-D7)",
    subtitle: "Os Primeiros Dias Concentram a Zona Crítica de Desestabilização Clínica",
    maxStep: 6,
  },
  {
    id: "pos-tardio",
    bg: "from-purple-50 to-pink-50",
    title: "Desdobramentos Tardios e Evolutivos",
    subtitle: "A Morbidade Que Se Acumula e Molda a Qualidade de Vida e As Internações",
    maxStep: 4,
  },
  {
    id: "quatro-chaves",
    bg: "from-emerald-50 to-cyan-50",
    title: "Principais Complicações Morfológicas",
    subtitle: "As Dimensões Críticas Que a Plateia Precisa Levar Para Casa",
    maxStep: 5,
  },
  {
    id: "catastroficas",
    bg: "from-rose-50 to-red-100",
    title: "Falhas de Resgate e Risco Asfixiante",
    subtitle: "A Morte é Incomum (Até 6%), Mas Os Mecanismos São Conhecidos e Altamente Evitáveis",
    maxStep: 4,
  },
  {
    id: "quem-complica",
    bg: "from-amber-50 to-orange-50",
    title: "Fatores Determinantes de Maior Gravidade",
    subtitle: "O Contexto Sistêmico do Paciente Importa Tanto Quanto a Técnica Operatória",
    maxStep: 4,
  },
  {
    id: "mismatch",
    bg: "from-slate-50 to-slate-100",
    title: "Mismatch Anatômico e de Cânula",
    subtitle: "Um Problema Frequente e Subestimado: Cânula Inadequada Para Anatomia Complexa",
    maxStep: 2,
  },
  {
    id: "bundle",
    bg: "from-emerald-50 to-teal-50",
    title: "O Bundle de Segurança Baseado em Evidências",
    subtitle: "A Sistematização de Processos Que Previne a Complicação Antes Dela Existir",
    maxStep: 8,
  },
  {
    id: "decanulacao",
    bg: "from-cyan-50 to-blue-50",
    title: "Decanulação Estruturada: Desfecho de Vigilância",
    subtitle: "Um Ritmo de Vigilância Ativa, e Não Apenas a Retirada do Suporte",
    maxStep: 6,
  },
  {
    id: "takehome",
    bg: "from-indigo-50 to-violet-50",
    title: "Take-Home Messages: Síntese Prática",
    subtitle: "Integração Clínica da Traqueostomia Pediátrica Moderna",
    maxStep: 3,
  },
  {
    id: "referencias",
    bg: "from-slate-50 to-slate-200",
    title: "Referências Bibliográficas",
    subtitle: "Apoio Científico Utilizado Para a Formação Deste Painel",
    maxStep: 1,
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

export const complicationsCuratedData = [
  {
    phase: "Intraoperatório",
    stepIndex: 1,
    rate: 5,
    rateLabel: "< 5%",
    types: ["Falso trajeto", "Hemorragia parestal", "Pneumotórax"],
    color: "from-slate-500 to-slate-600",
  },
  {
    phase: "Pós-Precoce",
    stepIndex: 2,
    rate: 15,
    rateLabel: "~ 15%",
    types: ["Obstrução primária (Rolha)", "Decanulação acidental"],
    color: "from-amber-400 to-amber-500",
  },
  {
    phase: "Pós-Tardio",
    stepIndex: 3,
    rate: 45,
    rateLabel: "40—50%",
    types: ["Granuloma estomal (Dominante)", "Traqueíte", "Estenose"],
    color: "from-rose-400 to-rose-500",
  },
  {
    phase: "Domicílio / PS",
    stepIndex: 4,
    rate: 25,
    rateLabel: "Altas Visitas PS",
    types: ["Celulite/Infecção", "Obstrução asfixiante", "Falha de reintubação"],
    color: "from-violet-500 to-violet-600",
  }
];
