describe('Service', function () {
    //var service;

    beforeEach(function () {
       // service = new Service();
    });

    describe('setUserData', function () {

        it('It should fail if firstname has an invalid format', function () {
           var message = "";

           service.setUserData(undefined,"juste","jose","1234",() => {}, (_message) => message = _message);
            expect(message).toEqual("invalid firstname");

        });
        
        it('It should fail if lastname has an invalid format', function () {
            var message = "";
 
            service.setUserData("jose luis","","jose","1234",() => {}, (_message) => message = _message);
             expect(message).toEqual("invalid lastname");
 
         });

        it('It should fail if username has an invalid format', function () {
            var message = "";
 
            service.setUserData("jose luis","juste",undefined,"1234",() => {}, (_message) => message = _message);
             expect(message).toEqual("invalid username");
 
         });

        it('It should fail if password has an invalid format', function () {
            var message = "";
 
            service.setUserData("jose luis","juste","jose",undefined,() => {}, (_message) => message = _message);
             expect(message).toEqual("invalid password");
 
         });

         it('It should fail if registerSuccess callback is not a function', function () {
            
           expect(function(){service.setUserData("jose luis","juste","jose","1234",undefined, () => {})}).toThrowError('registerSuccess is not a function');
 
         });

         it('It should fail if registerFail callback is not a function', function () {
         
            expect(function(){service.setUserData("jose luis","juste","jose","1234",() => {}, undefined)}).toThrowError('registerFail is not a function');
 
         });

        
       
    });

    describe('login', function () {

        it('It should fail if username has an invalid format', function () {
            
            var message = "";
            service.login("","1234",() => {}, (_message) => message = _message);
            expect(message).toEqual("invalid username");
 
         });

         it('It should fail if password has an invalid format', function () {
            
            var message = "";
            service.login("jose","",() => {}, (_message) => message = _message);
            expect(message).toEqual("invalid password");
 
         });

         it('It should fail if registerSuccess callback is not a function', function () {
            
            expect(function(){service.login("jose","1234",undefined, () => {})}).toThrowError('loginSuccess is not a function');
  
          });
 
          it('It should fail if registerFail callback is not a function', function () {
          
             expect(function(){service.login("jose","1234",() => {}, undefined)}).toThrowError('loginFail is not a function');
  
          });

    });

});