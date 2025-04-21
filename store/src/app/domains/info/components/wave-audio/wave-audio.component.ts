
import { Component, ElementRef, Input, signal, ViewChild } from '@angular/core';
import WaveSurfer from 'wavesurfer.js'

@Component({
  selector: 'app-wave-audio',
  imports: [],
  templateUrl: './wave-audio.component.html',
  styleUrl: './wave-audio.component.scss'
})
export class WaveAudioComponent {

  @Input({required:true}) audioUrl!:string;
  @ViewChild ('wave') container!: ElementRef;
  isPlaying = signal(false);

  private ws!: WaveSurfer;

  ngAfterViewInit() {
    //Se llama cuando los hijos de ESTE componente ya fueron renderizados
    this.ws = WaveSurfer.create({ // Definimos ws como la creacion de WaveSurfer
      url: this.audioUrl, // El url que pide la creacion de wavesurfer la definimos como audioUrl (parametro que se le pedira en el html)
      container: this.container.nativeElement // El contenedor de wavesurfer lo definimos como el elemento que se encuentra en el html con el id wave
    });
    this.ws.on('play', () => this.isPlaying.set(true)); // Cuando el WaveSurfer este en 'Play' el signal se volvera true
    this.ws.on('pause', () => this.isPlaying.set(false)); // Cuando el WaveSurfer este en 'Pause' el signal se volvera false
  }


  playPause(){ // Funcion para reproducir o pausar el audio
    this.ws.playPause() // Llama a la funcion playPause de la libreria de WaveSurfer
  }

}
