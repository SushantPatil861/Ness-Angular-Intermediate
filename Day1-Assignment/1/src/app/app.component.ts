import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  public  empArray:any[]  = 
    [
      {empName  :  "SCOTT",  grade:  "1"},
      {empName  :  "ABRONS",  grade:  "2"},
      {empName  :  "SMITH",  grade:  "3"},
      {empName  :  "JAMES",   grade:  "4"},
      {empName  :  "ADAM",  grade:  "1"},
      {empName  :  "SATHYA",  grade:  "3"},
      {empName  :  "MANEESH",  grade:  "4"},
      {empName  :  "HANEESH",   grade:  "2"},
    ];

}
