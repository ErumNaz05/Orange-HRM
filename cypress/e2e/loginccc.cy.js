describe("cypressAssignment", ()=>{
    it('Login a user and validate his name via intercept', ()=>{
    
        cy.intercept('POST', '/auth/login', (req) => {
            expect(req.body).to.include('Admin')
        }).as('username')
          
        cy.visit('https://opensource-demo.orangehrmlive.com')
    
        
        cy.get('form').within(($form)=>{
            cy.get('input[name="username"]').type('Admin')
            cy.get('input[name="password"]').type('admin123')
    
            cy.get('.oxd-button').click()
    
        })
        cy.wait('@username').its('response.body').should('to.have.property', 'name').and('include', 'Admin')
    
       
    
        cy.url().should('include','dashboard')
       
    
    })
})