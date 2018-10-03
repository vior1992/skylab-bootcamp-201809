function salute(who) {
	return function(how) {
    	return how + ' ' + who + '!';
	}
}

//salute('peter')('hello')

var salutePeter = salute('peter')

console.log(salutePeter('hola'))

console.log(salutePeter('hi'))

console.log(salutePeter('ciao'))

var saluteAnita = salute('anita')

console.log(saluteAnita('hola'))

console.log(saluteAnita('hi'))

console.log(saluteAnita('ciao'))
// VM38674:11 hola peter!
// VM38674:13 hi peter!
// VM38674:15 ciao peter!
// VM38674:19 hola anita!
// VM38674:21 hi anita!
// VM38674:23 ciao anita!
