function concat(){
    var output = [];
    var aux = 0;

    for(var j=0;j < arguments.length; j++){

        for(var i = 0; i < arguments[j].length;i++){
            output[aux] = arguments[j][i];
            aux++;
        }

    }
    return output;
}