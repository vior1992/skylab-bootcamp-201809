// for-each.js

function forEach(arr, callback) {
    if (!(arr instanceof Array)) throw Error('array is not valid');

    for (var i = 0; i < arr.length; i++) callback(arr[i], i, arr);
}

//     /**
//  * 
//  * @param {test} tests
//  */

// function testSuite(tests) {
//     tests.forEach(function(test) {
//         try {
//             test();
//         } catch(err) {
//             console.error(err.message);
//         }
//     })
// }

