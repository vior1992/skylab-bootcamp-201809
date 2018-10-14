
function join(arr, separator) {
    var a = [];
    var a2 = '';
    for(var i=0; i<arr.length; i++) {
        if(i<arr.length-1){
            a += arr[i] + separator;
        }else{
            a += arr[i];
        }     
    }
    return a + a2
}