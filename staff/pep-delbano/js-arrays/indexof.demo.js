/*var arr = ['ant', 'bison', 'camel', 'duck', 'bison'];

var res = indexOf(arr, 'bison');

console.log(res); // 1 */



function indexof(arr, word) {
	var reps = 0;
    for (var i=0; i<arr.length; i++) {
		if (arr[i] == word) {
		reps ++;
        }
    }
	if (reps == 0) {
		return -1;
    }
	return reps;
}


indexof(['ant', 'bison', 'camel', 'duck', 'bison'], 'bison')