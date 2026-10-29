import { loginPage } from "../pages/LoginPage";
import { inventoryPage } from "../pages/InventoryPage";
import { cartPage } from "../pages/CartPage";
import { checkoutInformationPage } from "../pages/CheckoutInformationPage";
import { checkoutOverviewPage } from "../pages/CheckoutOverviewPage";
import { checkoutCompletePage } from "../pages/CheckoutCompletePage";

describe("SauceDemo", () => {
  beforeEach(function () {
    cy.fixture("auth").as("auth");
    cy.fixture("purchase").as("purchase");
    loginPage.visit();
  });

  it("faz login válido e exibe o catálogo", function () {
    cy.login(this.auth.valid);
    inventoryPage.names().should("have.length", this.purchase.catalog.count);
    inventoryPage.sort().should("have.value", this.purchase.catalog.initialSort);
  });

  it("rejeita credenciais inválidas com mensagem de erro", function () {
    cy.login(this.auth.invalid);
    loginPage.error().should("be.visible").and("contain.text", this.auth.errorMessage);
    loginPage.username().should("have.value", this.auth.invalid.username);
  });

  it("ordena o catálogo por preço crescente", function () {
    cy.login(this.auth.valid);
    inventoryPage.sort().select(this.purchase.catalog.priceSort);
    inventoryPage.prices().should(($prices) => {
      const prices = [...$prices].map((el) => Number(el.innerText.replace("$", "")));
      expect(prices).to.have.length(this.purchase.catalog.count);
      expect(prices).to.deep.equal([...prices].sort((a, b) => a - b));
      expect(prices[0]).to.equal(this.purchase.catalog.lowestPrice);
    });
  });

  it("adiciona a mochila e valida o conteúdo do carrinho", function () {
    cy.login(this.auth.valid);
    cy.addBackpack();
    inventoryPage.badge().should("have.text", String(this.purchase.product.quantity));
    cy.openCart();
    cartPage.items().should("have.length", this.purchase.product.quantity)
      .and("contain.text", this.purchase.product.name);
  });

  it("conclui checkout e valida resumo e confirmação", function () {
    cy.login(this.auth.valid);
    cy.addBackpack();
    cy.openCart();
    cartPage.checkout();
    checkoutInformationPage.fill(this.purchase.customer);
    checkoutInformationPage.continue();
    checkoutOverviewPage.subtotal().should("contain.text", this.purchase.subtotal);
    checkoutOverviewPage.total().should("contain.text", this.purchase.total);
    checkoutOverviewPage.finish();
    checkoutCompletePage.header().should("be.visible")
      .and("have.text", this.purchase.confirmation);
    cy.screenshot("saucedemo-checkout-confirmacao", { capture: "runner" });
  });
});
