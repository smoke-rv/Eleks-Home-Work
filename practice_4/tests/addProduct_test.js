let AddProductsAction = require("../page_objects/add_new_product_action")

describe('add product suite', function() {
    it('add product pass', async function() {
        let addNewProduct = new AddProductsAction();

        addNewProduct.open();
        let addProductsPage = await addNewProduct.addProduct("smoke-rv");

        //await browser.sleep(5000);
  
        expect(addProductsPage().toEqual("smoke-rv"));
    });
  });