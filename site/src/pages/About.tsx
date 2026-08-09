import { roadmap } from '../data/project';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 prose-project">
      <h1 className="text-3xl font-bold text-earth-900 mb-2">Sobre o Projeto</h1>
      <p className="text-earth-500 mb-10">Hub Gente Preta — Sentinela de Saúde da População Negra</p>

      <h2 className="text-xl font-bold text-earth-900 mt-10 mb-3">Visão estratégica</h2>
      <p className="text-earth-700 mb-4">
        No Brasil, a população negra enfrenta inequidades sistêmicas em saúde: maior risco de doenças crônicas,
        subdiagnóstico por racismo institucional, menor acesso a serviços de qualidade no SUS e invisibilidade
        epidemiológica — 56% da população brasileira é negra, mas apenas 1,5% das pesquisas em saúde incluem
        recorte racial.
      </p>
      <p className="text-earth-700 mb-4">
        O Hub Gente Preta é uma <strong>plataforma de inteligência comunitária</strong> construída sobre uma
        arquitetura dupla: um <strong>Site Institucional</strong> (este site — conteúdo, transparência e
        comunidade) e um <strong>App Sentinela</strong> (ferramenta funcional de escuta longitudinal e navegação
        em saúde), unidos por uma terceira camada de <strong>governança e confiança</strong>.
      </p>

      <h2 className="text-xl font-bold text-earth-900 mt-10 mb-3">Arquitetura reconciliada (V4.1)</h2>
      <p className="text-earth-700 mb-4">
        O desenho atual do projeto resulta de uma revisão integral de todo o acervo histórico — chats de origem,
        formulário oficial da AECID, ideação original de 9 abas, instrumentos de campo, base científica e
        consolidação técnica — cruzado com o benchmark internacional{' '}
        <a href="https://blackdoctor.com" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">
          BlackDoctor.com/.org
        </a>{' '}
        (20 anos de atuação, 6M de visitas/mês). Esse processo identificou 8 contradições entre documentos e 4
        módulos que haviam sido abandonados silenciosamente — todos reincorporados na arquitetura atual.
      </p>
      <a href="/arquitetura" className="inline-block text-brand-600 font-medium hover:underline mb-8">
        Ler a Arquitetura Reconciliada V4.1 completa →
      </a>

      <h2 className="text-xl font-bold text-earth-900 mt-10 mb-4">Roadmap</h2>
      <div className="space-y-6">
        {roadmap.map((r) => (
          <div key={r.fase} className="border border-earth-200 rounded-xl p-5">
            <div className="flex items-baseline justify-between flex-wrap gap-2 mb-2">
              <h3 className="font-bold text-earth-900">{r.fase}</h3>
              <span className="text-xs font-semibold text-brand-600 bg-brand-50 px-2 py-1 rounded-full">{r.periodo}</span>
            </div>
            <p className="text-earth-600 text-sm mb-3">{r.objetivo}</p>
            <ul className="text-sm text-earth-700 space-y-1 list-disc pl-5">
              {r.entregas.map((e) => <li key={e}>{e}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
