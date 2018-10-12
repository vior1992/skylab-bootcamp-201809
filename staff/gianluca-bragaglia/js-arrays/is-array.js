
function isArray(arr) {
    if(typeof arr === 'object' && arr.length != undefined) {
        return true;
    }else{
        return false
    }
}