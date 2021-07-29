import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], filterText?: string): Product[] {
    // throw new Error('Method not implemented.');
    const filterTextLowercase = (filterText|| '').toLocaleLowerCase()

    return filterText?value.filter((p:Product)=>p.name.toLocaleLowerCase().indexOf(filterTextLowercase)!==-1):value;
  }


}
