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