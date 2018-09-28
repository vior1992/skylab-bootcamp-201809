
/*
var questions = [
    { letter: "a", answerB: "ada",questionB: ("CON LA A. pregunta B ada") ,answer: "abducir", status: 0, question: ("CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien") },
    { letter: "b", answerB: "bate",  questionB: ("CON LA B. pregunta B bate"), answer: "bingo", status: 0, question: ("CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso") },
    { letter: "c", answerB: "cerebro",questionB: ("CON LA C. pregunta B cerebro"), answer: "churumbel", status: 0, question: ("CON LA C. Niño, crío, bebé") },
    { letter: "d", answerB: "duda",  questionB: ("CON LA D. pregunta B duda"), answer: "diarrea", status: 0, question: ("CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida") },
    { letter: "e", answerB: "exquisito",  questionB: ("CON LA E. pregunta B exquisito"), answer: "ectoplasma", status: 0, question: ("CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación") },
    { letter: "f", answerB: "for",  questionB: ("CON LA F. pregunta B for"), answer: "facil", status: 0, question: ("CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad") },
    { letter: "g", answerB: "gato", questionB: ("CON LA G. pregunta B gato"), answer: "galaxia", status: 0, question: ("CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas") },
    { letter: "h", answerB: "html",  questionB: ("CON LA H. pregunta B html"), answer: "harakiri", status: 0, question: ("CON LA H. Suicidio ritual japonés por desentrañamiento") },
    { letter: "i", answerB: "idiosincrasia",  questionB: ("CON LA I. pregunta B idiosincrasia"), answer: "iglesia", status: 0, question: ("CON LA I. Templo cristiano") },
    { letter: "j", answerB: "javascript",  questionB: ("CON LA J. pregunta B javascript"), answer: "jabali", status: 0, question: ("CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba") },
    { letter: "k", answerB: "kronos",  questionB: ("CON LA K. pregunta B kronos"), answer: "kamikaze", status: 0, question: ("CON LA K. Persona que se juega la vida realizando una acción temeraria") },
    { letter: "l", answerB: "liquidez", questionB: ("CON LA L. pregunta B liquidez"), answer: "licantropo", status: 0, question: ("CON LA L. Hombre lobo") },
    { letter: "m", answerB: "meditar",  questionB: ("CON LA M. pregunta B meditar"), answer: "misantropo", status: 0, question: ("CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas") },
    { letter: "n", answerB: "niebla",  questionB: ("CON LA N. pregunta B niebla"), answer: "necedad", status: 0, question: ("CON LA N. Demostración de poca inteligencia") },
    { letter: "ñ", answerB: "azaña",  questionB: ("CONTIENE LA Ñ. pregunta B azaña."), answer: "señal", status: 0, question: ("CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.") },
    { letter: "o", answerB: "onomatopeya", questionB: ("CON LA O.pregunta B onomatopeya "), answer: "orco", status: 0, question: ("CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien") },
    { letter: "p", answerB: "perseverancia",  questionB: ("CON LA P. pregunta B perseverancia"), answer: "protoss", status: 0, question: ("CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft") },
    { letter: "q", answerB: "quesadilla",  questionB: ("CON LA Q. pregunta B quesadilla"), answer: "queso", status: 0, question: ("CON LA Q. Producto obtenido por la maduración de la cuajada de la leche") },
    { letter: "r", answerB: "resiliencia",  questionB: ("CON LA R. pregunta B resiliencia"), answer: "raton", status: 0, question: ("CON LA R. Roedor") },
    { letter: "s", answerB: "singularidad",  questionB: ("CON LA S. pregunta B singularidad"), answer: "stackoverflow", status: 0, question: ("CON LA S. Comunidad salvadora de todo desarrollador informático") },
    { letter: "t", answerB: "talento",  questionB: ("CON LA T. pregunta B talento"), answer: "terminator", status: 0, question: ("CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984") },
    { letter: "u", answerB: "uraño",  questionB: ("CON LA U. pregunta B uraño") , answer: "unamuno", status: 0, question: ("CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914") },
    { letter: "v", answerB: "victoria",  questionB: ("CON LA V. pregunta B victoria"), answer: "vikingos", status: 0, question: ("CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa") },
    { letter: "w", answerB: "web", questionB: ("CONTIENE LA W. pregunta B web"), answer: "sandwich", status: 0, question: ("CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso") },
    { letter: "x", answerB: "exacto",  questionB: ("CONTIENE LA X. pregunta B exacto"), answer: "botox", status: 0, question: ("CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética") },
    { letter: "y", answerB: "piano", questionB: ("CONTIENE LA Y. pregunta B piano"), answer: "peyote", status: 0, question: ("CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos") },
    { letter: "z", answerB: "zurda",  questionB: ("CON LA Z. pregunta B zurda"), answer: "zen", status: 0, question: ("CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional") },
];


var questions = [
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
];


*/





