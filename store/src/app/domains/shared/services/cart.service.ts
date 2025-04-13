import { computed, Injectable, signal } from '@angular/core';
import { product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  cartProducts = signal<product[]>([])
  total = computed(() =>{
    const cartProducts = this.cartProducts()
    return cartProducts.reduce((total , product) => total + product.price, 0);
  })

  constructor() {
  }

  addToCart(product: product){
    this.cartProducts.update(prevState => [...prevState, product]);
  }
}
