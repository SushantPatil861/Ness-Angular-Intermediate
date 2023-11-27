import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[applyShadow]'
})
export class ApplyShadowDirective implements OnInit{

  @Input() applyShadow:string = "";

  constructor(private el:ElementRef) {}

  ngOnInit(): void {
    console.log("Inside");
    console.log(this.applyShadow);
    if(this.applyShadow != "") {
        this.el.nativeElement.style.boxShadow =  "0px 0px 10px "+this.applyShadow;
    }
    else
    {
        this.el.nativeElement.style.boxShadow = "0px 0px 10px";
    }
      
  }
}
