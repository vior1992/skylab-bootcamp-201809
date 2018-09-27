/* Como dibujar el rosco sin necesidad de crearlo letra por letra...
draw() {
        this.questions.forEach((q, i) => {
            let rotate = (360 / this.questions.length) * i + (-90);
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(q.letter));
            li.style.transform = `rotate(${rotate}deg) translate(18em) rotate(${rotate * (-1)}deg)`;
            this.$('list').appendChild(li);
        });
        this.elements = [...document.getElementsByTagName('li')];
    }
*/



var preguntas = [] //Array para elegir las preguntas
var aciertos = 0 //Variable que contabiliza los aciertos
var errores = 0 //Variable que contabiliza los errores
var numerodepregunta = -1 //Variable que nos hace de indice para seleccionar la pregunta del array preguntas
var time = 130 //Variable con el tiempo a descontar en cada partida
var timer //Variable utilizada para crear el intervalo de tiempo de ejecución de la funcion fCountdown

//Array de arrays de objetos
var questions = [
	    [ 
	        { letter: "a", answer: "anarquista", status: 0, begin: "Empieza por A:", question: ("Que no tiene ni dios ni patria ni amo.") },
	        { letter: "a", answer: "anécdota", status: 0, begin: "Empieza por A:", question: ("Relato breve de un acontecimiento extraño, curioso o divertido, generalmente ocurrido a la persona que lo cuenta.") },
	        { letter: "a", answer: "abducir", status: 0, begin: "Empieza por A:", question: ("Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien") }
	    ],
	    [
	        { letter: "b", answer: "bisiesto", status: 0, begin: "Empieza por B:", question: ("Año que dura 366 días.") },
	        { letter: "b", answer: "bollo" , status: 0 , begin: "Empieza por B:", question: ("Pasta dulce y esponjosa, hecha con harina, huevos, levadura y otros ingredientes, que puede tener distintas formas.") },
	        { letter: "b", answer: "bingo", status: 0, begin: "Empieza por B:", question: ("Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso") }

	    ],
	    [
	        { letter: "c", answer: "calendario", status: 0, begin: "Empieza por C:", question: ("Sistema de división del tiempo.") },
	        { letter: "c", answer: "cascada", status: 0, begin: "Empieza por C:", question: ("Corriente de agua que cae desde cierta altura a causa de un brusco desnivel en su cauce, especialmente en un río.") },
	        { letter: "c", answer: "churumbel", status: 0, begin: "Empieza por C:", question: ("Niño, crío, bebé") }
	    ],
	    [
	        { letter: "d", answer: "día",  status: 0, begin: "Empieza por D:", question: ("Tiempo que la Tierra emplea en dar una vuelta alrededor de su eje, aproximadamente veinticuatro horas.") },
	        { letter: "d", answer: "daga", status: 0, begin: "Empieza por D:", question: ("Arma blanca de hoja corta, ancha y puntiaguda, parecida a la espada pero de menor tamaño.") },
	        { letter: "d", answer: "diarrea", status: 0, begin: "Empieza por D:", question: ("Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida") }
	    ],
	    [   
	        { letter: "e", answer: "espiral", status: 0, begin: "Empieza por E:", question: ("Línea curva que describe varias vueltas alrededor de un punto, alejándose cada vez más de él.") },
	        { letter: "e", answer: "estocolmo", status: 0, begin: "Empieza por E:", question: ("Capital de Suecia.") },
	        { letter: "e", answer: "ectoplasma", status: 0, begin: "Empieza por E:", question: ("Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación") }
	    ],
	    [   
	        { letter: "f", answer: "putrefacto", status: 0, begin: "Contiene la F:", question: ("Que está descompuesto o podrido por la acción de diversos factores y determinados microorganismos.") },
	        { letter: "f", answer: "finiquito", status: 0, begin: "Empieza por F:", question: ("Remate de las cuentas, o certificación que se da para constancia de que están ajustadas y satisfecho el alcance que resulta de ellas.") },
	        { letter: "f", answer: "facil", status: 0, begin: "Empieza por F:", question: ("Que no requiere gran esfuerzo, capacidad o dificultad") }
	    ],
	    [   
	        { letter: "g", answer: "gregorio", status: 0, begin: "Empieza por G:", question: ("Papa que da nombre a nuestro calendario actual.") },
	        { letter: "g", answer: "garrulo", status: 0, begin: "Empieza por G:", question: ("Que se comporta de manera ruda, tosca o grosera.") },
	        { letter: "g", answer: "galaxia", status: 0, begin: "Empieza por G:", question: ("Conjunto enorme de estrellas, polvo interestelar, gases y partículas") }
	    ],
	    [
	        { letter: "h", answer: "hijo", status: 0, begin: "Empieza por H:", question: ("El orgullo del padre.") },
	        { letter: "h", answer: "rechoncho", status: 0, begin: "Contiene la H:", question: ("Persona o animal que es grueso y de poca altura.") },
	        { letter: "h", answer: "harakiri", status: 0, begin: "Empieza por H:", question: ("Suicidio ritual japonés por desentrañamiento") }
	    ],
	    [
	        { letter: "i", answer: "india", status: 0, begin: "Empieza por I:", question: ("Segundo pais del mundo más habitado.") },
	        { letter: "i", answer: "interestelar", status: 0, begin: "Empieza por I:", question: ("Que está en el espacio existente entre dos astros, o que tiene relación con él.") },
	        { letter: "i", answer: "iglesia", status: 0, begin: "Empieza por I:", question: ("Templo cristiano") }
	    ],
	    [   
	        { letter: "j", answer: "juerga", status: 0, begin: "Empieza por J:", question: ("Fiesta sin fin.") },
	        { letter: "j", answer: "jalapeño", status: 0, begin: "Empieza por J:", question: ("Chile picante de unos 5 cm de largo, carnoso y de punta redonda, que se usa para condimentar ciertos guisos.") },
	        { letter: "j", answer: "jabali", status: 0, begin: "Empieza por J:", question: ("Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba") }
	    ],
	    [
	        { letter: "k", answer: "punky", status: 0, begin: "Contiene la K:", question: ("El jabón de lagarto le aguanta la cresta.") },
	        { letter: "k", answer: "kryptonita", status: 0, begin: "Empieza por K:", question: ("Mineral ficticio que aparece en los cómics de Superman de DC Comics.") },
	        { letter: "k", answer: "kamikaze", status: 0, begin: "Empieza por K:", question: ("Persona que se juega la vida realizando una acción temeraria") }
	    ],
	    [
	        { letter: "l", answer: "leviatán", status: 0, begin: "Contiene la L:", question: ("Monstruo de las profundidades marinas.") },
	        { letter: "l", answer: "homunculo", status: 0, begin: "Contiene la L:", question: ("Hombre pequeño y débil.") },
	        { letter: "l", answer: "licantropo", status: 0, begin: "Empieza por L:", question: ("Hombre lobo") }
	    ],
	    [
	        { letter: "m", answer: "muermo", status: 0, begin: "Empieza por M:", question: ("Soso, aburrido.") },
	        { letter: "m", answer: "martir", status: 0, begin: "Empieza por M:", question: ("Persona que sufre o muere por defender su religión o sus ideales.") },
	        { letter: "m", answer: "misantropo", status: 0, begin: "Empieza por M:", question: ("Persona que huye del trato con otras personas o siente gran aversión hacia ellas") }
	    ],
	    [
	        { letter: "n", answer: "necedad", status: 0, begin: "Empieza por N:", question: ("Demostración de poca inteligencia") },
	        { letter: "n", answer: "necrófilo", status: 0, begin: "Empieza por N:", question: ("Que le gustan los muertos.") },
	        { letter: "n", answer: "neon", status: 0, begin: "Empieza por N:", question: ("Tubo fluorescente que produce una luz brillante.") },
	    ],
	    [
            { letter: "ñ", answer: "ñoqui", status: 0, begin: "Empieza por Ñ:", question: (" Masa hecha con patatas mezcladas con harina de trigo, mantequilla, leche, huevo y queso rallado, dividida en trocitos, que se cuecen en agua hirviendo con sal.") },
            { letter: "ñ", answer: "ñu", status: 0, begin: "Empieza por Ñ:", question: ("Antílope propio del África del Sur, que parece un caballo pequeño con cabeza de toro.") },
            { letter: "ñ", answer: "cabaña", status: 0, begin: "Contiene la Ñ:", question: ("Construcción rústica pequeña, de materiales pobres, destinada a refugio o vivienda.") },
        ],
        [
	        { letter: "o", answer: "ornitorrinco", status: 0, begin: "Empieza por O:", question: ("Único mamifero que pone huevos.") },
	        { letter: "o", answer: "omnisciente", status: 0, begin: "Empieza por O:", question: ("Que conoce todas las cosas reales y posibles.") },
	        { letter: "o", answer: "orco", status: 0, begin: "Empieza por O:", question: ("Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien") }
	    ],
	    [
	        { letter: "p", answer: "perejil", status: 0, begin: "Empieza por P:", question: ("No falta en un plato de Arguiñano") },
	        { letter: "p", answer: "alpargata", status: 0, begin: "Contiene la P:", question: ("Calzado de lona, con suela de esparto, cáñamo o goma, que se sujeta al pie por presión o con unas cintas que se atan al tobillo.") },
	        { letter: "p", answer: "protoss", status: 0, begin: "Empieza por P:", question: ("Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft") }
	    ],
	    [
	        { letter: "q", answer: "quemar", status: 0, begin: "Empieza por Q:", question: ("Arder, combustionar.") },
	        { letter: "q", answer: "quebradizo", status: 0, begin: "Empieza por Q:", question: ("Que se puede romper fácilmente.") },
	        { letter: "q", answer: "queso", status: 0, begin: "Empieza por Q:", question: ("Producto obtenido por la maduración de la cuajada de la leche") }
	    ],
	    [
	        { letter: "r", answer: "reglas", status: 0, begin: "Empieza por R:", question: ("Se rompen o se cumplen.") },
	        { letter: "r", answer: "rinoplastia", status: 0, begin: "Empieza por R:", question: ("Operación quirúrgica para restaurar la nariz.") },
	        { letter: "r", answer: "raton", status: 0, begin: "Empieza por R:", question: ("Roedor") }
	    ],
	    [
	        { letter: "s", answer: "pésimo", status: 0, begin: "Contiene la S:", question: ("Peor que malo.") },
	        { letter: "s", answer: "sesaliño", status: 0, begin: "Empieza por S:", question: ("Falta de cuidado en la forma de vestir y en el aseo personal.") },
	        { letter: "s", answer: "stackoverflow", status: 0, begin: "Empieza por S:", question: ("Comunidad salvadora de todo desarrollador informático") }
	    ],
	    [
	        { letter: "t", answer: "teruel", status: 0, begin: "Empieza por T:", question: ("Para algunos existe.") },
	        { letter: "t", answer: "tabardillo", status: 0, begin: "Empieza por T:", question: ("Persona alocada, bulliciosa y molesta.") },
	        { letter: "t", answer: "terminator", status: 0, begin: "Empieza por T:", question: ("Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984") }
	    ],
	    [
	        { letter: "u", answer: "urbanita", status: 0, begin: "Empieza por U:", question: ("Dícese del que es muy de ciudad.") },
	        { letter: "u", answer: "huraño", status: 0, begin: "Contiene la U:", question: ("Persona que rehúye el trato de otras personas y rechaza las atenciones y muestras de cariño.") },
	        { letter: "u", answer: "unamuno", status: 0, begin: "Empieza por U:", question: ("Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914") }
	    ],
	    [   
	        { letter: "v", answer: "valiente", status: 0, begin: "Empieza por V:", question: ("Contrario de cobarde.") },
	        { letter: "v", answer: "vasallaje", status: 0, begin: "Empieza por V:", question: ("Tributo que el vasallo pagaba a su señor o servicio que le prestaba según este vínculo.") },
	        { letter: "v", answer: "vikingos", status: 0, begin: "Empieza por V:", question: ("Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa") }
	    ],
	    [
	        { letter: "w", answer: "westfalia", status: 0, begin: "Empieza por W:", question: ("La cama en el techo de las furgonetas.") },
	        { letter: "w", answer: "wolframio", status: 0, begin: "Empieza por W:", question: ("Elemento químico de número atómico 74 que se encuentra en el grupo 6 de la tabla periódica de los elementos. Su símbolo es W. ") },
	        { letter: "w", answer: "sandwich", status: 0, begin: "Contiene la W:", question: ("Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso") }
	    ],
	    [
	        { letter: "x", answer: "climax", status: 0, begin: "Contiene la X:", question: ("Punto culminante o de mayor satisfacción de la excitación sexual en las zonas erógenas o sexuales.") },
	        { letter: "x", answer: "taxidermista", status: 0, begin: "Contiene la X:", question: ("El que tiene el oficio de disecar.") },
	        { letter: "x", answer: "botox", status: 0, begin: "Contiene la X:", question: ("Toxina bacteriana utilizada en cirujía estética") },
	    ],   
	    [
	        { letter: "y", answer: "yamaha", status: 0, begin: "Empieza por Y:", question: ("La marca del diapasón.") },
	        { letter: "y", answer: "buey", status: 0, begin: "Contiene la Y:", question: ("Toro castrado, que se utiliza como animal de tiro y del cual se aprovecha su carne.") },
	        { letter: "y", answer: "peyote", status: 0, begin: "Contiene la Y:", question: ("Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos") }
	    ],   
	    [
	        { letter: "z", answer: "zoquete", status: 0, begin: "Empieza por Z:", question: ("Duro de mollera.") },
	        { letter: "z", answer: "pazguato", status: 0, begin: "Contiene la Z:", question: ("Que es tonto o tiene poca rapidez mental.") },
	        { letter: "z", answer: "zen", status: 0, begin: "Empieza por Z:", question: ("Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional") }
	      ]         
	];//status = 0 no respondido, 1 correcto, 2 erroneo

