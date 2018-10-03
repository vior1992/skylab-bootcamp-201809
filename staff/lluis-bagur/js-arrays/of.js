function of() {
    var array=[];

    if (!arguments.length) throw Error('elements is empty');

    for (var i=0; i<arguments.length; i++){
        array[i]=arguments[i];
    }
    console.log (array);

}
