import { Routes } from '@angular/router';
import { NotFoundComponent } from '@info/pages/not-found/not-found.component';
import { LayoutComponent } from '@shared/components/layout/layout.component';
import { ProductDetailComponent } from '@products/pages/product-detail/product-detail.component';

export const routes: Routes = [

    {
        path: '', // Este es el path principal, revisar componente [layoutcomponent]
        component: LayoutComponent,
        children:[
            {
                path: '',
                loadComponent: () => import('./domains/products/pages/list/list.component').then(m => m.ListComponent)  // Este es el primer hijo que se renderizara. // Con el loadComponent se aplicara el 'lazyLoading'
            },
        
            {
                path: 'about',
                loadComponent: () => import('./domains/info/pages/about/about.component').then(m=> m.AboutComponent) // Componente para testeos
            },
            {
                path: 'product/:id', // Este path tiene un parámetro (id) que es para la id del producto
                component:ProductDetailComponent // componente para detalles del producto
                // Este componente no lo vamos a cargar de forma perezosa (lazy loading)
            }
        
        ]
    },
    



    // Path para el error 404

    {
        path:'**', // El asterisco es un wildcard que captura cualquier ruta
        component: NotFoundComponent // Componente para el error 404
        
    } // Este debe ir de ultimo
];
