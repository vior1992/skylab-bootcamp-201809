/*
    -   Calculator ---------------------------------------------------------
Haz una calculadora.
El resultado debería ser mostrado con 3 decimales como mucho (En caso de que hubieran).
El programa debe contemplar y actuar correctamente en el caso de que el usuario introduzca
cualquier cosa que no sean números. Si el usuario introduce un solo numero,
deberá mostrar SOLO su raíz cuadrada,si vuelve a introducir los dos,
volverá a mostrar las 4 operaciones de siempre.Los resultados deberían almacenarse
dentro de una array y mostrarlos de una forma amigable al usuario.
*/

function pressed(key) {

    let signs = ['+', '-', '/', '*'];
    let screen = document.getElementById('screen');
    let operation = screen.textContent;

    let incompleteOperation = signs.includes(operation.substr(operation.length - 1));

    if (key === 'C') return screen.innerText = '';

    let print = (result) => {
        result = (Number.isInteger(result)) ? result : result.toFixed(3);
        return screen.innerText = `${operation} \n ${result}`;
    }

    if (key === '=') {
        if (incompleteOperation) return;
        let totalSigns = signs.filter(sign => operation.indexOf(sign) !== -1).length;
        if (totalSigns === 0) return print(Math.sqrt(operation));
        return print(eval(operation));
    }
    
    if (incompleteOperation && signs.includes(key)) return;
    if (['/', '*'].includes(key) && operation.length === 0) return;
    screen.innerText += key;

}

