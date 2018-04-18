import { Component, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core'
import { Observable } from 'rxjs/Observable'
const Siema = require('siema')

export interface SiemaOptions {
    duration?: number
    easing?: string
    perPage?: any
    startIndex?: number
    draggable?: boolean
    threshold?: number
    loop?: boolean
    onInit?: Function
    onChange?: Function
}

@Component({
    selector: 'slider-component',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss']
})

export class SliderComponent implements AfterViewInit {
    @ViewChild('slider') sliderDOM : ElementRef
    @Input() arrows: Boolean = true
    @Input() options: SiemaOptions
    @Input() images: Array<string>
    @Input() height: Number = 300
    @Input() bullets: Boolean = true

    private siemaInstance: any
    private activeIndex: Number = 0

    ngAfterViewInit(): void {
        this.options = Object.assign(
            this.options ? this.options : {} ,
            {
                selector: this.sliderDOM.nativeElement,
                onChange: () => {
                    this.activeIndex = this.siemaInstance.currentSlide
                }
            }
        )
        this.siemaInstance = new Siema(this.options)
    }

    prev() {
        this.siemaInstance.prev()
    }

    next() {
        this.siemaInstance.next()
    }

    goTo(index: Number) {
        this.siemaInstance.goTo(index)
    }
 }