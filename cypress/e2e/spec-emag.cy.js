describe('Emag test', () => {
    it('finds the content "type"', () => {
      cy.visit('/')
  
      cy.contains('Bacanie').click()
      cy.contains('Cadouri').click()

      cy.url().should('include', '/cadouri/')

      cy.get('.emg-widget-4-display').find('.product_pnk').children(.emg-brand-item).
    //    // Get an input by its class, type into it and verify
    //   // that the value has been updated
    //   cy.get('.action-email')
    //     .type('fake@email.com')
    //     .should('have.value', 'fake@email.com')
    })
  })