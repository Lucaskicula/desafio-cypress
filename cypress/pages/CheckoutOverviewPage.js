export const checkoutOverviewPage = {
  subtotal() { return cy.get('[data-test="subtotal-label"]'); },
  total() { return cy.get('[data-test="total-label"]'); },
  finish() { return cy.get('[data-test="finish"]').click(); },
};
