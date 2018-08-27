describe('Login to EDS', function() {
    it('should login to EDS admin panel', function() {
        browser.get('http://eds_university.eleks.com/login');
        element(by.id('email')).sendKeys('wadim.rv@gmail.com');
        element(by.id('userPassword')).sendKeys('2yZ+DRX8a');
        element(by.cssContainingText('login-button')).click();
        element(by.id('single-button/div/div[1]'));
        expect(element(by.id("//div/div[1][@class='single-button']")).getText()).toEqual('Vadym Polishchuk');
    });
});