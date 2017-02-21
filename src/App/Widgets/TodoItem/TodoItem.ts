import { Component, Input } from '@angular/core';
import { Todo } from '../../Models/Todo';
import './TodoItem.styl';

@Component({
    selector: 'todo-item',
    templateUrl: './TodoItem.html'
})
export class TodoItem {
    @Input()
    todo: Todo = new Todo('', false);
}
