// Worker mínimo que serve os assets estáticos combinados (Site Institucional na raiz
// + App Sentinela em /app/) e aplica fallback de SPA por PREFIXO de rota — ou seja,
// uma URL não encontrada sob /app/* cai no dist/app/index.html (SPA do App), e uma
// URL não encontrada em qualquer outro caminho cai no dist/index.html (SPA do Site).
// Isso é necessário porque `not_found_handling: single-page-application` do Cloudflare
// Assets sozinho só conhece UM index.html — aqui temos dois SPAs independentes no
// mesmo Worker (Opção A da estratégia de deploy).
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // 1) Tenta servir o asset exatamente como pedido (JS, CSS, favicon, etc.)
    let response = await env.ASSETS.fetch(request);
    if (response.status !== 404) {
      return response;
    }

    // 2) Fallback de SPA por prefixo de rota.
    const isAppRoute = url.pathname === '/app' || url.pathname.startsWith('/app/');
    const fallbackPath = isAppRoute ? '/app/index.html' : '/index.html';
    const fallbackUrl = new URL(fallbackPath, url.origin);

    response = await env.ASSETS.fetch(new Request(fallbackUrl, request));
    return response;
  },
};
