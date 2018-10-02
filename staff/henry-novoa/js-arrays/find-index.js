//6) find-index.js
//create a function that works as Array.prototype.findIndex

// find-index.js

function findIndex(arr, elem) {
    index= -1;
    for(var i=0; i < arr.length; i++){
        if(elem(arr[i]) ===true){
            return i;

        }
    }
    
        return index;


}

