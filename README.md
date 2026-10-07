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

## Arquitetura CEOS (Fase 3) — Variantes de marca + Idiomas em runtime
Camada **Canon / Variantes / Idiomas / Apresentação**, trocável em runtime (sem rebuild/redeploy), via botão único no Header (site) e TopBar (app):

- `shared/data/brand-canon.ts` — **Canon**: texto/identidade de marca por versão (`BrandVersionId`), pré-existente da Fase 1.
- `shared/data/variants.ts` — **Variantes**: `VariantId = 'gp0' | 'pp1' | 'pp2'`, cada uma referenciando um `BrandVersionId` do Canon + metadados de apresentação (tratamento de hero, imagem CC + crédito, chaves de CTA, tema da faixa de missão, tema do rodapé, exibição da seção de notícias). `DEFAULT_VARIANT = 'pp1'`.
  - **GP0** — Gente Preta (paleta original, hero slideshow).
  - **PP1** — Pulso Preto, hero com foto de família (placeholder CC — Flickr).
  - **PP2** — Pulso Preto, hero com foto de mulher (placeholder CC — PickPik), inclui seção "Últimas Notícias".
- `shared/data/locales.ts` — **Idiomas**: `LocaleId = 'pt' | 'es'`, dicionário `TRANSLATIONS` + `translate()`. `DEFAULT_LOCALE = 'pt'`. Arquitetado para permitir `'en'` futuramente sem alterar a API.
- `shared/context/AppearanceContext.tsx` — `AppearanceProvider` + hook `useAppearance()` (`{variantId, variant, brand, localeId, setVariantId, setLocaleId, t}`), persiste escolha em `localStorage` (`pulsopreto:variant`, `pulsopreto:locale`).
- `shared/components/VariantSwitcher.tsx` — dropdown (🎛️) com cartões de variante + botões de idioma, compartilhado entre site e app.
- Paleta de marca oficial Pulso Preto (`pulso.verde/creme/dourado/terracota/marrom`) adicionada aos `tailwind.config.js` de ambos os projetos, coexistindo com a paleta legada `folha/ouro/palha/barro` (GP0) — a troca de tema é feita via classes condicionais no código, não por rebuild.
- **Limitação conhecida**: apenas os textos de UI (Home, Header, Footer, CTAs) estão traduzidos PT/ES; o conteúdo clínico da Anemia Falciforme (abaixo) ainda está só em português — tradução ES do conteúdo técnico é item de próxima sprint.
- **Painel administrativo de troca de marca**: explicitamente **não iniciado** nesta fase, por decisão do usuário.

## Conteúdo aprofundado por audiência — Anemia Falciforme
Primeira condição da Biblioteca de Saúde com conteúdo clínico completo e estratificado por público, acessível via abas na página de detalhe (`/saude/raras-autoimunes/anemia-falciforme` no site; mesma rota no app):

- `shared/data/anemiaFalciforme.ts` — conteúdo único compartilhado site+app, com:
  - **Médicos e pesquisadores**: fisiopatologia (mutação HBB, genótipos HbSS/HbSC/HbS-beta-thal), epidemiologia, diagnóstico, tratamento e condutas (hidroxiureia, voxelotor, crizanlizumabe, terapia gênica, TCTH), sinais de alarme, diretrizes/PCDT.
  - **Enfermeiros e técnicos**: sinais que a equipe deve reconhecer, manejo da crise de dor, cuidado continuado — com atenção explícita ao viés no manejo da dor em pacientes negros.
  - **Usuários**: linguagem acessível, sinais de alerta, cuidados do dia a dia, onde buscar ajuda no SUS — contextualizando o racismo no tratamento da dor como relevante para a comunidade.
  - Fontes: ABRADFAL, PCDT do Ministério da Saúde, Programa Nacional de Triagem Neonatal, diretrizes NHLBI/ASH.
  - Imagem hero placeholder CC (micrografia SEM comparando hemácias normais e falciformes, domínio público/Pixnio).
- `site/src/data/deepContentRegistry.ts` e `app/src/data/deepContentRegistry.ts` — registro `disease.id → DiseaseDeepContent`.
- `site/src/components/AudienceContentTabs.tsx` (desktop) e `app/src/components/AudienceContentTabs.tsx` (mobile compacto) — seletor de 3 abas (usuário/enfermeiro/médico), rótulos via `useAppearance().t()`.
- `Disease.hasDeepContent?: boolean` (em `diseases.ts` de ambos os projetos) ativa a renderização condicional do hero + abas em `DiseaseDetail.tsx`.
- **Próximo passo natural**: replicar esse padrão de conteúdo estratificado para as demais condições prioritárias da Biblioteca de Saúde.

## Não implementado / próximos passos
- **Sprint imediata**: QA de acessibilidade (Lighthouse, leitor de tela); revisão clínica formal do conteúdo da Biblioteca pelo Conselho Consultivo; verificação funcional end-to-end do VariantSwitcher nas 3 variantes × 2 idiomas em navegador real; tradução ES do conteúdo clínico da Anemia Falciforme.
- **Sprint 2**: busca com biblioteca dedicada (Fuse.js) se o volume de condições crescer; conectar formulário de `/baixar` a serviço de e-mail transacional (SendGrid/Postmark) respeitando LGPD — hoje o submit é apenas local (sem envio real); OG images por rota; sitemap.xml atualizado; substituir imagens placeholder CC (PP1/PP2/Anemia Falciforme) pelas fotos reais do projeto.
- **Sprint 3**: nomes reais no Conselho Consultivo (`/transparencia`); histórias reais em `/memoria`; canal oficial no YouTube; auditoria completa dos Quality Gates (QG1–QG6) do CASIO; painel administrativo de troca de variante de marca (explicitamente fora de escopo até decisão do usuário).

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
