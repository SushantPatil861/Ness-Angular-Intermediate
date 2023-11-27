import { Component, Input } from '@angular/core';
import { Employee } from '../data/empModel';

@Component({
  selector: 'emp-grid',
  templateUrl: './emp-grid.component.html',
  styleUrl: './emp-grid.component.css'
})
export class EmpGridComponent {

  @Input() deptNo:number = -1;

  @Input() empArray:Employee[]=[];
}
