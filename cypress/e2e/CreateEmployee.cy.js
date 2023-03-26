describe("Create Employee user from Admin Account also create its Login credentials", () => {

    before('Login as Admin via Fixture', () => {

        cy.intercept('POST', '/auth/login', (req) => {
            expect(req.body).to.include('Admin')
        }).as('username')
        cy.visit('https://opensource-demo.orangehrmlive.com')
    })
    it('Log in to the Admin account', () => {
        cy.login()
        cy.url().should('include', 'dashboard')
        cy.get(':nth-child(8) > .oxd-main-menu-item').should('have.text', 'Dashboard')
        cy.get('.oxd-userdropdown-name').should('have.text', 'Paul Collings')
        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
        cy.get('.orangehrm-header-container > .oxd-button').click()
        cy.get('input[name="firstName"]').type('Orange')
        cy.get('input[name="lastName"]').type('orange')
        cy.get('.oxd-switch-input').click()
        cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Orange001')
        if (cy.get('.oxd-input-group > .oxd-text').should('be.be.visible')) {
            cy.get('.oxd-button--ghost').click()
            cy.url().should('include', 'viewEmployeeList')
            cy.log('User name already exists')
        }
        else {
            cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('Orange@001')
            cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Orange@001')
            cy.get('.oxd-button--secondary').click()
            cy.url().should('include', 'viewPersonalDetails')
        } 
    })
})
    

