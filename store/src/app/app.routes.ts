import { Routes } from '@angular/router';
import { ListComponent } from './domains/products/pages/list/list.component'
import { AboutComponent } from '@info/pages/about/about.component';
import { NotFoundComponent } from '@info/pages/not-found/not-found.component';
import { LayoutComponent } from '@shared/components/layout/layout.component';

export const routes: Routes = [

    {
        path: '', // Este es el path principal, revisar componente [layoutcomponent]
        component: LayoutComponent,
        children:[
            {
                path: '',
                component: ListComponent // Este es el primer hijo que se renderizara.
            },
        
            {
                path: 'about',
                component: AboutComponent // Componente para testeos
            },
        
        ]
    },
    



    // Path para el error 404

    {
        path:'**', // El asterisco es un wildcard que captura cualquier ruta
        component: NotFoundComponent // Componente para el error 404
        
    } // Este debe ir de ultimo
];
