/*
Después de ver toda la información el programa pedirá al usuario si es ADMIN/USER, dependiendo de la elección, el programa se comportará de la siguiente manera:

Si eres ADMIN, la función debería permitir:

Poder crear, más vuelos, pidiendo la información por prompt(), sin poder pasar de 15 vuelos, si se intenta introducir uno más, saltará un alert().
Poder eliminar vuelos mediante el ID.
Si eres USER la función debería permitir:

Buscar por precio ( más alto, más bajo o igual), el usuario debería mostrar los datos de los vuelos encontrados y, indicando el ID, el programa responderá: "Gracias por su compra, vuelva pronto."*/

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



function skyAir() {
    var a;
    function welcome() {

        var myName = prompt('escribe tu nombre');
        console.log('Hola ' + myName + ' Bienvenido!!');

    }
    welcome();

    function totalFlight() {
        
        flights.forEach(function(ob) {
            if(!ob.scale) {
                a = 'no realiza ninguna escala.';
            }else{
                a = 'realiza escala.';
            }
            console.log('El vuelo con origen: ' + ob.to + ', y destino ' + ob.from + ' tiene un coste de ' + ob.cost + ' € y ' + a);
        })
    }
    totalFlight();

    function averageCost() {
        var acc = 0;
        flights.forEach(function(obj) {
            acc += obj.cost;
        })
        var averageCost = acc / flights.length;
        console.log('El coste medio del los vuelos es: ' + averageCost + ' €');
       
        
    }
    averageCost()

    function flightScale() {
        var count = 0;
        flights.forEach(function(o) {
            
            if(o.scale) {
                count += 1;
            }
        })
        console.log('Hay ' + count + ' vuelos que realizan escalas');
    }
    flightScale()

    function las5flights() {
        for(var j=0; j<flights.length/2; j++) {
            console.log(flights[j].from);
            } 
        
    }
    console.log('Los ultimos 5 vuelos de hoy son: ');
    las5flights()

    var admin = prompt('si eres ADMIN escribe A, si eres USER escribe U');

    //-----------------------------------------------------//

    function userF() {
        arrCost = [];
        flights.forEach(function(obj) {
            arrCost.push(obj.cost);
        })

        function findCostH() {
            var costF = prompt('escribe un precio para ver los vuelos con precio mas alto');
            var cost = parseInt(costF);
            console.log('Vuelos con precio mas alto que ' + cost + ':');
            var hCost = [];
            for(var j=0; j<flights.length; j++) {
                if(flights[j].cost > cost) {
                    hCost.push(flights[j]);                    
                }
            }

            var sort_by = function(field, reverse, primer){     //sort array object by

                var key = primer ? 
                    function(x) {return primer(x[field])} : 
                    function(x) {return x[field]};
             
                reverse = !reverse ? 1 : -1;
             
                return function (a, b) {
                    return a = key(a), b = key(b), reverse * ((a < b) - (b < a));
                  } 
             }

            var arrHcost = hCost.sort(sort_by('cost', true, parseInt));  // Sort by price high to low
            arrHcost.forEach(function(ob) {
                console.log('El vuelo con origen: ' + ob.to + ', y destino ' + ob.from + ' tiene un coste de ' + ob.cost + ' € y ' + a);
                
            })

        }
        findCostH()

        function findCostL() {
            var costF = prompt('escribe un precio para ver los vuelos con precio mas bajo');
            var cost = parseInt(costF);
            console.log('Vuelos con precio mas bajo que ' + cost + ':');
            var hCost = [];
            for(var j=0; j<flights.length; j++) {
                if(flights[j].cost < cost) {
                    hCost.push(flights[j]);                    
                }
            }

            var sort_by = function(field, reverse, primer){     //sort array object by

                var key = primer ? 
                    function(x) {return primer(x[field])} : 
                    function(x) {return x[field]};
             
                reverse = !reverse ? 1 : -1;
             
                return function (a, b) {
                    return a = key(a), b = key(b), reverse * ((a < b) - (b < a));
                  } 
             }

            var arrHcost = hCost.sort(sort_by('cost', true, parseInt));  // Sort by price high to low
            var revArrHCost = arrHcost.reverse();
            revArrHCost.forEach(function(ob) {
                console.log('El vuelo con origen: ' + ob.to + ', y destino ' + ob.from + ' tiene un coste de ' + ob.cost + ' € y ' + a);
                
            })

        }
        findCostL();

        function findCostE() {
            var costF = prompt('escribe un precio para ver los vuelos con precio igual');
            var cost = parseInt(costF);
            console.log('Vuelos con precio igual que ' + cost + ':');

            for(var j=0; j<flights.length; j++) {
                if(flights[j].cost == cost) {
                    console.log('El vuelo con origen: ' + flights[j].to + ', y destino ' + flights[j].from + ' tiene un coste de ' + flights[j].cost + ' € y ' + a);
                    
                }                                        
            }

            console.log('Ninguno');
        }
        findCostE()


        console.log("Gracias por su compra, vuelva pronto.");
    }

    //-----------------------------------------------//

    function adminF() {

        
        function addFlight(toO,fromO,costO) {
            var toO = prompt('inserta la origen');
            var fromO = prompt('inserta el destino');
            var costO = prompt('inserta el coste');
            var scaleO = prompt('el vuelo realiza alguna escala? Y/N');
            scaleO = scaleO.toUpperCase();
            switch(scaleO) {
                case 'Y':
                    scaleO = true;
                    break;
                case 'N':
                    scaleO = false;
            }
            idO = flights.length;
            costO = parseInt(costO);
            flights.push({id: idO, to: toO, from: fromO, cost: costO, scale: scaleO});
            if(flights.length<25) {
                var addMore = prompt('Quieres inserter otro vuelo?  Y/N');
                addMore = addMore.toUpperCase();
                switch(addMore) {
                    case 'Y':
                        addFlight();
                        break;
                    case 'N':
                        break;
                }
            }else{
                alert('No puedes introducir mas vuelos');
            }
            

        }
        addFlight();
        
        
        function deleteFlight() {
            var del = prompt('Quieres cancelar un vuelo?  Y/N');
            del = del.toUpperCase();
            switch(del) {
                case 'Y':
                    var delF = prompt('Inserta el Id del vuelo que quieres cancelar');
                    delete flights[delF];
                    console.log('El vuelo con Id= ' + delF + ' ha sido cancelado');
                    break;
                case 'N':
                    break;
            }

        }
        deleteFlight();
        console.log(flights);

    }


    //-----------------------------------------------//

    var adminM = admin.toUpperCase();
    switch(adminM) {
        case 'A':
            adminF();
            break;
        case 'U':
            userF();
            break; 
    }


}

skyAir();