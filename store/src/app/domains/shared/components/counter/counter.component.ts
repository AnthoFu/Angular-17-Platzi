import { Component, Input,  SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  @Input ({required:true}) duration = 0;
  @Input ({required:true}) message = '';

  constructor () {
    // El constructor sirve para crear valores de forma directa y NO debe ser ASYNC
    // Esto corre antes de que se renderice el componente
    console.log('[Counter] Constructor activado.');
    console.log ('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Se ejecuta antes y durante el renderizado del componente
    console.log('[Counter] ngOnChanges activado.');
    console.log ('-'.repeat(10));
    console.log (changes);
  }
}
