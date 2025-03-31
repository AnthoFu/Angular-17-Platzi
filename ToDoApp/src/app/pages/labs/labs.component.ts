import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms'; // [Clase 16]

@Component({
  selector: 'app-labs',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {

  constructor (){
    this.colorControl.valueChanges.subscribe(value =>{
      console.log('[colorControl]:' ,value)
    })
  }



  welcome = '¡Bienvenido!'
  taskList= signal ([
    'Instalar el Angular CLI',
    'Crear un nuevo proyecto con Angular CLI',
    'Crear compontentes',
  ]);

  // Aqui definimos informacion sin ser un objeto
  name = signal('AnthoFu');
  edad= 20;
  disabled=true;
  img = 'https://picsum.photos/200/300';

  // Aqui definimos un objeto 'person', para acceder a sus valores debe ser person.name o person.edad
  person = signal ({ // [clase 14] Volvemos person una signal
    name: 'AnthoFu',
    edad: 20,
  })
  
  // [Clase 6 event binding click y double click]
  clickHandler() {
    alert('Click en el botón');
  }

  changeHandler(event:Event){
    console.log('[changeHandler]:' ,event)
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
  }

  // [Clase 7 event binding keydown]
  keydownHandler(event:KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log('[keydownHandler]: ', input.value)
  }




  // [Clase 14] Uso de NgIf
  changeEdad(event:Event){
    console.log('[changeEdad]:' ,event)
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update(estadoAnterior =>{
      return {
        ...estadoAnterior,
        edad: parseInt(newValue,10)
      }
    });
  }

  // [Clase 15] Uso de NgSwitch y NgSwitchDefault
  changeName(event:Event){
    console.log('[changeName]:' ,event)
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update(estadoAnterior =>{
      return {
        ...estadoAnterior,
        name: newValue
      }
    });
  }

  // [Clase 16] controlando un input

  colorControl = new FormControl();
  widthControl = new FormControl(50, {
    nonNullable: true,
  });

  
  // [Clase 19] Clases en Angular

  nameControl = new FormControl('AnthoFu',{
    validators: [
      Validators.required,
      Validators.minLength(3),
    ]
  })
}

