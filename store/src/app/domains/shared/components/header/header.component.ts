import { Component, computed, inject, Input, signal, SimpleChanges } from '@angular/core';
import { product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { CurrencyPipe } from '@angular/common';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CurrencyPipe, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  hideSideMenu = signal(true); // Asignamos una signal para mantener el menu oculto, por defecto es true

  private cartService = inject(CartService); // Injectamos el servicio cartService
  
  cartProducts = this.cartService.cartProducts; // Obtenemos los productos del carrito
  
  total = this.cartService.total; // Obtenemos el total del carrito


  toogleSideMenu (){
    this.hideSideMenu.update(prevState => !prevState);
  }


}