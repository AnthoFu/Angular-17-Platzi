import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[highlight]' // Cambiamos el nombre de AppHighlight a Highlight
})

export class HighlightDirective {

  element = inject(ElementRef); // Inyectamos ElementRef



  constructor() { 

  }


  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = "red" // Aplicaremos el background color de color red a el elemento que le apliquemos esta directiva
    this.element.nativeElement.style.color = "blue"
  }

}
