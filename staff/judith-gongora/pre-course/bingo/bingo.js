//Bingo Proyecto Tema 3
var numerosdados = [] //Variable global Array para ir guardando números que han salido ya
var linea = false //Variable global para comprobar si hay linea y que no vuelva a darnosla
var turnos = 0 //Variable global que suma los turnos
var bingoCard = [] //Variable global array para generar los numeros (objetos)
var primero = true

function newCard(){
  primero = true
  numerosdados = [] //Instanciamos de nuevo para retear el Array
  turnos = 0 //Cada vez que generamos un cartón reseteamos la variable turnos
  linea = false //Cada vez que generamos un cartón reseteamos la variable linea
  bingoCard = [ //Generamos los objetos numeros con todo a falso (matched) y el número aleatorio con la función randomNumber
    {number: randomNumber(), matched: false},
    {number: randomNumber(), matched: false},
    {number: randomNumber(), matched: false},
    {number: randomNumber(), matched: false},
    {number: randomNumber(), matched: false},
    {number: randomNumber(), matched: false},
    {number: randomNumber(), matched: false},
    {number: randomNumber(), matched: false},
    {number: randomNumber(), matched: false},
    {number: randomNumber(), matched: false},
    {number: randomNumber(), matched: false},
    {number: randomNumber(), matched: false},
    {number: randomNumber(), matched: false},
    {number: randomNumber(), matched: false},
    {number: randomNumber(), matched: false}
  ]
  var comprobar = []  //Array para almacenar numeros y poder comprobar que no se repiten en el cartón
  bingoCard.forEach(function(obj){ //Recorremos Array de objetos
      comprobar.push(obj.number) //Añadimos en Array comprobar los números generados
  })
  comprobar.sort() //Ordenamos Array descendiente
  var comprobacion = false //Boleano para comprobar si existe coincidencia de número en el cartón
  for(i = 1; i < comprobar.length; i++) { // recorremos todo el Array ordenado
    if(comprobar[i] == comprobar[i - 1]) { // Comparamos si el contenido de la posicion i es igual a su anterior
      comprobacion = true //Se repite por lo tanto cambiamos boleano
    }
  }
  if (comprobacion){
    newCard() //Si se repite volvemos a generar un cartón, este no sirve
  }else{ // Si no se repite
    console.log("Aquí tienes tu cartón para empezar a jugar.\n")
    showCard() //Mostramos el cartón
  }
}

function randomNumber(){ //Funcioó que nos devuelve un número aleatorio entre 1 y 99
  return Math.floor(Math.random() * 99) + 1
}

function showCard (){ //Funcion para mostrar el cartón
  console.log("BINGO CARD")
  var linea1 = [] //Creamos 1 array por cada linea, cada linea contendrá 5 números en mi caso
  var linea2 = []
  var linea3 = []
  for (i = 0 ; i<5 ; i++){ //Recorremos la linea 1 
      if (bingoCard[i].matched){ //Si en una linea hay un objeto con matched == true aparecerá una X
        linea1.push("X")
      }else{ //Sino mostrará el contenido de bingoCard[i].number
        linea1.push(bingoCard[i].number)
      }
  }
  for (i = 5 ; i<10 ; i++){
      if (bingoCard[i].matched){
        linea2.push("X")
      }else{
        linea2.push(bingoCard[i].number)
      }
  }
  for (i = 10 ; i<15 ; i++){
      if (bingoCard[i].matched){
        linea3.push("X")
      }else{
        linea3.push(bingoCard[i].number)
      }
  }
  console.log(linea1)//Mostramos los arrays con los numeros o X
  console.log(linea2)
  console.log(linea3)
  if (primero){ //Si boleano primero es true preguntamos si quiere cambiar de cartón
    var opcion = prompt("Si no te gustan los números que te han tocado puedes cambiar de cartón. \nQuieres cambiar?\n \nSi escribes cualquier cosa distina de Si o No, se continuará con el mismo.", "Si/No")
    switch (opcion){ 
      case "Si" ://Si la respuesta es Si volvemos a generar un nuevo cartón
        console.clear()
        newCard()//Llamada a la funcion newCard para proporcionar otro cartón
        break
      case "No" : //Si la respuesta es No:
        primero = false //Cambiamos boleano primero para que no pregunte mas por el cambio
        nuevoTurno() //Llamada a la funcion nuevoTurno para proseguir
        break
      default : //Si se ha escrito cualquier otra cosa, proseguimos
        primero = false //Cambiamos boleano primero para que no pregunte mas por el cambio
        console.log("No has escrito ni Si ni No, se prosigue con el mismo cartón.") 
        nuevoTurno() //Llamada a la funcion nuevoTurno para proseguir
        break
    }
  }else{ //Ya se ha aceptado el cartón por lo tanto no preguntamos por el cambio
    nuevoTurno() //Llamada a la funcion nuevoTurno para proseguir
  }
}

function nuevoTurno(){ //Funcion para preguntar al usuario si quiere otro número
  var continuar = confirm("Quieres un número?")
  if (continuar) { //Si quiere un nuevo numero
    //console.clear()
    turnos++ //Aumentamos variable turno
    numeroNuevo() //Llamamos a la funcion
  } else {
    console.log("Gracias por jugar! Hasta la próxima.")
  }
}

