/*
    PASAPALABRA GAME -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
*/

let questions=[{letter:"a",answer:"abducir",status:0,question:"CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},{letter:"b",answer:"bingo",status:0,question:"CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},{letter:"c",answer:"churumbel",status:0,question:"CON LA C. Niño, crío, bebé"},{letter:"d",answer:"diarrea",status:0,question:"CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},{letter:"e",answer:"ectoplasma",status:0,question:"CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},{letter:"f",answer:"facil",status:0,question:"CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"},{letter:"g",answer:"galaxia",status:0,question:"CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},{letter:"h",answer:"harakiri",status:0,question:"CON LA H. Suicidio ritual japonés por desentrañamiento"},{letter:"i",answer:"iglesia",status:0,question:"CON LA I. Templo cristiano"},{letter:"j",answer:"jabali",status:0,question:"CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},{letter:"k",answer:"kamikaze",status:0,question:"CON LA K. Persona que se juega la vida realizando una acción temeraria"},{letter:"l",answer:"licantropo",status:0,question:"CON LA L. Hombre lobo"},{letter:"m",answer:"misantropo",status:0,question:"CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},{letter:"n",answer:"necedad",status:0,question:"CON LA N. Demostración de poca inteligencia"},{letter:"ñ",answer:"señal",status:0,question:"CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},{letter:"o",answer:"orco",status:0,question:"CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},{letter:"p",answer:"protoss",status:0,question:"CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},{letter:"q",answer:"queso",status:0,question:"CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"},{letter:"r",answer:"raton",status:0,question:"CON LA R. Roedor"},{letter:"s",answer:"stackoverflow",status:0,question:"CON LA S. Comunidad salvadora de todo desarrollador informático"},{letter:"t",answer:"terminator",status:0,question:"CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},{letter:"u",answer:"unamuno",status:0,question:"CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},{letter:"v",answer:"vikingos",status:0,question:"CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},{letter:"w",answer:"sandwich",status:0,question:"CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"},{letter:"x",answer:"botox",status:0,question:"CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"},{letter:"y",answer:"peyote",status:0,question:"CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"},{letter:"z",answer:"zen",status:0,question:"CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"}];

class Pasapalabra {


    constructor(questions) {
        this.questions = questions;
        this.userName = null;
        this.corrects = [];
        this.elements = [];
        this.failed = [];
        this.style = '';
        this.number = 1;
        this.seconds = 100;
        this.inicialSeconds = 100;
        this.countdown = null;
        this.gameEnd = false;
    }

    scorePoints() {
        let scores = this.get().score;
        if (!scores) return this.setScore([]);
        this.$('scores').innerHTML = '';
        scores = scores.sort((a, b) => this.sum(a, b)).reverse().slice(0, 5);
        scores.forEach(score => this.result(score));
    }

    user() {
        this.userName = this.get().answer.trim();
        if (this.userName === '') return;
        this.timer();
        this.placeHolder('Put your answer her');
        this.$('user').innerHTML = `Welcome ${this.userName}`;
        this.resetAnswer();
        this.select();
    }

    timer() {
        this.countdown = setInterval(() => {
            this.seconds--;
            if (this.seconds <= 30) this.$("time").classList.add('red');
            this.$("time").innerText = `${this.seconds} Seconds`;
            if (this.seconds <= 0) this.gameOver();
        }, 1000);
    }

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


    select() {
        if (!this.userName) return;
        if (this.answered()) return this.next();
        this.$('dynamicQuestion').innerHTML = this.questions[this.get().actual].question;
        this.elements[this.number].classList.add('selected', 'shadow');
    }


    handleEnter() {
        this.$('answer').addEventListener("keyup", event => {
            if (event.keyCode !== 13 || this.gameEnd) return;
            this.$('btn').classList.add('enter');
            setTimeout(() => this.$('btn').classList.remove('enter'), 100)
            this.next();
          });
    }

    next() {
        if (!this.userName) return this.user();
        if (this.number <= questions.length) this.check();
    }

    check() {
        this.validate();
        this.continue();
    }

    validate() {
        switch (this.format(this.get().answer)) {
            case 'end':
                this.gameOver(false);
                break; 
            case 'pasapalabra':
            case '':                 
                this.style = 'selected';
                break; 
            case this.format(this.questions[this.get().actual].answer):
                this.style = 'correct';
                this.markAsAnswered();
                this.corrects.push(this.lettreAnswer());
                break;  
            default: 
                this.style = 'error';
                this.markAsAnswered();
                this.failed.push(this.lettreAnswer());
        }
    }

    continue() {
        this.elements[this.number].classList.remove('shadow');
        this.elements[this.number].classList.add(this.style);
        this.resetAnswer();

        this.number++;

        if (this.number <= this.questions.length) return this.select();

        let leapt = this.questions.filter(question => question.status === 0);
        if (leapt.length === 0) return this.gameOver();
        this.number = 1;
        this.elements.forEach(element => element.classList.remove('selected'));
        this.select();
    }

    gameOver(save = true) {

        this.gameEnd = true;
        clearInterval(this.countdown);

        let result = {
            name: this.userName,
            corrects: this.corrects,
            failed: this.failed,
            time: (this.seconds - this.inicialSeconds) * (-1)
        };

        this.refresh();

        if (save) {
            this.$('dynamicQuestion').innerText = 'Game over';
            let scores = this.get().score;
            scores.push(result);
            this.setScore(scores);
            this.scorePoints();
        } else {
            this.result(result);
            this.$('dynamicQuestion').innerText = 'Your score will not stay in the ranquin';
        }
    }

    refresh() {
        this.resetAnswer();
        this.placeHolder('click on refresh to start over');
        this.$("btn").removeAttribute('onclick');
        this.$("btn").innerText = 'refresh';
        this.$('answer').disabled = true;
        this.$('user').innerHTML = `Thanks ${this.userName}`;
        this.$("btn").addEventListener('click', () => location.reload());
    }

    $(id) {
        return document.getElementById(id);
    }

    get() {
        return {
            actual: this.number - 1,
            answer: this.$('answer').value,
            score: JSON.parse(localStorage.getItem('pasapalabra')),
        }
    }

    format(text) {
        return text.toLowerCase();
    }

    lettreAnswer() {
        return this.questions[this.get().actual].letter;
    }

    markAsAnswered() {
        return this.questions[this.get().actual].status = 1;
    }

    answered() {
        return this.questions[this.get().actual].status === 1;
    }

    resetAnswer() {
        return this.$('answer').value = '';
    }

    placeHolder(text) {
        return this.$('answer').setAttribute('placeholder', text);
    }


    setScore(data) {
        return localStorage.setItem('pasapalabra', JSON.stringify(data));
    }

    sum(a, b) {
         let diff = (a.corrects.length - a.failed.length) - (b.corrects.length - b.failed.length);
         return (diff=== 0) ? diff- (a.time - b.time) : diff;
    }

    result(data) {
        let template = `<span>
                            <b class="n">${data.name}</b>
                            <b class="g">${data.corrects.length}</b><b class="r">${data.failed.length}</b>
                            <b class="n">${data.time} seconds</b>
                        </span>`;
        this.$('scores').innerHTML += template;
    }

}


let pasapalabra = new Pasapalabra(questions);
pasapalabra.handleEnter();
pasapalabra.scorePoints();
pasapalabra.draw();
pasapalabra.select();

