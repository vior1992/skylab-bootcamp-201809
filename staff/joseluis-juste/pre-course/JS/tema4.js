//a) Escribe una funcion en la que, declarando una array con los numeros del 1 al 9, muestres por pantalla los numeros unidos por parejas (1-2, 2-3, 3-4...), además, cada elemento de la pareja deberá estar multiplicada por 2.

function showNums() {

	var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	nums = nums.map(x => x * 2);
	for (var i = 0; i < nums.length - 1; i++) {

		console.log(i + 1 + "ª pareja " + (nums[i]) + " - " + (nums[i + 1]));
	}
}
showNums();

//a1) La funcion debería aceptar la array a tratar como argumento.

function showNums1() {

	var nums = [];
	for (p in arguments) {
		nums.push(arguments[p]);
	}
	nums = nums.map(x => x * 2);
	for (var i = 0; i < nums.length - 1; i++) {

		console.log(i + 1 + "ª pareja " + (nums[i]) + " - " + (nums[i + 1]));
	}
}
showNums1(1, 2, 3, 4, 5, 6, 7, 8, 9);

//a2) Pasa también el numero a multiplicar a la función como argumento

function showNums2() {

	var nums = [];
	var multiplicador = 1;
	for (p in arguments) {
		nums.push(arguments[p]);
	}
	multiplicador = nums[nums.length - 1];
	console.log("El número escogido es: " + multiplicador);
	nums = nums.slice(0, nums.length - 1);
	nums = nums.map(x => x * multiplicador);
	for (var i = 0; i < nums.length - 1; i++) {

		console.log(i + 1 + "ª pareja " + (nums[i]) + " - " + (nums[i + 1]));
	}
}
showNums2(1, 2, 3, 4, 5, 6, 7, 8, 9, 2);

//a3) La función debería ser capaz de recibir el numero de parejas que queremos devolver del total.

function showNums3() {

	var nums = [];
	var multiplicador = 1;
	var parejas = 1;
	var cont = 0;

	for (p in arguments) {
		nums.push(arguments[p]);
	}
	multiplicador = nums[nums.length - 2];
	parejas = nums[nums.length - 1];
	console.log("El número escogido es: " + multiplicador);
	console.log("Se quieren mostrar las " + parejas + " primeras parejas");
	nums = nums.slice(0, nums.length - 2);
	nums = nums.map(x => x * multiplicador);
	for (var i = 0; i < nums.length - 1; i++) {
		if (cont < parejas)
			console.log(i + 1 + "ª pareja " + (nums[i]) + " - " + (nums[i + 1]));
		else
			break;
		cont++;
	}

}
showNums3(1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 3);

//b) Volvemos a la numeros... Podrias hacer una funcion que mostrara por pantalla la serie Fibonacci?

function fibonacci() {
	var sec = [];
	var out = "";


	sec[0] = 0;
	sec[1] = 1;
	out += sec[0] + " ";
	out += sec[1] + " ";
	for (var i = 2; i <= 10; i++) {
		sec[i] = sec[i - 2] + sec[i - 1];
		out += sec[i] + " ";
	}
	console.log(out.trim());
}


console.log(fibonacci());

//b2) Puedes añadir además, la posición de cada resultado?

function fibonacci1() {
	var sec = [];
	var out = "";


	sec[0] = 0;
	sec[1] = 1;
	out += "Posicion 0" + " => " + sec[0] + " ";
	out += "Posicion 1" + " => " + sec[1] + " ";
	for (var i = 2; i <= 10; i++) {
		sec[i] = sec[i - 2] + sec[i - 1];
		out += "Posicion " + i + " => " + sec[i] + " ";
	}
	console.log(out.trim());
}


console.log(fibonacci1());

//b3) Ahora, inserta los resultados en una array y muestralos todos juntos de una manera amigable.


function fibonacci2() {
	var sec = [];
	var out = "";


	sec[0] = 0;
	sec[1] = 1;
	for (var i = 2; i <= 10; i++) {
		sec[i] = sec[i - 2] + sec[i - 1];

	}
	console.log(sec.forEach((x, i) => console.log("Posicion " + (i) + " => " + x)));
}


