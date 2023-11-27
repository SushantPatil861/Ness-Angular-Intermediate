import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../data/empModel';

@Component({
  selector: 'emp-list',
  templateUrl: './emp-list.component.html',
  styleUrl: './emp-list.component.css'
})
export class EmpListComponent {

  @Input() deptNo:number = -1;
  @Input() empArray:Employee[]=[];

  @Output() employeeDeleted:EventEmitter<number> = new EventEmitter();


  deleteEmployee = (id:number)=> {
    this.employeeDeleted.emit(id);
  }
  
}
