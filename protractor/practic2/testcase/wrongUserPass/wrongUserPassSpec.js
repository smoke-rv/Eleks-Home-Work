describe('Login to EDS', function() {
    it('should not login to EDS admin panel with wrong username and password', function() {
        browser.get('http://eds_university.eleks.com/login');
        element(by.xpath("/html/body/app/main/login/div/div/div/div/div/button")).click();
        element(by.css('html body app main login div.login-page div.row.login-form div.overlay div.iframe-wrap.sign-in-padding div.row div.col-xs-12.form-padding input#email.ng-untouched.ng-pristine.ng-invalid')).sendKeys('wadim.rv.gmail.com');
        element(by.css('html body app main login div.login-page div.row.login-form div.overlay div.iframe-wrap.sign-in-padding div.row div.col-xs-12.form-padding input#userPassword.ng-untouched.ng-pristine.ng-invalid')).sendKeys('qwerty');
        element(by.xpath('/html/body/app/main/login/div/div/div[2]/div/div/div[3]/button')).click();
        element(by.xpath('/html/body/app/navbar/nav/div/div[2]/ul/li[3]/a/div/div[1]'));
        expect(element(by.css('html body app navbar nav.navbar.navbar-default.navbar-gd div.container div#navbar.col-xs-3.pull-right.navbar-collapse.collapse ul.nav.navbar-nav.navbar-right.gds-navigation li.dropdown a#single-button.dropdown-toggle div.user-data div.user-name')).getText()).toEqual('Vadym Polishchuk');
    });
});