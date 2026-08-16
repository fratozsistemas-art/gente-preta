import { Link } from 'react-router-dom';
import { diseaseCategories, totalConditionsCount } from '../data/diseases';
import CategoryIcon from '../components/CategoryIcons';

export default function HealthLibrary() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-earth-900 mb-2">Biblioteca de Saúde</h1>
        <p className="text-earth-600 max-w-2xl">
          {totalConditionsCount}+ condições mapeadas, organizadas em 9 categorias, com evidência científica no
          formato <strong>Estudo + Achado</strong>. Os dados descrevem <strong>tendências populacionais</strong>,
          não diagnósticos individuais.
        </p>
      </div>

      <div className="space-y-12">
        {diseaseCategories.map((cat) => (
          <section key={cat.id} id={cat.id}>
            <div className="flex items-center gap-3 mb-4">
              <CategoryIcon id={cat.id} size={36} />
              <div>
                <h2 className="text-xl font-bold text-earth-900">{cat.title}</h2>
                <p className="text-xs text-earth-500">{cat.subtitle}</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cat.diseases.map((d) => (
                    <Link
                      key={d.id}
                      to={`/saude/${cat.id}/${d.id}`}
                      className="rounded-xl border border-earth-200 bg-white p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-semibold text-earth-900 text-sm">{d.name}</h3>
                        {d.isPriorityTheme && (
                          <span className="shrink-0 text-[10px] uppercase font-bold text-white bg-brand-600 px-1.5 py-0.5 rounded">
                            Prioritário
                          </span>
                        )}
                        {d.isNew && (
                          <span className="shrink-0 text-[10px] uppercase font-bold text-ouro-700 bg-palha-100 px-1.5 py-0.5 rounded">
                            Atual
                          </span>
                        )}
                      </div>
                      {d.study && <p className="text-xs text-earth-500 mt-2 line-clamp-2">{d.study}</p>}
                    </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
