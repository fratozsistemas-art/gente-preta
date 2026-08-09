import { Link } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';
import { priorityThemes } from '../data/diseases';
import TopBar from '../components/TopBar';

export default function Home() {
  const checkIns = useAppStore((s) => s.checkIns);
  const baseline = useAppStore((s) => s.baseline);

  const lastCheckIn = checkIns[0];
  const daysSinceLastCheckIn = lastCheckIn
    ? Math.floor((Date.now() - new Date(lastCheckIn.date).getTime()) / (1000 * 60 * 60 * 24))
    : null;

  const myConditions = priorityThemes.filter((t) => baseline?.conditions.includes(t.id));

  return (
    <div>
      <TopBar title="Sentinela" />
      <div className="px-5 pt-4 pb-8 space-y-6">
        <div className="rounded-2xl bg-gradient-to-br from-brand-600 to-brand-700 text-white p-5">
          <p className="text-xs uppercase tracking-wide text-brand-100 font-semibold mb-1">Seu check-in</p>
          <h2 className="text-lg font-bold mb-2">
            {daysSinceLastCheckIn === null
              ? 'Faça seu primeiro check-in'
              : daysSinceLastCheckIn === 0
              ? 'Check-in feito hoje ✅'
              : `Último check-in há ${daysSinceLastCheckIn} dia(s)`}
          </h2>
          <p className="text-xs text-brand-100 mb-4">Leva menos de 1 minuto e ajuda toda a comunidade.</p>
          <Link to="/checkin" className="inline-block bg-white text-brand-700 font-semibold text-sm rounded-lg px-4 py-2">
            Fazer check-in
          </Link>
        </div>

        <div>
          <h3 className="font-bold text-earth-900 mb-3 text-sm">Acesso rápido</h3>
          <div className="grid grid-cols-2 gap-3">
            <QuickLink to="/mapa" icon="📍" label="Encontrar UBS" />
            <QuickLink to="/radar" icon="📡" label="Radar comunitário" />
            <QuickLink to="/saude" icon="📚" label="Biblioteca de saúde" />
            <QuickLink to="/denunciar" icon="⚖️" label="Direito à saúde" />
          </div>
        </div>

        {myConditions.length > 0 && (
          <div>
            <h3 className="font-bold text-earth-900 mb-3 text-sm">Suas condições acompanhadas</h3>
            <div className="space-y-2">
              {myConditions.map((c) => (
                <Link
                  key={c.id}
                  to={`/saude/${c.category.toLowerCase()}/${c.id}`}
                  className="flex items-center gap-3 rounded-xl border border-earth-200 bg-white p-3"
                >
                  <span className="text-xl">{c.icon}</span>
                  <span className="text-sm font-medium text-earth-800">{c.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="rounded-xl border border-earth-200 bg-white p-4">
          <p className="text-xs text-earth-500">
            Você já fez <strong className="text-earth-900">{checkIns.length}</strong> check-in(s) desde que se
            juntou ao Sentinela. Obrigado por fazer parte da vigilância comunitária.
          </p>
        </div>
      </div>
    </div>
  );
}

function QuickLink({ to, icon, label }: { to: string; icon: string; label: string }) {
  return (
    <Link to={to} className="rounded-xl border border-earth-200 bg-white p-4 flex flex-col gap-2 items-start">
      <span className="text-2xl">{icon}</span>
      <span className="text-xs font-semibold text-earth-800">{label}</span>
    </Link>
  );
}
