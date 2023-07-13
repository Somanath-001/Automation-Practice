import tab from "../../support/PageObjects/tab";

context("Account creation", () => {
  describe("User creating account", () => {
    it("User should be able to create an account", async () => {
      const email = "test_1@gamil.com";
      const password = "123456789";
      const name = "VISWA KARMA";
      await cy.visit(Cypress.env("url"));
      await cy.get(".productinfo > img").should("be.visible");
      await tab.signup_login().click();
      await cy.get(".signup-form > h2").should("be.text", "New User Signup!");
      await cy
        .get('[data-qa="signup-name"]')
        .type(name)
        .should("have.value", name);
      await cy
        .get('[data-qa="signup-email"]')
        .type(email)
        .should("have.value", email);
      await cy.get('[data-qa="signup-button"]').click();
      await cy
        .get(".login-form > :nth-child(1)")
        .should("be.text", "Enter Account Information");
      await cy.get("#id_gender1").check().should("be.checked");
      await cy.get('[data-qa="password"]').type(password);
      await cy.get('[data-qa="days"]').select("10");
      await cy.get('[data-qa="months"]').select("11");
      await cy.get('[data-qa="years"]').select("1997");
      await cy.get("#newsletter").check().should("be.checked");
      await cy.get("#optin").check().should("be.checked");
      await cy.get('[data-qa="first_name"]').type("Viswa");
      await cy.get('[data-qa="last_name"]').type("Karma");
      await cy.get('[data-qa="company"]').type("Abc Solutions");
      await cy.get('[data-qa="address"]').type("123, b block, AndhraPradesh");
      await cy.get('[data-qa="country"]').select("India");
      await cy.get('[data-qa="state"]').type("Andhra Pradesh");
      await cy.get('[data-qa="city"]').type("Tadipatri");
      await cy.get('[data-qa="zipcode"]').type(515414);
      await cy.get('[data-qa="mobile_number"]').type(1234567890);
      await cy.get('[data-qa="create-account"]').click();
      await cy.get("b").should("be.text", "Account Created!");
      await cy.get('[data-qa="continue-button"]').click();
      await cy
        .get(":nth-child(10) > a")
        .should("be.text", " Logged in as " + name);
      await tab.deleteaccount().click();
      await cy.get("b").should("be.text", "Account Deleted!");
      await cy.get('[data-qa="continue-button"]').click();
    });
  });
});
