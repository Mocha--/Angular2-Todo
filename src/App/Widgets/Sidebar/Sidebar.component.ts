import {Component, Input, OnInit} from '@angular/core';
import './Sidebar.component.styl';

@Component({
    selector: 'sidebar',
    templateUrl: './Sidebar.component.html'
})
export class Sidebar implements OnInit{
    menu: string[];

    constructor() { }

    ngOnInit() {
        this.menu = [];
    }
}
