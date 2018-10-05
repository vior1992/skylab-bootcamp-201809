function sort(arr) {

    if (!Array.isArray(arr)) throw Error('array is not valid');
    if (arr.length <= 0) throw Error('array is empty');
    var index;
    var newArr = arr.slice();
    for(i=0; i<newArr.length; i++){
        index = i;
        for(var x=i; x<arr.length; x++){
            if(''+newArr[x] < ''+newArr[index]){
                index = x;
            }
        }
        var moment = newArr[i];
        newArr[i] = newArr[index];
        newArr[index] = moment;        
    }
    return newArr;
     
}

