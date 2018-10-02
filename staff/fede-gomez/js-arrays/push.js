function push () {


    var array = arguments[0];
    var isArray = (typeof array === 'object') ? true : false;
    if(isArray) {

        for(var i=1; i<arguments.length; i++){
            array[array.length] = arguments[i];
        }
        
        return array.length;

    } else {

        return "The first element is not an Array";

    }
}