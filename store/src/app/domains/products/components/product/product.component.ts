import { CommonModule, CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { product } from '@shared/models/product.model';
import { ReversePipe } from '@shared/pipes/reverse.pipe'; // Importamos el pipe personalizado que realizamos para el ejemplo
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe'; // Importamos el pipe personalizado que utilizamos con la libreria date-fnc de JS


@Component({
  selector: 'app-product',
  imports: [CommonModule, CurrencyPipe, UpperCasePipe],
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
