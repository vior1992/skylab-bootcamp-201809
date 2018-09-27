/*LISTA DE MEJORAS

MEJORAS PROPUESTAS POR MIKEL:
- QUE SE VEA UNA CUENTA ATRAS. OK!!
- CUANDO ACABAS EL ROSCO LA ULTIMA LETRA SE QUEDA EL BORDE EN BLANCO. OK!!

ULTIMAS MEJORAS QUE SE ME OCURREN:
- QUE A JUGAR TAMBIÉN FUNCIONE PRESIONANDO ENTER 
- ABANDONAR NO SE PUEDA DAR SI ESTA ESPERANDO UN JUGADOR.OK!!
- PONER CLASIFICACIÓN COMO TABLA Y NO COMO UNA LISTA OK!!
- PONER TABLA CLASIFICACIÓN MAS BONITA OK!!

*/


var questions = []

var bdquestions=[
[
    { letter: "a", answer: "abducir", status: 0, question: ("CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien") },
    { letter: "b", answer: "bingo", status: 0, question: ("CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso") },
    { letter: "c", answer: "churumbel", status: 0, question: ("CON LA C. Niño, crío, bebé") },
    { letter: "d", answer: "diarrea", status: 0, question: ("CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida") },
    { letter: "e", answer: "ectoplasma", status: 0, question: ("CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación") },
    { letter: "f", answer: "facil", status: 0, question: ("CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad") },
    { letter: "g", answer: "galaxia", status: 0, question: ("CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas") },
    { letter: "h", answer: "harakiri", status: 0, question: ("CON LA H. Suicidio ritual japonés por desentrañamiento") },
    { letter: "i", answer: "iglesia", status: 0, question: ("CON LA I. Templo cristiano") },
    { letter: "j", answer: "jabali", status: 0, question: ("CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba") },
    { letter: "k", answer: "kamikaze", status: 0, question: ("CON LA K. Persona que se juega la vida realizando una acción temeraria") },
    { letter: "l", answer: "licantropo", status: 0, question: ("CON LA L. Hombre lobo") },
    { letter: "m", answer: "misantropo", status: 0, question: ("CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas") },
    { letter: "n", answer: "necedad", status: 0, question: ("CON LA N. Demostración de poca inteligencia") },
    { letter: "ñ", answer: "señal", status: 0, question: ("CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.") },
    { letter: "o", answer: "orco", status: 0, question: ("CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien") },
    { letter: "p", answer: "protoss", status: 0, question: ("CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft") },
    { letter: "q", answer: "queso", status: 0, question: ("CON LA Q. Producto obtenido por la maduración de la cuajada de la leche") },
    { letter: "r", answer: "raton", status: 0, question: ("CON LA R. Roedor") },
    { letter: "s", answer: "stackoverflow", status: 0, question: ("CON LA S. Comunidad salvadora de todo desarrollador informático") },
    { letter: "t", answer: "terminator", status: 0, question: ("CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984") },
    { letter: "u", answer: "unamuno", status: 0, question: ("CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914") },
    { letter: "v", answer: "vikingos", status: 0, question: ("CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa") },
    { letter: "w", answer: "sandwich", status: 0, question: ("CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso") },
    { letter: "x", answer: "botox", status: 0, question: ("CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética") },
    { letter: "y", answer: "peyote", status: 0, question: ("CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos") },
    { letter: "z", answer: "zen", status: 0, question: ("CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional") },
],
[
    { letter: "a", answer: "ajetreo", status: 0, question: ("CON LA A. Actividad intensa que implica movimientos incesantes") },
    { letter: "b", answer: "balandra", status: 0, question: ("CON LA B. Embarcación pequeña con cubierta y un solo palo") },
    { letter: "c", answer: "caramelo", status: 0, question: ("CON LA C. Azúcar fundido y endurecido") },
    { letter: "d", answer: "domino", status: 0, question: ("CON LA D. Juego de mesa que se lleva a cabo con 28 fichas rectangulares con dos numeros cada una") },
    { letter: "e", answer: "electricidad", status: 0, question: ("CON LA E. Rama de la física que estudia los fenómenos eléctricos") },
    { letter: "f", answer: "fogoso", status: 0, question: ("CON LA F. Ardiente, demasiado vivo") },
    { letter: "g", answer: "gendarme", status: 0, question: ("CON LA G. Agente de policía, de Francia o de otros países") },
    { letter: "h", answer: "hola", status: 0, question: ("CON LA H. como salutación familiar") },
    { letter: "i", answer: "imbecil", status: 0, question: ("CON LA I. Tonto o falto de inteligencia") },
    { letter: "j", answer: "jamon", status: 0, question: ("CON LA J. VPierna trasera del cerdo, curada o cocida entera") },
    { letter: "k", answer: "kilo", status: 0, question: ("CON LA K. Millón de pesetas") },
    { letter: "l", answer: "lampara", status: 0, question: ("CON LA L. Cuerpo que despide luz") },
    { letter: "m", answer: "mujer", status: 0, question: ("CON LA M. Persona del sexo femenino") },
    { letter: "n", answer: "nariz", status: 0, question: ("CON LA N. Órgano prominente del rostro humano, entre la frente y la boca") },
    { letter: "ñ", answer: "paño", status: 0, question: ("CONTIENE LA Ñ. Tela de diversas clases de hilos") },
    { letter: "o", answer: "orificio", status: 0, question: ("CON LA O. abertura, agujero") },
    { letter: "p", answer: "pan", status: 0, question: ("CON LA P. Alimento o sustento") },
    { letter: "q", answer: "querer", status: 0, question: ("CON LA Q. Tener voluntad o determinación de ejecutar algo") },
    { letter: "r", answer: "roble", status: 0, question: ("CON LA R. Árbol de la familia de las fagáceas recio y fuerte") },
    { letter: "s", answer: "salchicha", status: 0, question: ("CON LA S.  Embutido, en tripa delgada, de carne de cerdo magra y gorda, bien picada, que se sazona con sal, pimienta y otras especias.") },
    { letter: "t", answer: "tarantula", status: 0, question: ("CON LA T. Araña muy común en el mediodía de Europa fea y peluda") },
    { letter: "u", answer: "urinario", status: 0, question: ("CON LA U. Lugar destinado para orinar y en especial el dispuesto para el público en calles, teatros") },
    { letter: "v", answer: "victoria", status: 0, question: ("CON LA V. Superioridad o ventaja que se consigue del contrario, en disputa o lid") },
    { letter: "w", answer: "western", status: 0, question: ("CON LA W. Género de películas del Lejano Oeste") },
    { letter: "x", answer: "xilema", status: 0, question: ("CON LA X. Tejido leñoso de las plantas vasculares, que transporta principalmente agua y minerales de una parte a otra de estos organismos") },
    { letter: "y", answer: "yate", status: 0, question: ("CON LA Y. Embarcación de gala o de recreo") },
    { letter: "z", answer: "zangano", status: 0, question: ("CON LA Z. Persona floja, desmañada y torpe") },
],
[
    { letter: "a", answer: "alondra", status: 0, question: ("CON LA A. Pájaro de 15 a 20 cm de largo, de cola ahorquillada, con cabeza y dorso de color pardo terroso") },
    { letter: "b", answer: "bacteria", status: 0, question: ("CON LA B. Microorganismo unicelular sin núcleo diferenciado, algunas de cuyas especies descomponen la materia orgánica") },
    { letter: "c", answer: "correa", status: 0, question: ("CON LA C. Tira de cuero u otro material que sirve para atar, ceñir o colgar") },
    { letter: "d", answer: "dedo", status: 0, question: ("CON LA D. Cada uno de los cinco apéndices articulados en que terminan la mano y el pie del hombre") },
    { letter: "e", answer: "eleccion", status: 0, question: ("CON LA E. Acción y efecto de elegir") },
    { letter: "f", answer: "frigorifico", status: 0, question: ("CON LA F. Dicho especialmente de una mezcla o de un dispositivo: Que hace bajar la temperatura más o menos grados de manera artificial") },
    { letter: "g", answer: "goma", status: 0, question: ("CON LA G. Tira o banda elástica.") },
    { letter: "h", answer: "hieratico", status: 0, question: ("CON LA H. Dicho de un estilo o de un ademán: Que tiene o afecta solemnidad extrema, aunque sea en cosas no sagradas") },
    { letter: "i", answer: "izar", status: 0, question: ("CON LA I. Hacer subir algo tirando de la cuerda de que está colgado") },
    { letter: "j", answer: "joroba", status: 0, question: ("CON LA J. Giba, corcova, chepa") },
    { letter: "k", answer: "karma", status: 0, question: ("CON LA K. En algunas creencias, fuerza espiritual.") },
    { letter: "l", answer: "leccion", status: 0, question: ("CON LA L. Inteligencia de un texto, según parecer de quien lo lee o interpreta, o según cada una de las distintas maneras en que se halla escrito") },
    { letter: "m", answer: "mortadela", status: 0, question: ("CON LA M. Embutido muy grueso que se hace con carne de cerdo y de vaca muy picada con tocino") },
    { letter: "n", answer: "negar", status: 0, question: ("CON LA N. Decir que algo no existe, no es verdad o no es como alguien cree o afirma") },
    { letter: "ñ", answer: "albañil", status: 0, question: ("CONTIENE LA Ñ. Persona que se dedica profesionalmente a la albañilería.") },
    { letter: "o", answer: "oropel", status: 0, question: ("CON LA O. Cosa de poco valor y mucha apariencia") },
    { letter: "p", answer: "pinguino", status: 0, question: ("CON LA P. pajaro muy graciso que no sabe volar pero nada que no veas") },
    { letter: "q", answer: "quimera", status: 0, question: ("CON LA Q. Aquello que se propone a la imaginación como posible o verdadero, no siéndolo") },
    { letter: "r", answer: "rapaz", status: 0, question: ("CON LA R. Ave del orden de las falconiformes") },
    { letter: "s", answer: "sociedad", status: 0, question: ("CON LA S. Conjunto de personas, pueblos o naciones que conviven bajo normas comunes") },
    { letter: "t", answer: "trozo", status: 0, question: ("CON LA T. Parte de algo que se considera por separado del resto") },
    { letter: "u", answer: "ultraje", status: 0, question: ("CON LA U. Acción y efecto de ultrajar") },
    { letter: "v", answer: "vicio", status: 0, question: ("CON LA V. Mala calidad, defecto o daño físico en las cosas") },
    { letter: "w", answer: "show", status: 0, question: ("CONTIENE LA W. Espectáculo de variedades.") },
    { letter: "x", answer: "axfisiante", status: 0, question: ("CONTIENE LA X. Que hace difícil la respiración") },
    { letter: "y", answer: "abyeccion", status: 0, question: ("CONTIENE LA Y. Bajeza, envilecimiento extremo.") },
    { letter: "z", answer: "zanahoria", status: 0, question: ("CON LA Z. Hortaliza preferida de Bugs Bunny") },
]
]

