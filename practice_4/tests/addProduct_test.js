let AddProductsAction = require("../page_objects/add_new_product_action");
let ProductsPage = require("../page_objects/products_page");
let loginPage = require("../page_objects/login_page")

describe('add product suite', function() {
    it('add product pass', async function() {
        let addNewProduct = new AddProductsAction();
        //let ProductsPage = new ProductsPage();
        let LoginPage = new loginPage();

        addNewProduct.open();
        let addProductsPage = await addNewProduct.addProduct("smoke-rv");

        //await browser.sleep(5000);
  
        expect(addProductsPage.addProduct().toEqual("smoke-rv"));
    });
  });