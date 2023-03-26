
describe("Log in to the Admin account with valid credentials", () => {

    before('visit', () => {
        cy.intercept('GET', '/auth/login', (req) => {
            statusCode: 200
            expect(req.body).to.include('Admin')
        }).as('visit')
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include', 'login')
    })

    it('Log in to the Admin account', () => {
        cy.fixture('cred.json').then(({ validUser }) => {
            cy.get('input[name="username"]').type(validUser.username)
            cy.get('input[name="password"]').type(validUser.password)
            cy.get('.oxd-button').click()
            cy.url().should('include', 'dashboard')
            cy.get(':nth-child(8) > .oxd-main-menu-item').should('have.text', 'Dashboard')
            cy.get('.oxd-userdropdown-name').should('have.text', 'Paul Collings')
        })
    })

    it.skip('Logout of Admin account', () => {
        cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
        cy.contains('Logout').click()
        cy.url().should('include', 'login')
    })
})