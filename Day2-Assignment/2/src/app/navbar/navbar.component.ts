import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  @Input() defaultCategory:string="";

  category:string = "";
  
  @Output() categoryChange:EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this.category = this.defaultCategory;
  }


  changeCategory = (value:string) => {
    this.category = value;
    this.categoryChange.emit(value);
  }
}
