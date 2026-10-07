import { useNavigate } from 'react-router-dom';
import VariantSwitcher from '@shared/components/VariantSwitcher';

interface TopBarProps {
  title: string;
  showBack?: boolean;
}

// Inclui o VariantSwitcher (GP0/PP1/PP2 × PT/ES) em toda a TopBar do App
// Sentinela — mesmo seletor usado no Header do site institucional (ver
// shared/components/VariantSwitcher.tsx), garantindo troca sincronizada de
// aparência entre site e app quando publicados no mesmo domínio.
export default function TopBar({ title, showBack }: TopBarProps) {
  const navigate = useNavigate();
  return (
    <div className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-earth-100 flex items-center gap-3 px-4 py-3 max-w-md mx-auto w-full">
      {showBack && (
        <button onClick={() => navigate(-1)} className="text-earth-600 text-lg leading-none">
          ←
        </button>
      )}
      <h1 className="font-bold text-earth-900 text-base truncate flex-1">{title}</h1>
      <VariantSwitcher compact />
    </div>
  );
}
