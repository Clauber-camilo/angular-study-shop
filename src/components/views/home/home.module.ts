import { ModuleWithProviders, NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './home.component'
import { SliderComponent } from '_components/sub-components/slider/slider.component'

export const ROUTES : Routes = [
    {
        path: '',
        component: HomeComponent
    }
]

@NgModule({
    declarations: [
        HomeComponent,
        SliderComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES)
    ]
})

export class HomeModule {}