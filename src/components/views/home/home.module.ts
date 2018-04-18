import { ModuleWithProviders, NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './home.component'
import { SliderComponent } from '_components/sub-components/slider/slider.component'
import { OfferComponent } from '_components/sub-components/offer/offer.component'

export const ROUTES : Routes = [
    {
        path: '',
        component: HomeComponent
    }
]

@NgModule({
    declarations: [
        HomeComponent,
        SliderComponent,
        OfferComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES)
    ]
})

export class HomeModule {}