import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[adminPanel]'
})
export class AdminPanelDirective {

  @Input() adminPanel: string = '';

  adminList:string[] = ["Suresh", "Ramesh", "Paresh"];

  constructor(private viewContainer: ViewContainerRef, private templateRef: TemplateRef<any>) { }

  ngOnChanges() {
    let isFound:boolean = this.adminList.some(s => s == this.adminPanel);
    if (isFound) {
        this.viewContainer.createEmbeddedView(this.templateRef);
    }
    else {
        this.viewContainer.clear();
    }
  }
}
