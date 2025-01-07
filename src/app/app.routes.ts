import { Routes } from '@angular/router';
import { MyFirstCompComponent } from './my-first-comp/my-first-comp.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {
        path : 'home',
        component : MyFirstCompComponent
    },
    {
        path : 'about',
        component : AboutComponent
    }
];
