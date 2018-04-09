import { Component, Input, AfterViewInit} from '@angular/core'
const Siema = require('siema')

@Component({
    selector: 'slider-component',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss']
})

export class SliderComponent implements AfterViewInit {
    @Input() options: Object

    private siemaInstance: any
    private activeIndex: Number

    ngAfterViewInit(): void {
        this.siemaInstance = new Siema()
    }

    prev() {
        this.siemaInstance.prev()
    }

    next() {
        this.siemaInstance.next()
    }
}