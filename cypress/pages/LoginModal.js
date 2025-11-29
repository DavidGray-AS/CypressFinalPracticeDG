import BasePage from "./BasePage";

export class LoginModal extends BasePage {

    usernameInput = '#loginusername';
    passwordInput = '#loginpassword';
    modalBody = '.modal-content';
    
    assertModalVisible(){
        this.assertContentVisible(this.modalBody)
    }

    enterUsername(username) {
        this.typeText(this.usernameInput, username);
    }

    enterPassword(password) {
        this.typeText(this.passwordInput, password);
    }

    clickLoginButton() {
        this.clickElementText('button','Log in');
    }

    login(username, password) {
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickLoginButton();
    }
}