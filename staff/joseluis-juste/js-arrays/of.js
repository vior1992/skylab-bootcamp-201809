// of.js

function of(elems) {
    
    var output = [];
    if (elems === undefined) { 
        output[0] = undefined;
        return output;
    }

    for(var i = 0 ; i < arguments.length;i++){
        output[i] = arguments[i];
    }
    return output;
}