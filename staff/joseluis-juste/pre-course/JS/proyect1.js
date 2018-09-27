var close = false;
var numbers = [];
var newNumber = null;

//recurso obtenido de internet para truncar un número decimal a un número de posiciones dadas
function truncar(x, posiciones = 0) {
	var s = x.toString();
	var l = s.length
	var decimalLength = s.indexOf('.') + 1

	if (l - decimalLength <= posiciones) {
		return x
	}
	// Parte decimal del número
	var isNeg = x < 0
	var decimal = x % 1
	var entera = isNeg ? Math.ceil(x) : Math.floor(x)
	var decimalFormated = Math.floor(
		Math.abs(decimal) * Math.pow(10, posiciones)
	)
	var finalNum = entera + ((decimalFormated / Math.pow(10, posiciones)) * (isNeg ? -1 : 1));

	return finalNum;
}

function calculatorPro() {
	var sum = 0;
	var mul = 1;
	var rest = arguments[0];
	var div = arguments[0];
	var numbers = "";

	for (var i = 0; i < arguments.length; i++) {
		arguments[i] = Number.parseFloat(arguments[i]);
		numbers += arguments[i] + ",";
	}
	numbers = numbers.split(",");
	numbers.pop();
	console.log("Los numeros introducidos son: " + numbers.join(", "));
	console.log("----------------------------------------------------------------------------");
	console.log("");
	if (arguments.length === 1) {
		console.log("La raiz cuadrada es: " + Math.sqrt(arguments[0]));
		return;
	}
	for (var i = 0; i < arguments.length; i++) {
		sum += arguments[i];
		mul *= arguments[i];
		if (i + 1 < arguments.length)
			rest = rest - arguments[i + 1];
		if (i + 1 < arguments.length)
			div = div / arguments[i + 1];
	}
	console.log("El resultado de sumar los numeros es: " + truncar(sum, 3));
	console.log("El resultado de multiplicar los numeros es: " + truncar(mul, 3));
	console.log("El resultado de restar los numeros es: " + truncar(rest, 3));
	console.log("El resultado de dividir los numeros es: " + truncar(div, 3));

}

do {
	numbers.length = 0;
	newNumber = null;

	do {

		newNumber = prompt("New number? Accept or cancel");

		if ((newNumber === "") || (isNaN(newNumber))) {
			alert("The value is not a number");
			continue;
		}

		if (newNumber !== null)
			numbers.push(newNumber);

	} while (newNumber !== null);
	if (numbers.length > 0)
		calculatorPro.apply(null, numbers);
	close = confirm("Execute calculator pro again? Accept or cancel");
	if (close)
		console.clear();

} while (close);