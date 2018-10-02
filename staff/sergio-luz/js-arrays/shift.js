function shift(arg){
    var temp=arg[0];
    for(var i=1; i<arg.length; i++){
        arg[i-1]=arg[i];
    }
    if(arg.length>0) {  arg.length--;}
    return temp;
}