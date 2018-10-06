describe('Ayay', function () {
    var ayay;

    beforeEach(function() {
        ayay = new Ayay;
    });

    describe('push', function () {
        it('should push items', function () {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);

            expect(ayay.length).toEqual(3);

            for (var i = 0; i < ayay.length; i++)
                expect(ayay[i]).toEqual(i + 1);
        });
    });

    describe('forEach', function () {
        it('should iterate on valid ayay', function () {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);

            var result = [];

            ayay.forEach(function (elem, index) { result[index] = elem * 2; });

            expect(result.length).toEqual(ayay.length);

            result.forEach(function (elem, index) {
                expect(elem).toEqual(ayay[index] * 2);
            });
        });
    });



    describe('pop',function () {


        it('should return as result item removed',function(){
           
            var res;
    
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);
    
            res=ayay.pop();

            expect(res).toEqual(3)
    
           

        });

        it('should sucessfully permanently remove last item from ayay',function(){

            var res = [1,2];
    
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);
    
            ayay.pop();
    
            expect(ayay.length).toEqual(2);
            for (var i = 0; i < ayay.length; i++) 
            expect(ayay[i]).toEqual(res[i]);
        
        
        });

    });


    describe('map',function () {

            it('should sucessfully multiply numbers by 2', function(){

                    ayay.push(1);
                    ayay.push(2);
                    ayay.push(3);

                    var res = [];

                    ayay.map(function(element,index){ res[index] = element *2; });


                    expect(res.length).toEqual(ayay.length);

                    res.forEach(function(element,index){
                            expect(element).toEqual(ayay[index]*2);
                    });

            



            });





    });

    describe('filter',function(){


        it('should create a new element with elements that satisfy the test',function(){

                ayay.push(1);
                ayay.push(3);
                ayay.push(4);
                ayay.push(7);


                var result = ayay.filter(function(element,index){
                        return element > 3;
                });

                expect(result.length).toEqual(2);                
                expect(result[0]).toEqual(4);
                expect(result[1]).toEqual(7);
        });



    describe('find',function(){


        it('should create a new element with elements that satisfy the test',function(){
    
                ayay.push(1);
                ayay.push(3);
                ayay.push(4);
                ayay.push(7);
    
    
                var result = ayay.find(function(element,index){
                    return element > 3;
                });
    
                expect(result).toEqual(4);                
                    
            });
          
        });

    });

    describe('sort',function(){

    it('it should sucessfully sort given numeric ayay',function(){


            var res = new Ayay;
            ayay.push(21);
            ayay.push(4);
            ayay.push(31);
            ayay.push(9);
            
            res=ayay.sort();
           
            expect(res[0]).toEqual('21');
            expect(res[1]).toEqual('31');
            expect(res[2]).toEqual('4');
            expect(res[3]).toEqual('9');




        });

        it('it should sucessfully sort given alphabetic ayay',function(){

            ayay.push('Mar');
            ayay.push('Jan');
            ayay.push('Feb');
            ayay.push('Dec');

            res=ayay.sort();

            expect(res[0]).toEqual('Dec');
            expect(res[1]).toEqual('Feb');
            expect(res[2]).toEqual('Jan');
            expect(res[3]).toEqual('Mar');


        });
    



    });
   
});