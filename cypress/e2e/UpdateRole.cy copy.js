describe("Update Employee Role ", () => {
    before('Login as Admin via Fixture', () => {

        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', (req) => {
            expect(req.body).to.include('Admin')
        }).as('visit')
        cy.get('@visit').then(xhr => {
            console.log(xhr)
             cy.visit('https://opensource-demo.orangehrmlive.com')
        })
        
    })
        it('Update Employee Role', () => {
            cy.login()
            cy.url().should('include', 'dashboard')
            cy.get(':nth-child(1) > .oxd-main-menu-item').click()
            cy.url().should('include', 'admin')
            cy.get(':nth-child(2) > .oxd-input').type('Orange001')
            cy.get('.oxd-form-actions > .oxd-button--secondary').click({ force: true })
            cy.get('.oxd-table-card > .oxd-table-row')
                .should('have.length', '1').then(() => {

                    cy.get('i[class="oxd-icon bi-pencil-fill"]').click()
                    cy.url().should('include', 'saveSystemUse')
                })
            cy.get('.orangehrm-card-container').then(() => {
                let ESS = cy.contains('ESS')
                let Admin = cy.contains('Admin')
                if (ESS) {
                    ESS.click().then(() => {
                        cy.log("test")
                        cy.wait(4000)
                        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').contains('Admin').click()
                        //  cy.get('div[role="listbox"]')
                    })
                }
                else {
                    cy.get('.orangehrm-card-container').contains('Admin').click().then(() => {
                        cy.get('div[role="listbox"]').contains('ESS').click()
                    })
                }
            })
            cy.get('.oxd-button--secondary').click()
           
        })
    })
