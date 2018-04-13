import { Component, ChangeDetectionStrategy} from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser';
import { Store, select} from '@ngrx/store'
import { Observable} from 'rxjs/Observable'
import { SiemaOptions } from '../../sub-components/slider/slider.component'

import * as layoutActions from '_components/reducers/layout/action'
import * as fromRoot from '_components/reducers'

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
    sliderImages: Array<string> = [
        require('_img/collection.jpg'),
        require('_img/watch.jpg')
    ]

    constructor(private store: Store<fromRoot.State>, private sanitization:DomSanitizer) {
        this.showSideCart$ = this.store.pipe(select(fromRoot.getShowSideCart))
    }

    public Image = this.sanitization.bypassSecurityTrustUrl(require('_img/angular.svg'))

    openSideCart () {
        this.store.dispatch(new layoutActions.OpenSideCart())
    }

    closeSideCart () {
        this.store.dispatch(new layoutActions.CloseSideCart())
    }
}