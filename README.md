# Testes E2E com Cypress — SauceDemo

Projeto independente para automatizar cinco fluxos do site público
[SauceDemo](https://www.saucedemo.com).

## Requisitos

- Node.js e npm
- Conexão com a internet para acessar o SauceDemo

## Instalação e execução

```bash
npm ci
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
Os seletores nativos `data-test` ficam exclusivamente em `cypress/pages/`,
com um Page Object por tela. Os três comandos em `cypress/support/commands.js`
reutilizam login, adição da mochila e abertura do carrinho. Dados de entrada
e resultados esperados ficam em `cypress/fixtures/`; a fixture de autenticação
atende os cenários de sucesso e falha.

## Atividade 2

O diagnóstico e as soluções estão em [REFATORACAO.md](REFATORACAO.md).
Para repetir a validação completa três vezes consecutivas:

```bash
npm run cy:stable
```

O comando usa Electron, mantém o isolamento dos testes, desabilita retries
de testes e exige cinco aprovações em cada execução, sem casos pulados.
Interrompe na primeira falha e salva os resultados em
`evidencias/atividade-2/execucao-{1,2,3}.json`. As asserções do Cypress
continuam retentáveis, sem esperas fixas. As evidências antigas acima são da A1.
