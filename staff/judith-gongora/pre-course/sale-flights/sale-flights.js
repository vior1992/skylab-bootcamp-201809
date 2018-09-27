//Compañia de vuelos Proyecto Tema 2
var flights = [ //Variable global Array de objetos vuelos
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
    
    function alerta() {//Función para almacenar nombre y saber que tipo de usuario es
      var opcion = prompt("Introduzca su nombre:", "Escribe aquí tu nombre") 
      if (opcion == null || opcion == "" || opcion == "Escribe aquí tu nombre") { //Si no ha escrito nada o ha dejado por defecto o cancela
            console.log("Has cancelado o introducido el nombre vacío")
            return
      } else { //si has escrito algo
        console.log("Hola " + opcion + ", bienvenida!") // Mensaje de bienvenida
        listado() //Llamada a la función listado
        costeMedio() //Llamada a la función costeMedio
        escalas() //Llamada a la función escalas
        ultimos() //Llamada a la función ultimos
      }
      var user = prompt("Eres administrador o usuario?", "admin/user") //Preguntamos que tipo de usuario es
      switch (user){
        case "admin" : //Si es admin
          menuAdmin() //Llamamos función menuAdmin
          break;
        case "user" : //si es user
          menuUser() //Llamamos a la función menuUser
          break;
        default : //Si no se ha escrito ninguno de las dos opciones 
          console.log("Has cancelado o introducido el nombre vacío") //Mensaje de error
          return //Finalizamos ejecución
          break;
      }
    }
    
    function listado() { //Funcion listado muestra los vuelos
    flights.forEach(function(obj){ //Por cada objeto del Array
      console.log("El vuelo con salida: " + obj.from + " y destino " + obj.to + ", tiene un precio de: " + obj.cost + "€.") //Mostramos los datos
      if (obj.scale){ //Si el vuelo tiene escalas mostramos:
        console.log("Este vuelo realiza escalas.")
        console.log("--------------------------------")
      }else{ //Si no tiene escalas mostrasmos:
        console.log("Este vuelo no realiza escalas.")
        console.log("--------------------------------")
      }
    })
    }
    
    function costeMedio(){ //Funcion para calcular el costeMedio de los vuelos
      var total = 0 //Variable para poder calcular 
      var i = 0 
      flights.forEach(function(obj){ //Por cada objeto del array
        total+= obj.cost //Sumame el coste al total
        i++
      })
      total/= i
      console.log ("El coste medio actual de los vuelos es de: " + total + "€")
      console.log("--------------------------------")
    }
    
    function escalas(){
      var i = 0;
      flights.forEach(function(obj){
        if (obj.scale){
          i++
        }
      })
    console.log ("Actualmente hay: " + i + " vuelos con escalas.")
    console.log("--------------------------------")
    }
    
    function ultimos(){
      console.log("Los últimos destinos del día de hoy son:")
      for (i = flights.length-1; i>flights.length-6; i--){
         console.log("- " + flights[i].to)
      }
    }
    
    function menuUser (){
      console.clear()
      var opcionPrecio = prompt("Menú Usuario \n\nBúsqueda por precio.  \n1. Más bajo de:  \n2. Más alto de:  \n3. Igual de: \n\nSi no deseas realizar ningúna busqueda pulsa Cancelar" , "Escribe aquí la opción escogida (1,2 o 3)")
      if (opcionPrecio == "1" || opcionPrecio == "2" || opcionPrecio == "3"){
        var precio = prompt("Precio a comparar con los vuelos:" , "Escribe aquí el precio")
        switch (opcionPrecio){
          case "1" :
            flights.forEach(function(obj){
              if (obj.cost < precio){
                console.log("El vuelo con ID " + obj.id + " salida: " + obj.from + " y destino " + obj.to + ", tiene un precio de: " + obj.cost + "€.")
                if (obj.scale){
                  console.log("Este vuelo realiza escalas.")
                  console.log("--------------------------------")
                }else{
                  console.log("Este vuelo no realiza escalas.")
                  console.log("--------------------------------")
                }
              }
            })
            var comprar = prompt("Para comprar un vuelo escribe su ID" , "Escribe aquí el ID")
            comprar = parseInt(comprar);
            if (!isNaN(comprar)) {
              flights.forEach(function(obj){
              if (obj.id == comprar){
                console.log("Gracias por comprar el vuelo con salida " + obj.from + " y destino " + obj.to)
              }
            })   
            }
            break
          case "2" :
           flights.forEach(function(obj){
              if (obj.cost > precio){
                console.log("El vuelo con ID " + obj.id + " salida: " + obj.from + " y destino " + obj.to + ", tiene un precio de: " + obj.cost + "€.")
                if (obj.scale){
                  console.log("Este vuelo realiza escalas.")
                  console.log("--------------------------------")
                }else{
                  console.log("Este vuelo no realiza escalas.")
                  console.log("--------------------------------")
                }
              }
            })
            var comprar = prompt("Para comprar un vuelo escribe su ID" , "Escribe aquí el ID")
            comprar = parseInt(comprar);
            if (!isNaN(comprar)) {
              flights.forEach(function(obj){
              if (obj.id == comprar){
                console.log("Gracias por comprar el vuelo con salida " + obj.from + " y destino " + obj.to)
              }
            })   
            }
            break
          case "3" :
             flights.forEach(function(obj){
              if (obj.cost == precio){
                console.log("El vuelo con ID " + obj.id + " salida: " + obj.from + " y destino " + obj.to + ", tiene un precio de: " + obj.cost + "€.")
                if (obj.scale){
                  console.log("Este vuelo realiza escalas.")
                  console.log("--------------------------------")
                }else{
                  console.log("Este vuelo no realiza escalas.")
                  console.log("--------------------------------")
                }
              }
            })
            var comprar = prompt("Para comprar un vuelo escribe su ID" , "Escribe aquí el ID")
            comprar = parseInt(comprar);
            if (!isNaN(comprar)) {
              flights.forEach(function(obj){
              if (obj.id == comprar){
                console.log("Gracias por comprar el vuelo con salida " + obj.from + " y destino " + obj.to)
              }
            })   
            }
            break
          default :
            console.log("Has cancelado o introducido la opción mal") 
            break
        }
      }else{
        console.log("Has cancelado o introducido la opción mal") 
        return
      }
    }
    function menuAdmin(){
      console.clear()
      console.log(flights)
      var anadir = prompt("Menú Administrador \n\n1. Añadir vuelos.  \n2. Eliminar vuelos. \n\nSi no deseas añadir/eliminar ningún vuelo pulsa Cancelar" , "Escribe aquí la opción escogida (1 o 2)")
      if (anadir == "1" & flights.length < 15){
        anadirVuelos()
      } else if (anadir == "2"){
        eliminarVuelos()
      } else if (anadir == "1" & flights.length == 15){
        console.log("No puedes introducir más vuelos")
      } else {
        console.log ("Has cancelado o introducido la opción mal")
      }
    }
    
    function anadirVuelos(){ //No he realizado comprobación de datos
      var id1 = flights.length
      var from1 = prompt("Desde donde sale el vuelo?" , "Escribe aquí la ciudad de salida")
      var to1 = prompt("Que destino tiene el vuelo?" , "Escribe aquí la ciudad de destino")
      var cost1 = prompt("Cuánto cuesta el vuelo?" , "Escribe aquí el coste en números")
      cost1 = parseInt(cost1)
      var scale1 = prompt("El vuelo tiene escalas?" , "Escribe aquí true o false")
      scale1 = JSON.parse(scale1)
      if (!isNaN(cost1) && (scale1 != null)){
        flights.push({
            id: id1,
            to: to1,
            from: from1,
            cost: cost1,
            scale: scale1
      })
      }
      console.log(flights)
    }
    
    function eliminarVuelos(){
      var eliminar = prompt("Escribe el ID del vuelo a eliminar:" , "Escribe aquí el ID")
      eliminar = parseInt(eliminar);
      if(eliminar > -1 & eliminar < flights.length){
        console.log(flights[eliminar])
        flights.splice(eliminar,1)
        console.log("Vuelo con ID " + eliminar + " eliminado con éxito.")
      }
      menuAdmin()
    }
    
    alerta()
