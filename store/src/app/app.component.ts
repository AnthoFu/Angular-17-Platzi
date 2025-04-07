import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({ // Normalmente en el decorador se importa un css y un html, 
// pero como en el html es solo una linea de codigo, lo podemos colocar directamente como "template" 
// y podemos borrar el archivo html y css si no es necesario
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet],
  template: '<router-outlet />', // Cambiamos templateURL a template, ya que es pequeño el archivo.
  // En template colocamos <router-outlet/>
  // Borrarmos el styleURL ya que no es necesario
})

export class AppComponent {
  title = 'store';
}
