import { ModuleWithProviders, NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './home.component'
import { SliderComponent } from '_components/sub-components/slider/slider.component'
import { OfferComponent } from '_components/sub-components/offer/offer.component'
import { ListProductsComponent } from '_components/sub-components/list-products/list-products.component'

export const ROUTES : Routes = [
    {
        path: '',
        component: HomeComponent
    }
]

@NgModule({
    declarations: [
        HomeComponent,
        ListProductsComponent,
        OfferComponent,
        SliderComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES)
    ]
})

export class HomeModule {}