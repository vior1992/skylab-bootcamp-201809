function of() {
    if(!arguments.length) throw Error ('elements is empty');

    var newArr = [];
    var num = arguments.length;
    for(i=0; i<num; i++){
        newArr[i] = arguments[i];
    }
    console.log(newArr);
}