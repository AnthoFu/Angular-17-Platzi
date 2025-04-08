import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import WaveSurfer from 'wavesurfer.js'

@Component({
  selector: 'app-wave-audio',
  imports: [CommonModule],
  templateUrl: './wave-audio.component.html',
  styleUrl: './wave-audio.component.scss'
})
export class WaveAudioComponent {

  @Input({required:true}) audioUrl!:string;
  @ViewChild ('wave') container!: ElementRef;


  ngAfterViewInit() {
    //Se llama cuando los hijos de ESTE componente ya fueron renderizados
    WaveSurfer.create({
      url: this.audioUrl,
      container: this.container.nativeElement
    })
  }
}
