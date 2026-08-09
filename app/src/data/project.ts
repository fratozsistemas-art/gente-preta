// Dados institucionais — Hub Gente Preta
// Fonte: README, MASTER_NARRATIVE, DUAL_PLATFORM_STRATEGY, ARQUITETURA_RECONCILIADA_V4.md

export const projectInfo = {
  name: 'Hub Gente Preta',
  subtitle: 'Sentinela de Saúde da População Negra',
  tagline: 'Conhecimento que transforma políticas. Sua saúde, sua voz, sua comunidade.',
  scope: 'Distrito Federal (piloto) — expansão nacional planejada',
};

export const partners = {
  financiamento: [
    { name: 'AECID', full: 'Agência Espanhola de Cooperação Internacional para o Desenvolvimento', value: '€ 235.152,41', role: 'Financiador principal (24 meses)' },
  ],
  institucional: [
    { name: 'SEJUS/DF', full: 'Secretaria de Justiça e Cidadania do Distrito Federal', role: 'Parceiro institucional / contrapartida' },
  ],
  execucao: [
    { name: 'APRECIA', full: 'Associação Pró Educação, Cultura, Inclusão e Autonomia', role: 'Execução do projeto' },
  ],
  academico: [
    { name: 'FEPECS', full: 'Fundação de Ensino e Pesquisa em Ciências da Saúde', role: 'Capacitação de 100 estudantes (AVA)' },
    { name: 'UnB', full: 'Universidade de Brasília', role: 'Apoio acadêmico e conselho consultivo' },
    { name: 'FIOCRUZ', full: 'Fundação Oswaldo Cruz', role: 'Base científica e vigilância epidemiológica' },
  ],
  comunitario: [
    { name: 'CUFA/DF', full: 'Central Única das Favelas', role: 'Mobilização comunitária e confiança territorial' },
    { name: 'ABRADFAL', full: 'Associação Brasiliense das Pessoas com Doença Falciforme', role: 'Parceria técnica — Condições Genéticas/Raras' },
  ],
  referencia: [
    { name: 'BlackDoctor', full: 'BlackDoctor.org/.com (EUA)', role: 'Benchmark internacional — 20 anos, 20M de alcance, 6M visitas/mês' },
  ],
};

export const governance = {
  comite: [
    { name: 'AECID', role: 'Financiamento' },
    { name: 'SEJUS/DF', role: 'Parceiro institucional' },
    { name: 'APRECIA', role: 'Execução' },
  ],
  coordenacao: [
    { name: 'Coordenação de Projeto' },
    { name: 'Coordenação Técnica' },
    { name: 'Coordenação de Campo' },
  ],
  etica: [
    { name: 'Aprovação CEP/CONEP', desc: 'Pesquisas com seres humanos' },
    { name: 'DPO (Data Protection Officer)', desc: 'Conformidade LGPD' },
  ],
  conselhoConsultivo: {
    note:
      'Substitui a assinatura fictícia de IA ("CASIO v10.0") identificada na Arquitetura Reconciliada V4 (contradição C3). Inspirado no Medical Advisory Board público do BlackDoctor — credibilidade vem de pessoas nomeadas e auditáveis.',
    members: [
      { name: 'A definir', institution: 'FEPECS', area: 'Ensino em Saúde' },
      { name: 'A definir', institution: 'UnB', area: 'Pesquisa Acadêmica' },
      { name: 'A definir', institution: 'FIOCRUZ', area: 'Epidemiologia' },
      { name: 'A definir', institution: 'DPO do Projeto', area: 'Privacidade e LGPD' },
    ],
  },
};

export const lgpdConsentLevels = [
  { level: 1, name: 'Uso do app', required: true, desc: 'Obrigatório para utilizar as funcionalidades básicas.' },
  { level: 2, name: 'Participação em pesquisas', required: false, desc: 'Opcional — dados pseudonimizados para estudos.' },
  { level: 3, name: 'Dados agregados para políticas públicas', required: false, desc: 'Opcional — agregação sem identificação individual.' },
  { level: 4, name: 'Geolocalização precisa', required: false, desc: 'Opcional — apenas para navegação em saúde (UBS mais próxima).' },
];

