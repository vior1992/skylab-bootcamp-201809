var o = {
	n: 1,

	add: function(m) { 
		//debugger
		return this.n + m; 
	},

	self: function() { return this; }
};

console.log(1, o.self());

var self = o.self;
console.log(2, self()); // window.self()

var p = { hola: 'mundo' };
console.log(3, self.call(p));
console.log(4, o.self.call(p));

var q = { n: 5 };
console.log(5, o.add.call(q, 10));
// VM59944:12 1 {n: 1, add: ƒ, self: ƒ}
// VM59944:15 2 Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
// VM59944:18 3 {hola: "mundo"}
// VM59944:19 4 {hola: "mundo"}
// VM59944:22 5 15