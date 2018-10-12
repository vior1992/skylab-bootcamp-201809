// TODO ...

describe('logic', function() {
    
    describe('search', function(){
        it("should success on correct query", function(done) {
            var query = 'mahou';
            logic.search(query, function(beers){
                expect(beers).toBeDefined();
                expect(beers.length).toBeGreaterThan(0);
                done();
            });
            
        });
    });

    false && describe('failing search(on slow test)', function(){
        var originalTimeOut;
        beforeEach(function() {
            originalTimeOut = jasmine.DEFAULT_TIMEOUT_INTERVAL;

            jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
        })
        it("should fail on matching query", function(done) {
            var query = 'fanta';

            logic.search(query, function(beers){
                expect(beers).toBeDefined();
                expect(beers.length).toEqual(0);
                done();
            });
            
        });

        afterEach(function() {
            jasmine.DEFAULT_TIMEOUT_INTERVAL =  originalTimeOut;
        })
    });
    
});


