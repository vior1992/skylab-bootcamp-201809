function indexOf(array, string, fromIndex){
    var stringIndex;

    fromIndex = (fromIndex === undefined ? 0 : fromIndex); 
    var found = false;

    for(let i=fromIndex; i<array.length; i++){
        if (array[i] === string) { 
            stringIndex = i; 
            found = true;
            break;}
    }

    return (found ? stringIndex : "That string is not in the Array");
}