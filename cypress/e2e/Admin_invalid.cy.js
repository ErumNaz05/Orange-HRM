describe("Log in to the Admin account with invalid credentials", () => {

    before('visit', () => {
        cy.intercept('GET', '/auth/login', (req) => {
            expect(req.body).to.include('Admin')
        }).as('visit')
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include', 'login')
    })
    it('Log in to the Admin account', () => {
        cy.fixture('cred.json').then(({ invalidUser }) => {
            cy.get('input[name="username"]').type(invalidUser.username)
            cy.get('input[name="password"]').type(invalidUser.password)
            cy.get('.oxd-button').click()
            cy.get('.oxd-alert-content').should('have.text', 'Invalid credentials')
        })
    })

})