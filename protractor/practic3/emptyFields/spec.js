let EDSlogin = require('./EDSlogin');
describe('Login to EDS', function() {
    it('should login to EDS admin panel', async function() {
        await EDSlogin.get();
        await EDSlogin.click();
        await EDSlogin.login()

        expect(await EDSlogin.getGreetingText()).toEqual('Vadym Polishchuk');    
    });
});