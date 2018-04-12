import { Routes } from '@angular/router';
import { HomeComponent } from '_components/views/home/home.component'

export const appRoutes: Routes = [
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
]