cy.url().should('include', '').then(() => {
    if (Element.emperrortext()) {
        cy.log('User name already exists')
        Element.empcancle().click()
        cy.url().should('include', 'viewEmployeeList')
    }
    else {
        cy.url().should('include', 'viewPersonalDetails')
        cy.log('sucessfully created new user')
    }
})

cy.intercept('GET', '/auth/login', (req) => {
    expect(req.body).to.include('Admin')
    expect(req.body).to.have(Response == 200)
}).as('visit')
return Element.url()