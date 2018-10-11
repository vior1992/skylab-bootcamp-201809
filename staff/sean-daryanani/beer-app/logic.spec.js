describe('Beers', function() {
    describe('Search functionality', function() {
        var result;
        it('should find 11 beers if input Sean', function(done) {
            logic.search('Sean', function(beers) {
                result = beers;
                done();
                expect(beers.length).toEqual(11);
            })            
        })

        // it('should detect an undefined callback', function(done) {
                
        //         expect(function() {
        //             logic.search('Sean').toThrowError(TypeError, 'undefined is not a function')
        //         })
        //     })            
        })
    })
