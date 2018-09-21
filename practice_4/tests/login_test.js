let LoginPage = require("../page_objects/login_page")

describe('login suite', function() {
    it('login pass', async function() {
        let loginPage = new LoginPage();
        
        loginPage.open();
        let productsPage = await loginPage.login("wadim.rv@gmail.com", "2yZ+DRX8a");

        //await browser.sleep(5000);
  
      expect(await productsPage.header.isHeaderVisible()).toEqual(true);
    });
  });