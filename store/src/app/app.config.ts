import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { PreloadAllModules, provideRouter, withComponentInputBinding, withPreloading } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';


import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, 
      withComponentInputBinding(), // Importamos la funcion withComponentInputBinding() para que los componentes puedan obtener parametros como inputs a las paginas 
      withPreloading(PreloadAllModules)), // Configuramos la precarga de todos los módulos, esto permite que los módulos se carguen en segundo plano para mejorar el rendimiento de la aplicación  
    provideHttpClient(),]
  };
