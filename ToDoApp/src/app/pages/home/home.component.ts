import { Component, computed, effect, inject, Injector, signal } from '@angular/core';

import {Task} from '../../models/task.model'
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms'; //[Clase 17] Manejo de formularios

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule],
  standalone:true, // <--- Volvemos el componente standalone [fuera de clase 12, para que funcionara]
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})



// [Clase 12] NgFor para objetos
export class HomeComponent {
  

  
  taskList= signal <Task[]> ([

  ]);



  
  //[Clase 21] Estados compuestos computed
  filter = signal<'all' | 'pending' | 'completed'>('all');
  taskByFilter = computed (() =>{  
    const filter = this.filter(); 
    const tasks = this.taskList();
    if (filter === 'pending'){
      return tasks.filter(task => !task.completed);
    }
    if (filter === 'completed'){
      return tasks.filter(task => task.completed);
    }
    return tasks;
  }
)

  injector = inject(Injector) // Inyectamos la dependencia de injector [Clase 22]

  ngOnInit(): void { // Al iniciar el componente
    const storage = localStorage.getItem('tasks'); // Obtenemos las tareas de storage
    if (storage){ // Si hay tareas
      const tasks = JSON.parse(storage); // Parseamos las tareas
      this.taskList.set(tasks); // Seteamos las tareas en el observable
    }
    this.trackTask(); // Inicializamos el track de tareas
  }

  trackTask(){ // Función para trackear las tareas
    effect(()=>{ // Creamos un efecto
      const tasks = this.taskList(); // Obtenemos las tareas
      console.log ('[EFFECT]: Efecto ejecutado.', tasks); // Imprimimos las tareas
      localStorage.setItem('tasks', JSON.stringify(tasks)); // Guardamos las tareas en storage
    }, {injector: this.injector}) // Inyectamos el injector
  }
  

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
            ...task, // creamos un nuevo objeto tarea
            completed: !task.completed, // actualizamos el estado 'completed' de la tarea
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

  // [Clase 20] Editing mode
  updateTaskEditingMode(index: number){
    this.taskList.update((taskList)=> { // obtenemos la lista de tareas
      return taskList.map((task, position) => { // recorremos la lista
        if (position === index) { // si el índice coincide con el que estamos en este momento
          return { 
            ...task, // creamos una copia de la tarea
            editing: true, // cambiamos el modo de edición
          }
        }
        return {
          ...task, // creamos una copia de la tarea
          editing: false, // el modo de edición está desactivado
        };
      })
    })
  }


  updateTaskText(index: number, event: Event){
    const input = event.target as HTMLInputElement;
    this.taskList.update((taskList)=> { // obtenemos la lista de tareas
      return taskList.map((task, position) => { // recorremos la lista
        if (position === index) { // si el índice coincide con el que estamos en este momento
          return {
            ...task, // creamos una copia de la tarea
            title: input.value, // actualizamos el texto de la tarea
            editing: false //
          }
        }
        return task;
      })
    })
  }

  changeFilter(filter: 'all' | 'pending' | 'completed'){ // función para cambiar el filtro, solo toma all, pending o completed
    this.filter.set(filter);
  }

}
