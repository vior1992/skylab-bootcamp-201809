var questions = [
      {num: 0, letter: "a", answer: "abducir", status: 0, question: ("CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien") },
      {num: 1, letter: "b", answer: "bingo", status: 0, question: ("CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso") },
      {num: 2, letter: "c", answer: "churumbel", status: 0, question: ("CON LA C. Niño, crío, bebé") },
      {num: 3, letter: "d", answer: "diarrea", status: 0, question: ("CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida") },
      {num: 4, letter: "e", answer: "ectoplasma", status: 0, question: ("CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación") },
      {num: 5, letter: "f", answer: "facil", status: 0, question: ("CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad") },
      {num: 6, letter: "g", answer: "galaxia", status: 0, question: ("CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas") },
      {num: 7, letter: "h", answer: "harakiri", status: 0, question: ("CON LA H. Suicidio ritual japonés por desentrañamiento") },
      {num: 8, letter: "i", answer: "iglesia", status: 0, question: ("CON LA I. Templo cristiano") },
      {num: 9, letter: "j", answer: "jabali", status: 0, question: ("CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba") },
      {num: 10, letter: "k", answer: "kamikaze", status: 0, question: ("CON LA K. Persona que se juega la vida realizando una acción temeraria") },
      {num: 11, letter: "l", answer: "licantropo", status: 0, question: ("CON LA L. Hombre lobo") },
      {num: 12, letter: "m", answer: "misantropo", status: 0, question: ("CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas") },
      {num: 13, letter: "n", answer: "necedad", status: 0, question: ("CON LA N. Demostración de poca inteligencia") },
      {num: 14, letter: "ñ", answer: "señal", status: 0, question: ("CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.") },
      {num: 15, letter: "o", answer: "orco", status: 0, question: ("CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien") },
      {num: 16, letter: "p", answer: "protoss", status: 0, question: ("CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft") },
      {num: 17, letter: "q", answer: "queso", status: 0, question: ("CON LA Q. Producto obtenido por la maduración de la cuajada de la leche") },
      {num: 18, letter: "r", answer: "raton", status: 0, question: ("CON LA R. Roedor") },
      {num: 19, letter: "s", answer: "stackoverflow", status: 0, question: ("CON LA S. Comunidad salvadora de todo desarrollador informático") },
      {num: 20, letter: "t", answer: "terminator", status: 0, question: ("CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984") },
      {num: 21, letter: "u", answer: "unamuno", status: 0, question: ("CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914") },
      {num: 22, letter: "v", answer: "vikingos", status: 0, question: ("CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa") },
      {num: 23, letter: "w", answer: "sandwich", status: 0, question: ("CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso") },
      {num: 24, letter: "x", answer: "botox", status: 0, question: ("CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética") },
      {num: 25, letter: "y", answer: "peyote", status: 0, question: ("CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos") },
      {num: 26, letter: "z", answer: "zen", status: 0, question: ("CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional") },
  ];


var pos = 0;  //recuento de pendientes por responder!
var count = 0;  //recuento de contestadas!
var letra;
var respuesta;
var totalTiempo = 120;
var t;
var acertadas = 0;
var falladas = 0;
var res;

