import { Link, useParams } from 'react-router-dom';
import { diseaseCategories } from '../data/diseases';

export default function DiseaseDetail() {
  const { categoryId, diseaseId } = useParams();
  const category = diseaseCategories.find((c) => c.id === categoryId);
  const disease = category?.diseases.find((d) => d.id === diseaseId);

  if (!category || !disease) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-24 text-center">
        <h1 className="text-2xl font-bold text-earth-900 mb-4">Condição não encontrada</h1>
        <Link to="/saude" className="text-brand-600 hover:underline">← Voltar para a Biblioteca de Saúde</Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <Link to="/saude" className="text-brand-600 hover:underline text-sm mb-6 inline-block">
        ← Voltar para {category.title}
      </Link>

      <div className="flex items-center gap-3 mb-4">
        <span className="text-4xl">{category.icon}</span>
        <div>
          <p className="text-xs uppercase tracking-wide text-earth-500 font-semibold">{category.title} · {category.subtitle}</p>
          <h1 className="text-2xl sm:text-3xl font-bold text-earth-900">{disease.name}</h1>
        </div>
      </div>

      <div className="flex gap-2 mb-8">
        {disease.isPriorityTheme && (
          <span className="text-xs uppercase font-bold text-white bg-brand-600 px-2 py-1 rounded">Tema prioritário do App</span>
        )}
        {disease.isNew && (
          <span className="text-xs uppercase font-bold text-ouro-700 bg-palha-100 px-2 py-1 rounded">
            Realidade brasileira contemporânea
          </span>
        )}
      </div>

      {disease.study ? (
        <div className="space-y-6">
          <div className="rounded-xl border border-earth-200 p-5">
            <h2 className="text-sm font-bold text-earth-900 uppercase tracking-wide mb-2">Estudo</h2>
            <p className="text-earth-700 text-sm">{disease.study}</p>
          </div>
          <div className="rounded-xl border border-brand-200 bg-brand-50 p-5">
            <h2 className="text-sm font-bold text-brand-800 uppercase tracking-wide mb-2">Achado</h2>
            <p className="text-earth-800 text-sm leading-relaxed">{disease.finding}</p>
          </div>
        </div>
      ) : (
        <div className="rounded-xl border border-earth-200 p-5 bg-earth-50">
          <p className="text-earth-600 text-sm">
            Condição incluída na base científica geral (Guia da Saúde da População Negra). Evidência detalhada
            "Estudo + Achado" em processo de padronização para esta condição.
          </p>
        </div>
      )}

      <div className="mt-10 rounded-xl border border-earth-200 p-5 bg-white text-sm text-earth-500">
        <strong>Nota:</strong> os dados descrevem tendências populacionais, não diagnósticos individuais. Em
        caso de sintomas, procure uma Unidade Básica de Saúde (UBS) — consulte a{' '}
        <Link to="/rede-sus" className="text-brand-600 hover:underline">Rede SUS</Link>.
      </div>
    </div>
  );
}
