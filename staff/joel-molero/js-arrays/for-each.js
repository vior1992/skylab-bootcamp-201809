function forEach(arr, callback) {
  if (typeof arr !== "array") throw Error("arr is not an array");

    for(var x=0;x<arr.length;x++){
		callback(arr[x]);
    }
};