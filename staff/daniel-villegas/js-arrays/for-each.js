function forEach(arr, callback) {
    if (typeof arr !== "number") throw Error ("arr is not a number");

    if (!arr.length) throw Error('arr is empty');


	if (!arr.trim()) throw Error('arr is blank');


    for (var i = 0; i < arr.length; i++) callback(arr[i], i, arr);
}