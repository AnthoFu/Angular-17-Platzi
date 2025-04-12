import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { product } from '../components/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private http = inject (HttpClient);

  constructor() { }

  getProducts(){
    return this.http.get<product[]>('https://api.escuelajs.co/api/v1/products');
  }
}
