import { Routes } from '@angular/router';
import { ListComponent } from './domains/products/pages/list/list.component'

export const routes: Routes = [
    {
        path: '',
        component: ListComponent // [IMPORTANTE] Este es el elemento padre
    }
];
