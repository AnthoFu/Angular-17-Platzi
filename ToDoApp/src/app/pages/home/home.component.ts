import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Task} from '../../models/task.model'

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  standalone:true, // <--- Volvemos el componente standalone [fuera de clase 12, para que funcionara]
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

// [Clase 12] NgFor para objetos
export class HomeComponent {
  taskList= signal <Task[]> ([
    {
      id: Date.now(),
      title: 'Crear proyecto',
      completed: false,
    },
    {
      id: Date.now(),
      title: 'Crear componentes',
      completed: false,
    },
    {
      id: Date.now(),
      title: 'Estudiar Platzi',
      completed: false,
    },
  ]);

// [Clase 12] NgFor para Objetos
  changeHandler(event: Event){
    const input = event.target as HTMLInputElement; // Tomamos el input que se ha modificado
    const newTask = input.value; // Obtenemos el valor del input
    console.log ('[changeHandler] Se agrego una nueva tarea:', newTask);
    this.addTask(newTask);
  }

  addTask(title:string){
    const newTask = {
      id:Date.now(),
      title:title,
      completed: false,
    }
    this.taskList.update((taskList)=> [...taskList, newTask ]); // Agregamos el nuevo valor a la lista
  }

  deleteTask(index:number){
    this.taskList.update((taskList)=> taskList.filter((task, position)=> position !== index)); // Eliminamos la tarea mediante un filter de la tarea por su posicion
  }

  updateTask(index:number){
    this.taskList.update((taskList)=> {
      return taskList.map((task, position) => {
        if (position === index) {
          return {
            ...task,
            completed: !task.completed,
          }
        }
        return task;
      })
    })
  }
}