console.log(fibonacci2());

//b4) Ahora, el usuario debería ser capaz de especificar la posición de la serie hasta donde queremos llegar.

function fibonacci3(num) {
	var sec = [];
	var out = "";


	sec[0] = 0;
	sec[1] = 1;
	for (var i = 2; i <= num; i++) {
		sec[i] = sec[i - 2] + sec[i - 1];

	}
	console.log(sec.forEach((x, i) => console.log("Posicion " + (i) + " => " + x)));
}


console.log(fibonacci3(10));

//b5) Ahora, muestra los resultados en forma piramidal.

function showPyramid(num) {

	var output = "";
	var x = 0;
	var y = 1;
	var aux = 0;

	console.log("0");
	console.log("0 1");

	output = "0 1";

	for (var i = 2; i < num; i++) {
		aux = x + y;
		x = y;
		y = aux;
		output += " " + aux;

		console.log(output);

	}
}
showPyramid(7);


//c) Simple Scripting program. Crea un programa que transforme un número de 4 dígitos en otro diferente con las posiciones de los dígitos cambiadas, creandio un nuevo código


function crypto(code) {
	var nums = code.toString().split("");
	var aux;

	if (nums.length !== 4)
		return "ERROR";

	nums.splice(nums.length, 0, nums[0]);
	nums.shift();
	return Number.parseInt(nums.join(""));
}

var cont = 1;
var code = prompt("Introduzca el codigo");
do {

	code = Crypto(code);
	if (code === "ERROR") {
		console.log("El código no tiene 4 dígitos...");
		break;
	}
	console.log(code);
	cont++;

} while (cont <= 4);

//c2) Ahora, el usuario debería poder introducir como parámetro dos códigos a la vez y devolver los dos códigos encriptados (Los dos códigos se deberían encriptar en la misma función)

function crypto1(code1, code2) {
	var nums1 = code1.toString().split("");
	var nums2 = code2.toString().split("");

	if ((nums1.length !== 4) || (nums2.length !== 4))
		return "ERROR";

	nums1.splice(nums1.length, 0, nums1[0]);
	nums1.shift();

	nums2.splice(nums2.length, 0, nums2[0]);
	nums2.shift();

	return [Number.parseInt(nums1.join("")), Number.parseInt(nums2.join(""))];
}

var code1 = prompt("Introduzca el primer codigo");
var code2 = prompt("Introduzca el segundo codigo");
var result = [];
var cont = 1;
do {

	result = crypto1(code1, code2);
	if (result === "ERROR") {
		console.log("Alguno de los códigos no tiene 4 dígitos...");
		break;
	}
	code1 = result[0];
	code2 = result[1];
	console.log(code1 + " " + code2);
	cont++;

} while (cont <= 4);

//c3) Ahora, vamos a añadir un nivel más de seguridad. Despues de cambiar la posición de los dígitos, multiplicaremos a cada miembro por un numero cuya multiplicación no sea superior a 10.
// (Si es superior a 10, conseguiremos una multplicación de dos digitos y el código ya no sería de 4 valores)

function crypto2(code1, code2, multiplicador) {
	var nums1 = code1.toString().split("");
	var nums2 = code2.toString().split("");

	if ((nums1.length !== 4) || (nums2.length !== 4))
		return "ERROR";

	nums1.splice(nums1.length, 0, nums1[0]);
	nums1.shift();

	nums2.splice(nums2.length, 0, nums2[0]);
	nums2.shift();

	if (nums1.filter(x => { return x * multiplicador >= 10 }).length > 0)
		return "ERROR: en el codigo1 existe un dígito que multiplicado por " + multiplicador + " es >= 10";


	if (nums2.filter(x => { return x * multiplicador >= 10 }).length > 0)
		return "ERROR: en el codigo2 existe un dígito que multiplicado por " + multiplicador + " es >= 10";

	return [Number.parseInt(nums1.map(x => x * multiplicador).join("")), Number.parseInt(nums2.map(x => x * multiplicador).join(""))];
}

