import { Component } from '@angular/core'
import { Store, select} from '@ngrx/store'
import { Observable } from 'rxjs/Observable'
import * as fromRoot from '_src/reducers'


@Component({
    selector: 'cart-component',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})

export class CartComponent {
    showSideCart$: Observable<boolean>

    constructor(private store:Store<fromRoot.State>) {
        this.showSideCart$ = this.store.pipe(select(fromRoot.getShowSideCart))
    }
}