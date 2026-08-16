# Gente Preta — Site Institucional + App Sentinela

## Visão geral
- **Nome**: Gente Preta — Sentinela de Saúde da População Negra
- **Objetivo**: reduzir inequidades em saúde enfrentadas pela população negra no SUS, começando pelo Distrito Federal, por meio de (1) um site institucional com base científica, transparência e governança pública, e (2) o App Sentinela (webapp), com escuta longitudinal, navegação SUS e radar comunitário.
- **Financiamento/parceiros**: AECID, SEJUS/DF, APRECIA, FEPECS, UnB, FIOCRUZ, CUFA/DF, ABRADFAL, CASIO V2 Studio.

## Arquitetura de deploy (Opção A — domínio único Cloudflare)
Monorepo com dois SPAs React/Vite compartilhando um único Worker Cloudflare Pages:
- `site/` — Site institucional (React + Vite + Tailwind + React Router), servido na raiz `/`.
- `app/` — App Sentinela (React + Vite + Tailwind + Zustand), servido em `/app/`.
- `worker/index.js` — Worker mínimo que serve os assets (`dist/`) e aplica fallback de SPA por prefixo de rota (`/app/*` → `dist/app/index.html`; qualquer outra rota → `dist/index.html`).
- `npm run build` na raiz: instala dependências dos dois projetos, builda cada um e monta `dist/` combinado (`assemble`).

## Rotas do Site Institucional (`site/src/App.tsx`)
| Rota | Página | Observação |
|---|---|---|
| `/` | Home | Hero, stats, serviços-duro, temas prioritários/emergentes, parceiros |
| `/sobre` | About | |
| `/saude` | HealthLibrary (legado) | Biblioteca por 9 categorias (`data/diseases.ts`) — mantida para deep-links `/saude/:categoryId/:diseaseId` |
| `/saude/:categoryId/:diseaseId` | DiseaseDetail | Detalhe de condição (base `diseases.ts`) |
| **`/biblioteca-saude`** | **BibliotecaSaude** | **Nova (v4.2)** — 10 categorias, 33 condições, busca + filtros (categoria/tipo de evidência) |
| `/biblioteca` | *redirect* → `/biblioteca-saude` | Alias |
| `/ensaios-clinicos` | ClinicalTrials | **Reescrita (v4.2)** — fases, direitos, histórico (Tuskegee/Lacks/Brasil), plataformas oficiais, checklist, 3 instrumentos de coleta do projeto |
| `/ensaios` | *redirect* → `/ensaios-clinicos` | Alias |
| `/memoria` | Memory | |
| `/comunidade` | Community | |
| `/rede-sus` | SusNetwork | UBS/UPA/CEPAV/CAPS/Hospitais por Região de Saúde do DF |
| `/transparencia` | Transparency | LGPD, 4 níveis de consentimento, 3 domínios de dados, governança |
| `/arquitetura` | Architecture | Sistema de design + Relatório de Arquitetura (Markdown) |
| **`/baixar`** | **AppAccess** | **Nova rota canônica (v4.2)** — status radical, cronograma, como funciona, direitos LGPD, formulário de acesso antecipado, FAQ, seções profissionais/acadêmica |
| `/baixe-o-app` | *redirect* → `/baixar` | Alias |
| `/acessar-app` | AppAccess | Rota legada mantida (mesmo componente de `/baixar`) |
| `*` | NotFound | 404 |

### Pacote v4.2 (16/08/2026) — 3 páginas que retornavam 404
As três páginas abaixo foram criadas a partir do pacote de conteúdo CASIO v10.0
("Gente Preta v4.2 — Conteúdo para 3 Páginas 404"), rastreável a
`BASE CIENTIFICA DE DOENÇAS - NEGROS.pdf`, `GUIA DA SAUDE -DOENÇAS NEGROS E DX.pdf`
e à Arquitetura Reconciliada V4.1:

- **`/biblioteca-saude`** — dados em `site/src/data/biblioteca.ts`
- **`/ensaios-clinicos`** — dados em `site/src/data/ensaiosClinicosContent.ts`
- **`/baixar`** — dados em `site/src/data/baixarAppContent.ts`

