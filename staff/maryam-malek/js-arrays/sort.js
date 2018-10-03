function sort(arr) {
    // function splice(arr, start, count) {
    //     var newArr = arr;
    //     var cutArr = [];
    //     var sta = start;
    //     for(i=0;i<count; i++){
    //         cutArr[i] = arr[start];
    //         start++;
    //     }
    //     if((sta + count) < arr.length){
    //         for(var x=sta; x<(arr.length-count); x++){
    //             newArr[sta] = arr[sta+count];
    //             newArr.length = arr.length - count;
    //         }
    //     }
    //     return cutArr;
    // }
    var index;
    for(i=0; i<arr.length; i++){
        index = i;
        for(var x=i; x<arr.length; x++){
            if(arr[x] < arr[index]){
                index = x;
            }
        }
        var moment = arr[x];
        arr[x] = arr[index];
        arr[index] = moment;        
    }
    return arr;
     
}

