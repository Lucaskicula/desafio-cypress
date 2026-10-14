# Casos de teste — SauceDemo

## TC-01 — Login com credenciais válidas

**Pré-Condições:** A página inicial do SauceDemo está acessível; usuário de demonstração `standard_user` disponível.

**Passos de Execução:**
1. Acessar `https://www.saucedemo.com/`.
2. Preencher o campo de usuário.
3. Preencher o campo de senha.
4. Clicar em “Login”.

**Dados de Entrada:**
- Usuário: `standard_user`
- Senha: `secret_sauce`

**Resultado Esperado:** Usuário autenticado e catálogo exibido com seis produtos; ordenação inicial definida como A–Z.

**Resultado Obtido:** Catálogo exibido com seis produtos e ordenação A–Z.

**Status:** Aprovado (execução automatizada Cypress).

---

## TC-02 — Login com senha inválida

**Pré-Condições:** A página inicial do SauceDemo está acessível.

**Passos de Execução:**
1. Acessar `https://www.saucedemo.com/`.
2. Preencher o usuário `standard_user`.
3. Preencher uma senha inválida.
4. Clicar em “Login”.

**Dados de Entrada:**
- Usuário: `standard_user`
- Senha: `senha_incorreta`

**Resultado Esperado:** O login não deve ser realizado; deve ser exibida mensagem informando que usuário e senha não correspondem, e o usuário informado deve permanecer no campo.

**Resultado Obtido:** O login foi rejeitado e a mensagem de credenciais inválidas foi exibida; o usuário permaneceu preenchido.

**Status:** Aprovado (execução automatizada Cypress).

---

## TC-03 — Ordenação de produtos por preço crescente

**Pré-Condições:** Usuário autenticado e catálogo de produtos exibido.

**Passos de Execução:**
1. Acessar `https://www.saucedemo.com/`.
2. Entrar com as credenciais válidas.
3. Abrir a lista de ordenação dos produtos.
4. Selecionar “Price (low to high)”.

**Dados de Entrada:**
- Usuário: `standard_user`
- Senha: `secret_sauce`
- Ordenação: preço crescente (`lohi`)

**Resultado Esperado:** Os seis produtos devem ser apresentados em ordem numérica crescente de preço; o primeiro produto deve custar `$7.99`.

**Resultado Obtido:** Os seis preços foram apresentados em ordem crescente; o menor preço foi `$7.99`.

**Status:** Aprovado (execução automatizada Cypress).

---

## TC-04 — Adicionar produto ao carrinho

**Pré-Condições:** Usuário autenticado e catálogo de produtos exibido; carrinho sem itens antes do início do caso.

**Passos de Execução:**
1. Acessar `https://www.saucedemo.com/`.
2. Entrar com as credenciais válidas.
3. Clicar em “Add to cart” no produto Sauce Labs Backpack.
4. Abrir o carrinho.

**Dados de Entrada:**
- Usuário: `standard_user`
- Senha: `secret_sauce`
- Produto: Sauce Labs Backpack

**Resultado Esperado:** O badge do carrinho deve indicar `1`; o carrinho deve conter exatamente um item, Sauce Labs Backpack.

**Resultado Obtido:** Badge exibiu `1`; o carrinho apresentou um item com o nome Sauce Labs Backpack.

**Status:** Aprovado (execução automatizada Cypress).

---

## TC-05 — Finalizar compra pelo checkout

**Pré-Condições:** Usuário autenticado; carrinho contém Sauce Labs Backpack.

**Passos de Execução:**
1. Acessar `https://www.saucedemo.com/` e entrar com credenciais válidas.
2. Adicionar Sauce Labs Backpack ao carrinho.
3. Abrir o carrinho e clicar em “Checkout”.
4. Preencher nome, sobrenome e CEP.
5. Clicar em “Continue”.
6. Conferir os valores do resumo e clicar em “Finish”.

**Dados de Entrada:**
- Usuário: `standard_user`
- Senha: `secret_sauce`
- Nome: `Ana`
- Sobrenome: `Teste`
- CEP: `01001000`
- Produto: Sauce Labs Backpack

**Resultado Esperado:** Resumo deve apresentar subtotal `$29.99` e total `$32.39`; ao finalizar, deve ser exibida a confirmação “Thank you for your order!”.

**Resultado Obtido:** Subtotal `$29.99`, total `$32.39` e confirmação “Thank you for your order!” exibidos.

**Status:** Aprovado (execução automatizada Cypress).
