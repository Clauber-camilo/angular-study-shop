import { Component, Input } from '@angular/core'

@Component({
    selector: 'offer-component',
    templateUrl: './offer.component.html',
    styleUrls: ['./offer.component.scss']
})

export class OfferComponent {
    @Input() BgColor: string
    @Input() text: string
    @Input() textColor: string
    @Input() textSize: string
    @Input() link: string
 }