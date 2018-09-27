import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatnumber'
})
export class FormatnumberPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    if (value.toString().length ===  1)
    	return "0" + value;
    else
    	return value; 
  }

}
