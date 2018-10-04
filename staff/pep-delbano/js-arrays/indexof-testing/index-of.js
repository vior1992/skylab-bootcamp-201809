//especificamos los posibles errores que nuestra función creemos que podría tener:


function indexof(arr, elem) {
    //define the possible errors we think we could have when calling the function
    
    if (typeof arr == "undefined")  throw Error("undefined is not an array!");
    
    if (!(arr instanceof Array))  throw Error("first parameter should be an array!")
    
    if (!arr.length || !elem.length)  throw Error("one argument is empty");

    

    //and what it should actually do:
	var index = 0;
	var coincidenceAtIndex;
    for (var i=0; i<arr.length; i++) {
        arr[i];
        index++;
		if (arr[i] === elem) {
        	coincidenceAtIndex = index;
			return coincidenceAtIndex;
        }
		if (index === arr.length-1 && coincidenceAtIndex !== undefined) {
        return coincidenceAtIndex
		} else if (index === arr.length-1 && coincidenceAtIndex === undefined){
		return -1;
        }
        
    } //for

} // indexof()


indexof(['ant', 'bison', 'camel', 'duck', 'bison'], 'bison');


//ahora en el 'indexof.demo.js' explicaremos mejor cada caso: ejecutando la función de esa manera, nos tendría que mostrar este tipo de error en pantalla, de lo contrario, avisaremos que no hemos avisado del error correctamente!!! Pushearemos todos los casos a un array.

//con el tercer file llamado 'testsuite' creamos y ejecutamos la función que hará que se ejecute indexof, e iterarará también el array que contiene los casos de error, para que se muestre el aviso definido segun el tipo de error que ocurra al testear!!
