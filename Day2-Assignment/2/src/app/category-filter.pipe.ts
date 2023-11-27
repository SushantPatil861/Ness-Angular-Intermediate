import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './models/product';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {

  transform(inputArr: Product[], category: string): Product[] {
    return inputArr.filter((i)=>i.category==category)
  }

}
