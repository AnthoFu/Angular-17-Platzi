import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

// [Clase 10]
export class HomeComponent {
  taskList= signal ([
    'Instalar el Angular CLI',
    'Crear un nuevo proyecto con Angular CLI',
    'Crear compontentes',
  ]);

}
