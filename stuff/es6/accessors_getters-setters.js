// es5 & es6

var person = {
    set name(name) {
        this._name = name.toUpperCase();
    },

    get name() {
        return "'" + this._name + "'";
    }
};

person.name = 'pEteR';
console.log(person.name);
// VM5186:12 'PETER'

// es6 and classes

class Rectangle {
    constructor(width, height) {
        this._width = width
        this._height = height
    }
    set width(width) { this._width = width }
    get width() { return this._width }
    set height(height) { this._height = height }
    get height() { return this._height }
    get area() { return this._width * this._height }
}
var r = new Rectangle(50, 20)
r.area === 1000
// true
r.width = 10
r.height = 10
r.area
// 100