function nuevoJuego(){
	cuentaAtras() //Iniciamos cuenta atrás
	elegirPregunta() //Se eligen aleatoriamente las preguntas del próximo juego
	document.getElementById("texto1").classList.add("hidden") //Ocultamos el texto1 de introduccion
	document.getElementById("texto2").classList.remove("hidden") //Mostramos texto2 que son las preguntas
    document.getElementById("rosco").classList.remove("hidden") //Mostramos el rosco con las letras
	pasarPregunta() //Comenzamos juego
}

function cuentaAtras(){ //Función para crear el intervalo de tiempo de ejecución de fCountDown
    function fCountdown() { //Función para crear la cuenta atrás
        time --; //Descontamos uno al tiempo
        document.getElementById('countdown').innerHTML = time; //Mostramos el nuevo tiempo en la capa correcpondiente
        if (time == 0) { //Si el tiempo es 0
            clearInterval(timer) //Finalizamos el intervalo, paramos de ejecutarlo.
            document.getElementById('countdown').innerHTML = '0' //Mostramos 0 en la capa correspondiente
     		finalDePartida() //Saltamos a la funcion finalDePartida
        }        
    }
    timer = setInterval(fCountdown, 1000); //Almacenamos el intervalo en variable timer. Cada 1000 milisegundos se ejecutará fCountDoown
}

