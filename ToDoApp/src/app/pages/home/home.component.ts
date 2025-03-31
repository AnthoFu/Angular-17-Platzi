import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Task} from '../../models/task.model'
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms'; //[Clase 17] Manejo de formularios

@Component({
  selector: 'app-home',
  imports: [CommonModule, ReactiveFormsModule],
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

// [Modificado en Clase 17]
  changeHandler(){ 
    const value = this.newTaskControl.value; // tomamos el valor del control
    if(this.newTaskControl.valid && value.trim()!== '') { // si el control es válido y no está vacío
      this.addTask(value); // agregamos la tarea
      this.newTaskControl.setValue(''); // limpiamos el control
    }
  }

  addTask(title:string){ // función para agregar tarea
    const newTask = { // creamos un nuevo objeto tarea
      id:Date.now(), // generamos un id único
      title:title, // asignamos el título
      completed: false, // la tarea no está completada
    }
    this.taskList.update((taskList)=> [...taskList, newTask ]); // Agregamos el nuevo valor a la lista
  }

  deleteTask(index:number){
    this.taskList.update((taskList)=> taskList.filter((task, position)=> position !== index)); // Eliminamos la tarea mediante un filter de la tarea por su posicion
  }

  updateTask(index:number){ // función para actualizar tarea
    this.taskList.update((taskList)=> { // obtenemos la lista de tareas
      return taskList.map((task, position) => { // recorremos la lista
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

  newTaskControl= new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required
    ]
  })
}
