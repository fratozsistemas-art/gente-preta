import { useParams, Link } from 'react-router-dom';
import { diseaseCategories } from '../data/diseases';
import TopBar from '../components/TopBar';
import { getDeepContent } from '../data/deepContentRegistry';
import AudienceContentTabs from '../components/AudienceContentTabs';
import { useAppearance } from '@shared/context/AppearanceContext';

export default function DiseaseDetail() {
  const { categoryId, diseaseId } = useParams();
  const { localeId } = useAppearance();
  const category = diseaseCategories.find((c) => c.id === categoryId);
  const disease = category?.diseases.find((d) => d.id === diseaseId);
  const deepContent = disease?.hasDeepContent ? getDeepContent(disease.id, localeId) : undefined;

  if (!category || !disease) {
    return (
      <div>
        <TopBar title="Não encontrado" showBack />
        <div className="px-5 pt-10 text-center text-sm text-earth-500">Condição não encontrada.</div>
      </div>
    );
  }

  return (
    <div>
      <TopBar title={disease.name} showBack />
      <div className="px-5 pt-4 pb-8">
        {deepContent && (
          <div className="relative w-full overflow-hidden rounded-xl border border-earth-200 mb-4 aspect-[16/9]">
            <img
              src={deepContent.heroImage.url}
              alt={deepContent.heroImage.alt}
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
            <span className="absolute bottom-1.5 right-1.5 rounded bg-black/55 text-white text-[9px] px-1.5 py-0.5">
              Placeholder (CC) — {deepContent.heroImage.credit}
            </span>
          </div>
        )}

        <div className="flex gap-2 mb-4">
          {disease.isPriorityTheme && (
            <span className="text-[10px] uppercase font-bold text-white bg-brand-600 px-2 py-1 rounded">
              Tema prioritário
            </span>
          )}
        {disease.isNew && (
          <span className="text-[10px] uppercase font-bold text-ouro-700 bg-palha-100 px-2 py-1 rounded">
            Atual
          </span>
        )}
        </div>

        {disease.study ? (
          <div className="space-y-4">
            <div className="rounded-xl border border-earth-200 p-4">
              <h2 className="text-xs font-bold text-earth-900 uppercase mb-1.5">Estudo</h2>
              <p className="text-earth-700 text-sm">{disease.study}</p>
            </div>
            <div className="rounded-xl border border-brand-200 bg-brand-50 p-4">
              <h2 className="text-xs font-bold text-brand-800 uppercase mb-1.5">Achado</h2>
              <p className="text-earth-800 text-sm leading-relaxed">{disease.finding}</p>
            </div>
          </div>
        ) : (
          <div className="rounded-xl border border-earth-200 p-4 bg-earth-50 text-sm text-earth-600">
            Condição incluída na base científica geral. Evidência detalhada em padronização.
          </div>
        )}

        {deepContent && <AudienceContentTabs content={deepContent} />}

        <div className="mt-6 rounded-xl border border-earth-200 p-4 text-xs text-earth-500">
          Em caso de sintomas, procure uma UBS.{' '}
          <Link to="/mapa" className="text-brand-600 font-medium">Encontrar UBS mais próxima →</Link>
        </div>
      </div>
    </div>
  );
}
