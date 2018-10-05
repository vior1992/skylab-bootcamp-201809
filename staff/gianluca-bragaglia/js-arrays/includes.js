
function includes(arr, elem) {

    if (!(arr instanceof Array)) throw Error('array is not valid');

    if ( typeof elem === 'undefined') throw Error('element is not defined');

    if(arr.length == 0) throw Error('array is empty');


    for(var i=0; i<arr.length; i++) {
        if(elem === arr[i]) {
            return true
        }
    }
}