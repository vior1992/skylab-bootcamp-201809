function concatAll(array) {
  var length = array.length;

  for(var i = 1; i < arguments.length; i++) {
    if(typeof arguments[i] === 'object') {
      for(var j = 0; j < arguments[i][j]; j++) {
        array[length] = arguments[i][j];
        length++;
      }
    } else {
      array[length] = arguments[i];
      length++;
    }
  }

  return array;
}