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

// Regiões de Saúde do DF (Superintendências) — Fonte oficial: saude.df.gov.br/regioes-de-saude
export const healthRegions = [
  {
    id: 'srsce',
    sigla: 'SRSCE',
    nome: 'Região Central',
    ras: ['Plano Piloto (Asa Norte, Asa Sul, Vila Planalto, Noroeste)', 'Cruzeiro', 'Sudoeste', 'Lago Norte', 'Lago Sul', 'Varjão'],
    superintendente: 'Paulo Roberto da Silva Júnior',
    telefone: '(61) 3449-4593/4594',
    email: 'srsce.ses@saude.df.gov.br',
    hospitalSedeId: 'hran',
  },
  {
    id: 'srscs',
    sigla: 'SRSCS',
    nome: 'Região Centro-Sul',
    ras: ['Candangolândia', 'Estrutural', 'Guará', 'Park Way', 'Núcleo Bandeirante', 'Riacho Fundo I', 'Riacho Fundo II', 'SIA', 'SCIA'],
    superintendente: 'Ronan Araújo Garcia',
    telefone: '(61) 3449-4877/4878',
    email: 'regiaocentrosul.sesdf@saude.df.gov.br',
    hospitalSedeId: 'hrgu',
  },
  {
    id: 'srsno',
    sigla: 'SRSNO',
    nome: 'Região Norte',
    ras: ['Planaltina', 'Arapoanga', 'Sobradinho I', 'Sobradinho II', 'Fercal'],
    superintendente: 'Debora Cristina da Silva Fernandes Gonçalves',
    telefone: '(61) 3449-5475/5476',
    email: 'srsno.ses@saude.df.gov.br',
    hospitalSedeId: 'hrs',
  },
  {
    id: 'srssu',
    sigla: 'SRSSU',
    nome: 'Região Sul',
    ras: ['Gama', 'Santa Maria'],
    superintendente: 'Gabriel Pimentel da Silva',
    telefone: '(61) 3449-7037/7038',
    email: 'ses.srssu@saude.df.gov.br',
    hospitalSedeId: 'hrg',
  },
  {
    id: 'srsle',
    sigla: 'SRSLE',
    nome: 'Região Leste',
    ras: ['Paranoá', 'Itapoã', 'São Sebastião', 'Jardim Botânico'],
    superintendente: 'Maria de Lourdes Castelo Branco',
    telefone: '(61) 3449-5146/5147',
    email: 'srsle.ses@saude.df.gov.br',
    hospitalSedeId: 'hrpa',
  },
  {
    id: 'srsoe',
    sigla: 'SRSOE',
    nome: 'Região Oeste',
    ras: ['Brazlândia', 'Ceilândia', 'Sol Nascente/Pôr do Sol'],
    superintendente: 'Lucilene Maria Florêncio de Queiroz',
    telefone: '(61) 3449-5944/5945',
    email: 'srsoe@saude.df.gov.br',
    hospitalSedeId: 'hrc',
  },
  {
    id: 'srsso',
    sigla: 'SRSSO',
    nome: 'Região Sudoeste',
    ras: ['Águas Claras', 'Recanto das Emas', 'Samambaia', 'Taguatinga', 'Vicente Pires', 'Água Quente'],
    superintendente: 'José Henrique Barbosa de Alencar',
    telefone: '(61) 3449-6458/6459',
    email: 'super.sudoeste@saude.df.gov.br',
    hospitalSedeId: 'hrt',
  },
];

