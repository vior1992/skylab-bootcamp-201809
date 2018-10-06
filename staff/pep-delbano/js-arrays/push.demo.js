/*var arr = [1, 2, 3];

push(arr, 4);

console.log(arr); // [1, 2, 3, 4] */

//.......................................

//By Ismael:
/**
 * 
 * @param {Array} arr 
 * @param {*} elem 
 */

function push(arr, elem) {

    // Validation
    if (!(arr instanceof Array)) throw Error('array is not valid'); 
    if (!elem) throw Error('element not defined'); 
    
    // logic
    (arr[arr.length] = elem) && arr;
}





//by me:
function push(arr, num) {
    arr[arr.length] = num;
    console.log(arr);
}


push([1,2,3], 4);