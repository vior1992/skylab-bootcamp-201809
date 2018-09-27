
var players = [];
var playerName;
var timerText;
var circleContainer;
 


function inIt() {
    var letters = document.querySelectorAll(".item");
    timerText = document.getElementById("countdowntimer");
    var j;
    for (j = 0; j < letters.length; j++) {
        letters[j].style.backgroundColor = "transparent";
    }
    divName.style.display = "block"; 
    startText.style.display = "block";
    timerText.style.display = "none";
    document.getElementById("nome").value = '';
}


function startGame() {
    var questions = [
        [ { letter: "a", id: 0, answer: "abducir", status: 0, question: ("CON LA A. Dicho de una supuesta criatura extraterrestre.") },
        { letter: "a", id: 0, answer: "araña", status: 0, question: ("CON LA A. Arácnido de cuatro pares de patas que presenta un pequeño cefalotórax no articulado al que se une un abdomen abultado, en cuyo extremo tiene los órganos productores de seda o hileras.") },
        { letter: "a", id: 0, answer: "artado", status: 0, question: ("CON LA A. Dicho de un clérigo: Que tiene tiempo limitado para ordenarse.") }
        ],
        [ { letter: "b", id: 1, answer: "bingo", status: 0, question: ("CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso") },
        { letter: "b", id: 1, answer: "babaco", status: 0, question: ("CON LA B. Arbusto de la Sierra ecuatoriana, que produce fruto comestible.") },
        { letter: "b", id: 1, answer: "bracamarte", status: 0, question: ("CON LA B. Espada usada antiguamente, de un solo filo y de lomo algo encorvado cerca de la punta.") }
        ],
        [ { letter: "c", id: 2, answer: "churumbel", status: 0, question: ("CON LA C. Niño, crío, bebé") },
        { letter: "c", id: 2, answer: "cabal", status: 0, question: ("CON LA C. Dicho de una cosa: Que cabe a cada uno.") },
        {letter: "c", id: 2, answer: "cuaco", status: 0, question: ("CON LA C. Persona ruda, ignorante, grosera.") }
        ],
        [ { letter: "d", id: 3, answer: "diarrea", status: 0, question: ("CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida")},
        { letter: "d", id: 3, answer: "dacio", status: 0, question: ("CON LA D. Tributo o imposición sobre algo.") },
        { letter: "d", id: 3, answer: "deparar", status: 0, question: ("CON LA D. Suministrar, proporcionar, conceder.") },
        ],
        [ { letter: "e", id: 4, answer: "ectoplasma", status: 0, question: ("CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación") },
        { letter: "e", id: 4, answer: "ermita", status: 0, question: ("CON LA E. Capilla o santuario, generalmente pequeños, situados por lo común en despoblado y que no suelen tener culto permanente.") },
        { letter: "e", id: 4, answer: "etapa", status: 0, question: ("CON LA E. Trecho de camino de un recorrido determinado.") }
        ],
        [ { letter: "f", id: 5, answer: "facil", status: 0, question: ("CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad") },
        { letter: "f", id: 5, answer: "friable", status: 0, question: ("CON LA F. Que se desmenuza fácilmente.") },
        { letter: "f", id: 5, answer: "flebe", status: 0, question: ("CON LA F. Débil, flaco.") }
        ],
        [ { letter: "g", id: 6, answer: "galaxia", status: 0, question: ("CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas") },
        { letter: "g", id: 6, answer: "gobernalle", status: 0, question: ("CON LA G. Timón de la nave.") },
        { letter: "g", id: 6, answer: "giraldilla", status: 0, question: ("CON LA G. Baile popular de Asturias y provincias inmediatas, que se ejecuta en compás binario.") }
        ],
        [{ letter: "h", id: 7, answer: "harakiri", status: 0, question: ("CON LA H. Suicidio ritual japonés por desentrañamiento") },
        { letter: "h", id: 7, answer: "hangar", status: 0, question: ("CON LA H. Cobertizo grande, generalmente abierto, para guarecer aparatos de aviación o dirigibles") },
        { letter: "h", id: 7, answer: "huaca", status: 0, question: ("CON LA H. En América Central y gran parte de la del Sur, sepulcro antiguo indio en general.") }
        ],
        [{ letter: "i", id: 8, answer: "iglesia", status: 0, question: ("CON LA I. Templo cristiano") },
        { letter: "i", id: 8, answer: "ilapso", status: 0, question: ("CON LA I. Especie de éxtasis contemplativo, durante el cual se suspenden las sensaciones exteriores y queda el espíritu en un estado de quietud y arrobamiento.") },
        { letter: "i", id: 8, answer: "isla", status: 0, question: ("CON LA I. Porción de tierra rodeada de agua por todas partes.") }
        ],
        [{ letter: "j", id: 9, answer: "jabali", status: 0, question: ("CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba") },
        { letter: "j", id: 9, answer: "jincho", status: 0, question: ("CON LA J. Drogadicto, colgado.") },
        { letter: "j", id: 9, answer: "jerarquía", status: 0, question: ("CON LA J. Organización por categorías o grados de importancia entre diversas personas o cosas.") }
        ],
        [{ letter: "k", id: 10, answer: "kamikaze", status: 0, question: ("CON LA K. Persona que se juega la vida realizando una acción temeraria") },
        { letter: "k", id: 10, answer: "kit", status: 0, question: ("CON LA K. Aparato o mueble que se vende en piezas separadas que han de ser montadas por el comprador.") },
        { letter: "k", id: 10, answer: "kayak", status: 0, question: ("CON LA K. Canoa individual de los esquimales, hecha con piel de foca y madera.") }
        ],
        [{ letter: "l", id: 11, answer: "licantropo", status: 0, question: ("CON LA L. Hombre lobo") },
        { letter: "l", id: 11, answer: "lúgubre", status: 0, question: ("CON LA L. Triste, funesto, melancólico, tétrico.") },
        { letter: "l", id: 11, answer: "ledo", status: 0, question: ("CON LA L. Alegre, contento.") }
        ],
        [{ letter: "m", id: 12, answer: "misantropo", status: 0, question: ("CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas") },
        { letter: "m", id: 12, answer: "melómano", status: 0, question: ("CON LA M. Apasionado por la música.") },
        { letter: "m", id: 12, answer: "místico", status: 0, question: ("CON LA M. Persona que se dedica a la vida contemplativa y espiritual.") }
        ],
        [{ letter: "n", id: 13, answer: "necedad", status: 0, question: ("CON LA N. Demostración de poca inteligencia") },
        { letter: "n", id: 13, answer: "nocivo", status: 0, question: ("CON LA N. Dañino,pernicioso,perjudicial.") },
        { letter: "n", id: 13, answer: "nefasto", status: 0, question: ("CON LA N. Persona o cosa desgraciada o detestable") }
        ],
        [{ letter: "ñ", id: 14, answer: "señal", status: 0, question: ("CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.") },
        { letter: "ñ", id: 14, answer: "niñato", status: 0, question: ("CONTIENE LA Ñ. Joven de comportamiento presuntuoso y frívolo.") },
        { letter: "ñ", id: 14, answer: "caña", status: 0, question: ("CONTIENE LA Ñ. Canilla del brazo o de la pierna.") }
        ],
        [{ letter: "o", id: 15, answer: "orco", status: 0, question: ("CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien") },
        { letter: "o", id: 15, answer: "ortodoxo", status: 0, question: ("CON LA O. Conforme con los dogmas de una religión o los principios de una ideología que considera verdaderos.") },
        { letter: "o", id: 15, answer: "onírico", status: 0, question: ("CON LA O. De los sueños o relativo a ellos.") }
        ],
        [{ letter: "p", id: 16, answer: "protoss", status: 0, question: ("CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft") },
        { letter: "p", id: 16, answer: "pionero", status: 0, question: ("CON LA P. Persona que inicia la exploración de nuevas tierras.") },
        { letter: "p", id: 16, answer: "protoss", status: 0, question: ("CON LA P. Persona que se dedica a actividades muy distintas y tiene múltiples aptitudes.") }
        ],
        [{ letter: "q", id: 17, answer: "queso", status: 0, question: ("CON LA Q. Producto obtenido por la maduración de la cuajada de la leche") },
        { letter: "q", id: 17, answer: "quimera", status: 0, question: ("CON LA Q. Ilusión,fantasía que se cree posible,pero que no lo es.") },
        { letter: "q", id: 17, answer: "quark", status: 0, question: ("CON LA Q. Tipo teórico de partículas elementales con las que se forman otras partículas,como son el protón y el neutrón.") }
        ],
        [{ letter: "r", id: 18, answer: "raton", status: 0, question: ("CON LA R. Roedor") },
        { letter: "r", id: 18, answer: "ridículo", status: 0, question: ("CON LA R. Que por su rareza o extravagancia produce risa.") },
        { letter: "r", id: 18, answer: "rumiar", status: 0, question: ("CON LA R. Masticar por segunda vez,devolviéndolo a la boca,el alimento que ya estuvo en el estómago.") }
        ],
        [{ letter: "s", id: 19, answer: "stackoverflow", status: 0, question: ("CON LA S. Comunidad salvadora de todo desarrollador informático") },
        { letter: "s", id: 19, answer: "sílfide", status: 0, question: ("CON LA S. Mujer muy hermosa y esbelta.") },
        { letter: "s", id: 19, answer: "script", status: 0, question: ("CON LA S. Guión cinematográfico en el que constan todos los detalles de cada escena filmada.") },
        ],
        [{ letter: "t", id: 20, answer: "terminator", status: 0, question: ("CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984") },
        { letter: "t", id: 20, answer: "tumulto", status: 0, question: ("CON LA T. Confusión agitada o desorden ruidoso.") },
        { letter: "t", id: 20, answer: "tongo", status: 0, question: ("CON LA T. En una competición, trampa por la que un participante se deja ganar, generalmente por dinero.") }
        ],
        [{ letter: "u", id: 21, answer: "unamuno", status: 0, question: ("CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914") },
        { letter: "u", id: 21, answer: "ubre", status: 0, question: ("CON LA U. En los mamíferos, cada una de las mamas de la hembra.") },
        { letter: "u", id: 21, answer: "utopía", status: 0, question: ("CON LA U. Proyecto, idea o sistema irrealizable en el momento en que se concibe o se plantea.") }
        ],
        [{ letter: "v", id: 22, answer: "vikingos", status: 0, question: ("CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa") },
        { letter: "v", id: 22, answer: "vetusto", status: 0, question: ("CON LA V. Muy antiguo o de mucha edad.") },
        { letter: "v", id: 22, answer: "vituperio", status: 0, question: ("CON LA V. Deshonra, humillación.") }
        ],
        [{ letter: "w", id: 23, answer: "sandwich", status: 0, question: ("CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso") },
        { letter: "w", id: 23, answer: "sedición", status: 0, question: ("CONTIENE LA W. Alzamiento colectivo y violento contra un poder establecido.") },
        { letter: "w", id: 23, answer: "seso", status: 0, question: ("CONTIENE LA W. ECerebro,masa de tejido nervioso contenida en la cavidad del cráneo.") }
        ],
        [{ letter: "x", id: 24, answer: "botox", status: 0, question: ("CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética") },
        { letter: "x", id: 24, answer: "extravagante", status: 0, question: ("CONTIENE LA X. Fuera de lo común o rareza por ser excesivamente original.") },
        { letter: "x", id: 24, answer: "anexo", status: 0, question: ("CONTIENE LA X. Tejidos, estructuras o partes accesorias de un órgano.") }
        ],
        [{ letter: "y", id: 25, answer: "peyote", status: 0, question: ("CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos") },
        { letter: "y", id: 25, answer: "sexy", status: 0, question: ("CONTIENE LA Y. Persona que tiene gran atractivo físico") },
        { letter: "y", id: 25, answer: "new york", status: 0, question: ("CONTIENE LA Y. La grande manzana") },
        ],
        [{ letter: "z", id: 26, answer: "zen", status: 0, question: ("CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional") },
        { letter: "z", id: 26, answer: "zonzo", status: 0, question: ("CON LA Z. Tonto, simple.") },
        { letter: "z", id: 26, answer: "zote", status: 0, question: ("CON LA Z. Ignorante, torpe.") },
        ],
    ];
    var question = document.getElementById("question");
    playerName = document.querySelector('#nome').value;
    var divName = document.getElementById("divName");     
    var startText = document.getElementById("startText"); 
    var btnPas = document.getElementById("btnPas");
    var btnStop = document.getElementById("btnStop");
    var button = document.getElementById("btnValue");
    timerText = document.getElementById("countdowntimer");
    circleContainer = document.getElementById("circleContainer");
    var button2 = document.getElementById("btnValue2");
    var btnPas2 = document.getElementById("btnPas2");
    var btnStop2 = document.getElementById("btnStop2");
    document.getElementById("countdowntimer").innerHTML = '130';
    divName.style.display = "none"; 
    startText.style.display = "none"; 
    circleContainer.style.display = "block"; 
    question.style.display = "block"; 
    timerText.style.display = "block";
    button.style.display = "inline-block"; 
    btnPas.style.display = "inline-block";
    btnStop.style.display = "inline-block";
    button2.style.display = "none"; 
    btnPas2.style.display = "none";
    btnStop2.style.display = "none";
    

    
    var corrects = [];
    var incorrects = 0;
    var points = 0;
    var count = 27;
    var count2 = 0;
    var i=0;
    var pasaArray = [];


    var timer = setTimeout(function(){ resultT(); }, 130000);

    var timeleft = 130;
    var downloadTimer = setInterval(function(){
    timeleft--;
    timerText = document.getElementById("countdowntimer").textContent = timeleft;
    if(timeleft <= 0)
        clearInterval(downloadTimer);
        
    },1000);

    function initLoop() {

        if(count>0 && i < 27) {

            letterLoop();
        }else if (count>0 && i == 27){
            loopPasa();
        }
    }
    initLoop()

    function letterLoop() {
        
        var r = Math.floor(Math.random() * Math.floor(3));
        var answ;
        if(i==27 && pasaArray.length>0) {
            loopPasa();
        }else if(count > 0 && questions[i][r].status == 0) {
            var que = questions[i][r].question;
            document.getElementById("que").innerHTML = que;
        }else if (count > 0) {
            i++;
            document.getElementById("answerId").value = '';
            letterLoop();
        }else{

            clearTimeout(timer);
            clearInterval(downloadTimer);
            document.getElementById("countdowntimer").innerHTML = '130';
            document.getElementById("answerId").value = '';
            resultT();
            
        }
        
        

        btnPas.onclick = function() {
            
            questions[i][0].status = 3;
            questions[i][1].status = 3;
            questions[i][2].status = 3;
            pasaArray.push(questions[i][r]);
            i++; 
            document.getElementById("answerId").value = '';
            letterLoop();
        }

        btnStop.onclick = function() {

            clearTimeout(timer);
            clearInterval(downloadTimer);
            document.getElementById("countdowntimer").innerHTML = '130';
            document.getElementById("answerId").value = '';
            resultT();
        }

        
        button.onclick = function() {
            var colorLetter = document.getElementById(i);      
            var askFor = document.querySelector('#answerId').value;
            answ = askFor.toLowerCase();
            if(questions[i][r].status == 0) {

                
                if(answ == questions[i][r].answer) {

                    colorLetter.style.backgroundColor = '#22c140'; 
                    questions[i][0].status = 1;
                    questions[i][1].status = 1;
                    questions[i][2].status = 1;
                    corrects.push(questions[i][r].letter); 
                    points++;
                    count--;
                    i++; 
                    document.getElementById("answerId").value = '';                
                    letterLoop();                           
                    //alert('Correct, you have ' + points + ' Point!');
                    

                }else{
                    
                    colorLetter.style.backgroundColor = '#e05050';            
                    questions[i][0].status = 2;
                    questions[i][1].status = 2;
                    questions[i][2].status = 2;
                    incorrects++;
                    count--;
                    i++; 
                    document.getElementById("answerId").value = '';
                    letterLoop();
                    
    
                }
            
            }

        }
            
    } 

    function loopPasa() { 
        
        var quePas;
        button.style.display = "none"; 
        btnPas.style.display = "none";
        btnStop.style.display = "none";
        button2.style.display = "inline-block"; 
        btnPas2.style.display = "inline-block";
        btnStop2.style.display = "inline-block";

        if(i==27) {
            i = 0;
            loop();
        }
        
        function loop() {

            console.log('loop');
            console.log(i);
            
            

            if(count > 0 && pasaArray[0].status == 3) {
            
                quePas = pasaArray[0].question;
                document.getElementById("que").innerHTML = quePas;               
                
            }else if (count > 0) {
                i++;
                loop();
                document.getElementById("answerId").value = '';
            }else{
                
                clearTimeout(timer);
                clearInterval(downloadTimer);
                document.getElementById("countdowntimer").innerHTML = '130';
                document.getElementById("answerId").value = '';
                resultT();
                
            } 

            btnPas2.onclick = function() {
                console.log('pasa2');
                console.log(pasaArray);
                
                pasaArray.push(pasaArray[0]);
                i++; 
                document.getElementById("answerId").value = '';
                pasaArray.splice(0,1);
                loop();
            }


            btnStop2.onclick = function() {

                clearTimeout(timer);
                clearInterval(downloadTimer);
                document.getElementById("countdowntimer").innerHTML = '130';
                document.getElementById("answerId").value = '';
                resultT();
                
            }


            button2.onclick = function() {
                
                var colorLetterPasa = document.getElementById(pasaArray[0].id);      
                var askFor = document.querySelector('#answerId').value;
                answ = askFor.toLowerCase();
                
                if(answ == pasaArray[0].answer) {

                    colorLetterPasa.style.backgroundColor = '#22c140'; 
                    pasaArray[0].status = 1;
                    corrects.push(pasaArray[0].letter); 
                    pasaArray.splice(0,1);
                    points++;
                    count--;
                    i++;
                    document.getElementById("answerId").value = '';                
                    loop();                           
                    //alert('Correct, you have ' + points + ' Point!');
                    

                }else{
                    
                    colorLetterPasa.style.backgroundColor = '#e05050'; 
                    pasaArray[0].status = 2;
                    pasaArray.splice(0,1);
                    incorrects++;
                    count--;
                    i++;
                    document.getElementById("answerId").value = '';
                    loop(); 
                    
    
                }
                
    
            }
        }
        
        

        
    }
    
    function resultT() {
        circleContainer.style.display = "none"; 
        var results = document.getElementById("resultId");
        timerText = document.getElementById("countdowntimer");
        question.style.display = "none"; 
        results.style.display = "block";
        timerText.style.display = "none";
        players.push({name: playerName, points: points});
        if(points == 1) {
            document.getElementById('resultText').innerHTML = 'Game Over!! ' + playerName.toUpperCase() + '<br>' + 'Has fallado ' + incorrects + ' letras<br> Has acertado ' + points + ' letra - ' + corrects + '<br>' + 'Tienes ' + points + ' punto';
        }else{
            document.getElementById('resultText').innerHTML = 'Game Over!! ' + playerName.toUpperCase() + '<br>' + 'Has fallado ' + incorrects + ' letras<br> Has acertado ' + points + ' letras - ' + corrects + '<br>' + 'Tienes ' + points + ' puntos';
        }
        var btnNewGame = document.getElementById("btnNewGame");

        btnNewGame.onclick = function() {
            results.style.display = "none";
            document.getElementById("answerId").value = '';
            document.getElementById("nome").value = '';
            document.getElementById("countdowntimer").innerHTML = '130';
            inIt();
        }

        btnEndGame.onclick = function() {
            results.style.display = "none";
            document.getElementById("answerId").value = '';
            ranking();
        }
    }
    
}

function ranking() {
    circleContainer = document.getElementById("circleContainer");
    circleContainer.style.display = "none"; 
    var listPlay = document.getElementById('ranking');
    var clasText = document.getElementById("clasText");
    var rankingFinal = document.getElementById("rankingFinal");
    var btnNewGame2 = document.getElementById("btnNewGame2");
    rankingFinal.style.display = "block";
     

    btnNewGame2.onclick = function() {
        rankingFinal.style.display = "none";
        document.getElementById("answerId").value = '';
        inIt();
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

    var rankPoints = players.sort(sort_by('points', true, parseInt));   // Sort by price high to low
    var revRankPoints = rankPoints.reverse();
    var puntos = ' puntos ';
    

    var populateList = function (arr) {
        var str = '';
        for (var i = 0; i < arr.length; i++) {
            if(arr[i].points == 1) {
                puntos = ' punto ';
            }else{
            puntos = ' puntos ';
            }
            str += '<li>' + arr[i].name + ' => ' + arr[i].points + puntos + '</li>';
        }
        return str;
    }

    listPlay.innerHTML = populateList(players);
        
   
}
    

