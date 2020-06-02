describe('Cypress', () => {
    it('is working', () => {
      expect(true).to.equal(true)
    })

    it('visits the app', () => {
        cy.visit('http://localhost:3000')
      })

    it('Checks text content of anchor link', () => {
      cy.get('.App-link').contains('Learn React with Curious Byte')
    })
  })