console.log(crypto2(1234, 4213, 2));

//c4) Ahora, implementa en otra funcion aparte el decrypter(), 
//que recibirá como argumento un código encriptado (y correspondientemente multiplicado en el apartado c3) y nos devuelva el código desencriptado.

function decrypter(code, multiplicador) {
	var nums = code.toString().split("");


	if (nums.length !== 4)
		return "ERROR";

	nums.splice(0, 0, nums[nums.length - 1]);
	nums.pop();

	return Number.parseInt(nums.map(x => x / multiplicador).join(""));
}

console.log(decrypter(4682, 2));

//c5) Añade las dos funciones a la misma función padre, de forma que encripte y desencripte a la vez cuando termine de ejecutarse.

function encryptDecrypt(code1, code2, multiplicador) {
	var encrypted = crypto2(code1, code2, multiplicador);

	if (!Array.isArray(encrypted))
		return encrypted;

	return [decrypter(encrypted[0], multiplicador), decrypter(encrypted[1], multiplicador)];
}

console.log(encryptDecrypt(1234, 4213, 2));

//c6) El usuario podrá solo introducir letras, cada número del 0 al 9 corresponderá a varias letras. Podéis seguir este esquema.

var dictionary = {

	0: ['A', 'K', 'T', 'F', 'O', 'Y'],
	1: ['B', 'L', 'U', 'G', 'P', 'Z'],
	2: ['C', 'M', 'V', 'H', 'Q', '.'],
	3: ['D', 'N', 'W', 'I', 'R', ','],
	4: ['E', 'Ñ', 'X', 'J', 'S', ' ']
};

function searchLetter(letter) {
	for (var num in dictionary) {
		if (dictionary[num].find(x => { return x === letter }) !== undefined) {
			return num;
		}
	}
}

function codeScript() {
	var letters = [];
	var final_code = "";

	for (var word in arguments) {
		letters = arguments[word].toUpperCase().split("");
		for (var i = 0; i < letters.length; i++) {
			final_code += searchLetter(letters[i]).toString();

		}
	}

	return final_code;
}

console.log(codeScript("HI  ", "WE  ", "NEED", "HELP"));

//d) Crea un programa que use la encriptacion Romana, como es? Si tenemos la palabra SKYLAB,
//la palabra encriptada será SLKAYB. Si divides la palabra original en 2 grupos obtienes:

function cryptRoman(word) {
	var letters = word.split("");
	var output = "";

	if (letters.length % 2 !== 0)
		return console.log("Introduzca una palabra que tenga un numero de letras par");

	var group1 = letters.slice(0, (letters.length / 2));
	var group2 = letters.slice((letters.length / 2), letters.length);
	for (var i = 0; i < group1.length; i++) {
		output += group1[i] + group2[i]
	}
	return output;
}

console.log(cryptRoman("SKYLAB"));

//d2) Programa el desencriptador, pasa como parámetro SLKAYB y que devuelva SKYLAB.

function decryptRoman(word) {
	var pares = word.split("").filter((e, i) => { return i % 2 === 0 });
	var impares = word.split("").filter((e, i) => { return i % 2 !== 0 });
	return pares.concat(impares).join("");
}

console.log(decryptRoman("SLKAYB"));

//d3) Agrupa la función Encrypt y decrypt en una unica función, de forma que introduzcas como parámetro 
//SKYLAB y devuelva SKYLAB (con todas las transformaciones internas hechas y mostrando, entre medias, la transformación)

