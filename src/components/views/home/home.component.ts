import { Component } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser';
import { Store, select} from '@ngrx/store'
import { Observable} from 'rxjs/Observable'

import * as fromLayout from '_components/reducers/layout/layout'
import * as layoutActions from '_components/reducers/layout/action'


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent {
    showSideCart$: Observable<boolean>

    constructor(private store: Store<fromLayout.State>, private sanitization:DomSanitizer) {
        this.showSideCart$ = this.store.pipe(select('fromLayout.getShowSideCart'))
    }

    public Image = this.sanitization.bypassSecurityTrustUrl(require('_img/angular.svg'))

    openSideCart () {
        this.store.dispatch(new layoutActions.OpenSideCart())
    }

    closeSideCart () {
        this.store.dispatch(new layoutActions.CloseSideCart())
    }
}