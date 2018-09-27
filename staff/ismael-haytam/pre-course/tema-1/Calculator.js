/*
    -   Calculator ---------------------------------------------------------

Haz una calculadora.
Un único programa al que le pasarás dos parámetros y el usuario podrá visualizar por consola:
la suma, resta, multiplicación y división entre ambos números.
El resultado debería ser mostrado con 3 decimales como mucho (En caso de que hubieran).
El programa debe contemplar y actuar correctamente en el caso de que el usuario introduzca
cualquier cosa que no sean números. Si el usuario introduce un solo numero,
deberá mostrar SOLO su raíz cuadrada,si vuelve a introducir los dos,
volverá a mostrar las 4 operaciones de siempre.Los resultados deberían almacenarse
dentro de una array y mostrarlos de una forma amigable al usuario.
*/

function calculator(n1, n2) {

    if (Number(n1) && !n2) return console.log(`La raíz cuadrada de ${n1} = ${Math.sqrt(n1)}`);
    if (isNaN(n1) || isNaN(n2)) return console.log("Calculator Error: You can\'t do this operation!");

    let result = [];

    let fixDecimals = num => (Number.isInteger(num)) ? num : num.toFixed(3);

    result.push(`La suma de ${n1} y ${n2} = ${fixDecimals(n1 + n2)}`);
    result.push(`La resta de ${n1} y ${n2} = ${fixDecimals(n1 - n2)}`);
    result.push(`La multiplicación de ${n1} y ${n2} = ${fixDecimals(n1 * n2)}`);
    result.push(`La division de ${n1} y ${n2} = ${fixDecimals(n1 / n2)}`);

    console.log(result.join('\n'))

}

calculator(16);
calculator('abc');
calculator(2, 15);
calculator(80, '15coders');



/*
    -   Parte Pro ---------------------------------------------------------
    Podrías hacer que la calculadora relizara operaciones sean cuales sean el
    numero de argumentos pasados a la funcion?
*/

function calculatorPro(...numbers) {

    let result = [];
    let operation = (nums, operator) => nums.join(operator);

    result.push('Calculator Pro - calculando todo los números juntos (argumentos)');
    result.push(`La suma  = ${eval(operation(numbers, '+'))}`);
    result.push(`La resta = ${eval(operation(numbers, '-'))}`);
    result.push(`La multiplicación  = ${eval(operation(numbers, '*'))}`);
    result.push(`La division  = ${eval(operation(numbers, '/'))}`);

    console.log(result.join('\n'));

}

calculatorPro(2, 6, 15);
