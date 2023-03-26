describe("Update Employee Role ", () => {
    before('Login as Admin via Fixture', () => {

        cy.intercept('POST', '/auth/login', (req) => {
            expect(req.body).to.include('Admin')
        }).as('username')
        cy.visit('https://opensource-demo.orangehrmlive.com')
    })
    it('Search Employee by ID', () => {
        cy.login()
        cy.url().should('include', 'dashboard')
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.url().should('include', 'admin')
        cy.get(':nth-child(2) > .oxd-input').type('Orange001')
        cy.get('.oxd-form-actions > .oxd-button--secondary').click({ force: true })
        cy.get('div[class="oxd-table-card"]').then(()=>{
            cy.contains('Orange001').find('.oxd-icon')
            // cy.find('tr').eq(1)
        })
        //cy.get('.oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click()
        //cy.url().should('include', 'saveSystemUser')
        //cy.get('div[class="oxd-select-text-input"]').contains('ESS')
  
    })
})