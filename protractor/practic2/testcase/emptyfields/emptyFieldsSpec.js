describe('Login to EDS', function() {
    it('should login to EDS admin panel', function() {
        browser.get('http://eds_university.eleks.com/login');
        element(by.xpath("/html/body/app/main/login/div/div/div/div/div/button")).click();
        element(by.xpath('/html/body/app/main/login/div/div/div[2]/div/div/div[3]/button')).click();
        expect(element(by.css('.navbar-default .navbar-right')).getText()).toEqual('products');
    });
});
