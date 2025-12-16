class Logout {
    logoutmenu = '.oxd-userdropdown-tab > .oxd-icon'
    logoutoption = 'Logout'
    get logoutmenuelement() {
        return cy.get(this.logoutmenu)
    }
    get logoutoptionelement() {
        return cy.contains(this.logoutoption)
    }
}
export const LogoutHRM = new Logout();