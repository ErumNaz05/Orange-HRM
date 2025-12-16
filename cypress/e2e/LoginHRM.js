class Login {
    uname = 'input[name="username"]'
    password = 'input[name="password"]'
    login = '.oxd-button'
    invalidtext = '.oxd-alert-content'
    url = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    get visiturl() {
        cy.intercept('GET', '/auth/login', (req) => {
            expect(req.body).to.include('Admin')
            expect(req.body).to.have(Response==200)
        }).as('visit')
        return cy.visit(this.url)
    }
    get usernameelement() {
        return cy.get(this.uname)
    }

    get passwordelement() {
        return cy.get(this.password)
    }

    get loginelement() {
        return cy.get(this.login)
    }
    get invalidtextelement() {
        return cy.get(this.invalidtext)
    }
}
export const LoginHRM = new Login();