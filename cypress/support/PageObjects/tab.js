class tabs {
  home() {
    return cy.get(".shop-menu > .nav > :nth-child(1) > a");
  }
  products() {
    return cy.get(".shop-menu > .nav > :nth-child(2) > a");
  }
  cart() {
    return cy.get(".shop-menu > .nav > :nth-child(3) > a");
  }
  signup_login() {
    return cy.get(".shop-menu > .nav > :nth-child(4) > a");
  }
  testcases() {
    return cy.get(".shop-menu > .nav > :nth-child(5) > a");
  }
  apitesting() {
    return cy.get(".shop-menu > .nav > :nth-child(6) > a");
  }
  vediotutorial() {
    return cy.get(".shop-menu > .nav > :nth-child(7) > a");
  }
  contactus() {
    return cy.get(".shop-menu > .nav > :nth-child(8) > a");
  }
  logout() {
    return cy.get(".shop-menu > .nav > :nth-child(4) > a");
  }
  deleteaccount() {
    return cy.get(".shop-menu > .nav > :nth-child(5) > a");
  }
}
export default new tabs();
