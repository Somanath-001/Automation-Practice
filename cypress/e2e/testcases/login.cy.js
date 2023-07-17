import tab from "../../support/PageObjects/tab";
import field from "../../support/PageObjects/field";

describe("User login with Valid credentials", () => {
  it("User should be able to login with valid credentials", async () => {
    const email = "test_0018@gmail.com";
    const password = "Royal@0018";
    const name = "Somanath Ammineni";
    await cy.visit(Cypress.env("url"));

    await tab.signup_login().click();
    await field.email().type(email);
    await field.password().type(password);
    await cy.get('[data-qa="login-button"]').click();

    await cy
      .get(":nth-child(10) > a")
      .should("be.text", " Logged in as " + name);
  });
});

// user login with invalid credentials

describe("login with invalid email ", () => {
  it("user should not ne login with invalid email", async () => {
    const invalidemail = "test_0018gmail.com";
    const password = "Royal@0018";
    const name = "Somanath Ammineni";
    await cy.visit(Cypress.env("url"));

    await tab.signup_login().click();
    await field.email().type(invalidemail);
    await field.password().type(password);
    await cy.get('[data-qa="login-button"]').click();

    await cy
      .get(".login-form > form > p")
      .should("be.text", "Your email or password is incorrect!"); // User should be getting error
  });
});

// user login  with invalid password
describe("login with invalid password ", () => {
  it("user should not be login with invalid password", async () => {
    const email = "test_0018gmail.com";
    const invalidpassword = "Royal@0";
    const name = "Somanath Ammineni";
    await cy.visit(Cypress.env("url"));

    await tab.signup_login().click();
    await field.email().type(email);
    await field.password().type(invalidpassword);
    await cy.get('[data-qa="login-button"]').click();

    await cy
      .get(".login-form > form > p")
      .should("be.text", "Your email or password is incorrect!"); // User should be getting error
  });
});
