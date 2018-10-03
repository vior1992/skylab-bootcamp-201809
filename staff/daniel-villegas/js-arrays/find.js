// find.js

function find(arr, callback) {
    if (!(arr instanceof Array)) throw Error ("Arr is not a array");

    if (!arr.length) throw Error ("Arr is empty");


    
    for (var i = 0; i < arr.length; i++) if (callback(arr[i])) return arr[i]; 
}




