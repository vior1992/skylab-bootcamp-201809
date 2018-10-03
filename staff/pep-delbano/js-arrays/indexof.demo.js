/*var arr = ['ant', 'bison', 'camel', 'duck', 'bison'];

var res = indexOf(arr, 'bison');

console.log(res); // 1 */



function indexof(arr, elem) {
	var index = 0;
	var coincidenceAtIndex;
    for (var i=0; i<arr.length; i++) {
        arr[i];
        index++;
		if (arr[i] === elem) {
        	coincidenceAtIndex = index;
			return coincidenceAtIndex;
        }
		if (index === arr.length-1 && coincidenceAtIndex !== undefined) {
        return coincidenceAtIndex
		} else if (index === arr.length-1 && coincidenceAtIndex === undefined){
		return -1;
		}
    }
}


indexof(['ant', 'bison', 'camel', 'duck', 'bison'], 'bison');