var correct = 0;
var incorrect = 0;
var i = 0;
var final = 27;
var jugador = {nombre:"nombre",puntuacion: 0};
var ranking = [];
var myVar;
var myVar2;
var cuenta=180;
var input = document.getElementById("respuesta");

/* esto lo añado para que con enter también coga las respuestas*/
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("brespuesta").click();
        }
    });


/*La funcion round recogerá el valor introducido y llamará a la función checkword*/
function round(){
        
        checkword(document.getElementById("respuesta"), i);
        i++;
        document.getElementById("respuesta").value ="";
        searchfirst();
        if(i<final){
        document.getElementById("definicion").innerHTML = questions[i].question;
        document.getElementById(questions[i-1].letter).style.border = "4px solid black";
        document.getElementById(questions[i].letter).style.border = "4px solid grey";
        }
        else if(correct+incorrect<final){
            i=0;
            searchfirst();
            document.getElementById("definicion").innerHTML = questions[i].question;
            document.getElementById(questions[i-1].letter).style.border = "4px solid black";
            document.getElementById(questions[i].letter).style.border = "4px solid grey";
        }
        else{
            clearTimeout(myVar);
            clearTimeout(myVar2);
            end()};
        
        
   }

function checkword(word,index){
    if(word.value.toLowerCase()==="pasapalabra"){
        document.getElementById(questions[i].letter).style.border = "4px solid black";
        return ("pasapalabra");
    }

       
    else if(word.value.toLowerCase()===questions[index].answer){
        document.getElementById(questions[i].letter).style.background = "#00cc00";
        document.getElementById(questions[i].letter).style.border = "4px solid black";
        correct = correct + 1;
        questions[index].status=1;
    }
    
    else {
        document.getElementById("correcta").innerHTML= "Noooooooooo! la respuesta correcta es " + questions[index].answer;
        document.getElementById(questions[i].letter).style.background = "#ff0000";
        document.getElementById(questions[i].letter).style.border = "4px solid black";
        incorrect = incorrect + 1;
        questions[index].status=1;
    }

}

