import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './models/empModel';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(input: Employee[], by: string, value: any) : Employee[] {
    let output:Employee[] = [];

    if(value == '') {
      return input;
    }
    switch(by) {
      case "ename": 
          output  = input.filter( item => item.ename == value );break;
      case "job": 
          output  = input.filter( item => item.job == value );break;
      case "deptno":
          output  = input.filter( item => item.deptno == value );break;
      default : output = input;      
    }
    return output;
  }
}
