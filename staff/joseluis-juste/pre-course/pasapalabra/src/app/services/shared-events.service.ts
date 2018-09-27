import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedEventsService {

  @Output() sendLetter$: EventEmitter<string> = new EventEmitter();
  @Output() hideCard$: EventEmitter<string> = new EventEmitter();
  @Output() pasaPalabra$: EventEmitter<string> = new EventEmitter();
  @Output() newGame$: EventEmitter<any> = new EventEmitter();
  @Output() setScores$: EventEmitter<object> = new EventEmitter();
  @Output() stop$: EventEmitter<any> = new EventEmitter();
  @Output() finishGame$: EventEmitter<any> = new EventEmitter();
  @Output() winLost$: EventEmitter<any> = new EventEmitter();

  constructor() { }

  getEventEmitter(typeEvent: string) {
    let event;
    switch (typeEvent.toLowerCase()) {

      case "sendletter":
        event = this.sendLetter$;
        break;
      case "hidecard":
        event = this.hideCard$;
        break;
      case "pasapalabra":
        event = this.pasaPalabra$;
        break;
      case "newgame":
        event = this.newGame$;
        break;
      case "setscores":
        event = this.setScores$;
        break;
      case "stop":
        event = this.stop$;
        break;
      case "finishgame":
        event = this.finishGame$;
        break;
      case "winlost":
        event = this.winLost$;
        break;
    }
    return event;
  }

  sendEvent(typeEvent: string, data?: any) {
    switch (typeEvent.toLowerCase()) {

      case "sendletter":
        this.sendLetter$.emit(data);
        break;
      case "hidecard":
        this.hideCard$.emit(data);
        break;
      case "pasapalabra":
        this.pasaPalabra$.emit(data);
        break;
      case "newgame":
        this.newGame$.emit();
        break;
      case "setscores":
        this.setScores$.emit(data);
        break;
      case "stop":
        this.stop$.emit();
        break;
      case "finishgame":
        this.finishGame$.emit();
        break;
      case "winlost":
        this.winLost$.emit();
        break;
    }
  }

}