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

  constructor(){ // En el constructor, al iniciar el componente
    const initProduct: product[] = [ // Creamos el array de productos
      { //Seguimos el model de la clase product
        id: Date.now(), // Definimos el id como un timestamp
        title: 'Product 1', // definimos el titulo
        price: 10.99, // definimos el precio
        image: 'https://picsum.photos/200/300', // definimos la imagen
        creationAt: new Date().toISOString(), // definimos la fecha de creacion
      },
      
      {
        id: Date.now(),
        title: 'Product 2',
        price: 9.99,
        image: 'https://picsum.photos/200/301',
        creationAt: new Date().toISOString(),
      }
    ]
    this.products.set(initProduct);
  }

  getDataFromProduct(event:string){
    console.log('[Componente padre]:', event)
  }

}
