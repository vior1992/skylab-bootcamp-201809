function fill(){
    if (!(arguments[0] instanceof Array)) throw Error('array is not valid');
    // if (typeof arguments[1] === 'undefined') throw Error(arguments[1] + ' is not defined');
    // if (arguments.length > 4) throw Error('there are too many elements');

    if (arguments[1] == undefined){
        for (i=0;i<arguments[0].length;i++){
            arguments[0][i]=undefined;
        }
    }
    if (arguments[2] == undefined){
        for (i=0;i<arguments[0].length;i++){
            arguments[0][i]=arguments[1];
        }
    }else if (arguments[3] == undefined){
        for (i=arguments[2];i<arguments[0].length;i++){
            arguments[0][i]=arguments[1];
        }  
    } else  {
        for (i=arguments[2];i<arguments[3];i++){
            arguments[0][i]=arguments[1];
        }  
    }
    return arguments[0];
}