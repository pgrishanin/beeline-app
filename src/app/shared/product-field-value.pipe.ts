import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFieldValue'
})
export class ProductFieldValuePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let result = value;
    if ( typeof(value) === "boolean" ) {
        result = value ? "Да" : "Нет";
    }
    return result;
  }

}
