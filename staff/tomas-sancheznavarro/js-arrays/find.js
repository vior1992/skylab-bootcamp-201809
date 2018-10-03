function find(arr, func) {
    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return arr[i];
        } else {
            if (func(arr[i]) === -1)
                return undefined;
        }
    }
}