
// find.js

function find(arr, callback) {
    result=[];
    for(var i= 0; i<arr.length;i++){
        if(callback(arr[i]) === true){
            return arr[i];
            
        }   
    }

}

