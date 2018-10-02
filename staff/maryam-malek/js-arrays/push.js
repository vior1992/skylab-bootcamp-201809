function push(arr, elem) {
    if(elem[0] !== undefined && typeof elem !== 'string'){
        for(var i=0; i<elem.length; i++){
            arr[arr.length++] = elem[i];
        }
    }else{
        arr[arr.length++] = elem;
    }
    return arr.length;
}