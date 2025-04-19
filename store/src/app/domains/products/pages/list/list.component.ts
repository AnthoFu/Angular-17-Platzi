import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '@products/components/product/product.component';
import { product } from '@shared/models/product.model'
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { category } from '@shared/models/category.model';


@Component({
  selector: 'app-list',
  imports: [CommonModule, ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  
  products = signal<product[]>([]);
  categories = signal<category[]>([]);
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);


  ngOnInit(){
    this.getProducts()
    this.getCategories()
  }

  addToCart(product:product){
    this.cartService.addToCart(product);
    console.log('[List] Producto agregado al carrito.');
  }

  private getProducts(){
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

  private getCategories(){
    this.categoryService.getAll()
    .subscribe({
      next: (data) =>{
        this.categories.set(data);
      },
      error: () =>{
        console.log('[ListComponent] getCategory() Error')
      }
    })
  }

}
