import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';
import { lgpdConsentLevels } from '../data/project';
import TopBar from '../components/TopBar';

export default function Consent() {
  const navigate = useNavigate();
  const setConsent = useAppStore((s) => s.setConsent);
  const [levels, setLevels] = useState({
    level1_appUsage: true,
    level2_research: false,
    level3_aggregation: false,
    level4_geolocation: false,
  });

  function toggle(key: keyof typeof levels) {
    if (key === 'level1_appUsage') return; // obrigatório, não pode desmarcar
    setLevels((s) => ({ ...s, [key]: !s[key] }));
  }

  function handleContinue() {
    setConsent(levels);
    navigate('/linha-de-base');
  }

  return (
    <div>
      <TopBar title="Consentimento LGPD" showBack />
      <div className="px-5 pt-4 pb-8">
        <p className="text-sm text-earth-600 mb-6">
          Você decide o que compartilhar. O uso básico do app exige apenas o Nível 1 — os demais são opcionais e
          podem ser alterados a qualquer momento no seu Perfil.
        </p>

        <div className="space-y-3">
          {lgpdConsentLevels.map((l) => {
            const key = `level${l.level}_${
              l.level === 1 ? 'appUsage' : l.level === 2 ? 'research' : l.level === 3 ? 'aggregation' : 'geolocation'
            }` as keyof typeof levels;
            const checked = levels[key];
            return (
              <label
                key={l.level}
                className={`flex items-start gap-3 rounded-xl border p-4 cursor-pointer ${
                  checked ? 'border-brand-300 bg-brand-50' : 'border-earth-200 bg-white'
                } ${l.required ? 'opacity-90' : ''}`}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  disabled={l.required}
                  onChange={() => toggle(key)}
                  className="mt-1 h-4 w-4 accent-brand-600"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-earth-900 text-sm">{l.name}</span>
                    {l.required ? (
                      <span className="text-[10px] uppercase font-bold text-white bg-earth-700 px-1.5 py-0.5 rounded">
                        Obrigatório
                      </span>
                    ) : (
                      <span className="text-[10px] uppercase font-bold text-earth-500 bg-earth-100 px-1.5 py-0.5 rounded">
                        Opcional
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-earth-500 mt-1">{l.desc}</p>
                </div>
              </label>
            );
          })}
        </div>

        <div className="mt-8 rounded-xl border border-earth-200 bg-white p-4 text-xs text-earth-500">
          Seus dados de raça/cor e saúde são criptografados (AES-256) e pseudonimizados para pesquisa. Você pode
          exportar ou apagar seus dados a qualquer momento em Perfil → Meus Dados.
        </div>

        <button
          onClick={handleContinue}
          className="mt-8 w-full rounded-xl bg-brand-600 text-white font-semibold py-3.5"
        >
          Confirmar e continuar
        </button>
      </div>
    </div>
  );
}
