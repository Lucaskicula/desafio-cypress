// SauceDemo exposes data-test attributes instead of data-cy. Add a data-cy
// alias to those elements before app code runs so specs use only data-cy.
Cypress.on("window:before:load", (win) => {
  const aliases = {
    username: "username",
    password: "password",
    "login-button": "login-button",
    "error-message": "error",
    "product-sort": "product-sort-container",
    "product-name": "inventory-item-name",
    "product-price": "inventory-item-price",
    "add-backpack": "add-to-cart-sauce-labs-backpack",
    "cart-link": "shopping-cart-link",
    "cart-badge": "shopping-cart-badge",
    "cart-item": "inventory-item",
    "checkout-button": "checkout",
    "first-name": "firstName",
    "last-name": "lastName",
    "postal-code": "postalCode",
    "continue-button": "continue",
    "summary-subtotal": "subtotal-label",
    "summary-total": "total-label",
    "finish-button": "finish",
    "complete-header": "complete-header",
  };
  const addAliases = () => {
    Object.entries(aliases).forEach(([dataCy, dataTest]) => {
      win.document
        .querySelectorAll(`[data-test="${dataTest}"]`)
        .forEach((element) => element.setAttribute("data-cy", dataCy));
    });
  };
  addAliases();
  new win.MutationObserver(addAliases).observe(win.document, {
    childList: true,
    subtree: true,
  });
});

beforeEach(() => cy.visit("/"));

Cypress.Commands.add("login", (username = "standard_user", password = "secret_sauce") => {
  cy.get('[data-cy="username"]').type(username);
  cy.get('[data-cy="password"]').type(password);
  cy.get('[data-cy="login-button"]').click();
});
