
var calculator = function (){
	
	var num1 = parseInt(document.getElementById('n1').value)   
	var num2 = parseInt(document.getElementById('n2').value)
	
	if (num1 === undefined || num2 === undefined){
       
       if(num1 === undefined){

       	document.getElementById('results').innerHTML = 'You have not entered any number. Please try it again.'
       	return 'You have not entered any number. Please try it again.'; 

       }else{

       document.getElementById('results').innerHTML = Math.round(Math.sqrt(num1)*1000) / 1000;
       return Math.round(Math.sqrt(num1)*1000) / 1000;
	  }
	}

	else if (isNaN(num1) || isNaN(num2) && num1 !== undefined && num2 !== undefined){

		document.getElementById('results').innerHTML = 'The input is not a number. Please check it and try it again.'
		return 'The input is not a number. Please check it and try it again.'

	}

	else{

	  function suma (num1, num2){

		  return Math.round((num1 + num2)*1000) / 1000;

	  }   
    
	  function resta (num1, num2){

		  return Math.round((num1 - num2)*1000) / 1000;
		
	  } 

	  function multiplicacio (num1, num2){

		  return Math.round((num1 * num2)*1000) / 1000;
		
	  } 

	  function divisio (num1, num2){

		  return Math.round((num1 / num2)*1000) / 1000;	
	  
	  }  

	  var sum = suma(num1, num2);
	  var res = resta(num1, num2);
	  var mul = multiplicacio(num1,num2);
	  var div = divisio(num1,num2);

	  var results = ['<li>' + num1 + ' + ' + num2 + ' = ' + sum + '</li>', '<li> ' + num1 + ' - ' + num2 + ' = ' + res + '</li>', '<li>' + num1 + ' * ' + num2 + ' = ' + mul + '</li>', '<li>' + num1 + ' / ' + num2 + ' = ' + div + '</li>'];
	  document.getElementById('results').innerHTML = 'Results:' + results;
	  return 'Results: ' + results;
	}

}

//calculator(3,5);