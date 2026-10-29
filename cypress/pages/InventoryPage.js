export const inventoryPage = {
  names() { return cy.get('[data-test="inventory-item-name"]'); },
  sort() { return cy.get('[data-test="product-sort-container"]'); },
  prices() { return cy.get('[data-test="inventory-item-price"]'); },
  badge() { return cy.get('[data-test="shopping-cart-badge"]'); },
  addBackpack() { return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click(); },
  openCart() { return cy.get('[data-test="shopping-cart-link"]').click(); },
};
