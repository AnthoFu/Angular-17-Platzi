import { Routes } from '@angular/router';
import { ListComponent } from './domains/products/pages/list/list.component'
import { AboutComponent } from '@info/pages/about/about.component';
import { NotFoundComponent } from '@info/pages/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: ListComponent // [IMPORTANTE] Este es el elemento padre
    },

    {
        path: 'about',
        component: AboutComponent // Componente para testeos
    },




    // Path para el error 404

    {
        path:'**', // El asterisco es un wildcard que captura cualquier ruta
        component: NotFoundComponent // Componente para el error 404
        
    } // Este debe ir de ultimo
];
