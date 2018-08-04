import { Component, Input } from '@angular/core'

export interface Products {
    name: String,
    original_price: Number,
    final_price: Number,
    discount_pct: Number,
    description?: String,
    image?: String
}

@Component({
    selector: 'list-products',
    templateUrl: './list-products.component.html',
    styleUrls: ['./list-products.component.scss']
})

export class ListProductsComponent {
    @Input() products: Products
}