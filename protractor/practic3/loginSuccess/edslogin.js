class EDSlogin {
    constructor() {
        this.initButton = element(by.xpath("/html/body/app/main/login/div/div/div/div/div/button"));
        this.nameInput = element(by.css('html body app main login div.login-page div.row.login-form div.overlay div.iframe-wrap.sign-in-padding div.row div.col-xs-12.form-padding input#email.ng-untouched.ng-pristine.ng-invalid'));
        this.passInput = element(by.css('html body app main login div.login-page div.row.login-form div.overlay div.iframe-wrap.sign-in-padding div.row div.col-xs-12.form-padding input#userPassword.ng-untouched.ng-pristine.ng-invalid'));      
        this.clickLogin = element(by.xpath('/html/body/app/main/login/div/div/div[2]/div/div/div[3]/button'));
        this.greeting = element(by.css('html body app navbar nav.navbar.navbar-default.navbar-gd div.container div#navbar.col-xs-3.pull-right.navbar-collapse.collapse ul.nav.navbar-nav.navbar-right.gds-navigation li.dropdown a#single-button.dropdown-toggle div.user-data div.user-name'));
    }
        async get() {
        await browser.get('http://eds_university.eleks.com/login');
    };
    async click() {
        await this.initButton.click();
    };
    async setName(name) {
        await this.nameInput.sendKeys(name);
    };
    async setPass(pass) {
        await this.passInput.sendKeys(pass);
    };
    async login(clickLog) {
        await this.clickLogin.click(clickLog);
    };
    async getGreetingText() {
        return this.greeting.getText();
    };
}
module.exports = new EDSlogin();