function sort (array) {
    var next;
    for(let i=1; i<array.length; i++){
        if(array[i]<array[0]){
            next=array[i-1];
            array[i-1]=array[i];
            array[i]=next;
        }
    }
}