function numeroNuevo(){ //Funcion para generar un numero 
  var num = randomNumber() //Generamos número aleatorio
  var numerodado = false //Boleano para usar en la comparacion en los números que han salido
  for(i = 0; i < numerosdados.length; i++) { // recorremos todo el Array de los números que ya han salido
    if(numerosdados[i] == num) { // Comparamos si el contenido de la posicion i es igual a num
      numerodado = true //Si coincide cambiamos boleano a true
    }
  }
  if (numerodado){ //Si boleano es verdad
    numeroNuevo() //Hacemos recursión para generar un número nuevo
  }else{ //Si es distino proseguimos
    numerosdados.push(num) //Añadimos ese número a array de números ya dados
    console.clear() // Limpiamos la pantalla para que solo muestre la última tirada
    console.log("En el turno " + turnos + " ha salido el número " + num) //Mostramos que número ha tocado
    var no = true // Boleano para saber si ha coinicidido el número dado
    bingoCard.forEach(function(obj){ //Recorremos array de objetos
      if (obj.number == num){ //Si el número dado coincide con algun número del cartón
        obj.matched = true //Cambiamos propiedad del objeto matched a true
        no = false // Cambiamos boleano a false porque ha coinicidido el número dado
        //console.log(obj) 
      }
    })
    if (no){//Si boleano es true
      //console.clear()
      console.log("El número no está en tu cartón") //Mostramos mensaje
      showCard() 
    }else if (!no & !linea){ //Si boleano es false y además aún no hemos cantado linea
      console.log("Tienes este número en tu cartón!") //Mostramos mensaje de coincidencia
      var lineOne  = true //Boleanos para determinar si hay LINIA en alguna de las lineas del cartón
      var lineTwo  = true
      var lineThree  = true
      for (i = 0 ; i<5 ; i++){ //Por cada linea del cartón comprobamos si hay LINEA
        if (!bingoCard[i].matched){
          lineOne = false
        }   
      }
      for (i = 5 ; i<10 ; i++){
        if (!bingoCard[i].matched){
          lineTwo = false
        }
      }
      for (i = 10 ; i<15 ; i++){
        if (!bingoCard[i].matched){
          lineThree = false
        }
      }
      if (lineOne || lineTwo || lineThree){ //Comparamos boleanos para cantar LINEA
        console.log ("LINEA!")
        linea = true
      } 
      showCard() //Llamamos de nuevo a showCard
    }else { //Si boleano es false y ya hemos cantado con anterioridad linea
      console.log("Tienes este número en tu cartón!") //Mostramos mensaje de coincidencia
      bingoCard.forEach(function(obj){ //Recorremos array de objetos
      if (obj.number == num){ //Si coincide la propiedad number de algun objeto con el número dado
        obj.matched = true //Cambiamos estado de la propiedad matched de dicho objeto a true
      }
      })
      var bingo = true //Boleano usado para cantar BINGO
      for (i = 0 ; i<15 ; i++){ //Recorremos Array bingoCard
        if (!bingoCard[i].matched){ //Si el contenido de matched del objeto i es false
          bingo = false //Cambiamos boleanoa a false 
        }
      }
      if (bingo){ //Si boleano bingo es verdad
        console.log ("BINGO!") //Mostramos mensaje de BINGO
        console.log ("Has finalizado el cartón en " + turnos + " turnos.") //Mostramos al usuario en cuantos turnos ha realizado el cartón completo
        var puntos = 1000 - (turnos*10) 
        console.log("Has obtenido " + puntos + " en esta partida.")
        ranking(puntos)
      }else{
        showCard() //Si boleano es falso llamamos de nuevo a showCard
      }
    }
  }
}
function puntuaje(){ //Función para mostrar el sistema de puntos
  console.log("Bienvenido a BINGO STAR!! \n")
  console.log("Sistema de puntos\nComienzas con 1000 puntos iniciales, cada turno restará 10 puntos. \nContra menos turnos más puntos obtendrás.\n\nSUERTE!\n")
}

function ranking(puntos){ //Función para mostrar el ranking de usuarios y sus puntos
  bingoRanking = [ //Generamos los objetos usuarios para el ranking (Inventados ya que no almacena)
    {name: "Juan", score: 80},
    {name: "Ana", score: 70},
    {name: "Esther", score: 50},
    {name: "Pedro", score: 40},
    {name: "Alfonso", score: 30},
    {name: "Laura", score: 10},
  ]
  var nombre = prompt("Introduzca su nombre:", "Escribe aquí tu nombre") 
    if (nombre == null || nombre == "" || nombre == "Escribe aquí tu nombre") { //Si no ha escrito nada o ha dejado por defecto o cancela
          console.log("Has cancelado o introducido el nombre vacío, utilizaremos el nombre user")
          nombre = "user"
    } else { //si has escrito algo
      bingoRanking.push({ //Añadimos el usuario con su puntuacion al ranking
        name: nombre,
        score: puntos
      })
  }
  bingoRanking.sort(function (a, b) { //Ordenamos con un sort el Array 
    return (b.score - a.score) //Ordenamos descendientemente por la propiedad score
  })
  console.log("RANKING DE USUARIOS\n") //Mostramos el Ranking
  console.log(bingoRanking)
}

puntuaje()
newCard()

