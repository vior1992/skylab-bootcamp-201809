function from(element, f){

    newArray = [];
    if((typeof element==="string" || (typeof element ==="object" && typeof element.length==="number"))&&arguments.length===1)
    {
        for(var i = 0; i<element.length; i++){
            newArray[i]=element[i];
        }
        return newArray;
    }
    else if((typeof element==="string" || (typeof element ==="object" && typeof element.length==="number"))&&arguments.length===2){
        for(var i = 0; i<element.length; i++){
            newArray[i]=f(element[i]);
        }
        return newArray;
    }
    return newArray;
}