import { Component } from '@angular/core';
import { empData } from './data/EmpData';
import { Employee } from './data/empModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  deptno = 10;
  displayMode:string = "List"

  empArray:Employee[] = empData;

  isMode = (mode:string) => {
    return this.displayMode == mode;
  }

  deleteEmployeeById = (id:number) => {
    let index = this.empArray.findIndex((i)=>i.empno == id);
    console.log(index);
    console.log(this.empArray);
    let empArrayNew = this.empArray;
    empArrayNew.splice(index, 1);
    this.empArray = empArrayNew;
    console.log(this.empArray);
  }
}
