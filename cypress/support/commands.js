import { loginPage } from "../pages/LoginPage";
import { inventoryPage } from "../pages/InventoryPage";

Cypress.Commands.add("login", (credentials) => loginPage.login(credentials));
Cypress.Commands.add("addBackpack", () => inventoryPage.addBackpack());
Cypress.Commands.add("openCart", () => inventoryPage.openCart());
