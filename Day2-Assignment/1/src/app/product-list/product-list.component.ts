import { Component, Input } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  @Input() category: string = "";

  public productArray:Product[] = [
    {pname:"P1", category: "Home Appliance"},
    {pname:"P2", category: "Electronics"},
    {pname:"P3", category: "Healthcare"},
    {pname:"P4", category: "Home Appliance"},
    {pname:"P5", category: "Electronics"},
    {pname:"P6", category: "Fitness"},
    {pname:"P7", category: "Home Appliance"},
    {pname:"P8", category: "Electronics"}
  ]
}
