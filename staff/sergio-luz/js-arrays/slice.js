function slice(arr, start, end) {
    var temp = [],
        count = 0;
    //comprobamos si hay end
    if (end === undefined || end>=arr.length) {
        end = arr.length;
    }
    if (start == undefined) {
        start = 0;
    }
    if (start < 0 && start < arr.length) {
        count = arr.length - 1 + start;
        for (var i = (arr.length - 1 + start); i >= 0; i--) {
            temp[count] = arr[i];
            count--;
        }
    } else if (start >= arr.length) {
        temp = [];
    } else {
        //Start POSITIVO
        if (end > 0) {
            for (var i = start; i < end; i++) {
                if (start + end == i) {
                    break;
                }
                temp[count] = arr[i];
                count++;
            }
        } else {
            if (start + end < 0) {
                end = start;
            }
            count = -end - 1;
            for (var i = start; i >= 0; i--) {
                if (start + end == i) {
                    break;
                }
                temp[count] = arr[i];
                count--;
            }
        }
    }
    return temp;
}