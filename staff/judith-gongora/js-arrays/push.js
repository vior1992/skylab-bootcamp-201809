function push(){
    for(i=1;i<arguments.length;i++){
        arr[arr.length]= arguments[i];
    }
    return arr;

}