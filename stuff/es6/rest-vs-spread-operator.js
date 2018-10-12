function fun(x, y, ...a) { console.log(x, y, a) }

var c = ['a', 'b', 'c']

var n = [1, 2, 3]

var m = [...c, ...n]

console.log(m)

fun(1, 2, ...m)
// VM1604:9 (6) ["a", "b", "c", 1, 2, 3]
// VM1604:1 1 2 (6) ["a", "b", "c", 1, 2, 3]