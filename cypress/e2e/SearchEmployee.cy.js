describe("Search the user by ID ", () => {
    before('Login as Admin via Fixture', () => {

        cy.intercept('POST', '/auth/login', (req) => {
            expect(req.body).to.include('Admin')
        }).as('username')
        cy.visit('https://opensource-demo.orangehrmlive.com')
    })
    it('Search Employee by ID', () => {
        cy.login()
        cy.url().should('include', 'dashboard')
        cy.get(':nth-child(8) > .oxd-main-menu-item').should('have.text', 'Dashboard')
       // cy.get('.oxd-userdropdown-name').should('have.text', 'Paul Collings')
        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
        cy.get(':nth-child(2) > .oxd-input').type('0693')
        cy.get('.oxd-form-actions > .oxd-button--secondary').click({ force: true })
        if (cy.get('.oxd-table-card > .oxd-table-row').should('be.visible')) {
            cy.get('.oxd-table-card > .oxd-table-row').click()
            cy.url().should('include', 'empNumber')
        }
        else {
            cy.log('Record not found')
        }
        
    })

})