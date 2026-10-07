import { Link } from 'react-router-dom';
import Logo from './Logo';
import { useAppearance } from '@shared/context/AppearanceContext';

// Tema do rodapé depende da variante ativa (ver shared/data/variants.ts →
// footerTheme): 'dark-green' (GP0/PP1, tratamento original) ou 'cream'
// (PP2, inspirado no footer claro da referência de design nº2).
export default function Footer() {
  const { brand, variant } = useAppearance();
  const isCream = variant.footerTheme === 'cream';

  const wrapClass = isCream
    ? 'bg-pulso-creme text-earth-800 mt-24 border-t border-pulso-dourado/30'
    : 'bg-earth-900 text-earth-100 mt-24';
  const headingClass = isCream ? 'text-earth-900 font-semibold mb-3' : 'text-white font-semibold mb-3';
  const linkListClass = isCream ? 'space-y-2 text-earth-600' : 'space-y-2 text-earth-300';
  const linkHoverClass = isCream ? 'hover:text-pulso-terracota' : 'hover:text-white';
  const titleTextClass = isCream ? 'text-earth-900' : 'text-white';
  const subTextClass = isCream ? 'text-earth-600' : 'text-earth-300';
  const bottomBarClass = isCream
    ? 'border-t border-pulso-dourado/30 py-4 text-center text-xs text-earth-500'
    : 'border-t border-earth-800 py-4 text-center text-xs text-earth-400';

  return (
    <footer className={wrapClass}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-sm">
        <div>
          <div className={`flex items-center gap-2 font-bold text-base mb-3 ${titleTextClass}`}>
            <Logo size={32} monochrome={!isCream} />
            <span className="font-editorial italic">{brand.name}</span>
          </div>
          <p className={subTextClass}>
            Plataforma de inteligência comunitária para equidade em saúde da população negra.
          </p>
        </div>
        <div>
          <h4 className={headingClass}>Navegue</h4>
          <ul className={linkListClass}>
            <li><Link to="/saude" className={linkHoverClass}>Biblioteca de Saúde</Link></li>
            <li><Link to="/ensaios-clinicos" className={linkHoverClass}>Ensaios Clínicos</Link></li>
            <li><Link to="/memoria" className={linkHoverClass}>Memória e Herança</Link></li>
            <li><Link to="/comunidade" className={linkHoverClass}>Comunidade</Link></li>
            <li><Link to="/rede-sus" className={linkHoverClass}>Rede SUS</Link></li>
          </ul>
        </div>
        <div>
          <h4 className={headingClass}>Instituição</h4>
          <ul className={linkListClass}>
            <li><Link to="/sobre" className={linkHoverClass}>Sobre o Projeto</Link></li>
            <li><Link to="/transparencia" className={linkHoverClass}>Transparência e Governança</Link></li>
            <li><Link to="/arquitetura" className={linkHoverClass}>Relatório de Arquitetura</Link></li>
          </ul>
        </div>
        <div>
          <h4 className={headingClass}>App Sentinela</h4>
          <p className={`${subTextClass} mb-3`}>Escaneie o QR Code ou acesse pelo navegador do celular.</p>
          <Link
            to="/baixar"
            className={
              isCream
                ? 'inline-block rounded-md bg-pulso-terracota text-white px-4 py-2 font-medium hover:bg-pulso-marrom'
                : 'inline-block rounded-md bg-brand-600 text-white px-4 py-2 font-medium hover:bg-brand-700'
            }
          >
            Baixar / Acessar App
          </Link>
        </div>
      </div>
      <div className={bottomBarClass}>
        © {new Date().getFullYear()} {brand.name} — AECID · SEJUS/DF · APRECIA · FEPECS · CUFA/DF · ABRADFAL · CASIO V2 Studio
      </div>
    </footer>
  );
}
