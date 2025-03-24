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

  // Aqui definimos informacion sin ser un objeto
  name = 'AnthoFu';
  edad= 20;
  disabled=true;
  img = 'https://picsum.photos/200/300';

  // Aqui definimos un objeto 'person', para acceder a sus valores debe ser person.name o person.edad
  person = {
    name: 'AnthoFu',
    edad: 20,
  }
  
  // [Clase 6 event binding click y double click]
  clickHandler() {
    alert('Click en el botón');
  }

  changeHandler(event:Event){
    console.log('[changeHandler]:' ,event)
  }
}

