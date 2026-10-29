# Refatoração — atividade 2

Diagnóstico da A1 (`eef1d2f`), preservando os cinco cenários e suas verificações.

| Onde / smell (problema) | Solução |
| --- | --- |
| `saucedemo.cy.js`: seletores repetidos misturam detalhes do DOM e intenção dos casos. | Um Page Object por tela; seletores exclusivamente nesses objetos. |
| `support/e2e.js`: aliases via `MutationObserver` alteram o DOM e criam dependência de sincronização artificial. | Usar diretamente os atributos nativos `data-test`. |
| Spec e comando login: credenciais, cliente e resultados embutidos dificultam manutenção. | Fixtures de autenticação (sucesso e falha) e compra. |
| Spec: login, adicionar produto e abrir carrinho repetidos. | Três comandos de negócio delegam aos Page Objects. |
| Ordenação: `.then()` lê preços uma única vez e pode capturar renderização intermediária. | `.should()` reavalia a coleção e todas as verificações de preço. |
| `support/e2e.js`: visita global esconde a pré-condição de qualquer futura spec. | Abertura explícita no `beforeEach` desta suíte; isolamento por teste. |

Não havia `cy.wait(ms)` na A1. A refatoração mantém zero esperas fixas;
sincronização por comandos e asserções retentáveis, sem retries de testes.

## Validação

Em 28/10/2026 (America/Sao_Paulo), `npm run cy:stable` (equivalente a
`node scripts/validate-stability.cjs`) executou a suíte real no SauceDemo:

| Rodada | Aprovados | Falhas / pulados | Tentativas por teste |
| --- | --- | --- | --- |
| 1 | 5/5 | 0 / 0 | 1 |
| 2 | 5/5 | 0 / 0 | 1 |
| 3 | 5/5 | 0 / 0 | 1 |

Cypress 16.2.0, Electron 146 headless, Node 24.22.1; isolamento habilitado.
Resumos reais em `evidencias/atividade-2/execucao-{1,2,3}.json` e vídeo/captura
da última rodada na mesma pasta. Os cinco casos TC-01 a TC-05 da A1 foram
mantidos, incluindo todas as verificações originais. Três rodadas verdes
comprovam esta execução; o site público continua sendo uma dependência externa.
