import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './data/empModel';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(input:Employee[], deptNo:number): Employee[] {
    console.log("In filter")
    console.log(input);
    if(deptNo == -1) return input;
    
    let otput = input.filter((i)=>i.deptno==deptNo);
    console.log(otput);
    return otput;
  }

}
