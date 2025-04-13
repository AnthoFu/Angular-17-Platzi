import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '@products/components/product/product.component';
import { product } from '@shared/models/product.model'
import { HeaderComponent } from '@shared/components/header/header.component';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';


@Component({
  selector: 'app-list',
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  
  products = signal<product[]>([]);
  private cartService = inject(CartService);
  private productService = inject(ProductService);


  ngOnInit(){
    this.productService.getProducts()
    .subscribe({
      next: (products) =>{
        this.products.set(products);
      },
      error: () =>{
        console.log('[ListComponent] GetProduct() Error')
      }
    })
  }

  addToCart(product:product){
    this.cartService.addToCart(product);
    console.log('[List] Producto agregado al carrito.');
  }

}
