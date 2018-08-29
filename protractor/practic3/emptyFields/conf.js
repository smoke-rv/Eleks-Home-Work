exports.config = {
    onPrepare: function() {
        console.log("Starting test execution");
    },    
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    //directConnect: true,
    specs: ['spec.js'],
    capabilities: {
         browserName: 'firefox',
         firefoxOptions: {
             args: ["--headless", "--no-sandbox", "--window-size=800,600"]
         }         
    }
}
 
