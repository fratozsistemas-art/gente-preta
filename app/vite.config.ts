import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// O App Sentinela é publicado sob o subcaminho /app/ do mesmo domínio do
// Site Institucional (ver docs/DEPLOY — Opção A: um único Worker Cloudflare).
// Em desenvolvimento local mantemos base "/" para facilitar testes isolados.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/app/' : '/',
  server: {
    host: true,
    allowedHosts: true,
  },
  preview: {
    host: true,
    allowedHosts: true,
  },
}))
