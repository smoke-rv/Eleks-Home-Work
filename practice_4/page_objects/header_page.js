let productsButtonLocator = "ul.navbar-nav li:nth-child(1) a";
let adminButtonLocator = "ul.navbar-nav li:nth-child(2) a";

class HeaderPage {
    constructor() {

    }
    getProductsButton() {
        return element(by.css(productsButtonLocator));
    }

    getAdminButton() {
        return element(by.css(adminButtonLocator));
    }

    async waitForHeaderAvailable(){
        await browser.wait(protractor.ExpectedConditions.visibilityOf(this.getAdminButton()), 15000)
    }

    async isHeaderVisible() {
        await this.waitForHeaderAvailable();
        return await this.getAdminButton().isDisplayed()
            && await this.getProductsButton().isDisplayed();
    }
}

module.exports = HeaderPage;