import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import './Sidebar.component.styl';

interface NavItem {
    path: string;
    displayName: string;
}

const NAV_LIST: NavItem[] = [{
    path: 'todos',
    displayName: 'todos'
}, {
    path: 'archives',
    displayName: 'archives'
}];

@Component({
    selector: 'sidebar',
    templateUrl: './Sidebar.component.html'
})
export class SidebarComponent implements OnInit{
    navList: NavItem[];

    constructor(private router: Router) {}

    ngOnInit() {
        this.navList = NAV_LIST;
        this.router.navigate(['/archives']);
    }

    /**
     * navItem trackyBy function
     */
    navItemTrackBy(index: number, item: NavItem) {
        return item;
    }
}
