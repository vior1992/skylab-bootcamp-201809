// ['March', 'Jan', 'Feb', 'Dec']
function sort(arr) {
    var aux;
    for(i=1; i<arr.length; i++){
        if(arr[i]< arr[0]){
            for(var y = 0;y<arr.length; y++){
                auxAux = arr[y]; 
                aux = arr[0];
                arr[0] = arr[i];
            }
            aux = arr[0];
            arr[0] = arr[i];
            arr[i-1]= aux;
        }
        
    }

    return arr;   
}

