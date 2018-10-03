function concat (array1, array2){
    var newArray = [];
    var newArrayIndex = 0;
    for(let i=0; i<array1.length; i++){
        newArray[newArrayIndex++] = array1[i];
    }
    for(let i=0; i<array2.length; i++){
        newArray[newArrayIndex++] = array2[i];
    }
    return newArray;
}