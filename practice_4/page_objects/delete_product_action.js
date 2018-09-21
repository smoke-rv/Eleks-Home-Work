let add_new_Product = require("../page_objects/add_new_product_action");

let searchFieldLocator = "./html/body/app/main/administration/div[2]/div/div/projects/div/div[1]/div[1]/div[2]/search-field/div/input";
let searchResultLocator = "li.preview-list__item";
let deleteButton = "button.gds-btn-icon:nth-child(1)";
let deleteConfirmLocator = ".modal-dialog .gds-btn-danger";

class DeleteProductAction {
    constructor() {}

    getSearchField () {
        return new input(element(by.xpath(searchFieldLocator)), "Search field");
    };
 
    getSaveButton () {
        return new button(element(by.css(saveButton)), "Save button");
    };
       
    getSearchResult () {
        return new button(element(by.css(searchResultLocator)), "Search field");
    };

    getDelete () {
        return new button(element(by.css(deleteButton)), "Delete button");
    };

    getDeleteConfirm () {
        return new button(element(by.css(deleteConfirmLocator)), "Delete confirm button");
    }

    async deleteProduct(name) {
        await allure.createStep("Delete product", async() => {
            await this.getSearchField().sendKeys(name);
            await this.getSearchResult().click();
            await this.getDelete().click();
            await this.getDeleteConfirm().click();
        })();
        
        return new ProductsPage();
    }
}
module.exports = DeleteProductAction;
