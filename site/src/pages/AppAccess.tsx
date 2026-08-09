import QRLink from '../components/QRLink';
import { APP_URL } from '../config';

export default function AppAccess() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
      <h1 className="text-3xl font-bold text-earth-900 mb-4">Acesse o App Sentinela</h1>
      <p className="text-earth-600 max-w-xl mx-auto mb-10">
        O App Sentinela é um webapp — funciona direto no navegador do seu celular, sem precisar instalar nada
        da loja de aplicativos. Escaneie o QR Code abaixo ou acesse o link.
      </p>

      <div className="flex justify-center mb-12">
        <QRLink size={260} />
      </div>

      <div className="grid sm:grid-cols-3 gap-6 text-left mb-12">
        <Feature title="1. Escaneie" text="Abra a câmera do celular e aponte para o QR Code — a maioria dos celulares reconhece automaticamente." />
        <Feature title="2. Consinta" text="Leia o termo de consentimento LGPD (4 níveis, granulares e opcionais além do uso básico)." />
        <Feature title="3. Comece" text="Responda o questionário de linha de base (5-10min) e comece os check-ins recorrentes (1-3min)." />
      </div>

      <div className="rounded-xl border border-earth-200 bg-earth-50 p-6 text-left max-w-2xl mx-auto">
        <h2 className="font-bold text-earth-900 mb-2">Prefere digitar o endereço?</h2>
        <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="text-brand-600 font-medium hover:underline break-all">
          {APP_URL}
        </a>
        <p className="text-xs text-earth-500 mt-3">
          Funciona em qualquer navegador (Chrome, Safari, Firefox) — Android e iOS. Adicione à tela inicial para
          acesso rápido, como um app instalado.
        </p>
      </div>
    </div>
  );
}

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-xl border border-earth-200 p-5">
      <h3 className="font-bold text-earth-900 mb-2">{title}</h3>
      <p className="text-sm text-earth-600">{text}</p>
    </div>
  );
}
