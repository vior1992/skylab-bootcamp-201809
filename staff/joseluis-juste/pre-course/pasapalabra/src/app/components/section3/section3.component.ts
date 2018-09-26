import { Component, OnInit} from '@angular/core';
import {sharedEventsService} from '../../services/shared-events.service';
import {GetQuestionsService} from '../../services/get-questions.service';
import {question} from '../../interfaces/app-question';


@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html'
})
export class Section3Component implements OnInit {

  private questions:object = null;
  private actual_question:question = null;
  actual_question_firstpart:string = "";
  actual_question_secondpart:string = "PANEL DE PREGUNTAS...";
  private correct_answer:string = "";
  answer:string = "";
  aciertos:number = 0;
  errores:number = 0;
  private letter:string = "";
  result:string = "";
  won:boolean = false;
  show_buttons = true;
  
  constructor(private shared_events_service:sharedEventsService, private questions_service:GetQuestionsService){ 

      this.questions = questions_service.getQuestions();

  }

  ngOnInit() {

        this.shared_events_service.getEventEmitter("sendletter").subscribe((e:string) => this.OnGetLetter$(e));
        this.shared_events_service.getEventEmitter("newgame").subscribe(() => this.reset$());
        this.shared_events_service.getEventEmitter("finishgame").subscribe(() => this.finishGame$());
        let text = document.getElementById("palabra");
        text.addEventListener("keypress", (e) => {
            if (e.key === "Enter"){
              this.ok();
            }
        });
        document.addEventListener("keypress", (e) => {
             
          if(e.key === " "){
            this.pasaPalabra();
          }
                                 
        });
  }

  ok(){

  	 if (this.answer === "") return;
     
     if (this.actual_question !== null){

       this.actual_question.done = true;

       if(this.answer.toLowerCase() === this.correct_answer.toLowerCase()){
          this.aciertos++;
          this.setButtonClass("resp_ok");
       }else{
          this.errores++;
          this.setButtonClass("resp_nok");
       }
       this.answer ="";
       this.shared_events_service.sendEvent("hidecard", this.letter);
       this.shared_events_service.sendEvent("setscores", {aciertos:this.aciertos,errores:this.errores});
       if (this.aciertos === 27){
            this.result = "¡¡¡BRAVO!!! Ha ganado el concurso de pasapalabra...";
            this.won = true;
            this.resetPanelPreguntas();
            this.show_buttons = false;
            this.shared_events_service.sendEvent("winlost");
       }else if ((this.errores > 0) && ((this.errores + this.aciertos) === 27)){
             this.result = "¡¡¡HA PERDIDO!!! No ha ganado el concurso de pasapalabra...";
              this.shared_events_service.sendEvent("winlost");
              this.show_buttons = false;
              this.resetPanelPreguntas();
       }else{
          this.shared_events_service.sendEvent("pasapalabra", this.letter); 
       }
     }
     document.getElementById("palabra").focus();
     
  }
  
  pasaPalabra(){
    
    this.answer = "";
    
    if (this.actual_question !== null){
        this.actual_question.done = true;
        if (this.questions[this.letter.toLowerCase()].find(x => {return !x.done}) === undefined){
            this.setButtonClass("resp_nok");
            this.shared_events_service.sendEvent("hidecard", this.letter);
            this.errores++;
            this.shared_events_service.sendEvent("setscores", {aciertos:this.aciertos,errores:this.errores});
            if ((this.errores > 0) && ((this.errores + this.aciertos) === 27)){
              this.result = "¡¡¡HA PERDIDO!!! No ha ganado el concurso de pasapalabra...";
              this.shared_events_service.sendEvent("winlost");
              this.show_buttons = false;
              this.resetPanelPreguntas();
              return;
            }
        }
        this.shared_events_service.sendEvent("pasapalabra", this.letter);

    }

    
  }

  stop(){
     this.shared_events_service.sendEvent("stop");
     this.resetPanelPreguntas();
     this.show_buttons = false;
  }

  private setButtonClass(_class){

    var element = Array.prototype.find.call(document.querySelectorAll(".button"), (e) => {return e.innerText.toLowerCase() === this.letter.toLowerCase()});
    element.setAttribute("class", element.getAttribute("class") + " " + _class);
  }  

  private resetPanelPreguntas(){

    this.actual_question_firstpart = "";
    this.actual_question_secondpart = "PANEL DE PREGUNTAS...";
    this.answer = "";
    this.actual_question = null;
    this.letter = "";
  }
  
  /******EVENTS MANAGEMENTS*******/

  private finishGame$(){

    if (this.aciertos < 27)
      this.result = "TIEMPO EXPIRADO --> Ha perdido el pasapalabra. Nº de aciertos: " + this.aciertos;

    this.show_buttons = false;
    this.resetPanelPreguntas();
  } 

  
  private reset$(){

    this.questions = this.questions_service.getQuestions();
    this.actual_question = null;
    this.resetPanelPreguntas();
    this.correct_answer = "";
    this.answer = "";
    this.aciertos = 0;
    this.errores = 0;
    this.letter = "";
    this.result = "";
    this.show_buttons = true;
    this.won = false;
    document.getElementById("palabra").focus();
    Array.prototype.forEach.call(document.querySelectorAll(".button"), (e, i) => {
      
       e.setAttribute("class", e.getAttribute("class").split(" ")[0]);

    });
  }

  private OnGetLetter$(letter:string){

    this.letter = letter;
    this.actual_question = this.questions[letter.toLowerCase()].find(x => {return !x.done});
    this.actual_question_firstpart = this.actual_question.question.split(".")[0] + ".";
    this.actual_question_secondpart = this.actual_question.question.split(".")[1];
    this.correct_answer = this.actual_question.answer;
  }

  /***************************************************/

}
