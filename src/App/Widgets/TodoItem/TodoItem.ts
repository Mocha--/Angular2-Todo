import { Component, Input } from '@angular/core';
import { Todo } from '../../Models/Todo';

@Component({
    selector: 'todo-item',
    templateUrl: './TodoItem.html'
})
export class TodoItem {
    @Input()
    todo: Todo = {task: 'this is default task', isCompleted: false};
}
