
function calculator () {

	var n1 = parseFloat(document.getElementById('n1').value);
  	var n2 = parseFloat(document.getElementById('n2').value);
  	var error = false;

  	var operations = [n1 + n2, n1 - n2, n1 * n2, n1 / n2];
	var resultsRounded = operations.map(function(number) {
       	if (!Number.isInteger(number)) {

        	var numberVar = number.toFixed(2);
      	}
      	return numberVar;
    	});

	document.getElementById('results').innerHTML = '<li>' + n1 + ' + ' + n2 + ' = ' + resultsRounded[0] + '</li>' + '<li>' + n1 + ' - ' + n2 + ' = ' + resultsRounded[1] + '</li>' + '<li>' + n1 + ' * ' + n2 + ' = ' + resultsRounded[2] + '</li>' + '<li>' + n1 + ' / ' + n2 + ' = ' + resultsRounded[3] + '</li>';
}


