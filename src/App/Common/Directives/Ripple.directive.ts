import {Directive, Input, ElementRef, HostListener, OnInit, Component} from '@angular/core';

const STATIC_POSITION = 'static';
const RELATIVE_POSITION = 'relative';

interface Position {
    top: string;
    left: string;
}

interface Ripple {
    style: Position;
}

@Component({
    selector: 'ripples',
    template: `
        <span *ngRepeat="let ripple of ripples;" [ngStyle]="ripple.style"></span>
    `
})
export class RipplesComponent {
    @Input() ripples: Ripple[];
}

@Directive({
    selector: '[ripple]'
})
export class RippleDirective implements OnInit {
    private ripplesElm: HTMLElement;

    constructor(private elm: ElementRef) { }

    ngOnInit() {
        window.getComputedStyle(this.elm.nativeElement).position === STATIC_POSITION && this.makeHostedElmRelativePositioning();
        this.ripplesElm = document.createElement('div');
        this.ripplesElm.setAttribute('style', 'position:absolute;top:0;left:0;width:100%;height:100%;');
        (this.elm.nativeElement as HTMLElement).appendChild(this.ripplesElm);
    }

    @HostListener('click', ['$event'])
    onClick(evt: MouseEvent) {
        const {offsetX, offsetY} = evt;
        const rippleElm = document.createElement('span');
        rippleElm.setAttribute('style', `position:absolute;left:${offsetX / 2}px;top:${offsetY / 2}px;width: 100%;height: 100%;background: black`);
        this.ripplesElm.appendChild(rippleElm);
        console.info(window.getComputedStyle(this.elm.nativeElement).position);
    }

    makeHostedElmRelativePositioning() {
        (this.elm.nativeElement as HTMLElement).style.position = RELATIVE_POSITION;
    }
}
