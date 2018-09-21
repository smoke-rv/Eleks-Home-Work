let AllureReporter = require("jasmine-allure-reporter");

// An example configuration file
exports.config = {

    

    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',
    //SELENIUM_PROMISE_MANAGER: 0,
    allScriptsTimeout: 30000,
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'chrome',
      maxInstances: 1
    },
    // Allure

    /* framework: 'jasmine2',
    onPrepare: function() {
        let AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));
    }, */

    onPrepare: function () {
        jasmine.getEnv().addReporter(new AllureReporter({
            resultDir: 'allure-results'
        }));

        jasmine.getEnv().afterEach(async () => {
            let screen = await browser.takeScreenshot(); 
            await allure.createAttachment("Screenshot", () => {
                return new Buffer(screen, "base64")
            }, 'image/png')();
        });
           
    },
    

   

    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: [/*'./tests/login_test.js',*/ './tests/addProduct_test.js', /*'./tests/deleteProduct_test.js'*/],
  
    restartBrowserBetweenTests: true,
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
      showColors: true,
      //defaultTimeoutInterval: 120000,   
    }
  };