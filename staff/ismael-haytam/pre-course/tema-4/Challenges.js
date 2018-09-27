
/*
    -   Challenges ---------------------------------------------------------
*/

// a) Array del 1 al 9 => numeros unidos por parejas (1-2, 2-3, 3-4...) x 2

let showNums = nums => console.log(nums.map((n, i) => {
    if (nums[i + 1]) return `${i + 1}ª pareja ${n * 2} - ${nums[i + 1] * 2}`;
}).join('\n'));

showNums([1,2,3,4,5,6,7,8,9]);




// a1) La funcion debería aceptar la array a tratar como argumento.

let showNums2 = (...nums) => console.log(nums.map((n, i) => {
    if (nums[i + 1]) return `${i + 1}ª pareja ${n * 2} - ${nums[i + 1] * 2}`;
}).join('\n'));

showNums2(1,2,3,4,5,6,7,8,9);




// a2) Pasa también el numero a multiplicar a la función como argumento

let showNums3 = (m, ...nums) => console.log(nums.map((n, i) => {
    if (nums[i + 1]) return `${i + 1}ª pareja ${n * m} - ${nums[i + 1] * m}`;
}).join('\n'));

showNums3(2, 1,2,3,4,5,6,7,8,9);




// a3) La función debería ser capaz de recibir el numero de parejas que queremos devolver del total.

let showNums4 = (m, s, ...nums) => console.log(nums.map((n, i) => {
    if (nums[i + 1]) return `${i + 1}ª pareja ${n * m} - ${nums[i + 1] * m}`;
}).slice(0, s).join('\n'));

showNums4(2, 3, 1,2,3,4,5,6,7,8,9);




// b) Podrias hacer una funcion que mostrara por pantalla la serie Fibonacci?
// b2) Puedes añadir además, la posición de cada resultado?
// b3) Muestra los resultados en un Array.
// b4) Especificar la posición de la serie hasta donde queremos llegar.

function fibonacci(num) {
    let result = [];
    for (let i = 0; i <= num; i++) {
        (result.length <= 1) ? result.push(i) : result.push(result[i - 1] + result[i - 2]);
    }
    console.log(result.map((n, i) => `${n} pos ${i}º`).join('\n'));
}

fibonacci(15);




// b5) Ahora, muestra los resultados en forma piramidal.

function fiboPymamid(num) {
    let result = [];
    for (let i = 0; i <= num; i++) {
        (result.length <= 1) ? result.push(i) : result.push(result[i - 1] + result[i - 2]);
        console.log(result.join(' '));
    }
    for (let j = num; j > 0; j--) {
        result.pop();
        console.log(result.join(' '));
    }
}

fiboPymamid(10);




// c) Simple Scripting program...

function codeScript(nums) {
    let result = [];
    let n = nums.toString().split('');
    n.forEach((d, i) => (n[i + 1]) ? result.push(n[i + 1]) : result.push(n.shift()));
    return Number(result.join(''));
}

let a = codeScript(3712);
let b = codeScript(a);
let c = codeScript(b);
let d = codeScript(c);
console.log(a, b, c, d);




// c2) Ahora dos parámetro dos códigos a la vez y devolver los dos códigos encriptados

function codeScript2(...nums) {
    for (let i = 0; i <= arguments.length - 1; i++) {
        console.log(codeScript(arguments[i]));
    }
}

codeScript2(3712, 7123);




// c3)  multiplicaremos a cada miembro por un numero cuya multiplicación no sea superior a 10

function codeScript3(nums) {
    let result = [];
    let n = nums.toString().split('');
    n.forEach((d, i) => (n[i + 1]) ? result.push(n[i + 1]) : result.push(n.shift()));
    return Number(result.map(n => (n < 5) ? n * 2 : n).join(''));
}

console.log(codeScript3(2371));





// c4) La funcion decrypter() que nos nos devuelva el código desencriptado.

function decrypter(nums) {
    let result = [];
    let p = [3, 5, 7];
    let n = nums.toString().split('');
    n = n.map(n => (n < 9 && !p.includes(Number(n))) ? n / 2 : Number(n));
    n.forEach((d, i) => (i === 0) ? result.push(n[n.length - 1]) : result.push(n[i - 1]));
    return Number(result.join(''));
}

console.log(decrypter(6724), decrypter(2467), decrypter(7246));




// c5) Encriptar y desencriptar a la vez.

let encryptAndDecrypt = nums => console.log(decrypter(codeScript3(nums)));

encryptAndDecrypt(2371);




// c6) Introducir letras, cada número del 0 al 9 corresponderá a varias letras.

