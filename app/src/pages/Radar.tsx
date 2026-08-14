import { useAppStore } from '../store/useAppStore';
import TopBar from '../components/TopBar';

// Sinais ilustrativos — em produção, calculados via z-score (Statistical Process Control)
// sobre os check-ins agregados por Região Administrativa.
const signals = [
  {
    id: 'sig-1',
    ra: 'Ceilândia',
    type: 'Sintomas respiratórios',
    count: 34,
    zScore: 2.8,
    message: '34 pessoas na sua região relataram sintomas respiratórios nas últimas 48h — acima do padrão esperado.',
    action: 'Procure a UBS mais próxima se tiver tosse, febre ou falta de ar.',
  },
  {
    id: 'sig-2',
    ra: 'Samambaia',
    type: 'Barreiras de acesso',
    count: 21,
    zScore: 2.6,
    message: '21 pessoas relataram dificuldade de atendimento em Samambaia nas últimas 48h.',
    action: 'Se você também enfrentou isso, registre em "Direito à Saúde".',
  },
];

export default function Radar() {
  const radarOptIn = useAppStore((s) => s.radarOptIn);
  const setRadarOptIn = useAppStore((s) => s.setRadarOptIn);

  return (
    <div>
      <TopBar title="Radar Comunitário" />
      <div className="px-5 pt-3 pb-8">
        <div className="rounded-xl border border-earth-200 bg-earth-50 p-4 mb-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="font-semibold text-earth-900 text-sm mb-1">Participar do Radar</h2>
              <p className="text-xs text-earth-500">
                Opt-in, transparente: seus check-ins ajudam a detectar padrões de saúde na sua região em 24-48h.
                Você pode desativar quando quiser.
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
              <input
                type="checkbox"
                checked={radarOptIn}
                onChange={(e) => setRadarOptIn(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-earth-200 rounded-full peer-checked:bg-brand-600 transition-colors" />
              <div className="absolute left-0.5 top-0.5 h-5 w-5 bg-white rounded-full transition-transform peer-checked:translate-x-5" />
            </label>
          </div>
        </div>

        {!radarOptIn ? (
          <div className="text-center py-16">
            <div className="text-4xl mb-3">📡</div>
            <p className="text-sm text-earth-500 max-w-xs mx-auto">
              Ative o Radar Comunitário acima para ver sinais transparentes da sua região.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {signals.map((s) => (
              <div key={s.id} className="rounded-xl border border-brand-200 bg-brand-50 p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase text-brand-700">{s.ra}</span>
                  <span className="text-[10px] text-earth-500">z-score {s.zScore}</span>
                </div>
                <p className="text-sm text-earth-800 font-medium mb-2">{s.message}</p>
                <p className="text-xs text-earth-600">{s.action}</p>
              </div>
            ))}
            <div className="rounded-xl border border-earth-200 p-4 text-xs text-earth-500">
              <strong>Como funciona:</strong> comparamos a contagem atual de relatos com a média histórica da
              região (desvio padrão via z-score). Acima de 2,5 desvios, o sinal é devolvido à comunidade — nunca
              fica restrito a um painel administrativo silencioso. Taxa de falso positivo estimada: &lt;5%.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
