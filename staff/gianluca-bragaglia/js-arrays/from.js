

function from(arr, callback) {
    if(callback){
        for(var j=0; j<arr.length; j++) {
           arr2[j] =  callback(arr[j]);   
        }
    }else{
        
        for(var i=0; i<arr.length; i++) {
            arr2[i] = arr[i];
        }
    }   

    return arr2
}