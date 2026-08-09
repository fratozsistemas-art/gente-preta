import { useNavigate } from 'react-router-dom';

interface TopBarProps {
  title: string;
  showBack?: boolean;
}

export default function TopBar({ title, showBack }: TopBarProps) {
  const navigate = useNavigate();
  return (
    <div className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-earth-100 flex items-center gap-3 px-4 py-3 max-w-md mx-auto w-full">
      {showBack && (
        <button onClick={() => navigate(-1)} className="text-earth-600 text-lg leading-none">
          ←
        </button>
      )}
      <h1 className="font-bold text-earth-900 text-base truncate">{title}</h1>
    </div>
  );
}
