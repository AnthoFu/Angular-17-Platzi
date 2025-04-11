import { Component, computed, Input, signal, SimpleChanges } from '@angular/core';
import { product } from '../models/product.model';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  hideSideMenu = signal(true);
  @Input({required: true}) cartProducts: product[] = [];
  total = signal(0); // Creamos un signal con el precio total de los productos

  ngOnChanges(changes: SimpleChanges) {
    const cartProducts = changes['cartProducts']; // Definimos cartProducts y preguntamos si hay cambios
      if (cartProducts){ // Si hay cambios
        this.total.set(this.totalPrice()); // Ejecuta la funcion totalPrice y actualiza el signal total
      }
  }

  toogleSideMenu (){
    this.hideSideMenu.update(prevState => !prevState);
  }


  totalPrice (){ // Funcion para calcular el valor total de todos los productos agregagos a cartProducts
    const total = this.cartProducts.reduce((totalPrice, product) => totalPrice + product.price, 0); // Definimos la variable total 
    return total; // Retornamos la variable total
  }

}