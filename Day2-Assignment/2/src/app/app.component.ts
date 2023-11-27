import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  category:string = "Home Appliance";

  setCategory = (value:string)=> {
    this.category = value;
  }
}
