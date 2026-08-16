/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Recalibrado (era um roxo/lilás herdado do MVP original, sem relação com a
        // paleta Ìlera — sinalizado como inconsistente). Nova rampa derivada do matiz
        // de folha-500 (#3d6e51), mantendo as mesmas 10 chaves numéricas para não
        // quebrar nenhuma classe já usada no código (brand-50..brand-900 continuam
        // válidas em todo o site/app, agora coerentes com o sistema ancestral-cultural).
        brand: {
          50: '#f1f6f3',
          100: '#dfece4',
          200: '#bddbc9',
          300: '#96c5a9',
          400: '#62a87e',
          500: '#3d6e51',
          600: '#325a43',
          700: '#254332',
          800: '#192c21',
          900: '#0e1912',
        },
        earth: {
          50: '#fbf7f2',
          100: '#f2e6d8',
          200: '#e2c6a3',
          300: '#cd9f6f',
          400: '#b8794a',
          500: '#96562f',
          600: '#7a4326',
          700: '#5f351f',
          800: '#452718',
          900: '#2b170e',
        },
        // Paleta ancestral-cultural (adição não-disruptiva — não substitui brand/earth,
        // usada em elementos editoriais/ancestrais e no serviço-duro embutido na home).
        // Recalibrada a partir da referência de design "Ìlera" (V2/V3, cores em oklch()
        // com equivalência hex documentada) para maior precisão cromática, mantendo a
        // estrutura numérica de shades já usada no código (sem quebrar classes existentes).
        folha: {
          50: '#eef4ec',
          100: '#d7e6d1',
          300: '#a4c3af', // folha-soft (ref. Ìlera)
          500: '#3d6e51', // folha (ref. Ìlera)
          700: '#2c4f3c',
          900: '#213d34', // folha-deep (ref. Ìlera)
          deep: '#213d34',
          soft: '#a4c3af',
        },
        ouro: {
          300: '#e0c589',
          500: '#c9a04b', // ouro (ref. Ìlera)
          700: '#957237', // ouro-deep (ref. Ìlera)
          deep: '#957237',
        },
        palha: {
          50: '#f7f4ec',
          100: '#f4f0e6', // palha (ref. Ìlera) — background editorial padrão
          300: '#e5dcc9', // palha-deep (ref. Ìlera)
          500: '#c2a877',
          deep: '#e5dcc9',
        },
        barro: {
          100: '#f1ded3',
          300: '#c98a63',
          500: '#94533a', // barro (ref. Ìlera) — USO RESTRITO: ouvidoria/denúncia/alerta
          700: '#6b3620',
        },
        // Novos tokens da referência Ìlera (adição pura, sem uso prévio no código —
        // disponíveis para tratamento editorial: texto primário/secundário e divisores).
        tinta: {
          DEFAULT: '#2a2d2b',
          dim: '#5c605c',
        },
        linha: '#dcd6c9',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
}
