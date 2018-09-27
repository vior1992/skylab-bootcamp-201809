var flights = [
{id: 00, to: "New York", from: "Barcelona", cost: 700,scale: false},
{id: 01, to: "Los Angeles", from: "Madrid", cost: 1100,scale: true},
{id: 02, to: "Paris", from: "Barcelona", cost: 210,scale: false},
{id: 03, to: "Roma", from: "Barcelona", cost: 150,scale: false},
{id: 04, to: "London", from: "Madrid", cost: 200,scale: false},
{id: 05, to: "Madrid", from: "Barcelona", cost: 90,scale: false},
{id: 06, to: "Tokyo", from: "Madrid", cost: 1500,scale: true},
{id: 07, to: "Shangai", from: "Barcelona", cost: 800,scale: true},
{id: 08, to: "Sydney", from: "Barcelona", cost: 150,scale: true},
{id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150,scale: false}
];


function interfaz(){
	var name = prompt('Please, enter your name: ');
	console.log('Hi, ' + name +'. Today we have the following flights!');
    
    //log flights info
    var countScale = 0;
    var countNotScale = 0;
    
    flights.forEach(function (flight){
    	
        if (flight.scale){
    	console.log('Flight with origin in : ' + flight.to + ', and destination: ' + flight.from + 'is '+
    	 flight.cost + '€  and have scale.');
    	countScale ++;

        } else {
		console.log('Flight with origin in : ' + flight.to + ', and destination: ' + flight.from + 'is '+
    	 flight.cost + '€  and have no scale.');
		countNotScale ++;
    	};

    });

    //show average flight cost
    var acc = 0;
    
    flights.forEach(function(flight){
    	return acc += flight.cost;
    });
    
    console.log('The average flight cost is ' + (acc/flights.length));
    
    //show flights with and without scale
    console.log(countScale + ' flights do not have scale; ' + countNotScale + ' flights have scale');

    //show the destination of the last 5 flights
    console.log('The destination of our 5 last flights is: ');
    
    flights.forEach(function(flight){
    	
        if(flight.id > (flights.length - 6)){
    		console.log('- '+ flight.to);
    	};

    });


    //PRO section with admin and user
    var admin = {
    	
        createFlight: function(){
    		var newFlight = {};
    		newFlight.id = flights.length;
    		newFlight.to = prompt('Please, introduce new origin');
    		newFlight.from = prompt('Please, introduce new destination');
    		newFlight.cost = Number(prompt('Please, introduce new cost'));
    		newFlight.scale = prompt('Please, introduce if the flight has scale(true or false)');
    		flights[flights.length] = newFlight;
            flights.forEach(function (flight){
                if (flight.scale){
                console.log('Flight with origin in : ' + flight.to + ', and destination: ' + flight.from + 'is '+
                 flight.cost + '€  and have scale.');

                } else {
                console.log('Flight with origin in : ' + flight.to + ', and destination: ' + flight.from + 'is '+
                 flight.cost + '€  and have no scale.');
                };

            });
    	},

    	deleteFlight: function(){
    		var deleteID = prompt('Please, introduce the ID of the flight you want to delete');
    		deleteFlight = flights[Number(deleteID)];
    		var confirm = prompt('Are you sure you want to delete the flight from ' + deleteFlight.from + ' to ' + deleteFlight.to +'?(y/n)');
    		if (confirm === 'y'){
    			delete flights[Number(deleteID)];
                flights.forEach(function (flight){
                    if (flight.scale){
                    console.log('Flight with origin in : ' + flight.to + ', and destination: ' + flight.from + 'is '+
                     flight.cost + '€  and have scale.');

                    } else {
                    console.log('Flight with origin in : ' + flight.to + ', and destination: ' + flight.from + 'is '+
                     flight.cost + '€  and have no scale.');
                    };

                });
    		} else if (confirm === 'n'){
    			alert('Okey, try again!');
    		} else {
    			console.log('Please, respond y or n');
    		};
            return flights
    	},
    };


    var user = {
    	
        orderData: function() {
    		var orderCost = prompt('Please, introduce the aproximate budget for your flight');
    		var cheaperFlights = [];
    		var expensiveFlights = [];
    		flights.forEach(function(flight){
    			if (flight.cost <= orderCost){
    				cheaperFlights.push(flight);
    			} else {
    				expensiveFlights.push(flight);
    			};
    		});
    		
    		if(cheaperFlights.length === 0){
    			console.log('There are no flights with equal or cheaper price than '+ orderCost);
    		
            } else {
    			console.log('Flights with equal or cheaper price that your budget are:');
    			cheaperFlights.forEach(function(flight){
    			console.log('- Flight from ' + flight.from + ' to ' + flight.to + ' cost ' + flight.cost );
    			});
    		};

    		if(expensiveFlights.length === 0){
    			console.log('There are no flights with more expensive price than '+ orderCost);
    		
            } else {
    			console.log('Flights with more expensive price that your budget are:');
    			expensiveFlights.forEach(function(flight){
    			console.log('- Flight from ' + flight.from + ' to ' + flight.to + ' cost ' + flight.cost );
    			});
    		};
    	},
    };

    //interact with client
    function interact(){
	    var subject = prompt('Please, select your roll: admin or user?');
	    subject = subject.toLowerCase();
		
        if(subject === 'admin'){
		    var flightCounter = 0;
			var question = prompt('Would you like to create or delete a fligth? \n (Please, respond create, delete or exit)')
			question = question.toLowerCase();
		    
            if (question === 'create'){
		    	flightCounter ++;
				
                if(flightCounter === 15){
		    		alert('Number of created flights excedeed');
		    		return 
		    	};
		    	admin.createFlight();
		    
            } else if (question === 'delete'){
		    	admin.deleteFlight();
		    
            } else if (question === 'exit'){
		    	return
		    
            } else {
		    	alert('Please, respond with create, delete or exit')
		    };
		
        } else if (subject === 'user'){
			user.orderData();
		
        } else {
			alert('Please, respond admin or user');
			interact()
		};
	};
    
	interact();
};

