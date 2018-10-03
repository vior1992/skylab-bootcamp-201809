function forEach(arr, funct) {
    var index=0;
    for (index in arr) {
        funct(arr[index]);
    }
}