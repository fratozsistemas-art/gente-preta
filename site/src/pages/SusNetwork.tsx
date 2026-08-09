import { healthUnits } from '../data/project';
import { APP_URL } from '../config';

export default function SusNetwork() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-bold text-earth-900 mb-4">Rede SUS — Onde encontrar especialistas</h1>
      <p className="text-earth-600 mb-8 max-w-2xl">
        Módulo "Find a Doctor" recuperado: geolocalização de UBS piloto no DF, com plano de expansão para rede
        privada e busca por atendimento humanizado/culturalmente competente. A navegação completa, com mapa
        interativo e georreferenciamento em tempo real, está disponível no{' '}
        <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline font-medium">
          App Sentinela
        </a>.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {healthUnits.map((u) => (
          <div key={u.id} className="rounded-xl border border-earth-200 p-4 bg-white">
            <h3 className="font-semibold text-earth-900 text-sm mb-1">{u.name}</h3>
            <p className="text-xs text-earth-500">RA: {u.ra}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-earth-200 bg-earth-50 p-6">
        <h2 className="font-bold text-earth-900 mb-2">Rede privada e atendimento humanizado (em construção)</h2>
        <p className="text-sm text-earth-600">
          Recuperando a aba original "Onde encontrar especialistas", o objetivo é permitir busca também por
          profissionais da rede privada com filtro de "atendimento humanizado/culturalmente competente" —
          hoje ausente do desenho técnico, mas priorizado na Arquitetura Reconciliada V4.
        </p>
      </div>

      <div className="mt-8 rounded-xl border border-earth-200 p-6">
        <h2 className="font-bold text-earth-900 mb-2">Direito à saúde</h2>
        <p className="text-sm text-earth-600 mb-3">
          Se você sofreu discriminação em um atendimento de saúde, você pode relatar pelo App Sentinela. O
          relato é encaminhado, com consentimento, para acompanhamento institucional.
        </p>
        <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline font-medium text-sm">
          Relatar no App Sentinela →
        </a>
      </div>
    </div>
  );
}
