import { Component, Input, HostBinding } from '@angular/core'
import { ProductType } from '_components/sub-components/product/product.type'

@Component({
    selector: 'list-products',
    templateUrl: './list-products.component.html',
    styleUrls: ['./list-products.component.scss']
})

export class ListProductsComponent {
    @Input() products: Array<ProductType>
    @HostBinding('class') productList = 'product-list'
}