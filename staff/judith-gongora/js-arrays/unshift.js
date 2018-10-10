function unshift(arr, item){
    if (!(arr instanceof Array)) throw Error('array is not valid'); 
    if (!item) throw Error('element not defined');
    
    var array=[];
    for(i=0;i<arr.length;i++){
        array[i]=arr[i];
    }
    arr[0]=item;
    for (i=1;i=arr.length;i++){
        arr[i] = array[i-1];
    }

    // var i;
    // for (i=1;i<arguments.length;i++){
    //     array[i-1]=arguments[i];
    // }
    // for(i=arguments.length-1;i<arr.length;i++){
    //     array[i]=arr[i];
    // }
    // for(i=0;i<array.length;i++){
    //     arr[i]=array[i];
    // }
    return arr.length;
}