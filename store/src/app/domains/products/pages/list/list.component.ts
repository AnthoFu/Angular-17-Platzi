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

  constructor(){
    const initProduct: product[] = [
      {
        id: Date.now(),
        title: 'Product 1',
        price: 10.99,
        image: 'https://picsum.photos/200/300',
      },
      {
        id: Date.now(),
        title: 'Product 2',
        price: 9.99,
        image: 'https://picsum.photos/200/301',
      }
    ]
    this.products.set(initProduct);
  }

  getDataFromProduct(event:string){
    console.log('[Componente padre]:', event)
  }

}
