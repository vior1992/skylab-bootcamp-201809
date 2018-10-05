function includes(arr, item){
    if( !(arr instanceof Array)) throw Error('function must contain two arguments');
    if(!arr.length)  throw Error('array cannot be empty');
    if( (typeof item === 'undefined')) throw Error('item to search is missing');

    //Se comprueba si se ha enviado un indice
    if(arguments[2]===undefined){
        var i=0;
    }else{
        var i=arguments[2];
    }
    //Si el indice es mayor a la matriz, se devuelve false
    if(arguments[0].length-1<arguments[2]){
        return false;
    }
    //En caso contrario el indice se usará para empezar a buscar
    for (i; i < arguments[0].length; i++) {
        if(arguments[1]===arguments[0][i]){
            return true;
        }   
    }
    return false;
}