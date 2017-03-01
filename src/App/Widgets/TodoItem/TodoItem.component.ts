import { Component, Input } from '@angular/core';
import { Todo } from '../../Models/Todo';
import './TodoItem.component.styl';

@Component({
    selector: 'todo-item',
    templateUrl: './TodoItem.component.html'
})
export class TodoItem {
    @Input() todo: Todo = new Todo();
}
