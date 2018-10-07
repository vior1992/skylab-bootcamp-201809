/*var words = ['spray', 'limit', 'elite', 'exuberant', 'construction', 'present'];


var res = filter(words, function(word) { return word.length > 6; });

console.log(res);
// ["exuberant", "destruction", "present"] */

function filter(arr) {
    var emptyarr = [];
    var pos = 0;
    for(var i=0; i<arr.length; i++) {
        if(arr[i].length > 8) {
            emptyarr[pos] = arr[i];
			pos++;		
        }
    }
return emptyarr;
}

filter(['spray', 'limit', 'elite', 'exuberant', 'construction', 'present'])