import { Component, Input, signal } from '@angular/core';
import { product } from '../models/product.model';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {


  hideSideMenu = signal(true);
  @Input({required: true}) cartProducts: product[] = [];


  toogleSideMenu (){
    this.hideSideMenu.update(prevState => !prevState);
  }
}
