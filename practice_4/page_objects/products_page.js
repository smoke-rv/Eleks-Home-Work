let HeaderPage = require("./header_page")

let addProductsButtonLocator = "a.section-body__actions";


class ProductsPage {
    constructor() {
        this.header = new HeaderPage();
        //browser.waitForAngularEnabled(false);
    }
    getAddProductsButton () {
        return element(by.css(addProductsButtonLocator));
    };

    async waitForProductsPageAvailable(){

    }
};


module.exports = ProductsPage;