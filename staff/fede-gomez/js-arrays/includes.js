function includes (array, elem) {
    var isIncluded = false;

    for(i=0; i<array.length; i++) {
        // isIncluded = ((array[i] === elem) ? true : false);
        // if(isIncluded){break;}
        if(isIncluded = ((array[i] === elem) ? true : false)){break;}
    }
    return isIncluded;
}