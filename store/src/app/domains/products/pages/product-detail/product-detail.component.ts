import { CurrencyPipe } from '@angular/common';
import { Component, inject, Input, signal } from '@angular/core';
import { product } from '@shared/models/product.model';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  imports: [CurrencyPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {

  @Input()id?: string;

  product=signal<product | null>(null);

  private productService = inject(ProductService);

  ngOnInit() {

    if (this.id){
      this.productService.getOneProduct(this.id)
      .subscribe({
        next: (product) => {
          console.log(product); // Toda la informacion del producto
          this.product.set(product)
        }
      })
    }
    
  }

}
