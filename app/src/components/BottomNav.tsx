import { NavLink } from 'react-router-dom';

const items = [
  { to: '/', label: 'Início', icon: '🏠' },
  { to: '/checkin', label: 'Check-in', icon: '✅' },
  { to: '/saude', label: 'Saúde', icon: '📚' },
  { to: '/mapa', label: 'UBS', icon: '📍' },
  { to: '/radar', label: 'Radar', icon: '📡' },
  { to: '/perfil', label: 'Perfil', icon: '👤' },
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-earth-200 flex justify-between px-1 py-1.5 z-40 max-w-md mx-auto">
      {items.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `flex-1 flex flex-col items-center gap-0.5 py-1.5 rounded-lg text-[10px] font-medium ${
              isActive ? 'text-brand-600 bg-brand-50' : 'text-earth-500'
            }`
          }
        >
          <span className="text-base">{item.icon}</span>
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
