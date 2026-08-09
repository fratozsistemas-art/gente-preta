import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';
import { priorityThemes } from '../data/diseases';
import { healthUnits } from '../data/project';
import TopBar from '../components/TopBar';

const STEPS = ['perfil', 'saude', 'acesso', 'discriminacao'] as const;

export default function Baseline() {
  const navigate = useNavigate();
  const saveBaseline = useAppStore((s) => s.saveBaseline);
  const completeOnboarding = useAppStore((s) => s.completeOnboarding);

  const [step, setStep] = useState(0);
  const [raceColor, setRaceColor] = useState('');
  const [age, setAge] = useState('');
  const [education, setEducation] = useState('');
  const [income, setIncome] = useState('');
  const [ra, setRa] = useState('');
  const [conditions, setConditions] = useState<string[]>([]);
  const [usesUbs, setUsesUbs] = useState('');
  const [accessBarriers, setAccessBarriers] = useState('');
  const [discriminationScale, setDiscriminationScale] = useState(0);

  function toggleCondition(id: string) {
    setConditions((c) => (c.includes(id) ? c.filter((x) => x !== id) : [...c, id]));
  }

  function next() {
    if (step < STEPS.length - 1) {
      setStep(step + 1);
    } else {
      saveBaseline({
        raceColor,
        age,
        education,
        income,
        ra,
        conditions,
        usesUbs,
        accessBarriers,
        discriminationScale,
      });
      completeOnboarding();
      navigate('/');
    }
  }

  function back() {
    if (step === 0) navigate('/consentimento');
    else setStep(step - 1);
  }

  return (
    <div>
      <TopBar title="Questionário de linha de base" showBack />
      <div className="px-5 pt-3 pb-8">
        <ProgressBar current={step} total={STEPS.length} />

        {step === 0 && (
          <Section title="Perfil sociodemográfico">
            <Field label="Raça/cor (autodeclaração)">
              <Select value={raceColor} onChange={setRaceColor} options={['Preta', 'Parda', 'Branca', 'Indígena', 'Amarela', 'Prefiro não informar']} />
            </Field>
            <Field label="Faixa de idade">
              <Select value={age} onChange={setAge} options={['18-24', '25-34', '35-49', '50-64', '65+']} />
            </Field>
            <Field label="Escolaridade">
              <Select value={education} onChange={setEducation} options={['Fundamental', 'Médio', 'Superior', 'Pós-graduação']} />
            </Field>
            <Field label="Renda familiar (salários mínimos)">
              <Select value={income} onChange={setIncome} options={['Até 1', '1-2', '2-4', '4-10', 'Acima de 10']} />
            </Field>
            <Field label="Região Administrativa (DF)">
              <Select value={ra} onChange={setRa} options={Array.from(new Set(healthUnits.map((u) => u.ra)))} />
            </Field>
          </Section>
        )}

        {step === 1 && (
          <Section title="Histórico de saúde" subtitle="Selecione as condições que você já teve diagnóstico ou suspeita.">
            <div className="space-y-2">
              {priorityThemes.map((t) => (
                <label
                  key={t.id}
                  className={`flex items-center gap-3 rounded-xl border p-3 text-sm cursor-pointer ${
                    conditions.includes(t.id) ? 'border-brand-300 bg-brand-50' : 'border-earth-200 bg-white'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={conditions.includes(t.id)}
                    onChange={() => toggleCondition(t.id)}
                    className="h-4 w-4 accent-brand-600"
                  />
                  <span className="text-lg">{t.icon}</span>
                  <span className="text-earth-800">{t.name}</span>
                </label>
              ))}
            </div>
          </Section>
        )}

        {step === 2 && (
          <Section title="Acesso ao SUS">
            <Field label="Você utiliza uma UBS de referência?">
              <Select value={usesUbs} onChange={setUsesUbs} options={['Sim, regularmente', 'Sim, raramente', 'Não conheço uma UBS de referência', 'Não utilizo o SUS']} />
            </Field>
            <Field label="Já enfrentou dificuldades de acesso? (opcional, descreva)">
              <textarea
                value={accessBarriers}
                onChange={(e) => setAccessBarriers(e.target.value)}
                rows={3}
                placeholder="Ex.: fila longa, falta de médico especialista, distância..."
                className="w-full rounded-lg border border-earth-200 p-3 text-sm"
              />
            </Field>
          </Section>
        )}

        {step === 3 && (
          <Section title="Experiência de discriminação" subtitle="Numa escala de 0 (nunca) a 5 (frequentemente), com que frequência você sentiu que foi tratado de forma diferente em um serviço de saúde por causa da sua raça/cor?">
            <div className="flex justify-between gap-2 mt-4">
              {[0, 1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  onClick={() => setDiscriminationScale(n)}
                  className={`flex-1 aspect-square rounded-lg font-bold text-sm ${
                    discriminationScale === n ? 'bg-brand-600 text-white' : 'bg-white border border-earth-200 text-earth-700'
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
            <div className="flex justify-between text-[10px] text-earth-400 mt-2 px-1">
              <span>Nunca</span>
              <span>Frequentemente</span>
            </div>
          </Section>
        )}

        <div className="flex gap-3 mt-8">
          <button onClick={back} className="flex-1 rounded-xl border border-earth-300 text-earth-700 font-semibold py-3">
            Voltar
          </button>
          <button onClick={next} className="flex-1 rounded-xl bg-brand-600 text-white font-semibold py-3">
            {step === STEPS.length - 1 ? 'Concluir' : 'Continuar'}
          </button>
        </div>
      </div>
    </div>
  );
}

function ProgressBar({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex gap-1 mb-6">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className={`h-1.5 flex-1 rounded-full ${i <= current ? 'bg-brand-600' : 'bg-earth-200'}`} />
      ))}
    </div>
  );
}

function Section({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-bold text-earth-900 mb-1">{title}</h2>
      {subtitle && <p className="text-xs text-earth-500 mb-4">{subtitle}</p>}
      <div className="space-y-4 mt-4">{children}</div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-earth-700 mb-1.5">{label}</label>
      {children}
    </div>
  );
}

function Select({ value, onChange, options }: { value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-lg border border-earth-200 p-3 text-sm bg-white"
    >
      <option value="">Selecione...</option>
      {options.map((o) => (
        <option key={o} value={o}>{o}</option>
      ))}
    </select>
  );
}
