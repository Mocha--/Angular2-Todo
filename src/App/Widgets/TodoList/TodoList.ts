import { Component } from '@angular/core';
import { Todo } from '../../Models/Todo';
import './TodoList.styl';

@Component({
    selector: 'todo-list',
    templateUrl: './TodoList.html'
})
export class TodoList {
    newTodo: string = '';
    todos: Todo[] = [];

    formSubmitHandler(evt: Event) {
        evt.preventDefault();
        this.todos.push(new Todo(this.newTodo, false));
        this.newTodo = '';
    }
}
