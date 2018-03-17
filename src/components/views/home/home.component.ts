import { Component } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent {
    constructor (private sanitization:DomSanitizer) {}

    public Image = this.sanitization.bypassSecurityTrustUrl(require('_img/angular.svg'))
}