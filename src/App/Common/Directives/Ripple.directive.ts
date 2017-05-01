import {Directive, ElementRef, HostListener, OnInit, Renderer2 as Renderer} from '@angular/core';
import './Ripple.styl';

interface RippleRect {
    top: number; // px
    left: number; // px
    width: number; // px
    height: number; // px
}

const STATIC_POSITION = 'static';

@Directive({
    selector: '[ripple]'
})
export class RippleDirective implements OnInit {
    private ripplesContainerElm: HTMLElement;
    private elm: HTMLElement;

    constructor(private elmRef: ElementRef, private renderer: Renderer) {
        this.elm = this.elmRef.nativeElement;
    }

    ngOnInit() {
        window.getComputedStyle(this.elm).position === STATIC_POSITION && this.makeHostedElmRelativePositioning();
        this.ripplesContainerElm = this.createRipplesContainerElm();
        this.elm.appendChild(this.ripplesContainerElm);
    }

    @HostListener('mousedown', ['$event'])
    onMouseDown(evt: MouseEvent) {
        const {clientX, clientY} = evt;
        const {top: containerTop, left: containerLeft, width: containerWidth, height: containerHeight} = this.ripplesContainerElm.getBoundingClientRect();
        const rippleWidth = Math.max(containerWidth, containerHeight);
        const rippleHeight = rippleWidth;
        const rippleTop = clientY - containerTop - rippleHeight / 2;
        const rippleLeft = clientX - containerLeft - rippleWidth / 2;
        const rippleElm = this.createRippleElm({top: rippleTop, left: rippleLeft, width: rippleWidth, height: rippleHeight});
        this.ripplesContainerElm.appendChild(rippleElm);
    }

    @HostListener('mouseup')
    onMouseUp(evt: MouseEvent) {
        window.setTimeout(() => {
            this.ripplesContainerElm.firstChild && this.ripplesContainerElm.removeChild(this.ripplesContainerElm.firstChild);
        }, 1000);
    }

    makeHostedElmRelativePositioning() {
        this.elm.classList.add('relative-positioned-for-ripples');
    }

    createRipplesContainerElm(): HTMLElement {
        const ripplesContainerElm = document.createElement('div');
        ripplesContainerElm.className = 'ripples';
        return ripplesContainerElm;
    }

    createRippleElm(rippleRect: RippleRect): HTMLElement {
        const {top, left, width, height} = rippleRect;
        const styleList = [`top:${top}px`, `left:${left}px;`, `width:${width}px`, `height:${height}px`];
        const rippleElm = document.createElement('span');
        rippleElm.className = 'ripple';
        rippleElm.setAttribute('style', styleList.join(';'));
        return rippleElm;
    }
}
