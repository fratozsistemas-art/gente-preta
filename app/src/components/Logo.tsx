// Marca "Gente Preta" — inspirada, de forma abstrata e não-figurativa, em Ossaim
// (folha/cura) e Obaluaê (contas/proteção comunitária), seguindo a regra do
// handoff Ìlera de nunca representar orixás de forma figurativa e de combinar no
// máximo 2 grafismos por bloco visual. Aqui: folha central (Ossaim) + anel de
// contas (Obaluaê/comunidade). Nenhum texto, símbolo ou cor fora da paleta do
// projeto faz referência religiosa explícita — ver nota de cautela em
// DesignSystem.tsx / arquitetura.md.
interface LogoProps {
  size?: number;
  className?: string;
  monochrome?: boolean; // versão para fundos escuros (rodapé)
}

export default function Logo({ size = 36, className = '', monochrome = false }: LogoProps) {
  const bg = monochrome ? '#f4f0e6' : '#213d34'; // palha (sobre fundo escuro) ou folha-deep
  const ring = monochrome ? '#213d34' : '#c9a04b'; // folha-deep ou ouro
  const leaf = monochrome ? '#213d34' : '#f4f0e6'; // folha-deep ou palha

  const dots = Array.from({ length: 10 }, (_, i) => {
    const a = (i / 10) * Math.PI * 2 - Math.PI / 2;
    const r = 15.5;
    return { x: 18 + Math.cos(a) * r, y: 18 + Math.sin(a) * r, i };
  });

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      className={className}
      role="img"
      aria-label="Gente Preta"
    >
      <circle cx="18" cy="18" r="17.5" fill={bg} />
      {dots.map((d) => (
        <circle key={d.i} cx={d.x} cy={d.y} r="1.15" fill={ring} opacity={d.i % 2 ? 0.55 : 0.95} />
      ))}
      <path
        d="M18 9 C 13.5 11.5, 11.5 15.5, 11.5 20.5 C 15.5 20.5, 19.5 18, 23 12.5 C 20.5 12.5, 19.2 11, 18 9 Z"
        fill={leaf}
      />
      <path d="M18 10 L 15 19.5" stroke={bg} strokeWidth="0.7" fill="none" opacity="0.45" />
    </svg>
  );
}
