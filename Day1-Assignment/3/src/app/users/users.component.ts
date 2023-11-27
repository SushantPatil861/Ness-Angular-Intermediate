import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  limit = 4;
  public  userArray:any[]  = 
    [
      {name  :  "SCOTT",  age:  "21"},
      {name  :  "ABRONS",  age:  "20"},
      {name  :  "SMITH",  age:  "32"},
      {name  :  "JAMES",   age:  "43"},
      {name  :  "ADAM",  age:  "12"},
      {name  :  "SATHYA",  age:  "34"},
      {name  :  "MANEESH",  age:  "41"},
      {name  :  "HANEESH",   age:  "22"},
      {name  :  "MONA",  age:  "20"},
      {name  :  "JANE",  age:  "32"},
      {name  :  "JULIE",   age:  "43"},
      {name  :  "GOAT",  age:  "12"},
      {name  :  "KEN",  age:  "34"},
      {name  :  "LOLI",  age:  "41"},
      {name  :  "HEMA",   age:  "22"}
    ];

    a = ()=> {
      this.userArray.length
    }

}
