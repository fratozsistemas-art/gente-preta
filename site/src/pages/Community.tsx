import { partners } from '../data/project';

export default function Community() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-bold text-earth-900 mb-4">Comunidade Preta de Saúde</h1>
      <p className="text-earth-600 mb-10 max-w-2xl">
        A dimensão comunitária — rodas de conversa, coletivos e ONGs parceiras — é a base de sustentação
        social de Gente Preta, uma mídia de saúde com presença comunitária constante.
      </p>

      <div className="grid sm:grid-cols-2 gap-6 mb-12">
        <div className="rounded-xl border border-earth-200 p-5">
          <h3 className="font-bold text-earth-900 mb-2">Rodas de conversa</h3>
          <p className="text-sm text-earth-600">
            Encontros presenciais e virtuais para discutir saúde, racismo institucional e autocuidado, com
            mediação de profissionais e lideranças comunitárias.
          </p>
        </div>
        <div className="rounded-xl border border-earth-200 p-5">
          <h3 className="font-bold text-earth-900 mb-2">Coletivos e ONGs parceiras</h3>
          <p className="text-sm text-earth-600">
            Rede de organizações da sociedade civil que apoiam a mobilização territorial e a confiança
            comunitária necessária para a adesão ao projeto.
          </p>
        </div>
      </div>

      <h2 className="font-bold text-earth-900 mb-4">Parceiros comunitários</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {partners.comunitario.map((p) => (
          <div key={p.name} className="rounded-xl border border-earth-200 p-5 bg-earth-50">
            <div className="font-bold text-brand-700">{p.name}</div>
            <div className="text-xs text-earth-500 mb-1">{p.full}</div>
            <div className="text-xs text-earth-600">{p.role}</div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-earth-200 bg-white p-6 text-center">
        <h2 className="font-bold text-earth-900 mb-2">Eventos contínuos</h2>
        <p className="text-sm text-earth-600">
          Além do Seminário Internacional (Novembro/2026), o objetivo é manter um calendário contínuo de
          campanhas e ações comunitárias — não apenas eventos pontuais. Agenda em construção.
        </p>
      </div>
    </div>
  );
}
