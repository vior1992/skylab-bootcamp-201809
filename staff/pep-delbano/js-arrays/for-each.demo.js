function forEach (arr, num) {
    var result = '';
        for(var i= 0; i<arr.length; i++) {
           result = arr[i] * num;
            console.log(result);
        }
    }
    
    forEach([1,2,3], 2);

