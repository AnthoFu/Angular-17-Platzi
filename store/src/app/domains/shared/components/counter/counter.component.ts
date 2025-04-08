import { CommonModule } from '@angular/common';
import { Component, Input,  SimpleChanges, signal } from '@angular/core';
@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  @Input ({required:true}) duration = 0;
  @Input ({required:true}) message = '';
  counter = signal(0);
  counterRef: number | undefined;


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
    const duration = changes['duration'];
    if (duration && duration.currentValue !== duration.previousValue){ // Si duration no es undefined y su valor es diferente al valor anterior
      this.hacerAlgo();
    }
  }


  ngOnInit(): void {
    //Se llama despues del constructor, iniciando las propiedades de input input properties y el primero en llamar el ngOnChanges.
    //Asyncrona, de un solo uso
    console.log('[Counter] ngOnInit activado.');
    console.log ('-'.repeat(10));
    console.log ('[Counter] ngOninit: Duracion =>', this.duration);
    console.log ('[Counter] ngOninit: Mensaje =>', this.message);
    this.counterRef = window.setInterval(()=>{
      this.counter.update(statePrev => statePrev + 1);
      console.log('[Counter] Run interval');
    }, 1000)
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
    window.clearInterval(this.counterRef); // Al destruir el componente se elimina el intervalo
  }


  hacerAlgo(){
    console.log('[hacerAlgo]: Cambio duration.')
    // Se puede correr logica asincrona
  }
}