function elegirPregunta(){ //Funcion para elegir pregunta aleatoriamente y crear el Array definitivo de preguntas de esa partida
    for(var i=0;i<questions.length;i++){ //Recorremos el Array questions
        preguntas.push(questions[i][random()]) //Añadimos el objeto que ha tocado en el array con indice x del array questions
    }
}

function random(){ //Funcion para que me de un numero aleatorio 
    return Math.floor(Math.random() * (3 - 0) + 0) // Retorna un entero aleatorio entre min (incluido) y max (excluido)
} //Math.floor(Math.random() * (max - min)) + min   Math.floor "Redondeo para que sea un entero"

function pasarPregunta(){ //Función para mostrar siguiente palabra
	document.getElementById('respuesta').value = "" //Forzamos que no haya nada escrito
	document.getElementById('respuesta').focus() //Ponemos el foco en el input
	if (numerodepregunta<0){ //Si el indice del array preguntas es menor que 0 aumentamos, quiere decir que acabamos de empezar el juego
    	numerodepregunta++
  	}else if (numerodepregunta<26 && numerodepregunta>-1){ //Si el indice del array preguntas está comprendido entre 0 y 25
  		document.getElementById(preguntas[numerodepregunta].letter).classList.remove("animacion") //Eliminamos la animación de la anterior letra del rosco
    	numerodepregunta++ //Aumentamos el número de pregunta
  	}else{ //Si ninguna de las anteriores se cumple, quiere decir que hemos llegado a la última pregunta
  		document.getElementById(preguntas[numerodepregunta].letter).classList.remove("animacion") //Eliminamos la animación de la anterior letra del rosco
    	numerodepregunta = 0 //Posicionamos el indice en la primera pregunta 
  	}

  	if(preguntas[numerodepregunta].status == 0){ // Verificamos si la pregunta está sin responder
        document.getElementById('comienzo').innerHTML = preguntas[numerodepregunta].begin //Añadimos en el elemento con id comienzo el contenido de "preguntas[numerodepregunta].begin"
    	document.getElementById('definicion').innerHTML = preguntas[numerodepregunta].question //Añadimos la definicion de la palabra a "definicion"
    	document.getElementById(preguntas[numerodepregunta].letter).classList.add("animacion") //Añadimos animacion de parpadeo a la letra correspondiente
  	}else{ //Si la pregunta está respondida
    	pasarPregunta() // Volvermos a ejecutar la función pasarPalabra
  	} 

}

