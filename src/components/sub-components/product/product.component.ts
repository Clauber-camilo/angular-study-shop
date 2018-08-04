import { Component, HostBinding, Input } from "@angular/core";
import { ProductType } from "_components/sub-components/product/product.type";

@Component({
    selector: 'product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent {
    @HostBinding('class.product')
    @Input() product: ProductType

}