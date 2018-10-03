function findIndex (array, callback) {

    var isArray = (typeof array === 'object') ? true : false;
    var hasBeenFound;
    if(isArray) {
         for(i=0; i<array.length; i++){
            hasBeenFound = callback(array[i]);
            if(hasBeenFound){return i;} 
         }

         if(!hasBeenFound){return -1;}

    } else {
        return "This is not an Array";
    }

}