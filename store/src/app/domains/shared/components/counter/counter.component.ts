import { Component, Input,  SimpleChanges, OnInit } from '@angular/core';
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


  ngOnInit(): void {
    //Se llama despues del constructor, iniciando las propiedades de input input properties y el primero en llamar el ngOnChanges.
    //Asyncrona, de un solo uso
    console.log('[Counter] ngOnInit activado.');
    console.log ('-'.repeat(10));
    console.log ('[Counter] ngOninit: Duracion =>', this.duration);
    console.log ('[Counter] ngOninit: Mensaje =>', this.message);
  }

  ngAfterViewInit(): void {
    //Se llama cuando los hijos de ESTE componente ya fueron renderizados
    console.log('[Counter] ngAfterViewInit activado.');
    console.log ('-'.repeat(10));
  }

  ngOnDestroy(): void {
    // Se llama cuando el componente ya no existe en la vista, un ejemplo es con los NgIf
    console.log('[Counter] ngOnDestroy activado.');
    console.log ('-'.repeat(10));
  }
}
