function slice () {
    
    if(arguments.length>3){
        return 'Please insert the correct amount of arguments';
    }
    else if(arguments[0] instanceof Array){
        var array = arguments[0];
        var newArray = [];
        var start = arguments[1];
        var end = arguments[2];

        if(arguments[1] === undefined){
            
            

        } else if(arguments[2] === undefined){



        } else {



        }

        return newArray;

    } else {
        return 'Please insert a valid array';
    }
}