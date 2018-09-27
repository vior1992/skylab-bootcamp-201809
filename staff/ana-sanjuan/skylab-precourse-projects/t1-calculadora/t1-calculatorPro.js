function calcuPrompt(input){

	function calculator(input) {
	  	for (var i = 0; i < input.length; i++){
		 	if (isNaN(input[i])){
		    	console.log(`Invalid input: ${input[i]} is not a number.`);
		    return
		  	};
	  	};


	  	
	  	if (input.length === 1){
	    	console.log(`The root square of ${input[0]} is ${Math.sqrt(input[0])}`);

	  	} else {
		  	var acc = input[0];
		  	var subs = input[0];
		  	var multi = input[0];
		  	var divi = input[0];

			for (var num = 1; num < input.length; num++){
		    	acc += input[num];
	        	subs -= input[num];
	        	multi *= input[num];
	        	divi /= input[num];
	        }	    
	  	
	  
		var results = [`the accumulate sum of the values is ${acc.toFixed(3)}`,
		`the accumulative substraction of the values is  ${subs.toFixed(3)}`,
		`the accumulative multiplication of the values is ${multi.toFixed(3)}`,
		`the accumulative division of the values is ${divi.toFixed(3)}`];
		    
		console.log(results);

		};
	}

	function newCalculator(){
		var newOperation = prompt('New numbers? y/n');
		if (newOperation === 'y'){
			var proInput = prompt('Insert numbers', 'Ej: 5,6,7');  
		    var proInputEach = proInput.split(',');
		    var proInputNum = [];
		    for (var i = 0; i < proInputEach.length; i++){
		    	proInputNum.push(parseInt(proInputEach[i],10));

		    };
			calculator(proInputNum);

		} else if(newOperation === 'n') {
			console.log('Bye!');

		} else {
			alert('Please, respond with y or n');
			newCalculator()
		};
		    
	};

	calculator(input);
	newCalculator();

	
};



