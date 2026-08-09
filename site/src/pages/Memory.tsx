const stories = [
  {
    name: 'A definir — primeira história da comunidade',
    role: 'Paciente / Usuário do Sentinela',
    excerpt: 'Espaço reservado para a primeira história real de superação e cuidado em saúde, coletada em campo.',
  },
  {
    name: 'A definir — profissional de saúde',
    role: 'Profissional negro do SUS-DF',
    excerpt: 'Espaço reservado para depoimento de profissional de saúde negro atuando na rede SUS do Distrito Federal.',
  },
  {
    name: 'A definir — liderança comunitária',
    role: 'CUFA/DF',
    excerpt: 'Espaço reservado para história de liderança comunitária ligada à mobilização em saúde.',
  },
];

export default function Memory() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <span className="inline-block text-xs uppercase font-bold text-brand-700 bg-brand-100 px-2 py-1 rounded-full mb-3">
        Módulo recuperado — inspirado no "Generational Health" (BlackDoctor, 2025)
      </span>
      <h1 className="text-3xl font-bold text-earth-900 mb-4">Memória e Herança de Saúde</h1>
      <p className="text-earth-600 mb-10 max-w-2xl">
        Este módulo recupera três abas abandonadas na ideação original — <strong>"Homenagens e Histórias"</strong>,{' '}
        <strong>"Saúde Geracional"</strong> e <strong>"Hall da Fama"</strong> — reunidas em um único espaço de
        storytelling que liga ciência a herança cultural e histórias de família, seguindo diretamente a lição
        de maior retorno identificada no benchmark BlackDoctor.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {stories.map((s) => (
          <div key={s.name} className="rounded-xl border border-earth-200 p-5 bg-white">
            <div className="h-32 rounded-lg bg-gradient-to-br from-brand-100 to-earth-100 mb-4 flex items-center justify-center text-earth-400 text-sm">
              Foto/vídeo em breve
            </div>
            <h3 className="font-bold text-earth-900 text-sm mb-1">{s.name}</h3>
            <p className="text-xs text-earth-500 mb-2">{s.role}</p>
            <p className="text-sm text-earth-600">{s.excerpt}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-earth-200 bg-earth-50 p-6 text-center">
        <h2 className="font-bold text-earth-900 mb-2">Quer contar sua história?</h2>
        <p className="text-sm text-earth-600 mb-4">
          Este espaço é construído com e para a comunidade. Em breve, um formulário de submissão estará
          disponível aqui e no App Sentinela.
        </p>
        <span className="inline-block text-xs text-earth-400">Formulário de submissão — em desenvolvimento</span>
      </div>
    </div>
  );
}
