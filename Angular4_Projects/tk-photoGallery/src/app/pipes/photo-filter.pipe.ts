import { Pipe, PipeTransform } from '@angular/core';

/* @AUTHOR tk@trevorknott.io */

/* This pipe takes in an array as well as a filter param by category*/
@Pipe({
  name: 'photoFilter'
})
export class PhotoFilterPipe implements PipeTransform {

  transform(valuesInserted: any[], filterTodo: string): any {
    if (filterTodo === 'all') {
      return valuesInserted;
    } else {
      return valuesInserted.filter(valInserted => {
        return valInserted.category === filterTodo;
      })
    }
  }
}
