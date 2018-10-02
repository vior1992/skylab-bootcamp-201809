function reduce(arr, f, initial){
    if(initial===undefined){
        initial=0;
    }
    var sum=0;
    for (var i = 1; i < arr.length; i++) {
        sum=initial+arr[i-1];
        sum=f(sum, arr[i]);
        initial=sum;
    }
    return sum;
}