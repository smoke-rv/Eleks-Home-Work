let ProductsPage = require("./products_page");
let Button = require("./controls/button");
let Input = require("./controls/input");

let productNameLocator = "#product-name";
let productFamilyDropDownButton = "div.dropdown";
let saveButton = "#saveProductAdd";
let dropdownItemLocator = "li.dropdown-item:nth-child(3) > a:nth-child(1) > span:nth-child(2)";
let searchFieldLocator = "./html/body/app/main/administration/div[2]/div/div/projects/div/div[1]/div[1]/div[2]/search-field/div/input";
let searchResultLocator = "li.preview-list__item";
let searchProductFamilyLocator = ".input-group-sm > input:nth-child(2)"
let deleteButton = "button.gds-btn-icon:nth-child(1)";
let deleteConfirmLocator = ".modal-dialog .gds-btn-danger";

class AddProductsAction {
    constructor() {
       // this.header = new HeaderPage();
    }

    async open() {
        await browser.get('http://eds_university.eleks.com/administration/products/add');
        return this;
    };

    getProductNameLocator () {
        return new Input(element(by.css(productNameLocator)), "Product name field");
    };

    getProductFamilyDropDown () {
        return new Button(element(by.css(productFamilyDropDownButton)), "Product family drop down menu");
    };
    
    getSearchProductFamily () {
        return new Input(element(by.css(searchProductFamilyLocator)), "search product family input field");
    };

    getDropdownItem () {
        return new Button(element(by.css(dropdownItemLocator)), "Item of drop down list of product family");
    };

    getSearchField () {
        return new Input(element(by.xpath(searchFieldLocator)), "Existed products search field");
    };
 
    getSaveButton () {
        return new Button(element(by.css(saveButton)), "Save product button");
    };
       
    getSearchResult () {
        return element(by.css(searchResultLocator));
    }; 


    async addProduct(name) {
        await allure.createStep("Enter Product Name", async() => {
            await this.getProductNameLocator().sendKeys(name);            
        })();

        await allure.createStep("Set Product Family", async() => {
            await this.getProductFamilyDropDown().click();
            await this.getSearchProductFamily().sendKeys("AQA JS FAMILY");
            await this.getDropdownItem().click();
        })();
        
        await allure.createStep("Save product", async() => {
            await this.getSaveButton().click();
        })();

        await allure.createStep("Search product", async() => {
            await this.getSearchField().sendKeys(name);
            await this.getSearchResult().isDisplayed(name);
        })();
              
        return new ProductsPage();

        
    }

}
module.exports = AddProductsAction;