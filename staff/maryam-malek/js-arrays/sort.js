function sort(arr) {
    var newArr = [];
    for(i=0; i<arr.length; i++){
        for(var x = 0; x<arr.length; x++){
    
        if(arr[x]<arr[x+1]){
            if(arr[x] !== newArr[i])
            newArr[i] = arr[x];
        }
        }
        return newArr;
    }    
    
    
    // var aux;
    // for(i=1; i<arr.length; i++){
    //     if(arr[i]< arr[0]){
    //         for(var y = 0;y<arr.length; y++){
    //             auxAux = arr[y]; 
    //             aux = arr[0];
    //             arr[0] = arr[i];
    //         }
    //         aux = arr[0];
    //         arr[0] = arr[i];
    //         arr[i-1]= aux;
    //     }
        
    // }

    // return arr;   
}

