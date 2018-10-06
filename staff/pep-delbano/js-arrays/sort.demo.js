/*var months = ['March', 'Jan', 'Feb', 'Dec'];

console.log(sort(months));
// ["Dec", "Feb", "Jan", "March"]

console.log(months);
// ['March', 'Jan', 'Feb', 'Dec']

var nums = [1, 30, 4, 21];

console.log(sort(nums));
// [1, 21, 30, 4]

console.log(nums);
// [1, 30, 4, 21] */

//..........................

//By Aleix:
document.querySelector('#sort').addEventListener('click', function() {
    var months = ['March', 'Jan', 'Feb', 'Dec'];
    console.log(sort(months));
    console.log(months);
    var nums = [1, 30, 4, 21];
    console.log(sort(nums));
    console.log(nums);
});

function sort(arr) {
    if (!Array.isArray(arr)) throw Error('array is not valid');
    if (arr.length <= 0) throw Error('array is empty');

    for (var i = 0; i < arr.length - 1; i++) {
        var min = i;
        for (var j = i; j < arr.length; j++) {
            if ('' + arr[j] < '' + arr[min]) {
                min = j;
            }
        }

        var sorted = arr[i];
        arr[i] = arr[min];
        arr[min] = sorted;
    }
    return arr;
}


// By me:
// function sort(arr) {
//     var sorted = [];

//     for(var i=0; i<arr.length; i++) {  //para recorrer el array
// 		for(var j=0; j<arr.length; j++) { //para compararlos, y hacer el cambio de posición si hace falta
//             if(arr[j] > arr[j+1]) {
// 				var sorted = arr[j+1];  //sorted solo guarda el valor comparado, para hacer el cambio de posición entre ellos, así vamos poniendo los menores a la izqda
//                 arr[j+1] = arr[j];
//                 arr[j] = sorted;
//             }
//         }
//     }
//     return arr;

// }

// sort([4,3,1,9]);
