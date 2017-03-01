import { Component, Input, OnInit, OnChanges, trigger, state, style, transition, animate} from '@angular/core';
import { Todo } from '../../Models/Todo';
import './TodoList.component.styl';

@Component({
    selector: 'todo-list',
    templateUrl: './TodoList.component.html',
    animations: [
        trigger('flyEnterAndLeave', [
            state('void', style({
                transform: 'translate3d(-50%, 0, 0)',
                opacity: 0
            })),
            transition(':enter, :leave', animate(300))
        ])
    ]
})
export class TodoList implements OnInit {
    @Input() todos: Todo[];

    constructor() {}

    ngOnInit(): void { }
}
