// Registro de conteúdo aprofundado por doença (segmentado por audiência
// profissional + idioma). Hoje cobre apenas 'anemia-falciforme', mas o
// formato permite adicionar outras condições no futuro sem alterar
// DiseaseDetail.tsx — basta criar um novo arquivo de conteúdo (como
// anemiaFalciforme.ts) e registrá-lo aqui com a chave = Disease.id
// correspondente em diseases.ts.
//
// FASE 3.2 — conteúdo agora é bilíngue (PT/ES): cada entrada do registro é um
// Record<LocaleId, DiseaseDeepContent>, e getDeepContent recebe o localeId
// ativo (via useAppearance().localeId no componente que chama) para retornar
// a versão no idioma certo.
import { anemiaFalciformeContent, type DiseaseDeepContent } from '@shared/data/anemiaFalciforme';
import type { LocaleId } from '@shared/data/locales';

const deepContentRegistry: Record<string, Record<LocaleId, DiseaseDeepContent>> = {
  'anemia-falciforme': anemiaFalciformeContent,
};

export function getDeepContent(diseaseId: string, localeId: LocaleId): DiseaseDeepContent | undefined {
  return deepContentRegistry[diseaseId]?.[localeId];
}
