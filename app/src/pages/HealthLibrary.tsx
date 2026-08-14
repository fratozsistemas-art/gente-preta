import { useState } from 'react';
import { Link } from 'react-router-dom';
import { diseaseCategories, totalConditionsCount } from '../data/diseases';
import TopBar from '../components/TopBar';

export default function HealthLibrary() {
  const [openCategory, setOpenCategory] = useState<string | null>(diseaseCategories[0]?.id ?? null);

  return (
    <div>
      <TopBar title="Biblioteca de Saúde" />
      <div className="px-5 pt-3 pb-8">
        <p className="text-xs text-earth-500 mb-4">
          {totalConditionsCount}+ condições mapeadas. Tendências populacionais, não diagnósticos individuais.
        </p>
        <div className="space-y-3">
          {diseaseCategories.map((cat) => {
            const isOpen = openCategory === cat.id;
            return (
              <div key={cat.id} className="rounded-xl border border-earth-200 bg-white overflow-hidden">
                <button
                  onClick={() => setOpenCategory(isOpen ? null : cat.id)}
                  className="w-full flex items-center justify-between p-4"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xl">{cat.icon}</span>
                    <span className="text-left">
                      <span className="block font-semibold text-earth-900 text-sm">{cat.title}</span>
                      <span className="block text-xs text-earth-500">{cat.subtitle}</span>
                    </span>
                  </span>
                  <span className="text-earth-400">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <div className="border-t border-earth-100 p-2 space-y-1">
                    {cat.diseases.map((d) => (
                      <Link
                        key={d.id}
                        to={`/saude/${cat.id}/${d.id}`}
                        className="flex items-center justify-between rounded-lg px-3 py-2.5 hover:bg-earth-50"
                      >
                        <span className="text-sm text-earth-800">{d.name}</span>
                        <div className="flex gap-1 shrink-0">
                          {d.isPriorityTheme && (
                            <span className="text-[9px] uppercase font-bold text-white bg-brand-600 px-1.5 py-0.5 rounded">
                              Prioritário
                            </span>
                          )}
                          {d.isNew && (
                            <span className="text-[9px] uppercase font-bold text-ouro-700 bg-palha-100 px-1.5 py-0.5 rounded">
                              Atual
                            </span>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
