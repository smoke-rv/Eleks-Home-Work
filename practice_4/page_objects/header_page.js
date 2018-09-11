let productsButtonLocator = "ul.navbar-nav li:nth-child(1) a";
let adminButtonLocator = "ul.navbar-nav li:nth-child(2) a";

class HeaderPage {
    constructor() {

    }
    getProductsButton () {
        return element(by.css(productsButtonLocator));
    }

    getAdminButton () {
        return element(by.css(adminButtonLocator));
    }

    async isHeaderVisible() {
        return await this.getProductsButton().isDisplayed() 
            && await this.getAdminButton().isDisplayed();
    }


}


module.exports = HeaderPage;