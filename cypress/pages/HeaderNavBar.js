import BasePage from "./BasePage";

export class HeaderNavBar extends BasePage {

    headerMenuOption = 'a[class=nav-link]'
    
    selectHomeButton() {
        this.clickElementText(this.headerMenuOption,'Home')
    }

    selectLoginButton() {
        this.clickElementText(this.headerMenuOption, 'Log in')
    }

    selectCartButton() {
        this.clickElementText(this.headerMenuOption, 'Cart')
    }

    assertWelcomeUserNameIsVisible(username){
        this.assertContainsText(this.headerMenuOption, 'Welcome'+' '+ username)
    }
}