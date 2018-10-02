    function includes(arr, elem, index) {
        if (index===undefined) {
            var i=0;
        }
        else if (index> arr.length) {
            return false;
        }
        else {
            i = index;
        }
        for (i; i<arr.length; i++) {
            if (elem===arr[i]) {
                return true;
            }
        }
        return false;
    }