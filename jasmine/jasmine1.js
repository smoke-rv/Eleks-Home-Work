// Create a spec to verify if JS program computes correct sum of the two given integers

describe('compute', function () {
    it('calculate', function () {
        expect(3+4).toEqual(7);
    });
});

jasmine.onComplete(function(passed) {
    if(passed) {
        console.log('All specs have passed');
    }
    else {
        console.log('At least one spec has failed');
    }
});

