import { useState } from 'react';
import { useAppearance } from '@shared/context/AppearanceContext';
import type { DiseaseDeepContent } from '@shared/data/anemiaFalciforme';

// Versão mobile do seletor de audiência (médicos/enfermeiros/usuários) — ver
// site/src/components/AudienceContentTabs.tsx para a versão desktop/site.
// Layout em coluna única (abas lado a lado, mais compactas) adequado à
// largura fixa max-w-md do App Sentinela.
type AudienceKey = 'medico' | 'enfermeiro' | 'usuario';

const AUDIENCE_ORDER: AudienceKey[] = ['usuario', 'enfermeiro', 'medico'];

const AUDIENCE_ICON: Record<AudienceKey, string> = {
  medico: '🩺',
  enfermeiro: '💉',
  usuario: '👤',
};

const AUDIENCE_TONE: Record<AudienceKey, string> = {
  medico: 'border-brand-500 bg-brand-50 text-brand-800',
  enfermeiro: 'border-ouro-500 bg-palha-50 text-ouro-700',
  usuario: 'border-folha-500 bg-folha-50 text-folha-700',
};

export default function AudienceContentTabs({ content }: { content: DiseaseDeepContent }) {
  const { t } = useAppearance();
  const [active, setActive] = useState<AudienceKey>('usuario');
  const audience = content.audiences[active];

  return (
    <div className="mt-6">
      <p className="text-[10px] uppercase tracking-wide text-earth-400 font-semibold mb-2">
        Conteúdo por audiência
      </p>

      <div role="tablist" aria-label="Selecionar audiência" className="grid grid-cols-3 gap-1.5 mb-3">
        {AUDIENCE_ORDER.map((key) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={active === key}
            onClick={() => setActive(key)}
            className={`rounded-lg border-2 px-2 py-2 text-center transition-colors ${
              active === key ? AUDIENCE_TONE[key] : 'border-earth-200 text-earth-500'
            }`}
          >
            <span className="block text-base" aria-hidden="true">{AUDIENCE_ICON[key]}</span>
            <span className="block text-[10px] font-bold leading-tight mt-0.5">{t(`disease.audience.${key}`)}</span>
          </button>
        ))}
      </div>

      <p className="text-[11px] text-earth-400 mb-3 italic">{t(`disease.audience.description.${active}`)}</p>

      <div className="rounded-xl border border-earth-200 bg-white p-4">
        <p className="text-xs font-semibold text-earth-800 mb-4">{audience.summary}</p>
        <div className="space-y-4">
          {audience.sections.map((section) => (
            <div key={section.heading}>
              <h3 className="text-xs font-bold text-earth-900 uppercase tracking-wide mb-1.5">
                {section.heading}
              </h3>
              <div className="space-y-2">
                {section.body.map((paragraph, i) => (
                  <p key={i} className="text-xs text-earth-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-earth-200 bg-earth-50 p-4">
        <h3 className="text-[10px] font-bold text-earth-700 uppercase tracking-wide mb-2">Fontes</h3>
        <ul className="space-y-1.5">
          {content.sources.map((s) => (
            <li key={s.label} className="text-[11px] text-earth-600">
              <strong className="text-earth-800">{s.label}</strong> — {s.detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
