function isArray(arr){
    if (!Array.isArray(arr)) throw Error('array is not valid');
    if (arr.length <= 0) throw Error('array is empty');
    
    return arr instanceof Array; 
}

//arr instaceOf Array