function total(word) {
	var letters = word.split("");
	var output = "";

	if (letters.length % 2 !== 0)
		return console.log("Introduzca una palabra que tenga un numero de letras par");

	console.log("Procesando la palabra: " + word);
	console.log("");
	console.log("");
	console.log("");
	console.log("encrypt process...");
	console.log("-----------------------");
	console.log("");
	var group1 = letters.slice(0, (letters.length / 2));
	console.log("Obtenemos de la palabra el primer grupo de letras " + group1.join(""));
	var group2 = letters.slice((letters.length / 2), letters.length);
	console.log("Obtenemos de la palabra el segundo grupo de letras " + group2.join(""));
	for (var i = 0; i < group1.length; i++) {
		console.log("Enlazando la letra " + group1[i] + " del grupo1 con la letra " + group2[i] + " del grupo2");
		output += group1[i] + group2[i]
	}
	console.log("");
	console.log("La palabra encriptada queda: " + output);
	console.log("");
	console.log("");
	console.log("decrypt process...");
	console.log("-----------------------");
	console.log("");
	var pares = output.split("").filter((e, i) => { return i % 2 === 0 });
	console.log("Obtenemos las letras pares que son: " + pares.join(""));
	var impares = output.split("").filter((e, i) => { return i % 2 !== 0 });
	console.log("Obtenemos las letras impares que son: " + impares.join(""));
	return pares.concat(impares).join("");
}

console.log("La palabra final es ->" + total("SKYLAB"));

//d4) Lo tienes? Prueba ahora con SKYLABCODERS. Cambia la función para que pueda aceptar palabras más largas.

console.log("La palabra final es ->" + total("SKYLABCODERS")); //ya estaba adaptada

//e) Crea un programa al que le introduces un número como parámetro del 0 al 100 y devuelve el número transformado a alfabeto normal, es decir:


function sayItWithWords(num) {
	var units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
	var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
	var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	var nums = num.toString().split("");

	nums.reverse().map(x => Number.parseInt(x));
	var result = [];


	if (nums.length == 1) {
		return units[Number.parseInt(nums[0])];
	}

	if ((num >= 10) && (num <= 19))
		return teens[Number.parseInt(num.toString().split("")[1])];

	if (num === 100)
		return "one hundred";

	for (var i = nums.length - 1; i >= 0; i--) {
		switch (i) {
			case 0:
				if (nums[i] != 0)
					result.push(units[nums[i]]);
				break;

			case 1:
				result.push(tens[nums[i]]);
				break;

			case 2:
				result.push(teens[nums[i]]);
				break;
		}
	}
	return result.join("-");

}
for (var i = 0; i <= 100; i++) {
	console.log(sayItWithWords(i));
}

//e2) Ahora, el output debería ser capaz de, aparte de devolver el número traducido, devolver también los números por los que está formado:

function sayItWithWords1(num) {
	var units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
	var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
	var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	var result = [];
	var resultNums = [];
	var nums = num.toString().split("");

	if (nums.length == 1) {
		return units[Number.parseInt(nums[0])] + ", " + units[Number.parseInt(nums[0])] + " / " + nums[0];
	}

	if ((num >= 10) && (num <= 19)) {
		resultNums.push(Number.parseInt(nums[0]) * 10);
		resultNums.push(Number.parseInt(nums[1]));
		return teens[Number.parseInt(num.toString().split("")[1])] + ", " + resultNums.join(" + ") + " / " + num;
	}

	if (num === 100)
		return "one hundred, one hundred / 100";

	nums.reverse();
	nums = nums.map(x => Number.parseInt(x));

	for (var i = nums.length - 1; i >= 0; i--) {
		switch (i) {
			case 0:
				if (nums[i] !== 0) {
					result.push(units[nums[i]]);
					resultNums.push(nums[i]);
				}

				break;

			case 1:
				if (nums[i] !== 0) {
					result.push(tens[nums[i]]);
					resultNums.push(nums[i] * 10);
				}

				break;

		}
	}
	return result.join("-") + ", " + result.join(" + ") + " / " + resultNums.join(" + ");

}
for (var i = 0; i <= 100; i++) {
	console.log(sayItWithWords1(i));
}


//e3) Cambia tu programa para que acepte cualquier número entre 0 y 1000.

