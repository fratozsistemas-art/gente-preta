// Registro de conteúdo aprofundado por doença (segmentado por audiência
// profissional). Hoje cobre apenas 'anemia-falciforme', mas o formato permite
// adicionar outras condições no futuro sem alterar DiseaseDetail.tsx — basta
// criar um novo arquivo de conteúdo (como anemiaFalciforme.ts) e registrá-lo
// aqui com a chave = Disease.id correspondente em diseases.ts.
import { anemiaFalciformeContent, type DiseaseDeepContent } from '@shared/data/anemiaFalciforme';

export const deepContentRegistry: Record<string, DiseaseDeepContent> = {
  'anemia-falciforme': anemiaFalciformeContent,
};

export function getDeepContent(diseaseId: string): DiseaseDeepContent | undefined {
  return deepContentRegistry[diseaseId];
}
