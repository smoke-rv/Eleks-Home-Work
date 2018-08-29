class addProd {
    constructor() {
        this.administrator = element(by.xpath('/html/body/app/navbar/nav/div/div[2]/ul/li[2]/a'));
        this.addNewProduct = element(by.id('Add New Product'));
        this.enterName = element(by.id('product-name'));
        this.productFamily = element(by.xpath('/html/body/app/main/administration/div[2]/div/div/projects/div/div[1]/div[2]/project/div/div[3]/form/div[1]/div[2]/product-family-list/dropdown-gds/ss-multiselect-dropdown/div/button'));
        this.dropDownElement = element(by.xpath('/html/body/app/main/administration/div[2]/div/div/projects/div/div[1]/div[2]/project/div/div[3]/form/div[1]/div[2]/product-family-list/dropdown-gds/ss-multiselect-dropdown/div/ul/li[23]/a/span'));
        this.saveButton = element(by.id('saveProductAdd'));
        this.search = element(by.xpath('/html/body/app/main/administration/div[2]/div/div/projects/div/div[1]/div[1]/div[2]/search-field/div/input'));
        this.result = element(by.xpath('/html/body/app/main/administration/div[2]/div/div/projects/div/div[1]/div[1]/div[4]/ul/li/a'));
    }
    async get() {
        await browser.get('http://eds_university.eleks.com/administration/products/add');
    };
    async setName(name) {
        await this.enterName.sendKeys(name);
    };
    async clickProductFamily() {
        await this.productFamily.click();
    };
    async selectProductFamily() {
        await this.dropDownElement.click();
    };
    async save() {
        await this.saveButton.click();
    };
    async typeIn(productName) {
        await this.search.sendKeys(productName);
    };
    async check() {
        return this.result.getText();
    };   
};
module.exports = new addProd();