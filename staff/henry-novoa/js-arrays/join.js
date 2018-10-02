//create a function that works as Array.prototype.join

// join.js

function join(arr, separator) {
    var result ="";
    if(separator === undefined){
        for(var i=0; i<arr.length -1; i++){
            result = result + arr[i] +  ",";
        }
        result = result + arr[i]
    
}else{
    for(var i=0; i<arr.length -1; i++){
        result = result + arr[i] +  separator;
    }
    result = result + arr[i]

}
    return result;

}

