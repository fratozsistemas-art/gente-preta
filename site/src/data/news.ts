// Notícias — seção "Últimas Notícias" (exclusiva da variante PP2, ver
// shared/data/variants.ts → showNewsSection). Conteúdo institucional mínimo,
// baseado nos marcos já documentados na Apresentação Institucional PPTX.
export interface NewsItem {
  id: string;
  date: string; // ISO 8601
  title: string;
  excerpt: string;
}

export const newsItems: NewsItem[] = [
  {
    id: 'lancamento-pulso-preto',
    date: '2026-10-07',
    title: 'Pulso Preto é lançado como nova identidade do projeto',
    excerpt:
      'O projeto piloto financiado pela AECID passa a se chamar Pulso Preto, reforçando a metáfora de monitoramento contínuo de sinais vitais em saúde da população negra.',
  },
  {
    id: 'parceria-abradfal',
    date: '2026-06-15',
    title: 'Parceria técnica com a ABRADFAL fortalece tema Anemia Falciforme',
    excerpt:
      'Associação Brasiliense das Pessoas com Doença Falciforme passa a colaborar diretamente no conteúdo científico e na triagem de condutas clínicas da plataforma.',
  },
  {
    id: 'ciclo-formacao-100',
    date: '2026-05-02',
    title: '100 estudantes concluem primeiro ciclo de formação comunitária',
    excerpt:
      'Quatro ciclos de seminários formaram agentes comunitários de saúde para atuar como multiplicadores do Guia da Saúde da População Negra no Distrito Federal.',
  },
];
