// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('have.text', '2')
    cy.get('#number3').click();
    cy.get('.display').should('have.text', '23')
  });

  it("should update the display after operations", () => {
    cy.get("#number4").click();
    cy.get("#operator_add").click();
    cy.get("#number5").click();
    cy.get("#operator_equals").click();
    cy.get(".display").should("have.text", "9");
  });

  it("should chain multiple operations together", () => {
    cy.get("#number4").click();
    cy.get("#operator_add").click();
    cy.get("#number5").click();
    cy.get("#operator_multiply").click();
    cy.get("#number5").click();
    cy.get("#operator_equals").click();
    cy.get(".display").should("have.text", "45");
  });

  it("should chain many operations together", () => {
    cy.get("#number4").click();
    cy.get("#operator_add").click();
    cy.get("#number5").click();
    cy.get("#operator_multiply").click();
    cy.get("#number5").click();
    cy.get("#operator_subtract").click();
    cy.get("#number3").click();
    cy.get("#operator_divide").click();
    cy.get("#number7").click();
    cy.get("#operator_equals").click();
    cy.get(".display").should("have.text", "6");
  });

  it("should be able to display very large numbers", () => {
    let i = 0;
    while (i < 19) {
      cy.get("#number1").click();
      cy.get("#number0").click();
      cy.get("#number0").click();
      cy.get("#operator_multiply").click();
      i++;
    }
    cy.get("#number1").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#operator_equals").click();
    cy.get(".display").should("have.text", "1e+40");
  });

  it("should be able to show decimals", () => {
    cy.get("#number1").click();
    cy.get("#operator_divide").click();
    cy.get("#number1").click();
    cy.get("#number0").click();
    cy.get("#operator_equals").click();
    cy.get(".display").should("have.text", "0.1");
    cy.get("#operator_divide").click();
    cy.get("#number5").click();
    cy.get("#operator_equals").click();
    cy.get(".display").should("have.text", "0.02");
  });

  it("should error when trying to divide by zero", () => {
    cy.get("#number5").click();
    cy.get("#operator_divide").click();
    cy.get("#number0").click();
    cy.get("#operator_equals").click();
    cy.get(".display").should("have.text", "ERROR Divide by zero");
  });
})
