
function map(arr, callback){
    var a = [];
    for(i=0; i<arr.length; i++){
        a[i] = callback(arr[i]);
    }

   return a

}