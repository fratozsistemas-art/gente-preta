import { useState } from 'react';
import { healthUnits } from '../data/project';
import { useAppStore } from '../store/useAppStore';
import TopBar from '../components/TopBar';

export default function MapUbs() {
  const consent = useAppStore((s) => s.consent);
  const [search, setSearch] = useState('');

  const filtered = healthUnits.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.ra.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <TopBar title="Rede SUS — UBS" />
      <div className="px-5 pt-3 pb-8">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar por RA ou nome da UBS..."
          className="w-full rounded-lg border border-earth-200 p-3 text-sm mb-4"
        />

        {!consent.level4_geolocation && (
          <div className="rounded-xl border border-brand-200 bg-brand-50 p-3 mb-4 text-xs text-earth-700">
            Ative o <strong>Nível 4 (Geolocalização)</strong> no seu Perfil para ver a distância até cada UBS.
          </div>
        )}

        <div className="space-y-3">
          {filtered.map((u) => (
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
          {filtered.length === 0 && (
            <p className="text-sm text-earth-400 text-center py-8">Nenhuma UBS encontrada.</p>
          )}
        </div>

        <div className="mt-6 rounded-xl border border-earth-200 p-4 text-xs text-earth-500">
          Rede privada e busca por "atendimento humanizado" em construção — módulo recuperado na Arquitetura
          Reconciliada V4 (Find a Doctor).
        </div>
      </div>
    </div>
  );
}
