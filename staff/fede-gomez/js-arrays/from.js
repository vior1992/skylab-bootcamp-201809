function from () {

    var newArray = [];
    var a = arguments[0];

    if (arguments[1] === undefined){
        if(arguments[0] instanceof Array){
            for(let i=0; i<arguments[0].length; i++){
                newArray[i] = arguments[i];
            }
            return newArray;
        } else if (arguments[0] instanceof String){

            for(let i=0; i<arguments[0].length; i++){
                newArray[i] = arguments[0][i];
            }
            return newArray;
            
        } else {
            console.log('Please, insert a valid array or string');
        }
        console.log("arguemnts[1] is undefined");
    } else {
        if (typeof arguments[1] === 'function') {
    
            var functionArgument = arguments[1];

            if(arguments[0] instanceof Array){
                for(let i=0; i<arguments[0].length; i++){
                    newArray[i] = arguments[1](arguments[i]);
                }
                return newArray;
            } else if (arguments[0] instanceof String){
    
                for(let i=0; i<arguments[0].length; i++){
                    newArray[i] = arguments[0][i];
                }
                return newArray;
                
            } else {
                console.log('Please, insert a valid array or string');
            }

        } else {

        }

    }
}