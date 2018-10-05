function fun() { return 'hola mundo' }

fun();

window.fun();

function foo() {
	function fun2() { return 'hola mundo' }

	//foo.fun2(); // ERROR!

	fun2();
}

foo();