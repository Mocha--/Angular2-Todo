import {Directive, Input, ElementRef, HostListener, OnInit, Component} from '@angular/core';
import './Ripple.styl';

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
        this.ripplesElm.setAttribute('style', 'position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden');
        (this.elm.nativeElement as HTMLElement).appendChild(this.ripplesElm);
    }

    @HostListener('mousedown', ['$event'])
    onMouseDown(evt: MouseEvent) {
        const {offsetX, offsetY} = evt;
        const {width, height} = this.ripplesElm.getBoundingClientRect();
        const rippleWidth = width > height ? width : height;
        const rippleHeight = rippleWidth;
        const rippleElm = document.createElement('span');
        rippleElm.className = 'ripple';
        rippleElm.setAttribute('style', `position:absolute;left:${offsetX - rippleWidth / 2}px;top:${offsetY - rippleHeight / 2}px;width:${rippleWidth}px;height:${rippleHeight}px;border-radius: 50%;`);
        this.ripplesElm.appendChild(rippleElm);
        console.info(window.getComputedStyle(this.elm.nativeElement).position);
    }

    @HostListener('mouseup')
    onMouseUp(evt: MouseEvent) {
        window.setTimeout(() => {
            this.ripplesElm.firstChild && this.ripplesElm.removeChild(this.ripplesElm.firstChild);
        }, 1000);
    }

    makeHostedElmRelativePositioning() {
        (this.elm.nativeElement as HTMLElement).style.position = RELATIVE_POSITION;
    }
}
