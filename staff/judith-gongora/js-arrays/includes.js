function includes(arr, search, pos){
    var e = false;
    var i;
    for(i=0; i<arr.length; i++){
        if(arr[i]===search){
            e=true;
            if (pos !== undefined){
                if (pos<=i){
                    e=false;
                }
            }
            break;
        }
    }
    return e;
}