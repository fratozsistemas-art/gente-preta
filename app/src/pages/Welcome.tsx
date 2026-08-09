import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
    <div className="min-h-screen flex flex-col justify-between px-6 py-10 text-center bg-gradient-to-b from-brand-50 to-earth-50">
      <div />
      <div>
        <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-brand-600 text-white flex items-center justify-center text-2xl font-bold">
          GP
        </div>
        <h1 className="text-2xl font-bold text-earth-900 mb-3">App Sentinela</h1>
        <p className="text-earth-600 text-sm max-w-xs mx-auto mb-1">
          Já foi mal atendido no SUS? Sentiu que seu problema não foi levado a sério?
        </p>
        <p className="text-earth-500 text-xs max-w-xs mx-auto">
          Entenda sua saúde, encontre a UBS mais próxima e ajude sua comunidade — em check-ins de 1 minuto.
        </p>
      </div>
      <div className="space-y-3">
        <Link
          to="/consentimento"
          className="block w-full rounded-xl bg-brand-600 text-white font-semibold py-3.5 shadow-sm"
        >
          Começar
        </Link>
        <p className="text-[11px] text-earth-400 px-4">
          Ao continuar, você poderá revisar e escolher seus níveis de consentimento LGPD na próxima tela.
        </p>
      </div>
    </div>
  );
}
