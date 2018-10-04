function includes (array, elem) {
    

    if(!(array instanceof Array)){throw Error ('first parameter is not an array');}

    
    var isIncluded = false;

    for(i=0; i<array.length; i++) {
        // isIncluded = ((array[i] === elem) ? true : false);
        // if(isIncluded){break;}
        if(isIncluded = ((array[i] === elem) ? true : false)){break;}
    }
    return isIncluded;
}