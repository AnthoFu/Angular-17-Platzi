import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-labs',
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = '¡Bienvenido!'
  taskList= [
    'Instalar el Angular CLI',
    'Crear un nuevo proyecto con Angular CLI',
    'Crear compontentes',
  ]

}
