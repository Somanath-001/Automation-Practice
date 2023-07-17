class field {
  email() {
    return cy.get('[data-qa="login-email"]');
  }
  password() {
    return cy.get('[data-qa="login-password"]');
  }
  firstname() {
    return cy.get('[data-qa="first_name"]');
  }
  lastname() {
    return cy.get('[data-qa="last_name"]');
  }
  password1() {
    return cy.get('[data-qa="password"]');
  }
  company() {
    return cy.get('[data-qa="company"]');
  }
  address() {
    return cy.get('[data-qa="address"]');
  }
  country() {
    return cy.get('[data-qa="country"]');
  }
  state() {
    return cy.get('[data-qa="state"]');
  }
  city() {
    return cy.get('[data-qa="city"]');
  }
  zipcode() {
    return cy.get('[data-qa="zipcode"]');
  }
  mobilenumber() {
    return cy.get('[data-qa="mobile_number"]');
  }
}
export default new field();
