import {Component, OnInit} from '@angular/core';
import {sharedEventsService} from '../../services/shared-events.service';
import {score} from '../../interfaces/app-score';


@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html'
})
export class Section2Component implements OnInit {

  private cards : Array<any> = [];
  minutes : number = 0;
  seconds : number = 0;
  private clear_interval : any = null;
  private card_clicked : boolean = false;
  aciertos:number= 0;
  errores:number= 0;
  private startTime:any = null;

  constructor(private shared_events_service:sharedEventsService) { }

  ngOnInit(){
  	
    	this.shared_events_service.getEventEmitter("hidecard").subscribe((letter:string) => this.hideCard$(letter));
      this.shared_events_service.getEventEmitter("pasapalabra").subscribe((letter:string) => this.pasaPalabra$(letter));
      this.shared_events_service.getEventEmitter("setscores").subscribe((score:score) => this.setScores$(score));
      this.shared_events_service.getEventEmitter("stop").subscribe(() => this.stop$());
      this.shared_events_service.getEventEmitter("winlost").subscribe(() => this.stop$());

      this.startTime = function(){

          return (event) => {

            if (!this.card_clicked){
              this.card_clicked = true;
              this.clear_interval = setInterval(() =>{

                this.seconds++;
                if (this.seconds === 60){
                  this.minutes++;
                  this.seconds = 0;
                }
                if (this.minutes === 2){
                  this.stopTime();
                  this.shared_events_service.sendEvent("finishgame");
                  this.unbindEvent("click", this.startTime, this.cards);
                  this.deleteRotationClass();
                }

              }, 1000);
            }
            this.deleteRotationClass();
            event.target.setAttribute("class", event.target.className + " rotation");
            this.shared_events_service.sendEvent("sendletter", event.target.innerText);
          }

      }.call(this);

    	this.cards = Array.prototype.slice.call(document.querySelectorAll('.card'),1,document.querySelectorAll('.card').length);
    	this.bindEvent("click", this.startTime, this.cards);
  	
  }
	
  private unbindEvent(event:string, callback:any, elements?:any, _element?:Element){

    if (elements === undefined){
      _element.removeEventListener(event, callback);
    }else{
      Array.prototype.forEach.call(elements, (e, i) => {
      
        e.removeEventListener(event, callback);

      });
    }

  }

  private bindEvent(event:string, callback:any, elements?:any, _element?:Element){

    if (elements === undefined){
      _element.addEventListener(event, callback);
    }else{
      Array.prototype.forEach.call(elements, (e, i) => {
        
        e.addEventListener(event, callback);

      });
    }

  }

  private stopTime(){
    clearInterval(this.clear_interval);
  }

  /*EVENTS MANAGEMENTS*/

  private stop$(){
      this.unbindEvent("click", this.startTime, this.cards);
      this.stopTime();
      this.deleteRotationClass();
  }

  newGame$(){

    	this.stopTime();
    	this.minutes = 0;
    	this.seconds = 0;
    	this.card_clicked = false;
      this.aciertos = 0;
      this.errores = 0;
      Array.prototype.forEach.call(this.cards, (e, i) => {
      
        e.setAttribute("class", e.getAttribute("class").split(" ")[0]);

      });
      this.shared_events_service.sendEvent("newgame");      
      this.bindEvent("click", this.startTime, this.cards);
  }

  private setScores$(score:score){

    this.aciertos = score.aciertos;
    this.errores = score.errores;

  }

  private hideCard$(letter:string){

     let card = Array.prototype.find.call(this.cards, (e) => {return e.textContent === letter});
     let index = Array.prototype.indexOf.call(this.cards, card);
     this.cards[index].className += " hide_card";
  }

  private deleteRotationClass(){
     Array.prototype.forEach.call(this.cards, (e, i) => {

        if (e.className.indexOf("rotation") !== -1){
           e.className = e.className.replace("rotation","");
        }
       

    });
  }

  private getNextCard(index:number){

    index++;
    if (index > 26)
        index = 0;
   
    for(let i = index;i < this.cards.length;i++){

      if (this.cards[i].className.indexOf("hide_card") === -1){ 

          return i;
      }

    }
    for(let i = 0;i < this.cards.length;i++){

      if (this.cards[i].className.indexOf("hide_card") === -1){ 

          return i;
      }

    }
    return undefined;

  }

  private pasaPalabra$(letter:string){

    let index = -1;
    let found = false;
    let total_cards = 0;

    Array.prototype.forEach.call(this.cards, (e, i) => {

        if (this.cards[i].textContent === letter){
          index = i;
          return;
        }

    });
    index = this.getNextCard(index);
    this.deleteRotationClass();
    this.cards[index].setAttribute("class", this.cards[index].className + " rotation");
    this.shared_events_service.sendEvent("sendletter", this.cards[index].textContent);
        
  }

  /**************************************************************************************/

}