/*se ejecuta cuando acaba el tiempo o se termina de responder, inicializa valores, da el resultado, 
modifica el ranking y llama a la función que lo muestra*/
function end(){
    document.getElementById("respuesta").disabled = true;
    document.getElementById("brespuesta").disabled = true;
    document.getElementById("babort").disabled = true;
    document.getElementById("correcta").innerHTML="Final del juego. CORRECTAS: "+correct+" INCORRECTAS: "+incorrect; 
    document.getElementById("info").innerHTML="Para nuevo jugador introduzca su nombre y pulse A jugar!";
    jugador.puntuacion=correct;
    ranking.push(jugador);
    ordena();
    showranking();
    document.getElementById("bjugador").disabled = false;
    document.getElementById("jugador").disabled = false;
}

/*si se pulsa abortar juego no se ejecuta end, se ejecuta abort que es parecida pero no guarda ni muestra un nuevo ranking*/
function abort(){
    document.getElementById("respuesta").disabled = true;
    document.getElementById("brespuesta").disabled = true;
    document.getElementById("babort").disabled = false;
    document.getElementById("correcta").innerHTML="Final del juego. CORRECTAS: "+correct+" INCORRECTAS: "+incorrect;
    document.getElementById("info").innerHTML="Juego abortado, no se guardarán los resultados, introduzca nuevo jugador";
    document.getElementById("bjugador").disabled = false;
    document.getElementById("jugador").disabled = false;
    clearTimeout(myVar);
    clearTimeout(myVar2);
}

