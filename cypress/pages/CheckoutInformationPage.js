export const checkoutInformationPage = {
  fill({ firstName, lastName, postalCode }) {
    cy.get('[data-test="firstName"]').type(firstName);
    cy.get('[data-test="lastName"]').type(lastName);
    return cy.get('[data-test="postalCode"]').type(postalCode);
  },
  continue() { return cy.get('[data-test="continue"]').click(); },
};
