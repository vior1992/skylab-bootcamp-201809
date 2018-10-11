describe('logic', function(){

    describe('call', function(){
        beforeEach(function(done) {
            setTimeout(function() {          
              done();
            }, 1);
          });
        it('should fail on undefined path', function(done){
            var path = undefined;
            
            expect(logic.call(path, function(res){console.log(res)}, [])). toThrowError(TypeError, 'invalid path');
        });

    });

    describe('search', function(){

    });
    describe('retrieveBeer', function(){

    });
});