function mastexto() {
  var newtext = "Bienvenido al juego de Pasapalabra! <br /> <br /> Tienes 120 segundos para contestar. Pulsa <b>START para empezar</b>, y para reiniciar el juego pulsa RESET.  <br /><br /> En las preguntas que no sepas, puedes pulsar en PASAPALABRA o dejarla en blanco y pulsar la tecla <b><i>Enter</i></b>, para dejarla para la siguiente ronda.<br /><br /> Cuando escribas la respuesta, puedes pulsar ACEPTAR o de nuevo la tecla <b><i>Enter</i></b>. <br /><br />El programa no acepta tildes ni espacios. <br /> <br /><br /> <span>¡ BUENA SUERTE !</span>";
  document.getElementById("ok").style.display = "block";
  document.getElementById("text").innerHTML = newtext;
  document.getElementById("puntos").style.display = "none";
}



  function mostrarPregunta(pos) {
  	document.getElementById("pregunta").innerHTML = questions[pos].question;
  }


  function valorarRespuesta(pos) {
     respuesta = document.getElementById("respuesta").value;
     letra = (questions[pos].letter).toUpperCase();
  	if (respuesta == questions[pos].answer.toLowerCase()) {
  		acertadas++;
      var right = "Correcto!!!";
      document.getElementById("comment").innerHTML = right;
      document.getElementById(letra).className = "green";
    //  document.getElementById(letra).style.background = "green";  //cambiamos el fondo del boton con el id con la misma letra q acaba de ser respondida!
      count++;
  	} else if (respuesta == null || respuesta == "") {
      pasapalabra(count);
    	continuar();
    } else {
  		falladas++;
      var wrong = "Noo!! la respuesta correcta era: " + questions[pos].answer;
      document.getElementById("comment").innerHTML = wrong;
      document.getElementById(letra).className = "red";
      // document.getElementById(letra).style.background = "red";
      count++;
  	}
    pos++;
  }

  function pasapalabra(pos) {  //la pasamos al principio, para ser peguntadas al acabar la primera ronda
  	var pasada = questions.splice(pos, 1)[0];
  	questions.push(pasada);
    var pasa = "Pasapalabra!";
    document.getElementById("comment").innerHTML = pasa;
  }

  function continuar() {
  	if (count < 27) {
  		document.getElementById("respuesta").value = ""; //vaciamos el text input
  		mostrarPregunta(count);
  	} else {
      totalTiempo = 0;
      updateReloj();
  	}
  }




  //Cronómetro:


  function updateReloj() {
        document.getElementById('cron').innerHTML = totalTiempo;
        totalTiempo--;
        var t = setTimeout("updateReloj()", 1000);

        if (totalTiempo <= 0) {
          if (count < 27) {
          document.getElementById("pregunta").innerHTML = "<span>SE ACABÓ EL TIEMPO!!</span>";
        } else if (count >= 27) {
          document.getElementById("pregunta").innerHTML = "<span>ACABASTE LAS PREGUNTAS!!</span>";
        }
        totalTiempo = 0;
        document.getElementById('cron').innerHTML = totalTiempo;
        clearTimeout(t);
        document.getElementById('respuesta').disabled = true;
        document.getElementById('pasapalabra').disabled = true;
        document.getElementById('aceptar').disabled = true;
        document.getElementById('start').disabled = true;
        document.getElementById("respuesta").value = "";
        document.getElementById("okp").style.display = "block";

      }
  }




//-----------------------------------------



//Ahora q ya tenemos los componentes, vamos a ORGANIZARLOS y determinar cuando usarlos:

//para quitar instrucciones y mostrar cuadro preguntas;
  document.getElementById("ok").onclick = function ok() {
      document.getElementById("instrucciones").style.display = "none";
      document.getElementById("abecedario").style.display = "block";
      document.getElementById("tiempo").style.display = "block";
      document.getElementById("cuadropreguntas").style.display = "block";
      document.getElementById("okp").style.display = "none";
      document.getElementById("comment").innerHTML = "";
      document.getElementById("pregunta").innerHTML = "";
      document.getElementById("respuesta").value = "";
      document.getElementById('start').disabled = false;
      document.getElementById('respuesta').disabled = true;
      //ponemos contador crono a 120 de nuevo:
      document.getElementById("cron").innerHTML = 120;
      totalTiempo = 120;

      //para volver azul el fondo de las letras, en la siguiente partida:
      for(var i=0; i<questions.length; i++) {
      letra = (questions[i].letter).toUpperCase();
      if (document.getElementById(letra).className == "green") {
        document.getElementById(letra).className = "letra"
      } else if (document.getElementById(letra).className == "red") {
        document.getElementById(letra).className = "letra"
      }
    }


} //fin ok()

//para quitar cuadropreguntas y mostrar resultados y guardar partida:
  document.getElementById("okpreg").onclick = function okpreg() {
      document.getElementById("resultadofinal").style.display = "none";
      document.getElementById("nombre").style.display = "block";
      document.getElementById("usern").value = "";
      document.getElementById('usern').focus();

} //fin okpreg()

document.getElementById("okp").onclick = function okp() {
      document.getElementById("tiempo").style.display = "none";
      document.getElementById("abecedario").style.display = "none";
      document.getElementById("cuadropreguntas").style.display = "none";
      resultados();
      document.getElementById("resultadofinal").style.display = "block";
}

