# Testes E2E com Cypress — SauceDemo

Projeto independente para automatizar cinco fluxos do site público
[SauceDemo](https://www.saucedemo.com).

## Requisitos

- Node.js e npm
- Conexão com a internet para acessar o SauceDemo

## Instalação e execução

```bash
npm install
npm run cy:open
```

Para executar todos os casos em modo headless:

```bash
npm run cy:run
```

O Cypress salva vídeos em `cypress/videos/` e capturas de falhas em
`cypress/screenshots/`. A execução aprovada entregue está em
[`evidencias/execucao-cypress.mp4`](evidencias/execucao-cypress.mp4), com a
captura do checkout em
[`evidencias/checkout-confirmacao.png`](evidencias/checkout-confirmacao.png).

## Casos e seletores

Os cinco casos estão em [docs/casos-de-teste.md](docs/casos-de-teste.md).
As especificações usam exclusivamente seletores `[data-cy="..."]`. Como o
SauceDemo público expõe `data-test`, o suporte do Cypress cria aliases `data-cy`
antes dos testes, sem alterar o site.
