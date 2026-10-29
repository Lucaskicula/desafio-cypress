export const cartPage = {
  items() { return cy.get('[data-test="inventory-item"]'); },
  checkout() { return cy.get('[data-test="checkout"]').click(); },
};
