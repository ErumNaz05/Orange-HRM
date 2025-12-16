describe("Update Employee Role ", () => {
    before('Login as Admin via Fixture', () => {
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', (req) => {
            expect(req.body).to.include('Admin')
        }).as('visit')
            .then(xhr => {
                console.log(xhr)
                cy.visit('https://opensource-demo.orangehrmlive.com')
            })
    })
    it('Update Employee Role', () => {
        cy.login()
        cy.url().should('include', 'dashboard')
        cy.get('div[class="oxd-sidepanel-body"]').contains('Admin').click()
        cy.url().should('include', 'admin')
        cy.get('[data-v-2fe357a6] > input[class="oxd-input oxd-input--active"]').type('Orange001')
        cy.get('.oxd-form-actions > .oxd-button--secondary').click({ force: true })
        cy.get('.orangehrm-bottom-container').then(() => {

            let rec = cy.get('[class="oxd-table-card"]').should('have.text', 'Orange001ESSOrange orangeEnabled')
            cy.get('[class="oxd-table-body"]').then((rec) => {
                if (rec) {
                    cy.log('record found')
                    cy.get('.oxd-table-card > .oxd-table-row').should('have.length', '1').then(() => {
                    cy.get('i[class="oxd-icon bi-pencil-fill"]').click()
                    cy.url().should('include', 'saveSystemUse')
                    let ESS = cy.contains('ESS')
                        if (ESS) {
                        ESS.click().then(() => {
                            cy.get('.oxd-select-wrapper > div[role="listbox"]').contains('Admin').click()
                            cy.get('.oxd-button--secondary').click({ force: true })
                            })
                        }
                        else {
                         cy.get('.orangehrm-card-container').contains('Admin').click().then(() => {
                         cy.get('.oxd-select-wrapper > div[role="listbox"]').contains('ESS').click({ force: true })
                            })
                        }
                    })
                }
            })
             
        })
    })
})




