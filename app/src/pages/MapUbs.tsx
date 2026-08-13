import { useState } from 'react';
import { healthUnits, regionalHospitals, healthRegions } from '../data/project';
import { useAppStore } from '../store/useAppStore';
import TopBar from '../components/TopBar';

export default function MapUbs() {
  const consent = useAppStore((s) => s.consent);
  const [search, setSearch] = useState('');
  const [tab, setTab] = useState<'ubs' | 'hospitais'>('ubs');

  const filteredUbs = healthUnits.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.ra.toLowerCase().includes(search.toLowerCase())
  );

  const regionById = Object.fromEntries(healthRegions.map((r) => [r.id, r]));

  const filteredHospitals = regionalHospitals.filter(
    (h) =>
      h.nome.toLowerCase().includes(search.toLowerCase()) ||
      h.sigla.toLowerCase().includes(search.toLowerCase()) ||
      (regionById[h.regionId]?.ras.join(' ').toLowerCase().includes(search.toLowerCase()) ?? false)
  );

  return (
    <div>
      <TopBar title="Rede SUS — UBS e Hospitais" />
      <div className="px-5 pt-3 pb-8">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar por RA, nome da UBS ou hospital..."
          className="w-full rounded-lg border border-earth-200 p-3 text-sm mb-4"
        />

        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setTab('ubs')}
            className={`flex-1 rounded-lg py-2 text-sm font-medium border ${
              tab === 'ubs' ? 'bg-brand-600 text-white border-brand-600' : 'border-earth-200 text-earth-600'
            }`}
          >
            UBS piloto
          </button>
          <button
            onClick={() => setTab('hospitais')}
            className={`flex-1 rounded-lg py-2 text-sm font-medium border ${
              tab === 'hospitais' ? 'bg-brand-600 text-white border-brand-600' : 'border-earth-200 text-earth-600'
            }`}
          >
            Hospitais Regionais
          </button>
        </div>

        {!consent.level4_geolocation && (
          <div className="rounded-xl border border-brand-200 bg-brand-50 p-3 mb-4 text-xs text-earth-700">
            Ative o <strong>Nível 4 (Geolocalização)</strong> no seu Perfil para ver a distância até cada unidade.
          </div>
        )}

        {tab === 'ubs' && (
          <div className="space-y-3">
            {filteredUbs.map((u) => (
              <div key={u.id} className="rounded-xl border border-earth-200 bg-white p-4">
                <h3 className="font-semibold text-earth-900 text-sm mb-1">{u.name}</h3>
                <p className="text-xs text-earth-500 mb-2">Região Administrativa: {u.ra}</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${u.lat},${u.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-brand-600"
                >
                  Ver rota no mapa →
                </a>
              </div>
            ))}
            {filteredUbs.length === 0 && (
              <p className="text-sm text-earth-400 text-center py-8">Nenhuma UBS encontrada.</p>
            )}
          </div>
        )}

        {tab === 'hospitais' && (
          <div className="space-y-3">
            <p className="text-[11px] text-earth-400 mb-1">
              Fonte: SES-DF —{' '}
              <a
                href="https://www.saude.df.gov.br/regioes-de-saude"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Regiões de Saúde
              </a>
            </p>
            {filteredHospitals.map((h) => {
              const region = regionById[h.regionId];
              return (
                <div key={h.id} className="rounded-xl border border-earth-200 bg-white p-4">
                  <div className="flex items-baseline gap-2 mb-1">
                    <h3 className="font-semibold text-earth-900 text-sm">{h.nome}</h3>
                    <span className="text-xs font-mono text-earth-400">{h.sigla}</span>
                  </div>
                  <p className="text-xs text-earth-500 mb-1">
                    {h.endereco} — CEP {h.cep}
                  </p>
                  <p className="text-xs text-earth-500 mb-1">Tel: {h.telefone}</p>
                  {region && (
                    <p className="text-xs text-earth-400 mb-2">Região de Saúde: {region.nome} ({region.sigla})</p>
                  )}
                  <div className="flex flex-wrap gap-1 mb-2">
                    {h.servicos.slice(0, 4).map((s) => (
                      <span
                        key={s}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-brand-50 text-brand-700 border border-brand-100"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${h.lat},${h.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-brand-600"
                  >
                    Ver rota no mapa →
                  </a>
                </div>
              );
            })}
            {filteredHospitals.length === 0 && (
              <p className="text-sm text-earth-400 text-center py-8">Nenhum hospital encontrado.</p>
            )}
          </div>
        )}

        <div className="mt-6 rounded-xl border border-earth-200 p-4 text-xs text-earth-500">
          Rede privada e busca por "atendimento humanizado" em construção — módulo recuperado na Arquitetura
          Reconciliada V4 (Find a Doctor).
        </div>
      </div>
    </div>
  );
}
