var o = {
	name: 'peter',
	greet: function (salutation, symbol) { return (salutation ? salutation : 'hello') + ' ' + this.name + (symbol ? symbol : '!'); }
};

//console.log(o.greet());

// .

var greet = o.greet;

console.log(greet());

// .

// greet = greet.bind(o);

// console.log(greet());

// .

var p = { name: 'anita' };

// greet.unbind... ??? (TODO jose luis!)

greet = greet.bind(p);

console.log(greet());

// .

// greet = greet.bind(o);
// greet = bind(greet, o);

console.log(greet());

// .

// var p = { name: 'anita' };

// greet = bind(greet, p);

// console.log(greet());

// .

// greet = greet.bind(p);
// greet = bind(greet, p);

// console.log(greet('hi', '!!'));
