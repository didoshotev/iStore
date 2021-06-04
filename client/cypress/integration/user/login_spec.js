describe('My First Test', () => {
    // it('Does not do much!', () => {
    //   expect(true).to.equal(true)
    // })
    beforeEach(() => {
        cy.visit('/login')
    })

    it('Login title', () => {
        cy.contains('h4', 'Login')
    })

    it('requires username', () => {
        cy.get('form').contains('Login').click()
        cy.get('#form-error').should('contain', 'Invalid credentials')
    })

    it('requires password', () => {
        cy.get('#username').type('test111')
        cy.get('form').contains('Login').click()
        cy.get('#form-error').should('contain', 'Invalid credentials')
    })

    it('Invalid username', () => {
        cy.get('#username').type('a')
        cy.get('#password').type('122')
        cy.get('#quick-error').should('contain', 'Invalid username format')
    })

    it('Navigate to / on successful login', () => {
        cy.get('#username').type('test123')
        cy.get('#password').type('test123')
        cy.hash().should('eq', '')
    })
})