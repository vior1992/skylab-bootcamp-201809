Array.prototype.random = function() {
	var randomIndex = Math.floor(Math.random() * this.length);	

	return this[randomIndex];
}

var a = [1, 2, 3];

console.log(a.random());
// VM65372:9 2