/*var arr = [5, 12, 8, 130, 44];

var res = findIndex(arr, function(num) { return num > 13; });

console.log(res); // 3*/


function findindex(arr, num) {
    var position = 0;
    for(var i=0; i<arr.length; i++) {
        position++;
        if(arr[i] === num) {
        return position;
        }
    }
	return -1;
}

findindex([5, 12, 8, 130, 44], 4);