function comprobar(){ //Funcion para comprobar la respuesta
	var respuesta = document.getElementById('respuesta').value //Creamos una variable y volcamos el value del input "respuesta"
	document.getElementById('respuesta').value = "" //Vaciamos el input
	document.getElementById('respuesta').focus() //Ponemos el focus en el input de nuevo
	if(respuesta == preguntas[numerodepregunta].answer){ //Si la respuesta es igual a la respuesta que esta en el campo answer de dicho objeto (de la palabra en cuestion)
        document.getElementById(preguntas[numerodepregunta].letter).classList.add("acierto") //Añadimos la classe aciert (Se pone en verde)
        preguntas[numerodepregunta].status = 1 //Cambiamos el status a 1 de dicho objeto, quiere decir que hemos acertado
        aciertos++ //Aumentamos variable contador aciertos
        document.getElementById('correctas').innerHTML = aciertos //Mostramos los aciertos acumulados en la capa "correctas"
        if (todoContestado()){ //Si todas las preguntas están contestadas - Para ello vamos a la funcion todoContestado
        	finalDePartida() //Ejecutamos funcion finalDePartida
        }
        else{ //Si faltan por contestar 
        	pasarPregunta() //Ejecutamos funcion pasarPregunta
        }
    }else { //Si la respuesta es erronea
        document.getElementById(preguntas[numerodepregunta].letter).classList.add("error") //Añadimos la clase error a la letra (Se pone en rojo)
        preguntas[numerodepregunta].status = 2 //Cambiamos el status del objeto de la pregunta a 2 que es error
        errores++ //Aumentamos la variable contador errores
        if (todoContestado()){ //Lo mismo que la linea 212...
        	finalDePartida()
        }
        else{
        	pasarPregunta()
        }
      } 
}

