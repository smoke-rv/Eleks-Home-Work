exports.config = {
    onPrepare: function() {
        console.log("Starting test execution");
    },    
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    //directConnect: true,
    suites: {
        loginSuccess: './loginSuccess/spec.js',
        loginFail: './loginFail/spec.js',
        loginWithEmptyFields: './emptyFields/spec.js'
    },
        
    capabilities: {
         browserName: 'firefox',
         firefoxOptions: {
             args: ["--headless", "--no-sandbox", "--window-size=800,600"]
         }         
    }
}
 
