var array = [1,2,3]

function forEach (arr, num) {
    for(var i= 0; i<arr.length; i++) {
        console.log(arr[i] * num);
    }
}

forEach(array, 2);

