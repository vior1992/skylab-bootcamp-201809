// arrays

var names = ['peter', 'ana', 'john']

var [a, b] = names  // var a = names[0], b = names[1]

console.log(a, b)

// objects

var person = { name: 'john', surname: 'doe', age: 25 }

var { surname, age } = person // var surname = person.surname, age = person.age

console.log(surname, age)

// arrays with objects

var persons = [
    { name: 'john', surname: 'doe', age: 25 },
    { name: 'foo', surname: 'bar', age: 20 }
]

var [{ surname, age }, { surname: surname2, age: age2 }] = persons

console.log(surname, age, surname2, age2)

// objects with arrays

var person = {
    name: 'john',
    surname: 'doe',
    age: 25,
    friends: ['anita', 'peter', 'maria']
}

var { friends: [a, b] } = person

console.log(a, b)

// arrays with arrays

var stuff = [[1, 2, 3], ['a', 'b', 'c']]

var [[a, , b], [, c, d]] = stuff

console.log(a, b, c, d)

// objects with objects

var stuff = { m: { a: 1, b: 2, c: 3 }, n: { d: 4, e: 5, f: 6 } }

var { m: { a, c }, n: { e, f } } = stuff

console.log(a, c, e, f)

// in function params

var person = { name: 'john', surname: 'doe', age: 35 }

function printPerson({ name, surname }) { console.log(name, surname) }

printPerson(person)





