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

Pendente: três execuções reais consecutivas da suíte completa.
