function filter(arr, f) {
    var x, temp=[], count=0;
    for (var i = 0; i < arr.length; i++) {
        x = f(arr[i]);
        if (x == true) {
            temp[count]=arr[i];
            count++;
        }
    }
    return temp;
}