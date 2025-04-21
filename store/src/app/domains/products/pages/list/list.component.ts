import { Component, inject, signal, OnInit } from '@angular/core';

import { ProductComponent } from '@products/components/product/product.component';
import { product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { category } from '@shared/models/category.model';
import { RouterLinkWithHref, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [ProductComponent, RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {

  products = signal<product[]>([]);
  categories = signal<category[]>([]);
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);
  private route = inject(ActivatedRoute);

  ngOnInit() {
    this.getCategories();
    this.route.queryParams.subscribe(params => {
      const categoryId = params['categoryId'];
      this.getProducts(categoryId);
    });
  }

  addToCart(product: product) {
    this.cartService.addToCart(product);
    console.log('[List] Producto agregado al carrito.');
  }

  private getProducts(categoryId?: string) {
    this.productService.getProducts(categoryId)
      .subscribe({
        next: (products) => {
          this.products.set(products);
        },
        error: () => {
          console.log('[ListComponent] GetProduct() Error');
        }
      });
  }

  private getCategories() {
    this.categoryService.getAll()
      .subscribe({
        next: (data) => {
          this.categories.set(data);
        },
        error: () => {
          console.log('[ListComponent] getCategory() Error');
        }
      });
  }
}