Cada arquivo de dados segue um schema uniforme (`hero`, seções com `title`/conteúdo
específico, `footer_ctas`) espelhando os JSONs originais entregues pelo CASIO,
para facilitar manutenção futura.

## Dados e armazenamento
- Não há backend/banco de dados neste site — todo o conteúdo é estático, embutido em arquivos TypeScript (`site/src/data/*.ts`).
- O formulário de acesso antecipado em `/baixar` é client-side apenas (sem persistência real ainda) — ver "Próximos passos".
- App Sentinela (`app/`) usa Zustand para estado local; não possui persistência em Cloudflare D1/KV/R2 nesta fase.

## Funcionalidades já implementadas
- Site institucional completo com 15 rotas (incluindo aliases).
- Biblioteca de Saúde nova: 33 condições em 10 categorias, com busca textual e filtros por categoria/tipo de evidência.
- Ensaios Clínicos: conteúdo educativo completo (fases, direitos, reconhecimento histórico, checklist, distinção dos 3 instrumentos de coleta do projeto).
- Baixe o App: transparência radical de status (concluído/andamento/pendente), cronograma público, explicação passo a passo, consentimento LGPD (4 níveis), formulário de lista de espera, FAQ (7 perguntas).
- Ícones autorais SVG (abstratos, sem simbologia médica literal) para todas as categorias, incluindo as duas novas (Renais/Genéticas, HIV e Prevenção).

## Não implementado / próximos passos
- **Sprint imediata**: QA de acessibilidade (Lighthouse, leitor de tela); revisão clínica formal do conteúdo da Biblioteca pelo Conselho Consultivo.
- **Sprint 2**: busca com biblioteca dedicada (Fuse.js) se o volume de condições crescer; conectar formulário de `/baixar` a serviço de e-mail transacional (SendGrid/Postmark) respeitando LGPD — hoje o submit é apenas local (sem envio real); OG images por rota; sitemap.xml atualizado.
- **Sprint 3**: nomes reais no Conselho Consultivo (`/transparencia`); histórias reais em `/memoria`; canal oficial no YouTube; auditoria completa dos Quality Gates (QG1–QG6) do CASIO.

## Como rodar localmente (sandbox)
```bash
cd /home/user/webapp
npm run build                 # instala deps, builda site + app, monta dist/
pm2 start ecosystem.config.cjs
curl http://localhost:3000/biblioteca-saude
curl http://localhost:3000/ensaios-clinicos
curl http://localhost:3000/baixar
```

## Deploy
- **Plataforma**: **Cloudflare Pages** (projeto `gente-preta`), modo avançado com `_worker.js` customizado para o fallback de SPA duplo (site + app).
- **URL de produção**: https://gente-preta.pages.dev
- **URL alternativa (Worker plano, mantida)**: https://gente-preta.fratozsistemas.workers.dev
- **Conta Cloudflare**: fratozsistemas@gmail.com (BYOK — token do próprio usuário via Deploy panel).
- **Stack**: React + TypeScript + Vite + Tailwind CSS + React Router + `_worker.js` mínimo (fallback de SPA por prefixo de rota, sem Pages Functions).
- **Comando de deploy**: `npm run build && npx wrangler pages deploy dist --project-name gente-preta --branch main` (a etapa `assemble` do build já copia `worker/index.js` para `dist/_worker.js`, ativando o modo avançado do Pages).
- **Importante**: `wrangler.jsonc` está no formato Worker+Assets (`main` + `assets.binding`), por isso o Pages ignora esse arquivo e exige `--project-name`/`--branch` explícitos no comando; isso é esperado e não é um erro.
- **Status**: ✅ Deployado em produção no Cloudflare Pages — 11/11 rotas verificadas com HTTP 200 (incluindo os 3 novos endpoints e seus aliases, mais fallback SPA para rotas inexistentes).
- **Última atualização**: 16/08/2026 — deploy no Cloudflare Pages (projeto `gente-preta`) via BYOK.