function todoContestado(){ //Funcion que nos devuelve true o false si están todas las letras contestadas o no
    var palabrasRespondidas = 0 //Creamos una variable y la inicializamos a 0, la usaremos para contar objetos están con status diferente de 0, es decir, contestadas.
    preguntas.forEach(function(obj){ //Para cada uno de los objetos del array poreguntas
        if(obj.status != 0){ //Si el status es diferente de 0
            palabrasRespondidas++ //Aumentamos la variable contador 
        }
    })
    return palabrasRespondidas == 27 ? true : false //Devolvemos true si la variable palabrasRespondidas es 27, false en casa contrario
}

function finalDePartida(){ //Función para finalizar juego
	finalizar() //Ejecuta función finalizar
	document.getElementById("texto2").classList.add("hidden") //Ocultamos la capa texto2, texto que contiene las preguntas
	document.getElementById("texto3").classList.remove("hidden") //Desocultamos la capa texto3, texto de agradecimiento por jugar
	document.getElementById(preguntas[numerodepregunta].letter).classList.remove("animacion") //Eliminamos la animación de la letra que estabamos jugando en ese momento
  	if (aciertos == 27){ //Si variable aciertos es 27
  		var tiempo = 130-time //Creamos variable tiempo para saber cuanto tiempo ha tardado en ejecutar el rosco
    	document.getElementById('fin').innerHTML = "Felicidades!!!!" //Mostramos texto de felicitación por completarlo entero
    	document.getElementById('resultado').innerHTML = "Has completado el rosco en " + tiempo + " segundos." //Mostramos texto informativo
  	}else if (time> 0){ //Si el tiempo no se ha acabado, quiere decir que se ha interrumpido el juego voluntariamente
    	document.getElementById('resultado').innerHTML = "Has interrumpido el juego. Has hecho " + aciertos + " aciertos y " + errores + " errores. Puedes intentarlo de nuevo." //Mostramos texto informativo
  	}else{ //Si no es ningun caso anterior, se ha acabado el tiempo
    	document.getElementById('resultado').innerHTML = "Lo siento, tu tiempo se ha acabado. Puedes intentarlo de nuevo." //Mostramos texto informativo
  	}
}

function finalizar(){ //Finalizar juego mediante el botón finalizar
	clearInterval(timer); ////Finalizamos el intervalo de ejecución de fCountDown
    
}

function saltar(e) { //Funcion para utilizar directamente el teclado, cuando tenemos el cursor en input (es estrictamente necesario tener el cursor en input) Lo hacemos mediante "onkeypress="saltar(event)" e
	tecla = (document.all) ? e.keyCode : e.which; //Almacenar en variable el número de tecla pulsada en el documento, dependiendo del navegador coge keyCode o which
	if (tecla==13) { //Si la tecla pulsada es el intro (Tecla numero 13)
		comprobar() //Ejecutar función comprobar
	} else if (tecla==32) { //Si la tecla pulsada es el espacio (Tecla numero 32)
		pasarPregunta() //Ejecutar función pasarPregunta
	}
}

