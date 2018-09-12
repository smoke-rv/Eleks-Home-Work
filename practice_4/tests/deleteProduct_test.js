let deleteProductAction = require("../page_objects/delete_product_action");

describe('delete product suite', function() {
    it('delete product pass', async function() {
        let deleteExistedProduct = new deleteProductAction();

        deleteProduct.open();
        let deleteProductPage = await deleteExistedProduct.deleteProduct()
    })
})