import { Pipe, PipeTransform } from '@angular/core';

import { Products } from '../models/product';

@Pipe({
  name: 'filterProductByPrice'
})
export class FilterProductByPricePipe implements PipeTransform {

  transform(product: Products[], price:number|null, operation: number): Products[] {
    
    console.log("ope" + operation)
    let filteredProducts : Products[];
    filteredProducts = price != null ? product.filter((p) =>
    operation == 0 ? product : 
    operation == 1 ? p.unitPrice > price : 
    operation == 2 ? p.unitPrice  < price :
    operation == 3 ? p.unitPrice  >= price :
    operation == 4 ? p.unitPrice  <= price:  p.unitPrice  == price
    ) : filteredProducts = product.filter((p) => product)

    return filteredProducts;
  }

}
