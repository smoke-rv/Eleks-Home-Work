let DeleteProduct = require("../page_objects/delete_product_action");

describe('delete product suite', function() {
    it('delete product pass', async function() {
        let deleteProductAction = new DeleteProduct();

        deleteProductAction.open();
        let deleteProductPage = await deleteProductAction.deleteProduct();

        expect(deleteProductPage.isToastVisible());
    })
})