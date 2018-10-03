function includes(arr, elem, num) {
    var include = false;

    if (num !== undefined){
        for (var i=num; i<arr.length; i++){
            if (arr[i] == elem){
                include = true;
            }
        }  
    }
    else{
        for (var i=0; i<arr.length; i++){
            if (arr[i] == elem){
                include = true;
            }
        }  

    }
    return include;
    
}