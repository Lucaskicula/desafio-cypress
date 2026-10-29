export const loginPage = {
  visit() { return cy.visit("/"); },
  username() { return cy.get('[data-test="username"]'); },
  error() { return cy.get('[data-test="error"]'); },
  login({ username, password }) {
    this.username().type(username);
    cy.get('[data-test="password"]').type(password, { log: false });
    return cy.get('[data-test="login-button"]').click();
  },
};
