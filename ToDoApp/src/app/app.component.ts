import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  welcome = '¡Bienvenido!'
  taskList= [
    'Instalar el Angular CLI',
    'Crear un nuevo proyecto con Angular CLI',
    'Crear compontentes',
  ]
}
