import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  @Input({required:true}) img=''; // A diferencia del tutorial en angular 19 se maneja mas directo
  // En angular 17 seria de la siguiente forma:
  // @Input({required:true}) img: string = '';
  @Input({required:true}) price=0;
  @Input({required:true}) title= '';
}
