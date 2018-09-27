import { Component, OnInit } from '@angular/core';
import { SharedEventsService } from '../../services/shared-events.service';
import { score } from '../../interfaces/app-score';


@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html'
})
export class Section2Component implements OnInit {

  private cards: Array<any> = [];
  minutes: number = 0;
  seconds: number = 0;
  private clearInterval: any = null;
  private cardClicked: boolean = false;
  aciertos: number = 0;
  errores: number = 0;
  private startTime: any = null;

  constructor(private sharedEventsService: SharedEventsService) { }

  ngOnInit() {

    this.sharedEventsService.getEventEmitter("hidecard").subscribe((letter: string) => this.hideCard$(letter));
    this.sharedEventsService.getEventEmitter("pasapalabra").subscribe((letter: string) => this.pasaPalabra$(letter));
    this.sharedEventsService.getEventEmitter("setscores").subscribe((score: score) => this.setScores$(score));
    this.sharedEventsService.getEventEmitter("stop").subscribe(() => this.stop$());
    this.sharedEventsService.getEventEmitter("winlost").subscribe(() => this.stop$());

    this.startTime = function () {

      return (event) => {

        if (!this.cardClicked) {
          this.cardClicked = true;
          this.clearInterval = setInterval(() => {

            this.seconds++;
            if (this.seconds === 60) {
              this.minutes++;
              this.seconds = 0;
            }
            if (this.minutes === 2) {
              this.stopTime();
              this.sharedEventsService.sendEvent("finishgame");
              this.unbindEvent("click", this.startTime, this.cards);
              this.deleteRotationClass();
            }

          }, 1000);
        }
        this.deleteRotationClass();
        event.target.setAttribute("class", event.target.className + " rotation");
        this.sharedEventsService.sendEvent("sendletter", event.target.innerText);
      }

    }.call(this);

    this.cards = Array.prototype.slice.call(document.querySelectorAll('.card'), 1, document.querySelectorAll('.card').length);
    this.bindEvent("click", this.startTime, this.cards);

  }

  private unbindEvent(event: string, callback: any, elements?: any, element?: Element) {

    if (elements === undefined) {
      element.removeEventListener(event, callback);
    } else {
      Array.prototype.forEach.call(elements, (e, i) => {

        e.removeEventListener(event, callback);

      });
    }

  }

  private bindEvent(event: string, callback: any, elements?: any, element?: Element) {

    if (elements === undefined) {
      element.addEventListener(event, callback);
    } else {
      Array.prototype.forEach.call(elements, (e, i) => {

        e.addEventListener(event, callback);

      });
    }

  }

  private stopTime() {
    clearInterval(this.clearInterval);
  }

  /*EVENTS MANAGEMENTS*/

  private stop$() {
    this.unbindEvent("click", this.startTime, this.cards);
    this.stopTime();
    this.deleteRotationClass();
  }

  newGame$() {

    this.stopTime();
    this.minutes = 0;
    this.seconds = 0;
    this.cardClicked = false;
    this.aciertos = 0;
    this.errores = 0;
    Array.prototype.forEach.call(this.cards, (e, i) => {

      e.setAttribute("class", e.getAttribute("class").split(" ")[0]);

    });
    this.sharedEventsService.sendEvent("newgame");
    this.bindEvent("click", this.startTime, this.cards);
  }

  private setScores$(score: score) {

    this.aciertos = score.aciertos;
    this.errores = score.errores;

  }

  private hideCard$(letter: string) {

    let card = Array.prototype.find.call(this.cards, (e) => { return e.textContent === letter });
    let index = Array.prototype.indexOf.call(this.cards, card);
    this.cards[index].className += " hide_card";
  }

  private deleteRotationClass() {
    Array.prototype.forEach.call(this.cards, (e, i) => {

      if (e.className.indexOf("rotation") !== -1) {
        e.className = e.className.replace("rotation", "");
      }


    });
  }

  private getNextCard(index: number) {

    index++;
    if (index > 26)
      index = 0;

    for (let i = index; i < this.cards.length; i++) {

      if (this.cards[i].className.indexOf("hide_card") === -1) {

        return i;
      }

    }
    for (let i = 0; i < this.cards.length; i++) {

      if (this.cards[i].className.indexOf("hide_card") === -1) {

        return i;
      }

    }
    return undefined;

  }

  private pasaPalabra$(letter: string) {

    let index = -1;
    let found = false;
    let total_cards = 0;

    Array.prototype.forEach.call(this.cards, (e, i) => {

      if (this.cards[i].textContent === letter) {
        index = i;
        return;
      }

    });
    index = this.getNextCard(index);
    this.deleteRotationClass();
    this.cards[index].setAttribute("class", this.cards[index].className + " rotation");
    this.sharedEventsService.sendEvent("sendletter", this.cards[index].textContent);

  }

  /**************************************************************************************/

}
