// Create a suite to verify if JS program (calculator) works correctly

describe('Calculator', function() {
    
    describe('basic operations', function(){
                 
        it('sum', function() {
            expect(12+5).toEqual(17);
        });
         
        it('multiply', function() {
            expect(50*10).toEqual(500);
        });
         
        it('divide', function() {
            expect(15/3).toEqual(5);
        });
                
        it('extract', function() {
            expect(255-3).toEqual(252);
        });
         
    });
});

