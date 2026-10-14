# Casos de teste — SauceDemo

Base URL: `https://www.saucedemo.com`  
Credencial de demonstração: `standard_user` / `secret_sauce`.

## CT-01 — Login válido e catálogo

1. Abrir a página inicial.
2. Informar as credenciais válidas e entrar.
3. Confirmar que os seis produtos aparecem e que a ordenação inicial é A–Z.

## CT-02 — Login inválido

1. Abrir a página inicial.
2. Informar `standard_user` e uma senha incorreta.
3. Confirmar a mensagem de credenciais inválidas e a permanência do usuário no campo.

## CT-03 — Ordenação por preço crescente

1. Entrar com credenciais válidas.
2. Selecionar preço crescente.
3. Confirmar seis preços em ordem numérica crescente e preço mínimo de `$7.99`.

## CT-04 — Inclusão de produto no carrinho

1. Entrar com credenciais válidas.
2. Adicionar Sauce Labs Backpack ao carrinho.
3. Confirmar badge `1`, um item no carrinho e o nome do produto.

## CT-05 — Checkout concluído

1. Entrar e adicionar Sauce Labs Backpack.
2. Abrir o carrinho e iniciar checkout.
3. Preencher nome, sobrenome e CEP.
4. Confirmar subtotal de `$29.99` e total de `$32.39`.
5. Finalizar e confirmar a mensagem de sucesso.

## Estratégia de seletores

Todos os comandos de consulta e interação nas especificações usam exclusivamente
`[data-cy="..."]`. O SauceDemo público fornece `data-test` em vez de `data-cy`;
`cypress/support/e2e.js` cria aliases `data-cy` nesses elementos antes dos testes.
A aplicação pública não é alterada.
