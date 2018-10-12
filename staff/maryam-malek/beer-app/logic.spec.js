describe('logic', function(){

    describe('call', function(){
        // beforeEach(function(done) {
        //     setTimeout(function() {          
        //       done();
        //     }, 1000);
        //   });
        it('should fail on undefined path', function(){
            var path = undefined;
            
            expect(function(){
                logic.call(path, function(){}, [])
            }). toThrowError(TypeError, 'invalid path');
        });

    });

    describe('search', function(){

    });
    describe('retrieveBeer', function(){

    });
});

