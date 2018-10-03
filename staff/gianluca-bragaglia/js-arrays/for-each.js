function forEach(arr, callback){

    if(typeof arr !== 'array') throw Error('arr is not a array');

    for(var i=0; i<arr.length; i++)  callback(arr[i]);
}
    
