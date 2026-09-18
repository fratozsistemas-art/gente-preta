import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';

// Menu reorganizado (pacote v4.3, 17/08/2026): 3 links primários + 2 grupos em
// dropdown (Saberes / Instituição), recuperado nesta sessão.
const primaryNavItems = [
  { to: '/', label: 'Início' },
  { to: '/biblioteca-saude', label: 'Biblioteca de Saúde' },
  { to: '/rede-sus', label: 'Rede SUS' },
];

const saberesGroup = {
  label: 'Saberes',
  items: [
    { to: '/medicina-tradicional-brasileira', label: 'Medicina Tradicional Brasileira' },
    { to: '/ensaios-clinicos', label: 'Ensaios Clínicos' },
    { to: '/memoria', label: 'Memória e Herança' },
    { to: '/comunidade', label: 'Comunidade' },
  ],
};

const instituicaoGroup = {
  label: 'Instituição',
  items: [
    { to: '/sobre', label: 'Sobre' },
    { to: '/transparencia', label: 'Transparência' },
    { to: '/arquitetura', label: 'Relatório de Arquitetura' },
  ],
};

const allMobileItems = [...primaryNavItems, ...saberesGroup.items, ...instituicaoGroup.items];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-palha-100/95 backdrop-blur border-b border-earth-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
        <Link to="/" className="flex items-center gap-2 font-bold text-earth-900 text-lg shrink-0">
          <Logo size={36} />
          <span className="hidden sm:inline font-editorial italic">Gente Preta</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-1 text-sm">
          {primaryNavItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md font-medium transition-colors border-b-2 ${
                  isActive
                    ? 'border-brasa-500 text-earth-900'
                    : 'border-transparent text-earth-700 hover:border-brasa-300 hover:bg-earth-50'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <NavDropdown label={saberesGroup.label} items={saberesGroup.items} />
          <NavDropdown label={instituicaoGroup.label} items={instituicaoGroup.items} />
        </nav>
        <div className="hidden lg:block shrink-0">
          <NavLink
            to="/baixar"
            className="rounded-md bg-brand-600 text-white px-4 py-2 text-sm font-semibold hover:bg-brand-700 transition-colors"
          >
            Baixe o App
          </NavLink>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}

function NavDropdown({ label, items }: { label: string; items: { to: string; label: string }[] }) {
  return (
    <div className="relative group">
      <button
        type="button"
        className="px-3 py-2 rounded-md font-medium text-sm text-earth-700 hover:bg-earth-50 transition-colors flex items-center gap-1"
        aria-haspopup="true"
      >
        {label}
        <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true" className="mt-0.5">
          <path d="M1 3 L5 7 L9 3" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      </button>
      <div
        className="invisible group-hover:visible group-focus-within:visible opacity-0 group-hover:opacity-100
                   group-focus-within:opacity-100 transition-opacity absolute left-0 top-full pt-1 w-60"
      >
        <div className="rounded-lg border border-earth-100 bg-white shadow-lg p-2 flex flex-col gap-1">
          {items.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive ? 'bg-brand-50 text-brand-700' : 'text-earth-700 hover:bg-earth-50'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="lg:hidden relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="Abrir menu de navegação"
        className="rounded-md border border-earth-200 p-2.5 text-earth-700 hover:bg-earth-50 flex items-center justify-center"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
          <rect x="2" y="4" width="16" height="1.8" rx="0.9" fill="currentColor" />
          <rect x="2" y="9.1" width="16" height="1.8" rx="0.9" fill="currentColor" />
          <rect x="2" y="14.2" width="16" height="1.8" rx="0.9" fill="currentColor" />
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-2 w-72 rounded-lg border border-earth-100 bg-white shadow-lg p-2 flex flex-col gap-1 max-h-[75vh] overflow-y-auto">
          {allMobileItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="px-3 py-2 rounded-md text-sm font-medium text-earth-700 hover:bg-earth-50"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/baixar"
            onClick={() => setOpen(false)}
            className="mt-1 px-3 py-2 rounded-md text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 text-center"
          >
            Baixe o App
          </Link>
        </div>
      )}
    </div>
  );
}
