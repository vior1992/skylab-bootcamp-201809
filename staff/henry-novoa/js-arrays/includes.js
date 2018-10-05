//create a function that works as Array.prototype.includes

// includes.js

function includes(arr, elem) {
   

if (!(arr instanceof Array)) throw Error("input is not an array");
   if(!arr.length) throw Error("array cannot be empty");
   if(!(arguments.length==2)) throw Error("item to search is missing")
    for(var i=0; i < arr.length; i++){
        if(elem  === arr[i]){
            return true;

        }
    }
    
        return false;


}

