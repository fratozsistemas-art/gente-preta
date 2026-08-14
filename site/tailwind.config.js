/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fdf4ff',
          100: '#f9e6ff',
          200: '#f0c2ff',
          300: '#e08aff',
          400: '#c94dff',
          500: '#aa3bff',
          600: '#8f1fe0',
          700: '#7317b3',
          800: '#5c1490',
          900: '#3d0c66',
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
        folha: {
          50: '#eef4ec',
          100: '#d7e6d1',
          300: '#8fae87',
          500: '#3f6b4a',
          700: '#25452e',
          900: '#1f3d2b', // folha profundo
        },
        ouro: {
          300: '#d9bd7a',
          500: '#b8923f', // ouro sóbrio
          700: '#8f701f',
        },
        palha: {
          50: '#faf6ec',
          100: '#f0e6d0',
          300: '#d9c49a', // palha
          500: '#c2a877',
        },
        barro: {
          100: '#f1ded3',
          300: '#c98a63',
          500: '#a3532f', // barro — usado na Ouvidoria/serviço de denúncia
          700: '#6b3620',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
