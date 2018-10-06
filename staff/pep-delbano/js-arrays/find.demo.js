/*var nums = [5, 12, 8, 130, 44];

var res = find(nums, function(elem) { return elem > 10; });

console.log(res); // 12 */


function find(arr, callback) {
    if (!(arr instanceof Array)) throw Error ("Arr is not a array");

    if (!arr.length) throw Error ("Arr is empty");

    if (typeof callback !== "function") throw Error ("Callback isn't a function")
    
    for (var i = 0; i < arr.length; i++) if (callback(arr[i])) return arr[i]; 
}

//By me:
// function find(arr, elem) {
//     for(var i=0; i<arr.length; i++) {
//         if(arr[i] > elem) {
//             return arr[i]
//             break;
//         }
//     }
// }

// find([1,2,3,50,2], 6);