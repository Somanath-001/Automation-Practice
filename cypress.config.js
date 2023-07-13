const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 6000,
  env: {
    url: "https://www.automationexercise.com/",
  },
  e2e: {
    setupNodeEvents(on, config) {
      specPattern: "cypress/e2e/*/*.cy.js";
      // implement node event listeners here
    },
  },
});
