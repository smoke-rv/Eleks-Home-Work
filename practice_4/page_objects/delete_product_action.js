let add_new_Product = require("../page_objects/add_new_product_action");

let searchFieldLocator = "./html/body/app/main/administration/div[2]/div/div/projects/div/div[1]/div[1]/div[2]/search-field/div/input";
let searchResultLocator = "li.preview-list__item";
let deleteButton = "button.gds-btn-icon:nth-child(1)";
let deleteConfirmLocator = ".modal-dialog .gds-btn-danger";

class DeleteProductAction {
    constructor() {}

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
    }

    async deleteProduct(name) {
        await this.getSearchField().sendKeys(name);
        await this.getSearchResult().click();
        await this.getDelete().click();
        await this.getDeleteConfirm().click();
        
        return new DeleteProductAction();

        
    }

}
module.exports = DeleteProductAction;
