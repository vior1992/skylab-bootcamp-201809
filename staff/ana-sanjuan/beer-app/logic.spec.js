describe('logic', function(){

    describe('http', function(){
        beforeEach(function(done) {
            setTimeout(function() {
                done();
          
            }, 8000);
        });


        it('should succed on retrieveing data from API', function(done){
            var callback = function(beers){
                expect(beers[0].name).toEqual('Hola Maria');
                expect(beers[1].name).toEqual('Hola Dali');
            };
            errorParam = [];
            query = 'hola';
            logic.http('/search/all?q=' + query, callback, errorParam);

        })
    });




})