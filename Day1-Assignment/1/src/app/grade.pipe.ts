import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grade'
})
export class GradePipe implements PipeTransform {

  transform(input:string):  string{      
    let output:string  = "";
    switch(input) {
      case "1" : output = "Outstanding"; break;
      case "2" : output = "Excellent"; break;
      case "3" : output = "Good"; break;
      case "4" : output = "Average"; break;
    }
    return output;
  }

}
