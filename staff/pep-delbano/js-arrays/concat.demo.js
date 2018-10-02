var arr = [1, 2, 3];
var arr2 = [4, 5, 6];

var con = [];
// [1, 2, 3, 4, 5, 6]

function concat() {
    con += arr + ',';
    con += arr2;
    console.log(con);
}

concat();