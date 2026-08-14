import { Link } from 'react-router-dom';
import { priorityThemes, emergentThemes, totalConditionsCount } from '../data/diseases';
import { partners, hardServices } from '../data/project';
import QRLink from '../components/QRLink';

const tickerStats = [
  '2,3x mais risco de hipertensão',
  `${totalConditionsCount}+ condições de saúde mapeadas`,
  '60% de subdiagnóstico por racismo institucional',
  '56% da população do DF é negra',
  '10 UBSs piloto no DF',
  '7 temas prioritários no App Sentinela',
];

const toneClasses: Record<string, string> = {
  barro: 'border-barro-300 bg-barro-100/60 hover:border-barro-500',
  folha: 'border-folha-300 bg-folha-50 hover:border-folha-500',
  ouro: 'border-ouro-300 bg-palha-50 hover:border-ouro-500',
};

const toneText: Record<string, string> = {
  barro: 'text-barro-700',
  folha: 'text-folha-700',
  ouro: 'text-ouro-700',
};

export default function Home() {
  return (
    <div>
      {/* Hero — base visual V2 (cultural-ancestral): tipografia editorial serifada,
          ornamento abstrato "folha" (Ossaim) discreto no fundo. */}
      <section className="relative overflow-hidden bg-gradient-to-b from-folha-50 via-brand-50 to-white ornament-folha">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid lg:grid-cols-2 gap-10 items-center relative">
          <div>
            <span className="inline-block rounded-full bg-brand-100 text-brand-700 text-xs font-semibold px-3 py-1 mb-4">
              Sentinela de Saúde da População Negra
            </span>
            <h1 className="font-editorial italic text-4xl sm:text-5xl lg:text-[3.4rem] font-medium text-earth-900 leading-tight mb-6">
              Conhecimento que transforma <span className="text-brand-600 not-italic font-bold">políticas</span>.
              <br />
              Sua saúde, sua voz, sua comunidade.
            </h1>
            <p className="text-lg text-earth-600 mb-8">
              Gente Preta reúne evidência científica, navegação em saúde e vigilância comunitária para
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

      {/* Ticker de dados — serviço-duro (V3) embutido na base V2: faixa contínua de
          indicadores epidemiológicos, sempre com rótulo de "meta de projeção" (ver
          Transparência) para não confundir dado real com projeção. */}
      <div className="bg-earth-900 text-earth-100 overflow-hidden py-2 text-xs sm:text-sm border-y border-earth-800">
        <div className="ticker-track gap-12 px-6">
          {[...tickerStats, ...tickerStats].map((stat, i) => (
            <span key={i} className="whitespace-nowrap font-medium tracking-wide">
              <span className="text-ouro-300 mr-2">●</span>{stat}
            </span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        <Stat value="2,3x" label="mais risco de hipertensão" />
        <Stat value={`${totalConditionsCount}+`} label="condições de saúde mapeadas" />
        <Stat value="7" label="temas prioritários no App" />
        <Stat value="10" label="UBSs piloto no DF" />
      </section>

      {/* Folhas de Gente Preta — serviço-duro concreto (diferenciais brasileiros),
          apresentado sobre a base editorial-ancestral V2. Ouvidoria em tom "barro". */}
      <section className="bg-white ornament-palha">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-2">
            <div>
              <h2 className="font-editorial italic text-2xl sm:text-3xl text-earth-900">Folhas de Gente Preta</h2>
              <p className="text-sm text-earth-500 mt-1">Serviços concretos, não apenas conteúdo — direito à saúde na prática.</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {hardServices.map((s) => (
              <Link
                key={s.id}
                to={s.to}
                className={`rounded-xl border-2 p-5 transition-colors ${toneClasses[s.tone]}`}
              >
                <h3 className={`font-bold mb-2 ${toneText[s.tone]}`}>{s.titulo}</h3>
                <p className="text-sm text-earth-700 mb-4">{s.descricao}</p>
                <span className={`text-sm font-semibold ${toneText[s.tone]}`}>{s.ctaLabel}</span>
              </Link>
            ))}
          </div>
        </div>
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

      {/* Rodas de conversa — dimensão comunitária visível já na Home (V2). */}
      <section className="bg-folha-900 text-white ornament-palha">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 flex flex-wrap items-center justify-between gap-6">
          <div>
            <h2 className="font-editorial italic text-xl sm:text-2xl mb-2">Rodas de conversa acontecem toda semana</h2>
            <p className="text-sm text-folha-100 max-w-xl">
              Encontros presenciais e virtuais para discutir saúde, racismo institucional e autocuidado — com
              mediação de profissionais e lideranças comunitárias.
            </p>
          </div>
          <Link
            to="/comunidade"
            className="shrink-0 rounded-md bg-ouro-500 text-earth-900 px-5 py-3 font-semibold hover:bg-ouro-300"
          >
            Ver agenda da comunidade →
          </Link>
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
            <div key={theme.id} className="rounded-xl border border-earth-200 bg-white p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{theme.icon}</span>
              </div>
              <h3 className="font-semibold text-earth-900 mb-1">{theme.name}</h3>
              <p className="text-xs text-earth-500">{theme.category}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Temas emergentes — realidade brasileira contemporânea. Seção própria,
          separada dos 7 temas prioritários, com o mesmo tratamento visual das
          demais seções (sem badge/cor que os destaque como "diferentes"). */}
      <section className="bg-earth-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-2">
            <div>
              <h2 className="text-2xl font-bold text-earth-900">Temas emergentes</h2>
              <p className="text-sm text-earth-500 mt-1">Realidade brasileira contemporânea — determinantes sociais em evidência.</p>
            </div>
            <Link to="/saude#socioeconomica-contemporanea" className="text-brand-600 font-medium hover:underline">Ver biblioteca completa →</Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {emergentThemes.map((theme) => (
              <div key={theme.id} className="rounded-xl border border-earth-200 bg-white p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{theme.icon}</span>
                </div>
                <h3 className="font-semibold text-earth-900 mb-1">{theme.name}</h3>
                <p className="text-xs text-earth-500">{theme.category}</p>
              </div>
            ))}
          </div>
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
