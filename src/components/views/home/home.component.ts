import { Component, ChangeDetectionStrategy} from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser';
import { Store, select} from '@ngrx/store'
import { Observable} from 'rxjs/Observable'
import { SiemaOptions } from '../../sub-components/slider/slider.component'

import Products from '_shared/mocks/products.ts'

import * as layoutActions from '_src/reducers/layout/action'
import * as fromRoot from '_src/reducers'

@Component({
    selector: 'home',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent {
    showSideCart$: Observable<boolean>
    options: SiemaOptions = {
        loop: true
    }
    products: Object = Products
    sliderImages: Array<string> = [
        require('_img/collection.jpg'),
        require('_img/watch.jpg')
    ]

    constructor(private store: Store<fromRoot.State>) {
        this.showSideCart$ = this.store.pipe(select(fromRoot.getShowSideCart))
    }

    openSideCart () {
        this.store.dispatch(new layoutActions.OpenSideCart())
    }

    closeSideCart () {
        this.store.dispatch(new layoutActions.CloseSideCart())
    }
}