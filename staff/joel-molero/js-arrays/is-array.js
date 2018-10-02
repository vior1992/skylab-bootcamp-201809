function isArray(arr) {
    if(typeof arr === "object" && arr.length !== undefined){
        return true;
    }
    return false;
}