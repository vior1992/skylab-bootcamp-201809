function every(arr, callback) {
    
    var cont = 0;
    for (var i=0; i<arr.length; i++){
        if(callback(arr[i])){
            cont++;
        }   
    }
    if (cont == arr.length){
        return true;
    }
    else{
        return false;
    }
}