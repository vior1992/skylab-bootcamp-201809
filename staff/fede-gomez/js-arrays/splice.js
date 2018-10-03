function splice () {

    if(arguments.length>3){
        return 'Please insert the correct amount of arguments';
    }
    else if(arguments[0] instanceof Array){
        var array = arguments[0];
        var newArray = [];
        var start = arguments[1];
        var end = arguments[2];

        if(start === undefined){
            
            newArray = array;

        } else if(end === undefined){

            var index = 0;
            for(i=start; i<array.length; i++){
                newArray[index++] = array[i];
            }

        } else {

            var index = 0;
            for(i=start; i<end; i++){
                newArray[index++] = array[i];
            }

        }

    } else {
        return 'Please insert a valid array';
    }

    return removed;
}

