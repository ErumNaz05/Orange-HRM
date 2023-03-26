Cypress.Commands.add("login", () => {
    cy.fixture('cred.json').then(({ validUser }) => {
        cy.get('input[name="username"]').type(validUser.username)
        cy.get('input[name="password"]').type(validUser.password)
        cy.get('.oxd-button').click()
    })
})
