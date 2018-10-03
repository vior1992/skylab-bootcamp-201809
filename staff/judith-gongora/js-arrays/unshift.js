function unshift(){
    var array=[];
    var i;
    for (i=1;i<arguments.length;i++){
        array[i-1]=arguments[i];
    }
    for(i=arguments.length-1;i<arguments[0].length;i++){
        array[i]=arguments[0][i];
    }
    for(i=0;i<array.length;i++){
        arguments[0][i]=array[i];
    }
    return arguments[0].length;
}