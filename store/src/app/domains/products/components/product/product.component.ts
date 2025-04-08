import { Component, EventEmitter, input, Input, Output } from '@angular/core';

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


  @Output() addToCart = new EventEmitter(); // Creamos un Output para mandarselo al componente padre list.component

  addToCartHandler(){ // Creamos un metodo para el evento llamado addToCartHandler
    console.log ('[addToCart]: Click del compontente hijo.') // Imprimimos un mensaje en la consola cada que demos click
    this.addToCart.emit('Ejemplo de mensaje desde el hijo.') // Mandamos el mensaje al componente padre cada que demos click y este siendo llamado
  }
}
