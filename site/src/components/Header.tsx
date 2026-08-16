import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';

const navItems = [
  { to: '/', label: 'Início' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/biblioteca-saude', label: 'Biblioteca de Saúde' },
  { to: '/ensaios-clinicos', label: 'Ensaios Clínicos' },
  { to: '/memoria', label: 'Memória e Herança' },
  { to: '/comunidade', label: 'Comunidade' },
  { to: '/rede-sus', label: 'Rede SUS' },
  { to: '/transparencia', label: 'Transparência' },
  { to: '/baixar', label: 'Baixe o App' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-earth-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-earth-900 text-lg">
          <Logo size={36} />
          <span className="hidden sm:inline font-editorial italic">Gente Preta</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-1 text-sm">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md font-medium transition-colors ${
                  isActive
                    ? 'bg-brand-50 text-brand-700'
                    : item.to === '/baixar'
                    ? 'bg-brand-600 text-white hover:bg-brand-700'
                    : 'text-earth-700 hover:bg-earth-50'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
}

function MobileMenu() {
  return (
    <details className="lg:hidden relative">
      <summary className="list-none cursor-pointer rounded-md border border-earth-200 px-3 py-2 text-sm text-earth-700">
        Menu
      </summary>
      <div className="absolute right-0 top-full mt-2 w-64 rounded-lg border border-earth-100 bg-white shadow-lg p-2 flex flex-col gap-1">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="px-3 py-2 rounded-md text-sm font-medium text-earth-700 hover:bg-earth-50"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </details>
  );
}
