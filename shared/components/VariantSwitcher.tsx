/**
 * VARIANT SWITCHER — Botão único de troca Variante × Idioma (runtime, sem rebuild)
 *
 * Componente compartilhado entre site/ e app/ (consumido via @shared). Análogo
 * a um seletor de idioma: dropdown compacto com duas seções (Versão / Idioma),
 * sem qualquer lógica de administração — é um controle de usuário final para o
 * teste mínimo da arquitetura CEOS (3 variantes × 2 idiomas).
 *
 * Painel de administração para troca de versão por administradores do site é
 * um item FUTURO, explicitamente fora do escopo deste componente.
 */

import { useState } from 'react';
import { useAppearance } from '../context/AppearanceContext';
import { getAllVariants, type VariantIdentity } from '../data/variants';
import { SUPPORTED_LOCALES } from '../data/locales';

export default function VariantSwitcher({ compact = false }: { compact?: boolean }) {
  const { variantId, setVariantId, localeId, setLocaleId, t } = useAppearance();
  const [open, setOpen] = useState(false);
  const variants = getAllVariants();

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={t('switcher.title')}
        className={`flex items-center gap-1.5 rounded-md border border-current/20 px-2.5 py-1.5 text-xs font-semibold transition-colors hover:bg-black/5 ${
          compact ? '' : ''
        }`}
      >
        <span aria-hidden="true">🎛️</span>
        <span className="uppercase tracking-wide">{variantId.toUpperCase()}</span>
        <span className="opacity-60">·</span>
        <span>{SUPPORTED_LOCALES.find((l) => l.id === localeId)?.flag}</span>
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} aria-hidden="true" />
          <div className="absolute right-0 top-full mt-2 w-72 rounded-xl border border-black/10 bg-white shadow-xl p-4 z-50 text-earth-800">
            <p className="text-[11px] font-bold uppercase tracking-wide text-earth-500 mb-1">{t('switcher.title')}</p>
            <p className="text-[11px] text-earth-400 mb-4">{t('switcher.description')}</p>

            <div className="mb-4">
              <p className="text-xs font-semibold text-earth-700 mb-2">{t('switcher.variant.label')}</p>
              <div className="flex flex-col gap-1.5">
                {variants.map((v: VariantIdentity) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => {
                      setVariantId(v.id);
                    }}
                    className={`text-left rounded-lg border px-3 py-2 transition-colors ${
                      variantId === v.id
                        ? 'border-brand-500 bg-brand-50'
                        : 'border-earth-200 hover:bg-earth-50'
                    }`}
                  >
                    <span className="block text-sm font-bold">{v.label}</span>
                    <span className="block text-[11px] text-earth-500 leading-snug">{v.description}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-earth-700 mb-2">{t('switcher.locale.label')}</p>
              <div className="flex gap-2">
                {SUPPORTED_LOCALES.map((l) => (
                  <button
                    key={l.id}
                    type="button"
                    onClick={() => setLocaleId(l.id)}
                    className={`flex-1 flex items-center justify-center gap-1.5 rounded-lg border px-3 py-2 text-sm font-semibold transition-colors ${
                      localeId === l.id
                        ? 'border-brand-500 bg-brand-50'
                        : 'border-earth-200 hover:bg-earth-50'
                    }`}
                  >
                    <span aria-hidden="true">{l.flag}</span>
                    {l.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