export const dataDomains = [
  {
    id: 'publico',
    name: 'Conteúdo público (sem PII)',
    desc: 'Biblioteca de saúde, relatórios anuais, mapa de UBS — acessível sem cadastro, sem dados pessoais.',
  },
  {
    id: 'pesquisa',
    name: 'Pesquisa populacional anônima',
    desc: 'Questionário voluntário, pseudonimizado, consentimento nível 2 — usado para estudos e políticas públicas.',
  },
  {
    id: 'clinico',
    name: 'Triagem clínico-social identificável',
    desc: 'CPF/CNS, classificação de risco de enfermagem — acesso restrito a profissionais, retenção conforme LGPD.',
  },
];

// UBS piloto — Distrito Federal (dados ilustrativos até integração e-SUS)
export const healthUnits = [
  { id: 'ubs-01', name: 'UBS 1 Ceilândia', ra: 'Ceilândia', lat: -15.8153, lng: -48.1074 },
  { id: 'ubs-02', name: 'UBS 2 Samambaia', ra: 'Samambaia', lat: -15.8752, lng: -48.0904 },
  { id: 'ubs-03', name: 'UBS 3 Planaltina', ra: 'Planaltina', lat: -15.6169, lng: -47.6547 },
  { id: 'ubs-04', name: 'UBS 4 Recanto das Emas', ra: 'Recanto das Emas', lat: -15.9057, lng: -48.0656 },
  { id: 'ubs-05', name: 'UBS 5 Itapoã', ra: 'Itapoã', lat: -15.7472, lng: -47.7492 },
  { id: 'ubs-06', name: 'UBS 6 São Sebastião', ra: 'São Sebastião', lat: -15.8967, lng: -47.7783 },
  { id: 'ubs-07', name: 'UBS 7 Paranoá', ra: 'Paranoá', lat: -15.7642, lng: -47.7719 },
  { id: 'ubs-08', name: 'UBS 8 Estrutural', ra: 'Estrutural', lat: -15.7669, lng: -47.9750 },
  { id: 'ubs-09', name: 'UBS 9 Varjão', ra: 'Varjão', lat: -15.7192, lng: -47.9092 },
  { id: 'ubs-10', name: 'UBS 10 Brazlândia', ra: 'Brazlândia', lat: -15.6683, lng: -48.1439 },
];

export const roadmap = [
  {
    fase: 'Fase 1 — MVP',
    periodo: '0-90 dias',
    objetivo: 'Validar conceito com piloto no DF',
    entregas: [
      'Autenticação e onboarding com consentimento LGPD (4 níveis)',
      'Questionário linha de base (5-10min)',
      'Check-ins recorrentes (1-3min)',
      'Mapa de 10 UBSs piloto',
      'Biblioteca de saúde com 7 temas prioritários',
      'Radar epidemiológico comunitário, opt-in e transparente',
    ],
  },
  {
    fase: 'Fase 2 — Piloto Territorial',
    periodo: '3-6 meses',
    objetivo: 'Transição de pesquisa para navegação em saúde',
    entregas: [
      'Push notifications inteligentes',
      'Integração com e-SUS',
      'Expansão para 50 UBSs',
      'Módulo de Formação/AVA (100 estudantes FEPECS)',
    ],
  },
  {
    fase: 'Fase 3 — Plataforma Nacional',
    periodo: '6-24 meses',
    objetivo: 'Vigilância sentinela nacional para população negra',
    entregas: [
      'Hub de Ensaios Clínicos',
      'Expansão para outras UFs (SP, RJ, BA, MG)',
      'Prontuário compartilhado (FHIR)',
      'APIs públicas para pesquisadores',
    ],
  },
];
