import { healthUnits, healthRegions, regionalHospitals } from '../data/project';
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

      <h2 className="text-xl font-bold text-earth-900 mb-2">Hospitais Regionais por Região de Saúde</h2>
      <p className="text-sm text-earth-500 mb-6 max-w-2xl">
        O Distrito Federal organiza a rede pública de saúde em 7 Regiões de Saúde (Superintendências), cada
        uma com um Hospital Regional como referência. Dados oficiais da{' '}
        <a
          href="https://www.saude.df.gov.br/regioes-de-saude"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-600 hover:underline"
        >
          Secretaria de Saúde do DF (SES-DF)
        </a>.
      </p>

      <div className="space-y-6 mb-12">
        {healthRegions.map((region) => {
          const hospitals = regionalHospitals.filter((h) => h.regionId === region.id);
          return (
            <div key={region.id} className="rounded-xl border border-earth-200 p-5 bg-white">
              <div className="flex flex-wrap items-baseline gap-2 mb-1">
                <h3 className="font-bold text-earth-900">{region.nome}</h3>
                <span className="text-xs font-mono text-earth-400">{region.sigla}</span>
              </div>
              <p className="text-xs text-earth-500 mb-3">
                Abrange: {region.ras.join(', ')}
              </p>
              <p className="text-xs text-earth-500 mb-4">
                Superintendente: {region.superintendente} · Tel: {region.telefone}
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {hospitals.map((h) => (
                  <div key={h.id} className="rounded-lg border border-earth-100 bg-earth-50 p-4">
                    <div className="flex items-baseline gap-2 mb-1">
                      <h4 className="font-semibold text-earth-900 text-sm">{h.nome}</h4>
                      <span className="text-xs font-mono text-earth-400">{h.sigla}</span>
                    </div>
                    <p className="text-xs text-earth-600 mb-1">{h.endereco} — CEP {h.cep}</p>
                    <p className="text-xs text-earth-600 mb-2">Tel: {h.telefone}</p>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {h.servicos.slice(0, 4).map((s) => (
                        <span key={s} className="text-[10px] px-2 py-0.5 rounded-full bg-brand-50 text-brand-700 border border-brand-100">
                          {s}
                        </span>
                      ))}
                    </div>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${h.lat},${h.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-brand-600 hover:underline"
                    >
                      Ver rota no mapa →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <h2 className="text-xl font-bold text-earth-900 mb-4">UBS piloto no Distrito Federal</h2>
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
