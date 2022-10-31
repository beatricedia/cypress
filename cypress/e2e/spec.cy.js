describe('empty spec', () => {

  it('Succesfully loads', () => {
    cy.visit('/')
  });

  it('Loads example', () => {
    cy.visit('https://example.cypress.io');
  })
})