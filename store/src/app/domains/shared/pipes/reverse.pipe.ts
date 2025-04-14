import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {


  // El pipe funciona tomando un valor y luego tranformandolo

  transform(value: string): string { // En este ejemplo tomaremos un valor string
    return value.split('').reverse().join(); // Y retornamos el mismo valor, pero al reves.
  }

}
