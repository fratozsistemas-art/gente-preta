export default function ClinicalTrials() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-bold text-earth-900 mb-4">Hub de Ensaios Clínicos e Direito à Pesquisa</h1>
      <p className="text-earth-600 mb-8 max-w-2xl">
        Um espaço informativo para conhecer, entender e encontrar ensaios clínicos no Brasil e no mundo — parte
        do compromisso do Hub Gente Preta com o intercâmbio de conhecimento em saúde e com o direito da
        população negra de participar ativamente da pesquisa científica.
      </p>

      <div className="grid sm:grid-cols-2 gap-6 mb-12">
        <Card title="O que são ensaios clínicos?" text="Estudos que testam novos tratamentos, medicamentos ou procedimentos em voluntários, sob supervisão ética e regulatória (CEP/CONEP)." />
        <Card title="Por que participar?" text="Participar amplia o acesso a tratamentos inovadores e garante que a pesquisa em saúde reflita a diversidade real da população brasileira." />
        <Card title="Equidade na pesquisa" text="Apenas 1,5% das pesquisas em saúde no Brasil incluem recorte racial. Ampliar a participação da população negra em ensaios clínicos é uma forma direta de combater essa invisibilidade." />
        <Card title="Como encontrar ensaios" text="Consulte plataformas oficiais de recrutamento: Registro Brasileiro de Ensaios Clínicos (ReBEC) e ClinicalTrials.gov (internacional)." />
      </div>

      <div className="rounded-xl border border-earth-200 p-6 bg-earth-50">
        <h2 className="font-bold text-earth-900 mb-3">Plataformas oficiais de recrutamento</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="https://ensaiosclinicos.gov.br" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline font-medium">
              Registro Brasileiro de Ensaios Clínicos (ReBEC) →
            </a>
          </li>
          <li>
            <a href="https://clinicaltrials.gov" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline font-medium">
              ClinicalTrials.gov (base internacional) →
            </a>
          </li>
        </ul>
        <p className="text-xs text-earth-500 mt-4">
          O Hub Gente Preta não opera nem recruta para ensaios clínicos diretamente — atua apenas como ponte
          informativa e educativa, coerente com o objetivo da AECID de "intercâmbio de conhecimentos a nível
          nacional e internacional".
        </p>
      </div>
    </div>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-xl border border-earth-200 p-5">
      <h3 className="font-bold text-earth-900 mb-2">{title}</h3>
      <p className="text-sm text-earth-600">{text}</p>
    </div>
  );
}
