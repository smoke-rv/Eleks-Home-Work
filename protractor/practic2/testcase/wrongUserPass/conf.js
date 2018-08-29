exports.config = {
    onPrepare: function() {
        console.log("Starting test execution");
    },    
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    //directConnect: true,
    specs: ['wrongUserPassSpec.js'],
    capabilities: {
         browserName: 'chrome',
         chromeOptions: {
             args: ["--headless", "--no-sandbox", "--window-size=800,600"]
         }         
    }
}
 
