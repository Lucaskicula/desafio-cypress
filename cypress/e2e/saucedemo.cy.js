describe("SauceDemo", () => {
  it("faz login válido e exibe o catálogo", () => {
    cy.login();
    cy.get('[data-cy="product-name"]').should("have.length", 6);
    cy.get('[data-cy="product-sort"]').should("have.value", "az");
  });

  it("rejeita credenciais inválidas com mensagem de erro", () => {
    cy.login("standard_user", "senha_incorreta");
    cy.get('[data-cy="error-message"]')
      .should("be.visible")
      .and("contain.text", "Username and password do not match");
    cy.get('[data-cy="username"]').should("have.value", "standard_user");
  });

  it("ordena o catálogo por preço crescente", () => {
    cy.login();
    cy.get('[data-cy="product-sort"]').select("lohi");
    cy.get('[data-cy="product-price"]').then(($prices) => {
      const prices = [...$prices].map((el) => Number(el.innerText.replace("$", "")));
      expect(prices).to.have.length(6);
      expect(prices).to.deep.equal([...prices].sort((a, b) => a - b));
      expect(prices[0]).to.equal(7.99);
    });
  });

  it("adiciona a mochila e valida o conteúdo do carrinho", () => {
    cy.login();
    cy.get('[data-cy="add-backpack"]').click();
    cy.get('[data-cy="cart-badge"]').should("have.text", "1");
    cy.get('[data-cy="cart-link"]').click();
    cy.get('[data-cy="cart-item"]').should("have.length", 1);
    cy.get('[data-cy="cart-item"]').should("contain.text", "Sauce Labs Backpack");
  });

  it("conclui checkout e valida resumo e confirmação", () => {
    cy.login();
    cy.get('[data-cy="add-backpack"]').click();
    cy.get('[data-cy="cart-link"]').click();
    cy.get('[data-cy="checkout-button"]').click();
    cy.get('[data-cy="first-name"]').type("Ana");
    cy.get('[data-cy="last-name"]').type("Teste");
    cy.get('[data-cy="postal-code"]').type("01001000");
    cy.get('[data-cy="continue-button"]').click();
    cy.get('[data-cy="summary-subtotal"]').should("contain.text", "$29.99");
    cy.get('[data-cy="summary-total"]').should("contain.text", "$32.39");
    cy.get('[data-cy="finish-button"]').click();
    cy.get('[data-cy="complete-header"]')
      .should("be.visible")
      .and("have.text", "Thank you for your order!");
    cy.screenshot("saucedemo-checkout-confirmacao", { capture: "runner" });
  });
});
