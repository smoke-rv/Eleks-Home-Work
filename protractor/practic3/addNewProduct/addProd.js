class addProd {
    constructor() {
        this.administrator = element(by.css('.nav > li:nth-child(2) > a:nth-child(1)'));
        this.addNewProduct = element(by.id('Add New Product'));
        this.enterName = element(by.xpath('//*[@id="product-name"]'));
        this.productFamily = element(by.xpath('/html/body/app/main/administration/div[2]/div/div/projects/div/div[1]/div[2]/project/div/div[3]/form/div[1]/div[2]/product-family-list/dropdown-gds/ss-multiselect-dropdown/div/button'));
        this.dropDownElement = element(by.xpath('/html/body/app/main/administration/div[2]/div/div/projects/div/div[1]/div[2]/project/div/div[3]/form/div[1]/div[2]/product-family-list/dropdown-gds/ss-multiselect-dropdown/div/ul/li[23]/a/span'));
        this.saveButton = element(by.model('saveProductAdd'));
        this.search = element(by.xpath('/html/body/app/main/administration/div[2]/div/div/projects/div/div[1]/div[1]/div[2]/search-field/div/input'));
        this.result = element(by.css('.preview-list__item'));
    }
    async get() {
        await browser.get('http://eds_university.eleks.com/administration/products/add');
    };
    async clickAdmin() {
        await this.administrator.click();
    };
    async clickAdd() {
        await this.addNewProduct.click();
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