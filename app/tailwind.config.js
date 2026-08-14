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
        // Paleta ancestral-cultural (adição não-disruptiva, espelhando site/) —
        // usada para o tratamento sóbrio dos temas emergentes ("Atual").
        ouro: {
          300: '#d9bd7a',
          500: '#b8923f',
          700: '#8f701f',
        },
        palha: {
          50: '#faf6ec',
          100: '#f0e6d0',
          300: '#d9c49a',
          500: '#c2a877',
        },
      },
      fontFamily: {
        sans: ['system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
