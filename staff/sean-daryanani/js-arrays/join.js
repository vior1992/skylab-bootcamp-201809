function join(arr, str) {
    var outputString ="";
    for (var i=0; i<arr.length; i++) {
        if (i===arr.length-1) {
            outputString = outputString + arr[i];
        }
        else {
        outputString = outputString + arr[i] + str;
        }
    }
    return outputString;
}