function sayItWithWords3(num) {
	var units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
	var tens = ['zero', 'zero', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
	var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	var hundreds = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
	var result = [];
	var resultNums = [];
	var nums = num.toString().split("");


	if (nums.length == 1) {
		return units[Number.parseInt(nums[0])] + ", " + units[Number.parseInt(nums[0])] + " / " + nums[0];
	}

	if ((num >= 10) && (num <= 19)) {
		resultNums.push(Number.parseInt(nums[0]) * 10);
		resultNums.push(Number.parseInt(nums[1]));
		return teens[Number.parseInt(num.toString().split("")[1])] + ", " + resultNums.join(" + ") + " / " + num;
	}

	if (num === 1000)
		return "one thousand, one thousand / 1000";

	if (num / 100 === Number.parseInt(nums[0]))
		return hundreds[Number.parseInt(nums[0])] + ", " + hundreds[Number.parseInt(nums[0])] + " / " + num;


	if ((nums.length === 3) && ((Number.parseInt(nums.slice(1, 3).join("")) >= 10) && (Number.parseInt(nums.slice(1, 3).join("")) <= 19))) {
		return hundreds[Number.parseInt(nums[0])] + "-" + teens[Number.parseInt(nums.slice(2, 3).join(""))] + ", "

			+ hundreds[Number.parseInt(nums[0])] + " + " + teens[Number.parseInt(nums.slice(2, 3).join(""))]

			+ " / " + Number.parseInt(nums[0]) * 100 + " + " + Number.parseInt(nums.slice(1, 3).join(""));
	}


	nums = nums.reverse();
	nums = nums.map(x => Number.parseInt(x));

	for (var i = nums.length - 1; i >= 0; i--) {
		switch (i) {
			case 0:
				if (nums[i] !== 0) {
					result.push(units[nums[i]]);
					resultNums.push(nums[i]);
				}

				break;

			case 1:
				if (nums[i] !== 0) {
					result.push(tens[nums[i]]);
					resultNums.push(nums[i] * 10);
				}

				break;

			case 2:
				if (nums[i] !== 0) {
					result.push(hundreds[nums[i]]);
					resultNums.push(nums[i] * 100);
				}

				break;

		}
	}
	return result.join("-") + ", " + result.join(" + ") + " / " + resultNums.join(" + ");

}

for (var i = 0; i <= 1000; i++) {
	console.log(sayItWithWords3(i));
}

//f) Recibiendo el siguiente texto por parámetro a tu función

var texto = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. ";
texto += "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit";
texto += " in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit";
texto += " anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae";
texto += " ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, ";
texto += "sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci";
texto += " velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam ";
texto += "corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,"
texto += " vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.";

function replace(texto) {

	var dic = {

		dolor: "potato",
		lorem: "tomato",
		labor: "cucumber",
		consequatur: "garlic",
		ipsum: "onion"
	};

	var regex = new RegExp("[.]", "gmi");
	texto = texto.replace(regex, ",");
	regex = new RegExp("[,]", "gmi");
	texto = texto.replace(regex, "");

	for (var p in dic) {
		regex = new RegExp(p.toString(), "gmi");
		texto = texto.replace(regex, dic[p]);
	}
	return texto;
}
console.log(Replace(texto));


//f1) Añade una funcionalidad que cuente cuantos cambios/coincidencias ha encontrado de cada palabra, y te los muestre de una forma amigable para el usuario

var texto = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. ";
texto += "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit";
texto += " in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit";
texto += " anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae";
texto += " ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, ";
texto += "sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci";
texto += " velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam ";
texto += "corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,"
texto += " vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.";

function replace1(texto) {
	var dic = {

		dolor: "potato",
		lorem: "tomato",
		labor: "cucumber",
		consequatur: "garlic",
		ipsum: "onion"
	};

	var regex = new RegExp("[.]", "gmi");
	texto = texto.replace(regex, ",");
	regex = new RegExp("[,]", "gmi");
	texto = texto.replace(regex, "");

	for (var p in dic) {
		regex = new RegExp(p.toString(), "gmi");
		console.log("La palabra " + p + " tiene " + texto.match(regex).length + " coincidencias");
		texto = texto.replace(regex, dic[p]);
	}
	console.log("");
	return texto;
}
console.log(replace1(texto));