function play(users){

    var questions = [
        { letter: "a", answerB: "ada",questionB: ("CON LA A. Nombre de la primera mujer programadora") ,answer: "abducir", status: 0, question: ("CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien") },
        { letter: "b", answerB: "bate",  questionB: ("CON LA B. Palo para golpear pelotas"), answer: "bingo", status: 0, question: ("CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso") },
        { letter: "c", answerB: "cerebro",questionB: ("CON LA C. Órgano que centraliza la actividad del sistema nervioso"), answer: "churumbel", status: 0, question: ("CON LA C. Niño, crío, bebé") },
        { letter: "d", answerB: "derecho",  questionB: ("CON LA D. pregunta B derecho"), answer: "diarrea", status: 0, question: ("CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida") },
        { letter: "e", answerB: "exquisito",  questionB: ("CON LA E. pregunta B exquisito"), answer: "ectoplasma", status: 0, question: ("CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación") },
        { letter: "f", answerB: "for",  questionB: ("CON LA F. pregunta B for"), answer: "facil", status: 0, question: ("CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad") },
        { letter: "g", answerB: "gato", questionB: ("CON LA G. pregunta B gato"), answer: "galaxia", status: 0, question: ("CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas") },
        { letter: "h", answerB: "html",  questionB: ("CON LA H. pregunta B html"), answer: "harakiri", status: 0, question: ("CON LA H. Suicidio ritual japonés por desentrañamiento") },
        { letter: "i", answerB: "idiosincrasia",  questionB: ("CON LA I. pregunta B idiosincrasia"), answer: "iglesia", status: 0, question: ("CON LA I. Templo cristiano") },
        { letter: "j", answerB: "javascript",  questionB: ("CON LA J. pregunta B javascript"), answer: "jabali", status: 0, question: ("CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba") },
        { letter: "k", answerB: "kronos",  questionB: ("CON LA K. pregunta B kronos"), answer: "kamikaze", status: 0, question: ("CON LA K. Persona que se juega la vida realizando una acción temeraria") },
        { letter: "l", answerB: "liquidez", questionB: ("CON LA L. pregunta B liquidez"), answer: "licantropo", status: 0, question: ("CON LA L. Hombre lobo") },
        { letter: "m", answerB: "meditar",  questionB: ("CON LA M. pregunta B meditar"), answer: "misantropo", status: 0, question: ("CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas") },
        { letter: "n", answerB: "niebla",  questionB: ("CON LA N. pregunta B niebla"), answer: "necedad", status: 0, question: ("CON LA N. Demostración de poca inteligencia") },
        { letter: "ñ", answerB: "azaña",  questionB: ("CONTIENE LA Ñ. pregunta B azaña."), answer: "señal", status: 0, question: ("CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.") },
        { letter: "o", answerB: "onomatopeya", questionB: ("CON LA O.pregunta B onomatopeya "), answer: "orco", status: 0, question: ("CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien") },
        { letter: "p", answerB: "perseverancia",  questionB: ("CON LA P. pregunta B perseverancia"), answer: "protoss", status: 0, question: ("CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft") },
        { letter: "q", answerB: "quesadilla",  questionB: ("CON LA Q. pregunta B quesadilla"), answer: "queso", status: 0, question: ("CON LA Q. Producto obtenido por la maduración de la cuajada de la leche") },
        { letter: "r", answerB: "resiliencia",  questionB: ("CON LA R. pregunta B resiliencia"), answer: "raton", status: 0, question: ("CON LA R. Roedor") },
        { letter: "s", answerB: "singularidad",  questionB: ("CON LA S. pregunta B singularidad"), answer: "stackoverflow", status: 0, question: ("CON LA S. Comunidad salvadora de todo desarrollador informático") },
        { letter: "t", answerB: "talento",  questionB: ("CON LA T. pregunta B talento"), answer: "terminator", status: 0, question: ("CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984") },
        { letter: "u", answerB: "uraño",  questionB: ("CON LA U. pregunta B uraño") , answer: "unamuno", status: 0, question: ("CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914") },
        { letter: "v", answerB: "victoria",  questionB: ("CON LA V. pregunta B victoria"), answer: "vikingos", status: 0, question: ("CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa") },
        { letter: "w", answerB: "web", questionB: ("CON LA W. pregunta B web"), answer: "sandwich", status: 0, question: ("CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso") },
        { letter: "x", answerB: "exacto",  questionB: ("CONTIENE LA X. pregunta B exacto"), answer: "botox", status: 0, question: ("CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética") },
        { letter: "y", answerB: "ayuno", questionB: ("CONTIENE LA Y. pregunta B ayuno"), answer: "peyote", status: 0, question: ("CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos") },
        { letter: "z", answerB: "zurda",  questionB: ("CON LA Z. pregunta B zurda"), answer: "zen", status: 0, question: ("CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional") },
    ];


    function game(questions){
        //status: 0 disponible, 1 acertada, 2 fallada
        for (var i = 0; i < questions.length; i++){
            if (questions[i].status === 0){
                var random = Math.floor(Math.random()*2);
                if(random === 0){
                    var word = prompt(questions[i].question);
                    word = word.toLowerCase().trim();
                    if (word === questions[i].answer){
                        questions[i].status = 1;
                        alert('CORRECTO!  :)')
                    } else if (word === 'pasapalabra'){
                        questions[i].status = 0;
                    } else if (word === 'end'){
                        var hits = questions.filter(function(item){
                            return item.status === 1;
                        });
                        console.log('Has acertado ' + hits.length + ' palabras. Nos vemos pronto!');
                        return word
                    } else {
                        questions[i].status = 2;
                        alert('INCORRECTO!  :( ')
                    };
                } else { // (random === 1){
                    var word = prompt(questions[i].questionB);
                    word = word.toLowerCase().trim();
                    if (word === questions[i].answerB){
                        questions[i].status = 1;
                        alert('CORRECTO!  :)')
                    } else if (word === 'pasapalabra'){
                        questions[i].status = 0;
                    } else if (word === 'end'){
                        var hits = questions.filter(function(item){
                            return item.status === 1;
                        });
                        console.log('Has acertado ' + hits.length + ' palabras. Nos vemos pronto!');
                        return word
                    } else {
                        questions[i].status = 2;
                        alert('INCORRECTO!  :( ')
                    };
                }
            };
        };
        return questions
    };
    
    function checkResults(questions) {
       
        var nextWord = questions.filter(function(item){
            return item.status === 0;
        });
    
        var hits = questions.filter(function(item){
            return item.status === 1;
        });
        var error = questions.filter(function(item){
            return item.status === 2;
        });
        return [nextWord, hits, error]
    };


    function orderUsers(myArray){
		myArray.sort(function(a,b) {
			var userA = a.userPoints;
			var userB = b.userPoints;
			return (userA < userB) ? 1 : (userB < userA) ? -1 : 0;
		});
		return myArray;
	};

    var name = prompt('Por favor, indica tu nombre');

    questions = game(questions);

    if (questions === 'end'){
        return users
    } else {
        [nextWord, hits, error] = checkResults(questions);
        while(nextWord.length !== 0){
            alert('Empezamos de nuevo el rosco para las pasapalabras!');
            questions = game(questions);
            if (questions === 'end'){
                return
            }
            [nextWord, hits, error] = checkResults(questions);    
        };
    
        console.log('Has acertado ' + hits.length + ' palabras y has fallado ' + error.length + ' palabras.');

        var points = hits.length;
        users.push({userName: name, userPoints: points})
        users = orderUsers(users);
        var presentUsers = '';
        for (var i = 0; i < users.length; i++){
            presentUsers += users[i].userName + ' tiene ' + users[i].userPoints + ' aciertos. \n';
        }
        alert(presentUsers);
    };
    return users; 

};
