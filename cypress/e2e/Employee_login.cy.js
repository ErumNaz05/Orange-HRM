describe("Login to the newly created user and verify you are logged in as Employee ", () => {

    before('Login as Admin via Fixture', () => {

        cy.intercept('POST', '/auth/login', (req) => {
            expect(req.body).to.include('Admin')
        }).as('username')
        cy.visit('https://opensource-demo.orangehrmlive.com')
    })
    it('Log in to the user account', () => {
        cy.fixture('cred.json').then(({ EmpUser }) => {
            cy.get('input[name="username"]').type(EmpUser.username)
            cy.get('input[name="password"]').type(EmpUser.password)
            cy.get('.oxd-button').click()
            cy.get('.oxd-userdropdown-name').should('have.text', 'Orange orange')
            cy.url().should('include', 'dashboard').then(() => {
                if (cy.get(':nth-child(1) > .oxd-main-menu-item').should('have.text', 'Leave')) {
                    cy.log("Logged in as Employee")
                }
                else {
                    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').should('have.text','Admin')
                    cy.log("Logged in as Admin")
                }

                /*if (Element.invalidtext()) {
                    cy.log('invalid User')
                }
                else {

                    Element.dropdownname().should('have.text', 'Orange orange')
                    cy.url().should('include', 'dashboard')
                    Element.empdashboard().then(() => {
                        if (cy.contains('Leave')) {
                            cy.log("Logged in as Employee")
                        }
                        else {
                            // cy.get(dashboardHRM.admindashboardelement).should('have.text','Admin')
                            cy.log("Logged in as Admin")
                        }
                    })
                }*/
            })
        })
    })
})