//new Game
document.getElementById("newgame").onclick = function newgame() {
        document.getElementById("ranking").style.display = "none";
        document.getElementById("instrucciones").style.display = "block";



    }




//arrancar el juego, y el temporizador:
document.getElementById("start").onclick = function start() {
      count = 0;
      pos=0;
      falladas=0;
      acertadas=0;
      mostrarPregunta(count);
      updateReloj();
      document.getElementById('respuesta').disabled = false;
      document.getElementById('pasapalabra').disabled = false;
      document.getElementById('aceptar').disabled = false;
      document.getElementById('start').disabled = true;
      document.getElementById('respuesta').focus();
};  //fin start()


  //aceptar, tanto clicando boton como picando tecla Enter:
  document.getElementById("aceptar").onclick = function acept() {
      	valorarRespuesta(count);
      	continuar();
        document.getElementById('respuesta').focus();
  };


  //pasar palabra, tanto clicando boton como picando tecla Espacio:
  document.getElementById("pasapalabra").onclick = function pasa() {
      	pasapalabra(count);
      	continuar();
        document.getElementById('respuesta').focus();
  };


// Key bindings for skip the word
function enter(e) {
  tecla = (document.all) ? e.keyCode : e.which;
  if (tecla == 13) {
        valorarRespuesta(count);
        continuar();
  }
}


function resultados() {
  var res = "Aquí están tus resultados: <br><br><span>" + acertadas + " ACIERTOS   y   " + falladas + " FALLOS!</span>";
  document.getElementById("resultfinal").innerHTML = res;
}


//creamos función para pedir nombre, para luego poder hacer ranking
var objJugadores = [  //es para hacer un ranking al final
  { nombre: "Ringo",  aciertos : 8},
  { nombre: "John",  aciertos : 20},
  { nombre: "George",  aciertos : 15},
  { nombre: "Paul", aciertos : 10},
];

function nombre(e) {  //para que en la funcion userName valide el nombre una vez pulse Enter!!
  tecla = (document.all) ? e.keyCode : e.which;
  if (tecla == 13) {
    userName();
  }
}

function userName() {  //aparece el cuadro para que introduzca el nombre, y se llama a la función que valida el Enter para q cierre ventana y abra las siguientes;
  var nameis = document.getElementById("usern").value;
  if (nameis == null || nameis == "") {
    document.getElementById("usern").placeholder="Debes escribir algo!";
  } else {
    var userN_points = {nombre : nameis, aciertos : acertadas};
    objJugadores.push(userN_points);

    ranking();
    document.getElementById("nombre").style.display = "none";
    document.getElementById("cuadropreguntas").style.display = "none";
    document.getElementById("ranking").style.display = "block";
    document.getElementById("newgame").style.display = "block";
    document.getElementById("resultadofinal").style.display = "none";
}

}


function ranking() {  //calcula la posición dentro del ranking y la media de puntos del ranking, y devuelve el resultado;
  var ordered;
        function ordenarRanking(objJugadores) {// en orden descendiente
        	return objJugadores.sort(function (a, b) {
             	return b.aciertos - a.aciertos; });
        } //fin ranking()
    	function ord() {
    			return ordenarRanking(objJugadores).map(function (jugador) {
               		return jugador.nombre + "............" + jugador.aciertos + ' aciertos <br><br>';
             	});

      } //fin ord()

  ordered = ord();
  ordered = JSON.stringify(ordered);
  ordered = ordered.replace(/,/g, '');
  ordered = ordered.replace(/"/g, '');
  ordered = ordered.replace(/[\[\]']+/g,'');




    function puntMedia(jugador) { //no la necesitamos, pero la añado porque me apetece...
    	return objJugadores.reduce(function (suma,jugador) {
        	return suma + jugador.aciertos; }, 0) / objJugadores.length;
    }

    var media = puntMedia();

 //para que solo salgan 2 decimales, sinó a veces salía larguísimo!!
    if(media.toString().length > 5) {
    media = Math.round(media * 100) / 100;
    }

    var rank = '<br> <span>' + ordered + "<br>Puntuación Media............" + media + " aciertos <br><br><br></span>";
    document.getElementById("rank").innerHTML = rank;

} //fin puntMedia()
