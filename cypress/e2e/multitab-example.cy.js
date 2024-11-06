///<reference types="cypress" />

it.skip("Multitab example using cypress-puppeteer", () => {
  cy.visit("/");
  cy.get("#registrationLink").should("have.text", "Register Here").click();
  cy.puppeteer("switchToNewTabAndRegisterUser").should(
    "equal",
    "User Registration Completed"
  );
});
