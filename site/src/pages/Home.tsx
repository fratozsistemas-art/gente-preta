import { Link } from 'react-router-dom';
import { priorityThemes, totalConditionsCount } from '../data/diseases';
import { partners } from '../data/project';
import QRLink from '../components/QRLink';

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block rounded-full bg-brand-100 text-brand-700 text-xs font-semibold px-3 py-1 mb-4">
              Sentinela de Saúde da População Negra
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-earth-900 leading-tight mb-6">
              Conhecimento que transforma <span className="text-brand-600">políticas</span>.
              <br />
              Sua saúde, sua voz, sua comunidade.
            </h1>
            <p className="text-lg text-earth-600 mb-8">
              O Hub Gente Preta reúne evidência científica, navegação em saúde e vigilância comunitária para
              reduzir as inequidades que a população negra enfrenta no SUS — começando pelo Distrito Federal.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/acessar-app" className="rounded-md bg-brand-600 text-white px-5 py-3 font-semibold hover:bg-brand-700">
                Baixar o App Sentinela
              </Link>
              <Link to="/saude" className="rounded-md border border-earth-300 px-5 py-3 font-semibold text-earth-800 hover:bg-earth-50">
                Explorar Biblioteca de Saúde
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <QRLink size={200} />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        <Stat value="2,3x" label="mais risco de hipertensão" />
        <Stat value={`${totalConditionsCount}+`} label="condições de saúde mapeadas" />
        <Stat value="7" label="temas prioritários no App" />
        <Stat value="10" label="UBSs piloto no DF" />
      </section>

      {/* O Problema */}
      <section className="bg-earth-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-earth-900 mb-4">O problema</h2>
            <ul className="space-y-3 text-earth-700">
              <li>• <strong>2,3x maior risco</strong> de hipertensão em relação à população branca</li>
              <li>• <strong>60% de subdiagnóstico</strong> devido a racismo institucional</li>
              <li>• <strong>Menor acesso</strong> a serviços de qualidade no SUS</li>
              <li>• <strong>Invisibilidade epidemiológica</strong>: 56% da população é negra, mas apenas 1,5% das pesquisas em saúde incluem recorte racial</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-earth-900 mb-4">A solução</h2>
            <ul className="space-y-3 text-earth-700">
              <li>• <strong>Escuta longitudinal</strong> — check-ins de 1-3 minutos</li>
              <li>• <strong>Navegação em saúde</strong> — UBS + rede privada + atendimento humanizado</li>
              <li>• <strong>Radar comunitário</strong> — sinais devolvidos com transparência, nunca vigilância silenciosa</li>
              <li>• <strong>Produção de evidência</strong> — dados para políticas públicas</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7 temas prioritários */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex items-end justify-between mb-8 flex-wrap gap-2">
          <h2 className="text-2xl font-bold text-earth-900">7 temas prioritários</h2>
          <Link to="/saude" className="text-brand-600 font-medium hover:underline">Ver biblioteca completa →</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {priorityThemes.map((theme) => (
            <div key={theme.id} className={`rounded-xl border p-5 ${theme.isNew ? 'border-brand-200 bg-brand-50' : 'border-earth-200 bg-white'}`}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{theme.icon}</span>
                {theme.isNew && (
                  <span className="text-[10px] uppercase font-bold text-brand-700 bg-brand-100 px-2 py-0.5 rounded-full">
                    Adenda v4.1
                  </span>
                )}
              </div>
              <h3 className="font-semibold text-earth-900 mb-1">{theme.name}</h3>
              <p className="text-xs text-earth-500">{theme.category}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Parceiros */}
      <section className="bg-earth-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Parceiros e Governança</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
            {[...partners.financiamento, ...partners.institucional, ...partners.execucao, ...partners.academico, ...partners.comunitario].map((p) => (
              <div key={p.name} className="rounded-lg bg-earth-800 p-4">
                <div className="font-bold text-brand-300">{p.name}</div>
                <div className="text-earth-300 text-xs mb-1">{p.full}</div>
                <div className="text-earth-400 text-xs">{p.role}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/transparencia" className="text-brand-300 hover:underline font-medium">
              Ver política completa de transparência e governança →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-3xl font-bold text-brand-600">{value}</div>
      <div className="text-sm text-earth-500 mt-1">{label}</div>
    </div>
  );
}
