let ProductsPage = require("./products_page");
let Button = require("./controls/button");
let Input = require("./controls/input");

let loginButtonLocator = ".login-panel .login-button";
let emailInputLocator = "#email";
let passInputLocator = "#userPassword";
let SignInButtonLocator = ".iframe-wrap .login-button";

class LoginPage {
    constructor() {
        //browser.waitForAngularEnabled(false);
    }
    getLoginButton () {
        return new Button(element(by.css(loginButtonLocator)), "Login Button");
    }

    getEmailInput () {
        return new Input(element(by.css(emailInputLocator)), "Email input");
    }

    getPassInput () {
        return new Input(element(by.css(passInputLocator)), "Password input");
    }

    getSigninButton () {
        return new Button(element(by.css(SignInButtonLocator)), "Sign in Button");
    }
    
    async open() {
        await browser.get('http://eds_university.eleks.com');
        return this;
    };

    async login(email, pass) {
        await allure.createStep("click login button", async() => await this.getLoginButton().click())();
        await allure.createStep("Enter credentials", async() => {
            await this.getEmailInput().sendKeys(email);
            await this.getPassInput().sendKeys(pass);
        })();
        await allure.createStep("click sign in button", async() => await this.getSigninButton().click())();

        return new ProductsPage();
    }
}


module.exports = LoginPage;