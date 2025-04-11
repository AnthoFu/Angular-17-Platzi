import { Component, computed, Input, signal } from '@angular/core';
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

  ngOnInit() {
    this.totalPrice()
  }

  toogleSideMenu (){
    this.hideSideMenu.update(prevState => !prevState);
  }


  totalPrice (){ // Funcion para calcular el valor total de todos los productos agregagos a cartProducts
    const total = this.cartProducts.reduce((totalPrice, product) => totalPrice + product.price, 0); // Definimos la variable total 
    return total; // Retornamos la variable total
  }

}