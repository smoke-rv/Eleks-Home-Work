/* Create a spec to verify if JS program that compare two given numbers return true if
one of the number is 50 or if their sum is 50*/

let ver50 = require('./test50.js');

describe('ver50', function() {
    it('x+y=50', function() {
        expect(ver50.test50(10, 40)).toBeTruthy()
    });
    it('y=50', function() {
        expect(ver50.test50(2, 50)).toBeTruthy()
    });
    it('x=50', function() {
        expect(ver50.test50(50, 700)).toBeTruthy()
    });
});