// Hospitais Regionais do DF — Fonte oficial: saude.df.gov.br (páginas individuais de cada unidade)
export const regionalHospitals = [
  {
    id: 'hran',
    sigla: 'HRAN',
    nome: 'Hospital Regional da Asa Norte',
    regionId: 'srsce',
    endereco: 'SMHN Quadra 101 Bloco A, Área Especial',
    cep: '70.710-905',
    telefone: '(61) 3449-4650/4651',
    servicos: ['Emergência 24h', 'Cirurgia Geral', 'Clínica Médica', 'Ginecologia e Obstetrícia', 'Queimados', 'Cirurgia Plástica', 'Odontologia'],
    lat: -15.7797,
    lng: -47.8827,
    fonte: 'https://www.saude.df.gov.br/carta-servicos-hran',
  },
  {
    id: 'hrbraz',
    sigla: 'HRBz',
    nome: 'Hospital Regional de Brazlândia',
    regionId: 'srsoe',
    endereco: 'Área Especial 06, Setor Tradicional',
    cep: '73.740-793',
    telefone: '(61) 3449-6318/6319',
    servicos: ['Emergência 24h', 'Clínica Médica', 'Cirurgia Geral', 'Ginecologia e Obstetrícia'],
    lat: -15.6683,
    lng: -48.1439,
    fonte: 'https://www.saude.df.gov.br/brazlandia-urgencia-e-emergencia',
  },
  {
    id: 'hrc',
    sigla: 'HRC',
    nome: 'Hospital Regional de Ceilândia',
    regionId: 'srsoe',
    endereco: 'QNM 27 Área Especial 1, QNM 28',
    cep: '72.215-270',
    telefone: '(61) 3449-6027/6028/6029',
    servicos: ['Emergência 24h', 'Ambulatorial', 'Banco de Leite', 'Internação Domiciliar (NRAD)', 'Ouvidoria', 'Serviço Social', 'Voluntariado'],
    lat: -15.8153,
    lng: -48.1074,
    fonte: 'https://www.saude.df.gov.br/hospital-regional-de-ceilandia',
  },
  {
    id: 'hrg',
    sigla: 'HRG',
    nome: 'Hospital Regional do Gama',
    regionId: 'srssu',
    endereco: 'Área Especial nº 1, Setor Central',
    cep: '72.405-901',
    telefone: '(61) 3449-7044/7039',
    servicos: ['Emergência 24h', 'Maternidade', 'UTI', 'Banco de Leite', 'Ortopedia', 'Cardiologia', 'Núcleo de Atenção Domiciliar (NRAD)'],
    lat: -16.0181,
    lng: -48.0656,
    fonte: 'https://www.saude.df.gov.br/hospital-regional-do-gama',
  },
  {
    id: 'hrgu',
    sigla: 'HRGu',
    nome: 'Hospital Regional do Guará',
    regionId: 'srscs',
    endereco: 'QI 06 Área Especial C, Guará I',
    cep: '71.010-006',
    telefone: '(61) 3449-4943/4944',
    servicos: ['Emergência 24h', 'Clínica Médica', 'Pediatria'],
    lat: -15.8244,
    lng: -47.9772,
    fonte: 'https://www.saude.df.gov.br/hospital-do-guar%C3%A1',
  },
  {
    id: 'hrpa',
    sigla: 'HRL',
    nome: 'Hospital da Região Leste (Paranoá)',
    regionId: 'srsle',
    endereco: 'Área Especial Hospitalar, Quadra 2, Conjunto K, Lote 1',
    cep: '71.570-050',
    telefone: '(61) 3449-5225/5224',
    servicos: ['Emergência 24h', 'Trauma (Ortopedia e Cirurgia Geral)', 'Pediatria', 'Ginecologia e Obstetrícia', 'Maternidade'],
    lat: -15.7642,
    lng: -47.7719,
    fonte: 'https://www.saude.df.gov.br/hospital-regiao-leste',
  },
  {
    id: 'hrpl',
    sigla: 'HRPl',
    nome: 'Hospital Regional de Planaltina',
    regionId: 'srsno',
    endereco: 'Av. WL4, Área Especial, Setor Hospitalar',
    cep: '73.310-000',
    telefone: '(61) 3449-5753',
    servicos: ['Emergência 24h', 'Ambulatorial', 'Banco de Leite', 'Banco de Sangue', 'Ecografia', 'Hospital Amigo da Criança (IHAC)'],
    lat: -15.6169,
    lng: -47.6547,
    fonte: 'https://www.saude.df.gov.br/hospital-regional-de-planaltina',
  },
  {
    id: 'hrsm',
    sigla: 'HRSM',
    nome: 'Hospital Regional de Santa Maria',
    regionId: 'srssu',
    endereco: 'Quadra AC 102, Conjuntos A a D',
    cep: '72.502-100',
    telefone: '(61) 4042-7770',
    servicos: ['Emergência 24h', 'Clínica Médica e Cirúrgica', 'Ginecologia e Obstetrícia', 'Pediatria', 'Ortopedia', 'UTI Adulto/Pediátrica/Neonatal'],
    lat: -16.0206,
    lng: -47.9878,
    fonte: 'https://www.saude.df.gov.br/ceo-hospital-regional-de-santa-maria-hrsm',
  },
  {
    id: 'hrsam',
    sigla: 'HRSam',
    nome: 'Hospital Regional de Samambaia',
    regionId: 'srsso',
    endereco: 'QS 614 Conjunto C, Lotes 1/2',
    cep: '72.322-583',
    telefone: '(61) 3449-6810/6811/6812',
    servicos: ['Emergência 24h', 'Clínica Médica', 'Ginecologia e Obstetrícia'],
    lat: -15.8752,
    lng: -48.0904,
    fonte: 'https://www.saude.df.gov.br/w/hospital-regional-de-samambaia',
  },
  {
    id: 'hrs',
    sigla: 'HRS',
    nome: 'Hospital Regional de Sobradinho',
    regionId: 'srsno',
    endereco: 'Q 12 Conjunto B, Lote 38',
    cep: '73.010-120',
    telefone: '(61) 3449-5542/5543',
    servicos: ['Emergência 24h', 'Banco de Leite', 'Banco de Sangue', 'CAPSI', 'CAPS AD', 'Nefrologia', 'Núcleo de Atenção Domiciliar (NRAD)'],
    lat: -15.6529,
    lng: -47.8291,
    fonte: 'https://www.saude.df.gov.br/hospital-de-sobradinho',
  },
  {
    id: 'hrt',
    sigla: 'HRT',
    nome: 'Hospital Regional de Taguatinga',
    regionId: 'srsso',
    endereco: 'QNC Área Especial 24, Taguatinga Norte',
    cep: '72.120-970',
    telefone: '(61) 3449-6534/6535/6536/6537',
    servicos: ['Emergência 24h', 'Clínica Médica e Cirúrgica', 'Trauma', 'Ginecologia e Obstetrícia', 'Oftalmologia', 'Ortopedia', 'Pediatria', 'UTI Adulto/Pediátrica/Neonatal'],
    lat: -15.8342,
    lng: -48.0575,
    fonte: 'https://www.saude.df.gov.br/hospital-de-taguatinga',
  },
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
