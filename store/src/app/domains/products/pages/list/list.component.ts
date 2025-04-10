import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../components/product/product.component';
import { product } from '../../../shared/components/models/product.model'


@Component({
  selector: 'app-list',
  imports: [CommonModule, ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  
  products = signal<product[]>([]);
  cartProducts = signal<product[]>([]);

  constructor(){ // En el constructor, al iniciar el componente
    const initProduct: product[] = [ // Creamos el array de productos
      { //Seguimos el model de la clase product
        id: Date.now(), // Definimos el id como un timestamp
        title: 'Product 1', // definimos el titulo
        price: 10.99, // definimos el precio
        image: 'https://picsum.photos/640/640?r1', // definimos la imagen
        creationAt: new Date().toISOString(), // definimos la fecha de creacion
      },
      
      {
        id: Date.now(),
        title: 'Product 2',
        price: 9.99,
        image: 'https://picsum.photos/640/640?r2',
        creationAt: new Date().toISOString(),
      },

      {
        id: Date.now(),
        title: 'Product 3',
        price: 8.99,
        image: 'https://picsum.photos/640/640?r3',
        creationAt: new Date().toISOString(),
      },

      {
        id: Date.now(),
        title: 'Product 4',
        price: 7.99,
        image: 'https://picsum.photos/640/640?r4',
        creationAt: new Date().toISOString(),
      },

      {
        id: Date.now(),
        title: 'Product 5',
        price: 6.99,
        image: 'https://picsum.photos/640/640?r5',
        creationAt: new Date().toISOString(),
      },

      {
        id: Date.now(),
        title: 'Product 6',
        price: 5.99,
        image: 'https://picsum.photos/640/640?r6',
        creationAt: new Date().toISOString(),
      },

      {
        id: Date.now(),
        title: 'Product 7',
        price: 4.99,
        image: 'https://picsum.photos/640/640?r7',
        creationAt: new Date().toISOString(),
      },

      {
        id: Date.now(),
        title: 'Product 8',
        price: 3.99,
        image: 'https://picsum.photos/640/640?r8',
        creationAt: new Date().toISOString(),
      },

      {
        id: Date.now(),
        title: 'Product 9',
        price: 2.99,
        image: 'https://picsum.photos/640/640?r9',
        creationAt: new Date().toISOString(),
      }
    ] // Fin de los ejemplos de productos

    this.products.set(initProduct);
  }

  addToCart(product:product){
    this.cartProducts.update(prevState=> [...prevState, product]);
    console.log('[List] Producto agregado al carrito.');
  }

}