/*Busca el primer elemento del array de preguntas que tenga el status a 0, o sea que no haya sido respondida*/
function searchfirst(){
        for(var j=i;j<final;j++){
            if(questions[j].status===1){
                i++;
            }
            else{break;}
        }
        }

/*Inicia el status a 0 para todo el rosco utilizado, y también deja las letras otra vez todas en verde*/
function initiatestatus(){
    for(var k = 0; k<questions.length ;k++){
        questions[k].status = 0;
        document.getElementById(questions[k].letter).style.background = "white";
        document.getElementById(questions[k].letter).style.border = "4px solid black";
    }
    document.getElementById("info").innerHTML="";
    correct = 0;
    incorrect = 0;
    i=0;
    jugador = {nombre:"nombre",puntuacion: 0};

}

/*Cada vez que hay una nueva entrada en el ranking lo ordena de mas a menos puntos*/
function ordena(){
    var temporal;
    for(var j=0; j<ranking.length-1; j++){
        for(var i=0; i<ranking.length-1; i++){
    if(ranking[i].puntuacion<ranking[i+1].puntuacion){
        temporal = ranking[i];
        ranking[i]=ranking[i+1];
        ranking[i+1]=temporal;
    }
    }
    }

}

/*Muestra el ranking en forma de lista*/
function showranking(){
    var temp ="<tr><th>Jugador</th><th>Puntuación</th></tr>";
    for (var j=0;j<ranking.length;j++){
        if(j<=10){
        temp=temp+'<tr><td>'+ranking[j].nombre+'</td><td>'+ ranking[j].puntuacion+" puntos"+'</td><tr>';}

    }
    document.getElementById("rankinglist").innerHTML = temp;
}

/*borra el mensaje de corrección cuando pasas a la siguiente pregunta y empiezas a escribir*/
function deletec(){
    document.getElementById("correcta").innerHTML= "";
}

/*Esta función elige al azar un listado de palabras para jugar*/
function random(){
  var numrandom=Math.floor(Math.random() * (bdquestions.length - 0)) + 0;
  questions = bdquestions[numrandom];
}

/*timer*/
function timer(){
    cuenta=cuenta-1;
    document.getElementById("timer").innerHTML="Tiempo: " + cuenta;
    if (cuenta>0){
    myVar2=setTimeout(function(){timer()},1000);
    }
}

/*inicializa todos los valores y maneja la toma de nombre de jugador y el inicio del juego*/
function inicio(){
    random();
    document.getElementById("correcta").innerHTML="";
    document.getElementById("respuesta").value="";
    document.getElementById("bjugador").disabled = true;
    document.getElementById("jugador").disabled = true;
    document.getElementById("respuesta").disabled = false;
    document.getElementById("brespuesta").disabled = false;
    document.getElementById("babort").disabled = false;
    initiatestatus()
    jugador.nombre=document.getElementById("jugador").value;
    document.getElementById("playername").innerHTML = document.getElementById("jugador").value;
    document.getElementById("jugador").value="";
    document.getElementById("definicion").innerHTML = questions[i].question;
    document.getElementById("a").style.border = "4px solid grey";
    myVar=setTimeout(end,180000);
    cuenta=180;
    document.getElementById("timer").innerHTML="Tiempo: " + cuenta;
    myVar2=setTimeout(function(){timer()},1000);
    }

