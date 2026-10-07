// Ver nota completa em site/src/data/deepContentRegistry.ts — mesmo padrão,
// espelhado no App Sentinela para reusar o conteúdo único em shared/.
import { anemiaFalciformeContent, type DiseaseDeepContent } from '@shared/data/anemiaFalciforme';

export const deepContentRegistry: Record<string, DiseaseDeepContent> = {
  'anemia-falciforme': anemiaFalciformeContent,
};

export function getDeepContent(diseaseId: string): DiseaseDeepContent | undefined {
  return deepContentRegistry[diseaseId];
}
