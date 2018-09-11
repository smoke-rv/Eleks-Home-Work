let HeaderPage = require("./header_page")

let addProductsButtonLocator = "a.section-body__actions";


class ProductsPage {
    constructor() {
        this.header = new HeaderPage();
    }
    getAddProductsButton () {
        return element(by.css(addProductsButtonLocator));
    };
 };


module.exports = ProductsPage;