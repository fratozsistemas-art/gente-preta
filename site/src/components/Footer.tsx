import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-earth-900 text-earth-100 mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-sm">
        <div>
          <div className="flex items-center gap-2 font-bold text-white text-base mb-3">
            <Logo size={32} monochrome />
            <span className="font-editorial italic">Gente Preta</span>
          </div>
          <p className="text-earth-300">
            Plataforma de inteligência comunitária para equidade em saúde da população negra.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Navegue</h4>
          <ul className="space-y-2 text-earth-300">
            <li><Link to="/biblioteca-saude" className="hover:text-white">Biblioteca de Saúde</Link></li>
            <li><Link to="/ensaios-clinicos" className="hover:text-white">Ensaios Clínicos</Link></li>
            <li><Link to="/memoria" className="hover:text-white">Memória e Herança</Link></li>
            <li><Link to="/comunidade" className="hover:text-white">Comunidade</Link></li>
            <li><Link to="/rede-sus" className="hover:text-white">Rede SUS</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Instituição</h4>
          <ul className="space-y-2 text-earth-300">
            <li><Link to="/sobre" className="hover:text-white">Sobre o Projeto</Link></li>
            <li><Link to="/transparencia" className="hover:text-white">Transparência e Governança</Link></li>
            <li><Link to="/arquitetura" className="hover:text-white">Relatório de Arquitetura</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">App Sentinela</h4>
          <p className="text-earth-300 mb-3">Escaneie o QR Code ou acesse pelo navegador do celular.</p>
          <Link
            to="/baixar"
            className="inline-block rounded-md bg-brand-600 text-white px-4 py-2 font-medium hover:bg-brand-700"
          >
            Baixar / Acessar App
          </Link>
        </div>
      </div>
      <div className="border-t border-earth-800 py-4 text-center text-xs text-earth-400">
        © {new Date().getFullYear()} Gente Preta — AECID · SEJUS/DF · APRECIA · FEPECS · CUFA/DF · ABRADFAL · CASIO V2 Studio
      </div>
    </footer>
  );
}
