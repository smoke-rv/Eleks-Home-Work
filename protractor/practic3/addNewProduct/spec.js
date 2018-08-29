let EDSlogin = require('./EDSlogin');
describe('Login to EDS', function() {
    it('should login to EDS admin panel', async function() {
        await EDSlogin.get();
        await EDSlogin.click();
        await EDSlogin.setName('wadim.rv@gmail.com');
        await EDSlogin.setPass('2yZ+DRX8a');
        await EDSlogin.login()

        expect(await EDSlogin.getGreetingText()).toEqual('Vadym Polishchuk');    
    });
});

let addProd = require('./addProd');
describe('add new product', function() {
    it('should add new product', async function() {
        await addProd.get();
        await addProd.clickAdmin();
        await addProd.clickAdd();
        await addProd.setName('smoke-rv');
        await addProd.clickProductFamily();
        await addProd.selectProductFamily();
        await addProd.save();
        await addProd.typeIn('smoke-rv');

        expect(await addProd.check()).toEqual('smoke-rv');
    });
})