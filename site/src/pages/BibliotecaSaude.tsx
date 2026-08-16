import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  bibliotecaHero,
  bibliotecaCategories,
  bibliotecaFooterCtas,
  bibliotecaDisclaimer,
  primaryFilters,
  secondaryFilters,
  totalBibliotecaConditionsCount,
  type BibliotecaCondition,
} from '../data/biblioteca';
import CategoryIcon from '../components/CategoryIcons';

const evidenceToSecondary: Record<string, string> = {
  'genética': 'genetica',
  'genética e clínica': 'genetica',
  'genético-clínica': 'genetica',
  'genética + clínica': 'genetica',
  'genética e populacional': 'genetica',
  'epidemiológica': 'epidem',
  'clínica': 'clinica',
  'social e estrutural': 'estrutural',
  'estrutural': 'estrutural',
  'populacional': 'estrutural',
  'global': 'estrutural',
  'populacional e clínica': 'epidem',
};

export default function BibliotecaSaude() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeEvidence, setActiveEvidence] = useState<string | null>(null);

  const normalizedQuery = query.trim().toLowerCase();

  const filteredCategories = useMemo(() => {
    return bibliotecaCategories
      .filter((cat) => !activeCategory || cat.id === activeCategory)
      .map((cat) => ({
        ...cat,
        conditions: cat.conditions.filter((cond: BibliotecaCondition) => {
          const matchesQuery =
            !normalizedQuery ||
            cond.name.toLowerCase().includes(normalizedQuery) ||
            cond.finding.toLowerCase().includes(normalizedQuery) ||
            cond.implication.toLowerCase().includes(normalizedQuery);
          const secondaryId = evidenceToSecondary[cond.evidence.toLowerCase()] ?? 'clinica';
          const matchesEvidence = !activeEvidence || secondaryId === activeEvidence;
          return matchesQuery && matchesEvidence;
        }),
      }))
      .filter((cat) => cat.conditions.length > 0);
  }, [normalizedQuery, activeCategory, activeEvidence]);

  const noResults = filteredCategories.length === 0;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      {/* Hero */}
      <div className="mb-10 max-w-3xl">
        <span className="eyebrow text-brand-600">{bibliotecaHero.kicker}</span>
        <h1 className="text-3xl font-bold text-earth-900 mt-1 mb-4">{bibliotecaHero.title}</h1>
        <p className="text-earth-600 mb-6">{bibliotecaHero.subtitle}</p>
        <div className="rounded-xl border border-brand-200 bg-brand-50 p-4 flex gap-3 text-sm text-earth-700 mb-6">
          <span className="text-lg leading-none">{bibliotecaHero.notice.icon}</span>
          <p>{bibliotecaHero.notice.text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="#buscar"
            className="rounded-md bg-brand-600 text-white px-5 py-2.5 font-semibold hover:bg-brand-700 text-sm"
          >
            Buscar por condição
          </a>
          <a
            href="#categorias"
            className="rounded-md border border-earth-300 px-5 py-2.5 font-semibold text-earth-800 hover:bg-earth-50 text-sm"
          >
            Explorar por categoria
          </a>
        </div>
      </div>

      {/* Busca + Filtros */}
      <div id="buscar" className="rounded-2xl border border-earth-200 bg-white p-5 sm:p-6 mb-4 scroll-mt-24">
        <label htmlFor="busca-condicao" className="block text-sm font-semibold text-earth-900 mb-2">
          Buscar por condição, achado ou implicação
        </label>
        <input
          id="busca-condicao"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ex.: hipertensão, APOL1, mortalidade materna..."
          className="w-full rounded-md border border-earth-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400"
        />
      </div>

      <div id="categorias" className="mb-2 scroll-mt-24">
        <p className="text-xs font-semibold uppercase tracking-wide text-earth-500 mb-2">Filtrar por categoria</p>
        <div className="flex flex-wrap gap-2 mb-4">
          <FilterPill
            active={activeCategory === null}
            onClick={() => setActiveCategory(null)}
            label="Todas"
            icon="✳️"
          />
          {primaryFilters.map((f) => (
            <FilterPill
              key={f.id}
              active={activeCategory === f.id}
              onClick={() => setActiveCategory((cur) => (cur === f.id ? null : f.id))}
              label={f.label}
              icon={f.icon}
            />
          ))}
        </div>
        <p className="text-xs font-semibold uppercase tracking-wide text-earth-500 mb-2">Filtrar por tipo de evidência</p>
        <div className="flex flex-wrap gap-2 mb-10">
          <FilterPill
            active={activeEvidence === null}
            onClick={() => setActiveEvidence(null)}
            label="Todas"
            icon="✳️"
            tone="ouro"
          />
          {secondaryFilters.map((f) => (
            <FilterPill
              key={f.id}
              active={activeEvidence === f.id}
              onClick={() => setActiveEvidence((cur) => (cur === f.id ? null : f.id))}
              label={f.label}
              icon={f.icon}
              tone="ouro"
            />
          ))}
        </div>
      </div>

      <p className="text-sm text-earth-500 mb-8">
        {totalBibliotecaConditionsCount}+ condições mapeadas · mostrando{' '}
        {filteredCategories.reduce((acc, c) => acc + c.conditions.length, 0)} resultado(s).
      </p>

      {noResults && (
        <div className="rounded-xl border border-earth-200 bg-earth-50 p-8 text-center text-earth-600 mb-12">
          Nenhuma condição encontrada com esses filtros. Tente outro termo de busca ou limpe os filtros.
        </div>
      )}

      <div className="space-y-14">
        {filteredCategories.map((cat) => (
          <section key={cat.id} id={cat.id} className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-3">
              <CategoryIcon id={cat.id} size={40} />
              <h2 className="text-xl font-bold text-earth-900">{cat.title}</h2>
            </div>
            <p className="text-sm text-earth-600 max-w-3xl mb-5">{cat.intro}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cat.conditions.map((cond) => (
                <div key={cond.name} className="rounded-xl border border-earth-200 bg-white p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-earth-900 text-sm">{cond.name}</h3>
                    <span className="shrink-0 text-[10px] uppercase font-bold text-brand-700 bg-brand-50 px-1.5 py-0.5 rounded">
                      {cond.evidence}
                    </span>
                  </div>
                  <p className="text-xs text-earth-400 italic mb-3">{cond.study}</p>
                  <div className="mb-3">
                    <p className="text-[10px] uppercase font-bold text-earth-500 mb-0.5">Achado</p>
                    <p className="text-xs text-earth-700 leading-relaxed">{cond.finding}</p>
                  </div>
                  <div className="rounded-lg bg-ouro-300/20 border border-ouro-300/60 p-2.5">
                    <p className="text-[10px] uppercase font-bold text-ouro-700 mb-0.5">Implicação prática</p>
                    <p className="text-xs text-earth-800 leading-relaxed">{cond.implication}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Footer CTAs */}
      <div className="grid sm:grid-cols-3 gap-5 mt-16 mb-10">
        {bibliotecaFooterCtas.map((cta) => (
          <div key={cta.title} className="rounded-xl border border-earth-200 p-5 bg-earth-50">
            <h3 className="font-bold text-earth-900 mb-2 text-sm">{cta.title}</h3>
            <p className="text-xs text-earth-600 mb-4">{cta.text}</p>
            {cta.href ? (
              <Link to={cta.href} className="text-xs font-semibold text-brand-600 hover:underline">
                {cta.ctaLabel} →
              </Link>
            ) : (
              <span className="text-xs font-semibold text-brand-600">{cta.ctaLabel} →</span>
            )}
          </div>
        ))}
      </div>

      <p className="text-xs text-earth-400 max-w-3xl">{bibliotecaDisclaimer}</p>
    </div>
  );
}

function FilterPill({
  active,
  onClick,
  label,
  icon,
  tone = 'brand',
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  icon: string;
  tone?: 'brand' | 'ouro';
}) {
  const activeClasses =
    tone === 'ouro' ? 'bg-ouro-500 text-earth-900 border-ouro-500' : 'bg-brand-600 text-white border-brand-600';
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-xs font-medium rounded-full border px-3 py-1.5 transition-colors ${
        active ? activeClasses : 'border-earth-200 text-earth-600 hover:bg-earth-50'
      }`}
    >
      <span className="mr-1">{icon}</span>
      {label}
    </button>
  );
}
