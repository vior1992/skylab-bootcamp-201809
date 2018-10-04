//create a function that works as Array.prototype.includes

// includes.js

function includes(arr, elem) {
   
    for(var i=0; i < arr.length; i++){
        if(elem  === arr[i]){
            return true;

        }
    }
    
        return false;


}

