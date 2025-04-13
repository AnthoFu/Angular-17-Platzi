import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { product } from '@shared/models/product.model';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  @Input({required:true}) product!: product;


  @Output() addToCart = new EventEmitter(); // Creamos un Output para mandarselo al componente padre list.component

  addToCartHandler(){ // Creamos un metodo para el evento llamado addToCartHandler
    console.log ('[addToCart]: Producto agregado') // Imprimimos un mensaje en la consola cada que demos click
    this.addToCart.emit(this.product) // Mandamos el mensaje al componente padre cada que demos click y este siendo llamado
  }
}
