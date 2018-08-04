import { Component } from '@angular/core'
import { Observable} from 'rxjs/Observable'
import { Store, select} from '@ngrx/store'
import * as fromRoot from '_src/reducers'
import * as layoutActions from '_src/reducers/layout/action'

@Component({
    selector: 'header-component',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})


export class HeaderComponent {
    showSideCart$: Observable<boolean>

    constructor (private store: Store<fromRoot.State>) {
        this.showSideCart$ = this.store.pipe(select(fromRoot.getShowSideCart))
    }

    ToggleSideCart () {
        this.store.dispatch(new layoutActions.ToggleSideCart())
    }
}