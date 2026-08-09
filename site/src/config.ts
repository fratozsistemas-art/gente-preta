// URL pública do App Sentinela (webapp funcional). Definido via variável de ambiente
// VITE_APP_URL no momento do build/deploy. Fallback usado apenas em desenvolvimento local.
export const APP_URL: string =
  (import.meta.env.VITE_APP_URL as string | undefined) || 'https://app-sentinela.pages.dev';
