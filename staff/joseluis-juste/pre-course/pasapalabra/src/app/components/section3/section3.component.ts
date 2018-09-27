import { Component, OnInit } from '@angular/core';
import { SharedEventsService } from '../../services/shared-events.service';
import { GetQuestionsService } from '../../services/get-questions.service';
import { question } from '../../interfaces/app-question';


@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html'
})
export class Section3Component implements OnInit {

  private questions: object = null;
  private actual_question: question = null;
  actualQuestionFirstpart: string = "";
  actualQuestionSecondpart: string = "PANEL DE PREGUNTAS...";
  private correct_answer: string = "";
  answer: string = "";
  aciertos: number = 0;
  errores: number = 0;
  private letter: string = "";
  result: string = "";
  won: boolean = false;
  showButtons = true;

  constructor(private sharedEventsService: SharedEventsService, private questionsService: GetQuestionsService) {

    this.questions = questionsService.getQuestions();

  }

  ngOnInit() {

    this.sharedEventsService.getEventEmitter("sendletter").subscribe((e: string) => this.OnGetLetter$(e));
    this.sharedEventsService.getEventEmitter("newgame").subscribe(() => this.reset$());
    this.sharedEventsService.getEventEmitter("finishgame").subscribe(() => this.finishGame$());
    let text = document.getElementById("palabra");
    text.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        this.ok();
      }
    });
    document.addEventListener("keypress", (e) => {

      if (e.key === " ") {
        this.pasaPalabra();
      }

    });
  }

  ok() {

    if (this.answer === "") return;

    if (this.actual_question !== null) {

      this.actual_question.done = true;

      if (this.answer.toLowerCase() === this.correct_answer.toLowerCase()) {
        this.aciertos++;
        this.setButtonClass("resp_ok");
      } else {
        this.errores++;
        this.setButtonClass("resp_nok");
      }
      this.answer = "";
      this.sharedEventsService.sendEvent("hidecard", this.letter);
      this.sharedEventsService.sendEvent("setscores", { aciertos: this.aciertos, errores: this.errores });
      if (this.aciertos === 27) {
        this.result = "¡¡¡BRAVO!!! Ha ganado el concurso de pasapalabra...";
        this.won = true;
        this.resetPanelPreguntas();
        this.showButtons = false;
        this.sharedEventsService.sendEvent("winlost");
      } else if ((this.errores > 0) && ((this.errores + this.aciertos) === 27)) {
        this.result = "¡¡¡HA PERDIDO!!! No ha ganado el concurso de pasapalabra...";
        this.sharedEventsService.sendEvent("winlost");
        this.showButtons = false;
        this.resetPanelPreguntas();
      } else {
        this.sharedEventsService.sendEvent("pasapalabra", this.letter);
      }
    }
    document.getElementById("palabra").focus();

  }

  pasaPalabra() {

    this.answer = "";

    if (this.actual_question !== null) {
      this.actual_question.done = true;
      if (this.questions[this.letter.toLowerCase()].find(x => { return !x.done }) === undefined) {
        this.setButtonClass("resp_nok");
        this.sharedEventsService.sendEvent("hidecard", this.letter);
        this.errores++;
        this.sharedEventsService.sendEvent("setscores", { aciertos: this.aciertos, errores: this.errores });
        if ((this.errores > 0) && ((this.errores + this.aciertos) === 27)) {
          this.result = "¡¡¡HA PERDIDO!!! No ha ganado el concurso de pasapalabra...";
          this.sharedEventsService.sendEvent("winlost");
          this.showButtons = false;
          this.resetPanelPreguntas();
          return;
        }
      }
      this.sharedEventsService.sendEvent("pasapalabra", this.letter);

    }


  }

  stop() {
    this.sharedEventsService.sendEvent("stop");
    this.resetPanelPreguntas();
    this.showButtons = false;
  }

  private setButtonClass(_class) {

    var element = Array.prototype.find.call(document.querySelectorAll(".button"), (e) => { return e.innerText.toLowerCase() === this.letter.toLowerCase() });
    element.setAttribute("class", element.getAttribute("class") + " " + _class);
  }

  private resetPanelPreguntas() {

    this.actualQuestionFirstpart = "";
    this.actualQuestionSecondpart = "PANEL DE PREGUNTAS...";
    this.answer = "";
    this.actual_question = null;
    this.letter = "";
  }

  /******EVENTS MANAGEMENTS*******/

  private finishGame$() {

    if (this.aciertos < 27)
      this.result = "TIEMPO EXPIRADO --> Ha perdido el pasapalabra. Nº de aciertos: " + this.aciertos;

    this.showButtons = false;
    this.resetPanelPreguntas();
  }


  private reset$() {

    this.questions = this.questionsService.getQuestions();
    this.actual_question = null;
    this.resetPanelPreguntas();
    this.correct_answer = "";
    this.answer = "";
    this.aciertos = 0;
    this.errores = 0;
    this.letter = "";
    this.result = "";
    this.showButtons = true;
    this.won = false;
    document.getElementById("palabra").focus();
    Array.prototype.forEach.call(document.querySelectorAll(".button"), (e, i) => {

      e.setAttribute("class", e.getAttribute("class").split(" ")[0]);

    });
  }

  private OnGetLetter$(letter: string) {

    this.letter = letter;
    this.actual_question = this.questions[letter.toLowerCase()].find(x => { return !x.done });
    this.actualQuestionFirstpart = this.actual_question.question.split(".")[0] + ".";
    this.actualQuestionSecondpart = this.actual_question.question.split(".")[1];
    this.correct_answer = this.actual_question.answer;
  }

  /***************************************************/

}
