let ProductsPage = require("./products_page");

let loginButtonLocator = ".login-panel .login-button";
let emailInputLocator = "#email";
let passInputLocator = "#userPassword";
let SignInButtonLocator = ".iframe-wrap .login-button";

class LoginPage {
    constructor() {}
    getLoginButton () {
        return element(by.css(loginButtonLocator));
    }

    getEmailInput () {
        return element(by.css(emailInputLocator));
    }

    getPassInput () {
        return element(by.css(passInputLocator));
    }

    getSigninButton () {
        return element(by.css(SignInButtonLocator));
    }
    
    async open() {
        await browser.get('http://eds_university.eleks.com');
        return this;
    };

    async login(email, pass) {
        await this.getLoginButton().click();
        await this.getEmailInput().sendKeys(email);
        await this.getPassInput().sendKeys(pass);
        await this.getSigninButton().click();

        return new ProductsPage();
    }
}


module.exports = LoginPage;