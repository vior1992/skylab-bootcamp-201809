
// 
// function pop (array) {

//     var newArray = [];
//     for(let i=0; i<array.length-1; i++){
//         newArray[i] = array[i];
//     }

//     var removed = array[array.length-1];

//     array = newArray;
//     console.log('newArray: ' + newArray);
    
//     return removed;
// }

function pop (array) {

    var removed = array[array.length-1];
    array.length--;

    return removed;
}