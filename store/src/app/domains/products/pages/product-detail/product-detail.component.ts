import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Component, inject, Input, signal } from '@angular/core';
import { product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  imports: [CurrencyPipe, UpperCasePipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {

  @Input()id?: string;

  product=signal<product | null>(null);
  cover=signal('');

  private productService = inject(ProductService);
  private cartService = inject(CartService)

  ngOnInit() {

    if (this.id){
      this.productService.getOneProduct(this.id)
      .subscribe({
        next: (product) => {
          console.log(product); // Toda la informacion del producto
          this.product.set(product)
          if (product.images.length > 0){
            this.cover.set(product.images[0]);
          }
        }
      })
    }
    
  }

  changeCover(newImg:string){
    this.cover.set(newImg);
  }

  addToCart(){
    const product = this.product();
    if (product){
      this.cartService.addToCart(product);
    }
  }

}
