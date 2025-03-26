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

// [Clase 11]
  changeHandler(event: Event){
    
    const input = event.target as HTMLInputElement; // Tomamos el input que se ha modificado
    const newTask = input.value; // Obtenemos el valor del input
    this.taskList.update((taskList)=> [...taskList, newTask ]); // Agregamos el nuevo valor a la lista
    console.log ('[changeHandler] Se agrego una nueva tarea:', newTask)
  }

  deleteTask(index:number){
    this.taskList.update((taskList)=> taskList.filter((task, position)=> position !== index)); // Eliminamos la tarea
  }
}
