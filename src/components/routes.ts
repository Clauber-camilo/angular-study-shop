import { Routes } from '@angular/router';
import { HomeComponent } from '_components/views/home/home.component'

export const appRouts: Routes = [
    { path: '', component: HomeComponent },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
]