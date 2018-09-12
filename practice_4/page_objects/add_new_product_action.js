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
        return element(by.css(productNameLocator));
    };

    getProductFamilyDropDown () {
        return element(by.css(productFamilyDropDownButton));
    };
    
    getSearchProductFamily () {
        return element(by.css(searchProductFamilyLocator));
    };

    getDropdownItem () {
        return element(by.css(dropdownItemLocator));
    };

    getSearchField () {
        return element(by.xpath(searchFieldLocator));
    };
 
    getSaveButton () {
        return element(by.css(saveButton));
    };
       
    getSearchResult () {
        return element(by.css(searchResultLocator));
    };

    getDelete () {
        return element(by.css(deleteButton));
    };

    getDeleteConfirm () {
        return element(by.css(deleteConfirmLocator));
    };

    async addProduct(name) {
        await this.getProductNameLocator().sendKeys(name);
        await this.getProductFamilyDropDown().click();
        await this.getSearchProductFamily().sendKeys("AQA JS FAMILY");
        await this.getDropdownItem().click();
        await this.getSaveButton().click();
        await this.getSearchField().sendKeys(name);
        await this.getSearchResult().click();
        await this.getDelete().click();
        await this.getDeleteConfirm().click();
        
        return new AddProductsAction();     
    };

}
module.exports = AddProductsAction;