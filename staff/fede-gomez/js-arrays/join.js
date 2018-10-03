function join(array, char){
    var string = '';
    if (char === undefined) { 
        for(var i=0; i<array.length-1; i++) {
                string += array[i] + ',';
        }    
        string += array[i];
    } else {
        for(var i=0; i<array.length-1; i++) {
                string += array[i] + char;
        }
        string += array[i];
    }    
    return string;
}