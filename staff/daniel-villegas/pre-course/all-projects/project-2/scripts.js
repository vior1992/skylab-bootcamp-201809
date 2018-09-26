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
    ]
     
    function user(userName){
    
        //Alerta con saludo al usuario que insertemos.
        alert("Hello " + userName + ", welcome to Skylab airlines!");
         
        //Visualizacion informacion vuelos
    
        var scaleYN = {
                yes : "with scale",
                no : "without scale"
            }
    
    
        flights.forEach(function(completeInfo){
            
            
         function scaleYesNo(){    
            if (completeInfo.scale === true){
                return (scaleYN.yes);
            } else if (completeInfo.scale === false){
                return (scaleYN.no);
            }
        }
    
        
    
    
        console.log("The flight from " + completeInfo.to + " with destiny: " + completeInfo.from + " have a cost of " + completeInfo.cost + "€, and " + scaleYesNo());
        }) 
        
        //Suma de precios y media.
        var sumPrices = 0;
     
        flights.forEach(function(obj){
        sumPrices += obj.cost
        }) 
     
        alert("The medium price of flights of today is: " + sumPrices/flights.length);
    
        //Vuelos con escalas.
    
        flights.forEach(function(withScale){
        if (withScale.scale === true) { 
            console.log("The flight from " + withScale.to + " with destiny: " + withScale.from + " have a scale.");
        }
        }) 
    
        //Ultimos 5 destinos.
    
        flights.forEach(function(lasts){
        if (lasts.id >= flights.length - 5) { 
            alert("Lasts flights of the journey: The flight from " + lasts.to + " with destiny: " + lasts.from);
        }
        }) 
    }
    
    user("Dani");