function includes(arr, elem) {
    var inclu = false;
    for(i=0; i<arr.length; i++){
        if(arr[i] === elem){
            inclu = true;
        }
    }
    return inclu;        
}