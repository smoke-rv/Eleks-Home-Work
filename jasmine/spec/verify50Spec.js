/* Create a spec to verify if JS program that compare two given numbers return true if
one of the number is 50 or if their sum is 50*/

let ver50 = require('./test50.js');

describe('verify 50', function() {
    it('x+y=50', function() {
        expect(ver50.compare(10,40)).toBeTruthy()
    });
    it('y=50', function() {
        expect(ver50.compare(2,50)).toBeTruthy()
    });
    it('x=50', function() {
        expect(ver50.compare(50,700)).toBeTruthy()
    });
});