function encodeString(text) {
    let dic = {
        0: ['A', 'K', 'T', 'F', 'O', 'Y'],
        1: ['B', 'L', 'U', 'G', 'P', 'Z'],
        2: ['C', 'M', 'V', 'H', 'Q', '.'],
        3: ['D', 'N', 'W', 'I', 'R', ','],
        4: ['E', 'Ñ', 'X', 'J', 'S', ' ']
    };
    let result = [];

    text.split('').forEach(lStr => {
        Object.keys(dic).forEach((pos, i) => dic[pos].forEach((lDic, j) => {
            if (lStr === dic[i][j]) return result.push(`${i}${j}`);
        }));
    });
    console.log(result.join('').split('45').join(' '));
}

encodeString('HI WE NEED HELP'); // => 2333 3240 31404030 23401114




// d) Crea un programa que use la encriptacion Romana.

function romanEncrypt(str) {
    let result = [];
    str = str.split('');
    let p1 = str.slice(0, str.length / 2);
    let p2 = str.slice(str.length / 2, str.length);
    p1.forEach((l1, i) => {
        // f => agrega la últma letra si el array no es divisible entre dos...
        let f = (i === p2.length - 2 && p1.length < p2.length) ? p2[p2.length - 1] : '';
        result.push(`${l1}${p2[i]}${f}`);
    });
    return result.join('');
}

console.log(romanEncrypt('SKYLAB'), romanEncrypt('SKYLABC'));




// d2) Programa el desencriptador

function romanDecrypt(str) {
    let p1 = [];
    let p2 = [];
    let result = [];
    str = str.split('');
    str.forEach((l, i) => {
        (i % 2 === 0) ? (i !== str.length - 1) ? p1.push(l) : p2.push(l) : p2.push(l);
    });
    return result.concat(p1, p2).join('');
}

console.log(romanDecrypt('SLKAYB'), romanDecrypt('SLKAYBC'));




// d3) Agrupa la función Encrypt y decrypt en una unica función.

let encryptDecrypt = str => console.log(romanDecrypt(romanEncrypt(str)));

encryptDecrypt('SKYLAB');




// d4) Lo tienes? Prueba ahora con SKYLABCODERS.

encryptDecrypt('SKYLABCODERS');




// e) Parámetro del 0 al 100 y devuelve el número como alfabeto...
// e2) Devolver también los números por los que está formado...
// e3) Cambia tu programa para que acepte cualquier número entre 0 y 1000.

function sayItWithWords(num) {
    let sum = num;

    let units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let hundreds = ["", "one hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred"];

    if (num >= 1000) return 'Max 1000 => the limit is one thousand';

    num = num.toString().split('');

    let result = '';

    if (num.length === 2) {
        if (num[0] > 1) {
            result = tens[num[0]];
            result += '-' + units[num[1]];
            sum = `${tens[num[0]]} + ${units[num[1]]} = ${num[0]}0 + ${num[1]}`;
        } else {
            result = teens[num[1]];
            sum = `${teens[num[1]]} = ${num[0]}0 + ${num[1]}`;
        }
    }

    if (num.length === 3) {
        result = hundreds[num[0]] + ' and ';
        if (num[1] > 1) {
            result += tens[num[1]];
            result += '-' + units[num[2]];
            sum = `${hundreds[num[0]]} + ${tens[num[1]]} + ${units[num[2]]} = ${num[0]}00 + ${num[1]}0 + ${num[2]}`;
        } else {
            result += teens[num[2]];
            sum = `${hundreds[num[0]]} + ${teens[num[2]]} = ${num[0]}00 + ${num[2]}`;
        }
    }

    if (num.length === 1) {
        result = (Number(num) === 0) ? 'zero' : units[num];
    }

    return `||| ${result} = ${sum}`;
}

console.log(sayItWithWords(45), sayItWithWords(7), sayItWithWords(13));
console.log(sayItWithWords(112), sayItWithWords(760), sayItWithWords(1930));





// f) Recibiendo el siguiente texto por parámetro a tu función...
// f1) Muestra cuantos cambios/coincidencias ha encontrado de cada palabra...

function replaceWords(str) {
    let result = [];

    let sue = (act, to) => {
        let re = new RegExp((act === '.') ? `\\${act}` : act, "ig");
        result.push(`${act} ===> ${str.match(re).length}`);
        str = str.replace(re, to);
    };

    sue(",", "");
    sue(".", ",");
    sue("dolor", "potato");
    sue("lorem", "tomato");
    sue("labor", "cucumber");
    sue("consequatur", "garlic");
    sue("ipsum", "onion");

    result.push(str);

    console.log(result.join("\n"));
}

let text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n" +
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.";


replaceWords(text);
